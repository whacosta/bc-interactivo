var loadState = function(game){

}
 
loadState.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		this.game.load.image("logo","assets/logo-children.png");
		this.game.load.image("menu","assets/menu.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
	},
  	create: function(){
  		this.game.stage.backgroundColor='#E6E6E6';
		this.game.state.add("GameTitle",menuState);
		this.game.state.start("GameTitle");
	}
}