import { Person } from './../src/age-calc.js';

describe('Person', function() {

  it('should return user age in Earth years', function() {
    const testUser = new Person('June 4, 1989');
    testUser.getAge();
    expect(testUser.age).toEqual(30);
  });
});
