class fire extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private system:particle.GravityParticleSystem;
    private onAddToStage(){
        let texture = RES.getRes("newParticle_png");
        let config = RES.getRes("newParticle_json");
        this.system = new particle.GravityParticleSystem(texture, config);
        this.addChild(this.system);
    }

    public startFire(x:number,y:number) {
        this.system.emitterX = x;
        this.system.emitterY = y;
        this.system.start(500);
    }
}