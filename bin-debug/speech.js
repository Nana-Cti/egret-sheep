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
var speech = (function (_super) {
    __extends(speech, _super);
    function speech(type) {
        var _this = _super.call(this) || this;
        _this.position = [{ x: 20, y: 20 }, { x: 60, y: 80 }, { x: 80, y: 0 }, { x: 120, y: 90 }, { x: 160, y: 10 }, { x: 180, y: 90 }, { x: 200, y: 20 }];
        _this.type = type;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    speech.prototype.onAddToStage = function () {
        this.createCircle();
        this.speechText();
        this.animation();
    };
    speech.prototype.createCircle = function () {
        this.g = new egret.DisplayObjectContainer();
        var ellipse_1 = new egret.Shape();
        ellipse_1.graphics.beginFill(0xffffff);
        ellipse_1.graphics.drawEllipse(0, 0, 25 + (Math.random() * 20), 25 + (Math.random() * 10));
        ellipse_1.graphics.endFill();
        ellipse_1.rotation = 20;
        ellipse_1.x = this.stage.stageWidth / 2 - 110;
        ellipse_1.y = this.stage.stageHeight / 2 - 110;
        this.g.addChild(ellipse_1);
        for (var i = 0; i < 7; i++) {
            var ellipse_1 = new egret.Shape();
            ellipse_1.graphics.beginFill(0xffffff);
            ellipse_1.graphics.drawEllipse(0, 0, 100 + (Math.random() * 30), 100 + (Math.random() * 10));
            ellipse_1.graphics.endFill();
            ellipse_1.x = this.stage.stageWidth / 2 - 130 + this.position[i].x;
            ellipse_1.y = this.stage.stageHeight / 2 - 250 + this.position[i].y;
            this.g.addChild(ellipse_1);
        }
        var glowFilter = new egret.GlowFilter(0xFFF2B4, 0.4, 20, 20);
        this.g.filters = [glowFilter];
        this.g.y = 350;
        this.g.x = 30;
        this.g.anchorOffsetX = 30;
        this.g.anchorOffsetY = 350;
        this.g.scaleX = 0.5;
        this.g.scaleY = 0.5;
        this.addChild(this.g);
    };
    speech.prototype.animation = function () {
        var _this = this;
        var twAnimation = egret.Tween.get(this.g);
        twAnimation
            .to({ scaleX: 1, scaleY: 1 }, 500)
            .wait(3000)
            .call(function () {
            _this.removeChild(_this.g);
        });
    };
    speech.prototype.speechText = function () {
        var label = new egret.TextField();
        label.text = "ZZZzzz...";
        label.fontFamily = "微软雅黑";
        label.size = 30;
        label.textColor = 0xB7874F;
        label.x = this.g.width / 2 + 20;
        label.y = this.g.height;
        switch (this.type) {
            case 1:
                label.text = Math.random() > 0.7 ? "I have dot hungry" : "《驯龙高手3》好看吗?";
                label.size = 20;
                label.x = this.g.width / 2 + 10;
                break;
            case 2:
                label.text = "ZZZzzz...";
                break;
            case 3:
                label.text = "嘻嘻嘻...";
                label.x = this.g.width / 2 + 50;
                break;
            case 4:
                label.text = "吃饭...";
                label.x = this.g.width / 2 + 50;
                break;
            case 5:
                label.text = "打扰了...";
                label.x = this.g.width / 2 + 50;
        }
        this.g.addChild(label);
    };
    return speech;
}(egret.DisplayObjectContainer));
__reflect(speech.prototype, "speech");
//# sourceMappingURL=speech.js.map