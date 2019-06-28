import { Person } from './age-calc.js';
import $ from 'jquery';


$(document).ready(function () {
  $('button').click(function(event) {
    event.preventDefault();
    const dateOfBirth = $('.dob').val();
    const gender = $('.gender-select').val();
    const country = $('.country-select').val();
    const planet = $('.planet-select').val();
    let user = new Person (dateOfBirth, planet, gender, country);
    user.getAge();
    user.getLifeExpectancy();
    $('.output span.planet').text(user.planet);
    $('.output span.planet-age').text(user.age);
    $('.output span.life-expectancy').text(user.expectancy);
    if (user.expectancyOverUnder() === true) {
      $('.output span.years-left').text(`${user.yearsRemaining} years left to live on `)
    } else {
        $('.output span.years-left').text(`surpassed the life expectancy by ${user.yearsOver}`)
    }
  });

});
