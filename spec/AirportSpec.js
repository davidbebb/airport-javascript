describe('Airport', function() {

  var airport;
  var plane = {};
  plane.land = jasmine.createSpy('landing');//.and.returnValue(false);
  plane.takeoff = jasmine.createSpy('takeoff');
  var plane2 = {};
  plane2.land = jasmine.createSpy('landing');//.and.returnValue(false);

  beforeEach(function() {
    airport = new Airport();
  });

  it('can list planes at airport', function() {
    console.log(plane);
    airport.landPlane(plane);
    expect(airport.listPlanes()).toEqual([plane]);
  });

  it('can limit planes at airport', function() {

    for (i = 0; i < 5; i++) {
      airport.landPlane(plane);
    };

    expect(function() { airport.landPlane(plane); }).toThrow(new Error('No space'));
  });

  it('can land a plane', function() {
    expect(airport.landPlane(plane)).toEqual(true);
  });

  it('can make a plane take off', function() {
    airport.landPlane(plane);
    airport.landPlane(plane2);
    list = airport.listPlanes;
    expect(airport.takeOff(plane)).toEqual(true);
    expect(airport.listPlanes()).toEqual([plane2]);
  });

});
