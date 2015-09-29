function Plane() {
  this.isFlying = true;
};

Plane.prototype.land = function() {
  this.isFlying = false;
};

Plane.prototype.takeoff = function() {
  this.isFlying = true;
};

// Plane.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
