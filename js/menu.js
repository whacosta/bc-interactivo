var menuState = function(game){}

menuState.prototype = {
  	create: function(){

		gameTitle = this.game.add.sprite(ancho/2,50,"logo");
		gameTitle.anchor.setTo(0.5,0.5);

		menu = this.game.add.button(ancho/2, alto/2 + 80,"menu",this.playTheGame,this);
		menu.anchor.setTo(0.5,0.5);

		//playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		//playButton.anchor.setTo(0.5,0.5);
		navbar = new Phaser.Rectangle(0, alto-50, ancho, 50);
	},

	render: function () {
    	this.game.debug.geom(navbar,'#0404B4');
	},

	playTheGame: function(){

		this.game.state.add("TheGame",gameState);
		this.game.state.start("TheGame");
	}
}