class fire extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(){
        let texture = RES.getRes("newParticle_png");
        let config = RES.getRes("newParticle_json");
        let system = new particle.GravityParticleSystem(texture, config);
    }
}