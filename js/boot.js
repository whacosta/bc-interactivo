var bootState = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};
  
bootState.prototype = {
	preload: function(){
          this.game.load.image("loading","assets/loading.png"); 
          alto = document.documentElement.clientHeight;
          ancho = document.documentElement.clientWidth;
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.scale.setScreenSize();
		document.getElementById("login").style.display = "none";
		this.game.state.start("Preload");
	}
}