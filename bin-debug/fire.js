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
var fire = (function (_super) {
    __extends(fire, _super);
    function fire() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    fire.prototype.onAddToStage = function () {
        var texture = RES.getRes("newParticle_png");
        var config = RES.getRes("newParticle_json");
        this.system = new particle.GravityParticleSystem(texture, config);
        this.addChild(this.system);
    };
    fire.prototype.startFire = function (x, y) {
        this.system.emitterX = x;
        this.system.emitterY = y;
        this.system.start(500);
    };
    return fire;
}(egret.DisplayObjectContainer));
__reflect(fire.prototype, "fire");
//# sourceMappingURL=fire.js.map