import { Person } from './age-calc.js';
import $ from 'jquery';

$(document).ready(function () {
  console.log('jquery enabled');
  $('button').click(function(event) {
    event.preventDefault();
    const dateOfBirth = $('.dob').val();
    const gender = $('.gender-select').val();
    const country = $('.country-select').val();
    const planet = $('.planet-select').val();
    let user = new Person (dateOfBirth, planet, gender, country);
    user.getAge();
    $('.output').text(user.age);
  });

});
