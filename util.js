var Vector = function(x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype = {
	
  add:  function(vector){
    this.x += vector.x
    this.y += vector.y
  },
	
  subtract: function(vector){
    this.x = vector.x
    this.y += vector.y
  },
	
  theta: function(){
     return Math.atan2(this.y, this.x);
  },
    
  clone: function(){
     return new Vector(this.x, this.y);
  },

  rotate: function(a){
  	var ca = Math.cos(a);
  	var sa = Math.sin(a);
  	with (this)
  	{
  		var rx = x*ca - y*sa;
  		var ry = x*sa + y*ca;
  		x = rx;
  		y = ry;
  	}
  	return this;
  }
}

var Point = function(vector, rotation) {
	this.x = vector.x
	this.y = vector.y
	this.rotation = rotation
	this.vector = vector
}