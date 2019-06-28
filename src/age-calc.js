export class Person {
  constructor(dob, planet, gender, country) {
    this.dob = dob;
    this.planet = planet;
    this.gender = gender;
    this.country = country;
    this.age = 0;
    this.expectancy = 0;
  };

  getAge() {
    const today = new Date();
    const userDOB = new Date(this.dob);
    const userAge = today.getYear() - userDOB.getYear();

    if(this.planet === 'Mercury') {
        this.age = Math.floor(userAge / .24)
      } else if (this.planet === 'Venus') {
        this.age = Math.floor(userAge / .62)
      } else if (this.planet === 'Mars') {
        this.age = Math.floor(userAge / 1.88)
      } else if (this.planet === 'Jupiter') {
        this.age = Math.floor(userAge / 11.86)
      } else {
        this.age = userAge
      }
  };

  getLifeExpectancy() {
    if (this.country === 'USA') {
      if (this.gender === 'Male') {
        this.expectancy = 76
      } else if (this.gender === 'Female') {
        this.expectancy = 81
      } else {
        this.expectancy = 78
      }
    } else if (this.country === 'Russia') {
      if (this.gender === 'Male') {
        this.expectancy = 65
      } else if (this.gender === 'Female') {
        this.expectancy = 76
      } else {
        this.expectancy = 71
      }
    } else if (this.country === 'France') {
      if (this.gender === 'Male') {
        this.expectancy = 78
      } else if (this.gender === 'Female') {
        this.expectancy = 85
      } else {
        this.expectancy = 81
      }
    } else if (this.country === 'Japan') {
      if (this.gender === 'Male') {
        this.expectancy = 81
      } else if (this.gender === 'Female') {
        this.expectancy = 87
      } else {
        this.expectancy = 84
      }
    } else if (this.country === 'India') {
      if (this.gender === 'Male') {
        this.expectancy = 68
      } else if (this.gender === 'Female') {
        this.expectancy = 72
      } else {
        this.expectancy = 71
      }
    } else if (this.country === 'Iran') {
      if (this.gender === 'Male') {
        this.expectancy = 72
      } else if (this.gender === 'Female') {
        this.expectancy = 75
      } else {
        this.expectancy = 74
      }
    } else if (this.country === 'China') {
      if (this.gender === 'Male') {
        this.expectancy = 75
      } else if (this.gender === 'Female') {
        this.expectancy = 78
      } else {
        this.expectancy = 76
      }
    } else if (this.country === 'Israel') {
      if (this.gender === 'Male') {
        this.expectancy = 81
      } else if (this.gender === 'Female') {
        this.expectancy = 85
      } else {
        this.expectancy = 83
      }
    } else if (this.country === 'North Korea') {
      if (this.gender === 'Male') {
        this.expectancy = 68
      } else if (this.gender === 'Female') {
        this.expectancy = 75
      } else {
        this.expectancy = 71
      }
    }
    return this.expectancy - this.age
  }

}
