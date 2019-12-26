var wrapper = null;				// キャンバスの親要素
var canvas = null;					// キャンバス
var g = null;						// コンテキスト
var $id = function(id){ return document.getElementById(id); };	// DOM取得用
var objectList = [];				// 雪オブジェクト管理用
var probability;					// 雪の発生確率
var imgSnow = new Image();		// 雪の画像用

/*
 * 定数
 */
var IMG_SNOW = "snow32.png";

/*
 * リセット関数
 */
function reset(){
	objectList = [];
	probability = 0.95;	// 雪の発生確率

	// 雪の画像生成
	imgSnow.src = IMG_SNOW;
	imgSnow.onload = function(){
		g.drawImage(imgSnow, -1000, -1000);
	};

	g.clearRect(0, 0, canvas.width, canvas.height);
}

/*
 * オブジェクト追加関数
 */
function addObject(obj){
	for(var i=0; i<objectList.length+1; i++){
		if(objectList[i] == null){
			objectList[i] = obj;
			console.log("addObject() " + i);
			break;
		}
	}
}

/*
 * 雪クラス
 */
class Snow{
	constructor(sx, sy, _image){
		this.speed = (Math.floor(Math.random() * 5) +1) / 2;	// 落下速度 1～5
		this.yure = (Math.floor(Math.random() * 3) + 1) / 3;	// ゆれ 1～3
		// 雪の初期位置
		this.x = sx;
		this.y = sy;
		this._angle = Math.floor(Math.random() * 2) ? this.yure/2 : -this.yure/2;	// 回転角度はゆれに応じる（向きはランダム）
		this.angle = this._angle;
		this.rad = 0;		// ラジアンに変換用
		this.image = new Image();
		this.image = _image;
	}
	// 雪が降る
	move(){
		// 角度をラジアンに変換
		this.rad = this.angle * Math.PI/180;
		// 今の状態を保存する
		g.save();
		// 回転の中心点を計算
		let cx = this.x + this.image.width/2;
		let cy = this.y + this.image.height/2;
		// 画像を中心にして回転
		g.setTransform(Math.cos(this.rad), Math.sin(this.rad), -Math.sin(this.rad), Math.cos(this.rad),cx-cx*Math.cos(this.rad)+cy*Math.sin(this.rad),cy-cx*Math.sin(this.rad)-cy*Math.cos(this.rad));
		// 雪を描く
		g.drawImage(this.image, this.x, this.y);

		g.restore();

		// 回転角を変化させる
		this.angle += this._angle;
		if(this.angle > 360) this.angle = 0;

		// 雪の軌跡を計算
		this.x = this.x + Math.sin((this.y + this.speed) * Math.PI/180) * this.yure;
		this.y = this.y + this.speed;
		if(this.y > canvas.height){
			return false;
		}
		return true;
	}
}

/*
 * メイン処理
 */
function mainLoop(){
	g.fillStyle = "rgb(200, 200, 200)";
	g.fillRect(0, 0, canvas.width, canvas.height);
	// オブジェクトの動作と消去
	for(var i=0; i<objectList.length; i++){
		var obj = objectList[i];
		if(obj && !obj.move()){
			delete objectList[i];
		}
	}
	// 雪の生成
	if(Math.random() > probability){
		addObject(new Snow(Math.random() * canvas.width, 0-Math.random()*150, imgSnow));
	}
	requestAnimationFrame(mainLoop);
};

/*
 * キャンバスのサイズをウインドウに合わせて変更
 */
function getSize(){
	canvas.width = wrapper.offsetWidth;
	canvas.height =  wrapper.offsetHeight;
}

/*
 * リサイズ時
 */
window.addEventListener("resize", function(){
	getSize();
});

/*
 * 起動処理
 */
window.addEventListener("load", function(){
	// キャンバスの親要素情報取得（親要素が無いとキャンバスのサイズが画面いっぱいに表示できないため）
	wrapper = $id("wrapper");
	// キャンバス情報取得
	canvas = $id("canvas");
	g = canvas.getContext("2d");

	// キャンバスをウインドウサイズにする
	getSize();

	// 雪を降らせる
	reset();
	mainLoop();
});