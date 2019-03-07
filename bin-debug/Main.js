//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.day = 0;
        _this.Completed = false;
        _this.Rect_mask_Y = 80;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function () {
        this.img = new await();
        this.addChild(this.img);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    Main.prototype.onConfigComplete = function () {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //  延迟加载组资源加载完成事件
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup("preload");
    };
    Main.prototype.onResourceLoadComplete = function () {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        // 新建位图,设置位图纹理
        this.myday();
        this.createBg();
        this.createSheep();
        this.dailyTime();
        this.button();
        this.createDays();
        this.createScore();
        this.img.removeImg();
    };
    Main.prototype.createBg = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_jpg");
        bg.scaleX = this.stage.stageHeight / bg.texture.textureHeight;
        bg.scaleY = this.stage.stageHeight / bg.texture.textureHeight;
        bg.x = -(bg.texture.textureWidth - this.stage.stageWidth) / 2;
        this.addChildAt(bg, 0);
    };
    Main.prototype.createSheep = function () {
        var dragonbonesData = RES.getRes("Sheep_Ani_2_ske_json");
        var textureData = RES.getRes("Sheep_Ani_2_tex_json");
        var texture = RES.getRes("Sheep_Ani_2_tex_png");
        var egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(dragonbonesData);
        egretFactory.parseTextureAtlasData(textureData, texture);
        this.armatureDisplay = egretFactory.buildArmatureDisplay("Armature");
        this.addChildAt(this.armatureDisplay, 1);
        this.armatureDisplay.scaleX = 0.6;
        this.armatureDisplay.scaleY = 0.6;
        this.armatureDisplay.x = this.stage.stageWidth / 2 + 30;
        this.armatureDisplay.y = this.stage.stageHeight - 120;
    };
    Main.prototype.button = function () {
        var button_1 = new egret.Shape();
        button_1.x = this.stage.stageWidth / 2 - 140;
        button_1.y = this.stage.stageHeight - 70;
        button_1.graphics.lineStyle(4, 0x14191d);
        button_1.graphics.beginFill(0x5c3a40, 1);
        button_1.graphics.drawCircle(0, 0, 50);
        button_1.graphics.endFill();
        this.addChildAt(button_1, 2);
        var button_food = new egret.Bitmap();
        button_food.texture = RES.getRes("食物 (1)_png");
        button_food.x = this.stage.stageWidth / 2 - 172;
        button_food.y = this.stage.stageHeight - 105;
        this.addChildAt(button_food, 3);
        button_1.touchEnabled = true;
        button_1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.foodButton, this);
        var button_2 = new egret.Shape();
        button_2.x = this.stage.stageWidth / 2;
        button_2.y = this.stage.stageHeight - 70;
        button_2.graphics.lineStyle(4, 0x14191d);
        button_2.graphics.beginFill(0x26434b, 1);
        button_2.graphics.drawCircle(0, 0, 50);
        button_2.graphics.endFill();
        this.addChildAt(button_2, 2);
        var button_play = new egret.Bitmap();
        button_play.texture = RES.getRes("火 (2)_png");
        button_play.x = this.stage.stageWidth / 2 - 35;
        button_play.y = this.stage.stageHeight - 104;
        this.addChildAt(button_play, 3);
        button_2.touchEnabled = true;
        button_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playButton, this);
        var button_3 = new egret.Shape();
        button_3.x = this.stage.stageWidth / 2 + 140;
        button_3.y = this.stage.stageHeight - 70;
        button_3.graphics.lineStyle(4, 0x14191d);
        button_3.graphics.beginFill(0xAE3424, 1);
        button_3.graphics.drawCircle(0, 0, 50);
        button_3.graphics.endFill();
        this.addChildAt(button_3, 2);
        var button_love = new egret.Bitmap();
        button_love.texture = RES.getRes("爱心 (1)_png");
        button_love.x = this.stage.stageWidth / 2 + 109;
        button_love.y = this.stage.stageHeight - 102;
        this.addChildAt(button_love, 3);
        button_3.touchEnabled = true;
        button_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loveButton, this);
    };
    Main.prototype.dailyTime = function () {
        this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.dailyTime, this);
        if (this.getChildIndex(this.speech) > 0)
            this.removeChild(this.speech);
        if (Math.random() > 0.8) {
            this.speech = new speech(2);
            this.addChildAt(this.speech, 2);
            this.armatureDisplay.animation.play("goat_sleep_idle_anim", 10);
        }
        else if (Math.random() > 0.3) {
            this.speech = new speech(1);
            this.addChildAt(this.speech, 2);
            this.armatureDisplay.animation.play("goat_idle_anim", 10);
        }
        else {
            this.speech = new speech(6);
            this.addChildAt(this.speech, 2);
            this.armatureDisplay.animation.play("goat_walk_anim", 10);
        }
    };
    Main.prototype.foodButton = function () {
        if (this.getChildIndex(this.food) > 0)
            this.removeChild(this.food);
        this.food = new delicious(this.armatureDisplay);
        this.addChild(this.food);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.eat, this);
    };
    Main.prototype.eat = function (e) {
        if (e.stageX > 65 && e.stageX < 420 && e.stageY > 400 && e.stageY < 640) {
            if (this.getChildIndex(this.speech) > 0)
                this.removeChild(this.speech);
            this.speech = new speech(4);
            this.addChildAt(this.speech, 2);
            this.armatureDisplay.animation.play("goat_eat_anim", 1);
            this.bonusPoints();
        }
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.eat, this);
    };
    Main.prototype.playButton = function () {
        if (this.getChildIndex(this.speech) > 0)
            this.removeChild(this.speech);
        this.speech = new speech(5);
        this.addChildAt(this.speech, 2);
        this.armatureDisplay.animation.play("goat_trot_anim", 1);
        this.bonusPoints();
    };
    Main.prototype.loveButton = function () {
        if (this.getChildIndex(this.speech) > 0)
            this.removeChild(this.speech);
        this.speech = new speech(3);
        this.addChildAt(this.speech, 2);
        this.armatureDisplay.animation.play("newAnimation", 1);
        this.bonusPoints();
    };
    Main.prototype.createDays = function () {
        var RoundRect = new egret.Shape();
        RoundRect.x = this.stage.stageWidth - 180;
        RoundRect.y = 23;
        RoundRect.graphics.lineStyle(4, 0xB7874F);
        RoundRect.graphics.beginFill(0xFFF2BC, 1);
        RoundRect.graphics.drawRoundRect(0, 0, 160, 100, 40);
        RoundRect.graphics.endFill();
        this.addChildAt(RoundRect, 2);
        this.label = new egret.TextField();
        this.label.text = "第" + this.day + "天";
        this.label.fontFamily = "微软雅黑";
        this.label.size = 40;
        this.label.stroke = 1;
        this.label.strokeColor = 0xF0E68C;
        this.label.textColor = 0xB7874F;
        this.label.x = RoundRect.x + RoundRect.width / 2 - this.label.width / 2;
        this.label.y = RoundRect.y + RoundRect.height / 2 - this.label.height / 2;
        this.addChildAt(this.label, 3);
    };
    Main.prototype.createScore = function () {
        var score = new egret.DisplayObjectContainer();
        score.x = 80;
        score.y = 50;
        var Rect = new egret.Shape();
        Rect.rotation = 45;
        Rect.graphics.beginFill(0xFF5050, 1);
        Rect.graphics.drawRect(0, 0, 40, 40);
        Rect.graphics.endFill();
        score.addChild(Rect);
        var Circle_1 = new egret.Shape();
        Circle_1.rotation = 45;
        Circle_1.graphics.beginFill(0xFF5050, 1);
        Circle_1.graphics.drawCircle(0, 20, 20);
        Circle_1.graphics.endFill();
        score.addChild(Circle_1);
        var Circle_2 = new egret.Shape();
        Circle_2.rotation = 45;
        Circle_2.graphics.beginFill(0xFF5050, 1);
        Circle_2.graphics.drawCircle(20, 0, 20);
        Circle_2.graphics.endFill();
        score.addChild(Circle_2);
        this.Rect_mask = new egret.Shape();
        this.Rect_mask.x = 30;
        this.Rect_mask.y = this.Rect_mask_Y; // 50-80
        this.Rect_mask.graphics.beginFill(0xFF7172, 1);
        this.Rect_mask.graphics.drawRect(0, 0, 100, 100);
        this.Rect_mask.graphics.endFill();
        this.addChild(this.Rect_mask);
        score.mask = this.Rect_mask;
        this.addChildAt(score, 2);
        var score_bg = new egret.DisplayObjectContainer();
        score_bg.scaleX = 1.2;
        score_bg.scaleY = 1.2;
        score_bg.x = 80;
        score_bg.y = 45;
        var Rect_bg = new egret.Shape();
        Rect_bg.rotation = 45;
        Rect_bg.graphics.beginFill(0xFF7172, 1);
        Rect_bg.graphics.drawRect(0, 0, 40, 40);
        Rect_bg.graphics.endFill();
        score_bg.addChild(Rect_bg);
        var Circle_1_bg = new egret.Shape();
        Circle_1_bg.rotation = 45;
        Circle_1_bg.graphics.beginFill(0xFF7172, 1);
        Circle_1_bg.graphics.drawCircle(0, 20, 20);
        Circle_1_bg.graphics.endFill();
        score_bg.addChild(Circle_1_bg);
        var Circle_2_bg = new egret.Shape();
        Circle_2_bg.rotation = 45;
        Circle_2_bg.graphics.beginFill(0xFF7172, 1);
        Circle_2_bg.graphics.drawCircle(20, 0, 20);
        Circle_2_bg.graphics.endFill();
        score_bg.addChild(Circle_2_bg);
        this.addChildAt(score_bg, 2);
    };
    Main.prototype.myday = function () {
        var myDate = new Date();
        var today = myDate.toLocaleDateString();
        var storage = window.localStorage;
        if (!storage['InitialDate']) {
            storage.setItem("InitialDate", today);
        }
        if (!storage['Rect_mask_Y']) {
            storage.setItem("Rect_mask_Y", '80');
        }
        else {
            this.Rect_mask_Y = parseInt(storage['Rect_mask_Y']);
        }
        if (!storage['today']) {
            storage.setItem("today", today);
        }
        else {
            storage['today'] == today && this.Rect_mask_Y < 50 && (this.Completed = true);
            storage['today'] !== today && this.Rect_mask_Y < 50 && (this.Rect_mask_Y = 80);
            storage.setItem("today", today);
        }
        if (!storage['day']) {
            storage.setItem("day", '0');
            this.day = 0;
        }
        else {
            this.day = parseInt(storage['day']);
        }
    };
    Main.prototype.bonusPoints = function () {
        if (!this.Completed) {
            console.log(this.Rect_mask.y >= 50);
            var storage = window.localStorage;
            if (this.Rect_mask.y > 50) {
                this.Rect_mask.y = this.Rect_mask.y - 5;
                storage.setItem("Rect_mask_Y", String(this.Rect_mask.y));
            }
            else {
                this.Rect_mask.y = this.Rect_mask.y - 5;
                storage.setItem("Rect_mask_Y", String(this.Rect_mask.y));
                var day = String(this.day + 1);
                storage.setItem("day", day);
                this.label.text = "第" + day + "天";
                this.Completed = true;
            }
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map