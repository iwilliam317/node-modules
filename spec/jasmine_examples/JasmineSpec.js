describe("Jasmine test", function() {

  let car;

  beforeEach(function() {
   car = {
    model: 'Ferrari 458',
    color: 'yellow',
    start: () => console.log('starting...')
   }
  });
  
  describe('macther #toBe', () => {
    it("should be able to play a Song", function() {
     expect(car.model).toBe('Ferrari 458');  
    });
  });

});
