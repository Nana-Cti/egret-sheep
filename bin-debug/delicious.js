var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var delicious = (function (_super) {
    __extends(delicious, _super);
    function delicious(sheep) {
        var _this = _super.call(this) || this;
        _this.foodList = ["美食_草莓_png", "美食_蔓越莓_png", "美食_吐司_png", "小吃_png", "美食_png"];
        _this.sheep = sheep;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    delicious.prototype.onAddToStage = function () {
        this.food_1 = new egret.Bitmap();
        this.food_1.texture = RES.getRes(this.foodList[Math.floor(Math.random() * 5)]);
        this.food_1.x = this.stage.stageWidth / 2 - 172;
        this.food_1.y = this.stage.stageHeight - 105;
        this.position = [this.food_1.x, this.food_1.y];
        this.addChild(this.food_1);
        var Appear = egret.Tween.get(this.food_1);
        Appear.to({ y: this.food_1.y - 40 }, 100);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.goBack, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.follow, this);
    };
    delicious.prototype.follow = function (e) {
        this.food_1.x = e.stageX - this.food_1.width / 2;
        this.food_1.y = e.stageY - this.food_1.height / 2;
        var neck_bone = this.sheep.armature.getBone("neck_bone");
        neck_bone.offset.rotation = (-(30 / (this.position[1] + 105) * e.stageY) + 30) * Math.PI / 180;
    };
    delicious.prototype.goBack = function (e) {
        var _this = this;
        var Back = egret.Tween.get(this.food_1);
        if (e.stageX > 65 && e.stageX < 420 && e.stageY > 400 && e.stageY < 640) {
            Back.to({}, 100)
                .call(function (scaleX, scaleY) {
                _this.end();
            });
        }
        else {
            Back.to({ x: this.position[0], y: this.position[1] }, 100)
                .call(function () {
                _this.end();
            });
        }
    };
    delicious.prototype.end = function () {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.goBack, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.follow, this);
        this.removeChildren();
        var neck_bone = this.sheep.armature.getBone("neck_bone");
        neck_bone.offset.rotation = 0;
    };
    return delicious;
}(egret.DisplayObjectContainer));
__reflect(delicious.prototype, "delicious");
//# sourceMappingURL=delicious.js.map