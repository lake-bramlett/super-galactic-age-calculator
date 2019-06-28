import { Person } from './../src/age-calc.js';
import './../src/main.js';

describe('Click Event', function() {

  it("should return error message if user enters a future date and/or hasn't been born yet", function() {
    const testUser = new Person('June 4, 2989');
    testUser.getAge();
    expect(testUser.age >= 0).toEqual(false);
  });

});
