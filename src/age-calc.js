export class Person {
  constructor(dob, planet, gender, country) {
    this.dob = dob;
    this.planet = planet;
    this.gender = gender;
    this.country = country;
    this.age = 0;
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
      } else if (this.plabet === 'Jupiter') {
        this.age = Math.floor(userAge / 11.86)
      } else {
        this.age = userAge
      }
  };

}
