describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('can list planes at airport', function() {
    airport.landPlane(plane);
    expect(airport.listPlanes()).toEqual([plane]);
  });

  it('can limit planes at airport', function() {

    for (i = 0; i < 5; i++) {
      airport.landPlane(plane);
    };

    expect(function() { airport.landPlane(plane); }).toThrow(new Error('No space'));
  });

});
