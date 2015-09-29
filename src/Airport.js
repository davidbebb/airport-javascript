function Airport() {
  this.capacity = 5;
  this.listOfPlanes = [ ];
};

Airport.prototype.listPlanes = function() {
  return this.listOfPlanes;
};

Airport.prototype.landPlane = function(plane) {
  if (this.listOfPlanes.length < this.capacity) {
    this.listOfPlanes.push(plane);
  } else {
    throw (new Error('No space'));
  }
};
