export class Person {
  constructor(dob, gender, country) {
    this.dob = dob;
    this.gender = gender;
    this.country = country;
    this.age = 0;
  };

  getAge() {
    const today = new Date();
    const userDOB = new Date(this.dob);
    this.age = today.getYear() - userDOB.getYear();
  };
}
