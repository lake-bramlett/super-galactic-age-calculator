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
        this.age = (userAge / .24)
      } else {
        this.age = userAge;
      }
  };

}
