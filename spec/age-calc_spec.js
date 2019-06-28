import { Person } from './../src/age-calc.js';

describe('Person', function() {

  it('should return user age in Earth years', function() {
    const testUser = new Person('June 4, 1989');
    testUser.getAge();
    expect(testUser.age).toEqual(30);
  });
  it('should return user age in Mercury years', function() {
    const testUser = new Person('June 4, 1989','Mercury');
    testUser.getAge();
    expect(testUser.age).toEqual(125);
  });
  it('should return user age in Venus years', function() {
    const testUser = new Person('June 4, 1989','Venus');
    testUser.getAge();
    expect(testUser.age).toEqual(48);
  });
  it('should return user age in Mars years', function() {
    const testUser = new Person('June 4, 1989','Mars');
    testUser.getAge();
    expect(testUser.age).toEqual(15);
  });
  it('should return user age in Jupiter years', function() {
    const testUser = new Person('June 4, 1989','Jupiter');
    testUser.getAge();
    expect(testUser.age).toEqual(2);
  });
  it("should return user's remaining years left to live in Earth years", function() {
    const testUser = new Person('June 4, 1989','Earth','Male','USA');
    testUser.getAge();
    expect(testUser.getLifeExpectancy()).toEqual(46);
  });
});
