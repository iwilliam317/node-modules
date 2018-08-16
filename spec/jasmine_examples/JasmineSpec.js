describe("Jasmine test", function() {

  let car;

  beforeEach(function() {
   car = {
    model: 'Ferrari 458',
    color: 'red',
    year: 2016,
    start: () => console.log('starting...')
   }
  });

  //toBe()
  describe('macther #toBe', () => {
    it("test one", function() {
     expect(car.model).toBe('Ferrari 458');  
    });
  });

  //toBeDefined()
  describe('method #toBeDefined', () => {
    it('test two', () => {
      expect(car.color).toBeDefined();
    });
  });

  //toBeGreaterThan
  describe('method #toBeGreaterThan', () => {
    it('test three', () => {
      expect(car.year).toBeGreaterThan(2010);
    });
  });

  //toBeGreaterThanOrEqual
  describe('method #toBeGreaterThanOrEqual', () => {
    it('test four', () => {
      expect(car.year).toBeGreaterThanOrEqual(2010);
    });
  });

  //toHaveBeenCalled
  describe('method #toHaveBeenCalled toHaveBeenCalledTimes', () => {
    it('test five', () => {
      spyOn(car, 'start');
      car.start();
      car.start();
      expect(car.start).toHaveBeenCalled();
      expect(car.start).toHaveBeenCalledTimes(2);

    })
  });

  //x 
  describe('method #x', () => {
    xit('test six', () => {
      expect(car.year).toBeGreaterThanOrEqual(2010);
    });
  });

  //pending() 
  describe('method #pending', () => {
    it('test seven', () => {
      expect(car.year).toBeGreaterThanOrEqual(2010);
      pending('pending');
    });
  });

});
