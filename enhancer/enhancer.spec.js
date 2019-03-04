const { success, repair, fail } = require('../enhancer/enhancer');

const item = {
  name: 'sword',
  type: 'weapon',
  durability: 100,
  enhancement: 17,
  displayName: 'banana',
};
describe('enhancer', () => {
  describe('fail()', () => {
    it('durability decreases by 5 if enhanced is between 0 and 14', () => {
      //Arrange(setup)
      const item = {
        enhancement: 14,
        durability: 85,
      };
      //Act - execute the system under test(SUT)
      const actual = fail(item);
      //Assert
      expect(actual.durability).toBe(80);
    });
    it('durability decreases by 10 if greater than 14', () => {
      //Arrange(setup)
      const item = {
        enhancement: 15,
        durability: 85,
      };
      //Act - execute the system under test(SUT)
      const actual = fail(item);
      //Assert
      expect(actual.durability).toBe(75);
    });
  });

  //Repair
  describe('repair()', () => {
    it('sets durability to 100', () => {
      expect(repair(item).durability).toEqual(100);
    });
  });
  // //Success
  // describe('Enhancement Success', () => {
  //   it('enhancement success', () => {
  //     expect(success(item).enhancement).toBe(17);
  //     console.log(item);
  //   });
  // });
});
