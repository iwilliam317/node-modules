describe("Jasmine test", function() {

  let car;

  beforeEach(function() {
   car = {
    model: 'Ferrari 458',
    color: 'red',
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

});
