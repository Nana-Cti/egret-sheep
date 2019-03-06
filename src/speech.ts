class speech extends egret.DisplayObjectContainer {
    private type:number;
    public constructor(type:number) {
        super();
        this.type = type;
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage() {
        this.createCircle();
        this.speechText();
        this.animation();
    }

    private position = [{x:20, y:20},{x:60, y:80},{x:80, y:0},{x:120, y:90},{x:160, y:10},{x:180, y:90},{x:200, y:20}];
    private g:egret.DisplayObjectContainer;
    private createCircle(){
        this.g = new egret.DisplayObjectContainer();
        var ellipse_1:egret.Shape = new egret.Shape(); 
            ellipse_1.graphics.beginFill(0xffffff); 
            ellipse_1.graphics.drawEllipse(0,0,25+(Math.random()*20),25+(Math.random()*10)); 
            ellipse_1.graphics.endFill(); 
            ellipse_1.rotation = 20;
            ellipse_1.x = this.stage.stageWidth/2 -110;
            ellipse_1.y = this.stage.stageHeight/2 -110;
            this.g.addChild(ellipse_1);
        for(let i = 0; i < 7; i++){
            var ellipse_1:egret.Shape = new egret.Shape(); 
                ellipse_1.graphics.beginFill(0xffffff); 
                ellipse_1.graphics.drawEllipse(0,0,100+(Math.random()*30),100+(Math.random()*10)); 
                ellipse_1.graphics.endFill(); 
                ellipse_1.x = this.stage.stageWidth/2 -130 + this.position[i].x;
                ellipse_1.y = this.stage.stageHeight/2 -250 + this.position[i].y;
                this.g.addChild(ellipse_1);
        }
        var glowFilter:egret.GlowFilter = new egret.GlowFilter(0xFFF2B4, 0.4, 20, 20);
        this.g.filters = [glowFilter];
        this.g.y = 350;
        this.g.x = 30;
        this.g.anchorOffsetX = 30;
        this.g.anchorOffsetY = 350;
        this.g.scaleX = 0.5;
        this.g.scaleY = 0.5;
        this.addChild(this.g);
    }

    private animation() {
        var twAnimation = egret.Tween.get( this.g );
        twAnimation
        .to({scaleX:1, scaleY:1}, 500)
        .wait(3000)
        .call( ()=>{ 
            this.removeChild(this.g);
         });
    }

    private speechText() {
        var label = new egret.TextField();
        label.text = "ZZZzzz..."
        label.fontFamily = "微软雅黑";
        label.size = 30;
        label.textColor = 0xB7874F;
        label.x = this.g.width/2 + 20;
        label.y = this.g.height;
        switch(this.type)
        {
        case 1:
        label.text = Math.random()>0.7?"I have dot hungry":"《驯龙高手3》好看吗?";
        label.size = 20;
        label.x = this.g.width/2 + 10;
        break;
        case 2:
        label.text = "ZZZzzz...";
        break;
        case 3:
        label.text = "嘻嘻嘻...";
        label.x = this.g.width/2 + 50;
        break;
        case 4:
        label.text = "吃饭...";
        label.x = this.g.width/2 + 50;
        break;
        case 5:
        label.text = "打扰了...";
        label.x = this.g.width/2 + 50;
        }
        this.g.addChild( label );
    }



}