var Vector = function(x, y){
  this.x = x;
  this.y = y;
}

var fromPolar = function(mag, angle) {
  return new Vector(Math.cos(angle), Math.sin(angle)).scale(mag);
}

Vector.prototype = {
  add:  function(vector){
    this.x += vector.x;
    this.y += vector.y;
    return this;
  },

  subtract: function(vector){
    this.add(vector.clone().scale(-1));
    return this;
  },

  scale: function(n) {
    this.x *= n;
    this.y *= n;
    return this;
  },

  len: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  },

  theta: function() {
     return Math.atan2(this.y, this.x);
  },

  clone: function() {
     return new Vector(this.x, this.y);
  },

  rotate: function(a) {
    var v = fromPolar(this.len(), this.theta() + a);
    this.x = v.x;
    this.y = v.y;
    return this;
  },

  cancel: function(a) {
    this.rotate(-a);
    this.y = 0;
    this.rotate(a);
  }
}

var Point = function(pos, vector, theta, dtheta) {
  this.pos = pos;
  this.vector = vector;
  this.theta = theta;
  this.dtheta = dtheta;
}
