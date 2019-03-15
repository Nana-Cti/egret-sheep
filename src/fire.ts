class fire extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private system:particle.GravityParticleSystem;
    private onAddToStage(){
        let img = document.createElement("img");
        let texture:egret.Texture = new egret.Texture();
        img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4AWNgoBVoaGhg+nu6qQxoPiNZdnw72SDz/2zr/39nmheTZcCf043BIANA+O/p5lKQIQcONLAQbRjQ5u0wA/6dbvkFctG/My0NeA34faLB5suJKvE/JxvdYZph9L8zTY1AQ98DXZON0xCgov6/p5rzgTa+gWmE0SBXgNggQx4fL+TEMOTFrhJukEaYQphGbDQwdnIwDADanIlNMTYxoCuWYBgAFNyMTTE2sX+nm09gM+AMNsXYxIDenItpwOnm1dgUYxP7fbrBCsOA3yeazIEm/8GmAVns3+mm6RiaYQKg1AcMi8/IGmBsoPjff6eam4Bq8eeNj8cbhIAxUgxKdcj498kmW5hFVKUBcVmAUoFw42UAAAAASUVORK5CYII=';
        img.onload = () => {
            let bitmapdata:egret.BitmapData = new egret.BitmapData(img);
            texture.bitmapData = bitmapdata;
        }
        let config = {
            "texture":"newParticle.png",
            "blendFactorSource":"one"
            ,"maxRadiusVariance":30
            ,"lifespan":700
            ,"blendFactorDestination":"oneMinusSourceAlpha"
            ,"minRadius":20
            ,"lifespanVariance":0
            ,"startGreen":255
            ,"startAlpha":0.8901960784313725
            ,"startAlphaVariance":0
            ,"startSizeVariance":12
            ,"tangentialAccelerationVariance":0
            ,"rotatePerSecondVariance":10
            ,"endSize":7
            ,"minRadiusVariance":10
            ,"startSize":100
            ,"startRed":255
            ,"rotatePerSecond":30
            ,"endAlphaVariance":0
            ,"emitAngle":0
            ,"emitterVariance":{"x":30,"y":30}
            ,"endRed":255
            ,"endRedVariance":0
            ,"endSizeVariance":0
            ,"startRotation":-30
            ,"emitterType":0
            ,"startRotationVariance":0
            ,"emitter":{"x":445,"y":196}
            ,"emitAngleVariance":400
            ,"endBlueVariance":0
            ,"startGreenVariance":0
            ,"endAlpha":0.3
            ,"endRotationVariance":40
            ,"engGreenVariance":0
            ,"speedVariance":0
            ,"endGreen":255
            ,"gravity":{"x":0,"y":-200}
            ,"endBlue":255
            ,"speed":100
            ,"radialAcceleration":0
            ,"maxParticles":100
            ,"radialAccelerationVariance":0
            ,"duration":-1
            ,"startBlue":255
            ,"tangentialAcceleration":0
            ,"startBlueVariance":0
            ,"endRotation":0
            ,"startRedVariance":0
            ,"maxRadius":100
            };
        this.system = new particle.GravityParticleSystem(texture, config);
        this.addChild(this.system);
    }

    public startFire(x:number,y:number) {
        this.system.emitterX = x;
        this.system.emitterY = y;
        this.system.start(500);
    }
}