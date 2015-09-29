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
    plane.land();
    return true;
  } else {
    throw (new Error('No space'));
  }
};

Airport.prototype.takeOff = function(plane) {
  index = this.listOfPlanes.indexOf(plane);
  if (index > -1) {
    this.listOfPlanes.splice(index, 1);
    plane.takeoff();
    return true;
  };
};
