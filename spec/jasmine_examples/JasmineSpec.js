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
    it('test two', () => {
      expect(car.year).toBeGreaterThan(2010);
    });
  });

});
