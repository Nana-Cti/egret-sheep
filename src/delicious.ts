class delicious extends egret.DisplayObjectContainer {
    private sheep:dragonBones.EgretArmatureDisplay;
    public constructor(sheep:dragonBones.EgretArmatureDisplay) {
        super();
        this.sheep = sheep;
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }


    private food_1:egret.Bitmap;
    private position:number[];
    readonly foodList:string[] = ["美食_草莓_png", "美食_蔓越莓_png", "美食_吐司_png",  "小吃_png", "美食_png"]
    private onAddToStage() {
        this.food_1 = new egret.Bitmap();
        this.food_1.texture = RES.getRes(this.foodList[Math.floor(Math.random()*5)]);
        this.food_1.x = this.stage.stageWidth/2 - 172;
        this.food_1.y = this.stage.stageHeight -105;
        this.position = [this.food_1.x, this.food_1.y];
        this.addChild(this.food_1);
        let Appear:egret.Tween = egret.Tween.get( this.food_1 );
        Appear.to({y:this.food_1.y - 40}, 100);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.goBack, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.follow, this);
    }


    private follow(e) {
        this.food_1.x = e.stageX - this.food_1.width/2;
        this.food_1.y = e.stageY - this.food_1.height/2;
        let neck_bone = this.sheep.armature.getBone("neck_bone");
        neck_bone.offset.rotation =(-(30/(this.position[1]+105)*e.stageY)+30)*Math.PI/180;
    }

    private goBack(e) {
        var Back:egret.Tween = egret.Tween.get( this.food_1 );
        if(e.stageX>65&&e.stageX<420&&e.stageY>400&&e.stageY<640){
            Back.to({}, 100)
            .call((scaleX:0, scaleY:0)=>{
                this.end();
            });
        }else{
            Back.to({x:this.position[0], y:this.position[1]}, 100)
            .call(()=>{
                this.end();
            });
        }
        

    }

    private end() {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.goBack, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.follow, this);
        this.removeChildren();
        let neck_bone = this.sheep.armature.getBone("neck_bone");
        neck_bone.offset.rotation = 0;
    }
}