# _Super Galactic Age Calculator_

#### _Week 5 Code Review, 28 June 2019_

#### By _**Lake Bramlett**_

## Description

_'Super Galactic Age Calculator' is a client-side program that determines the user's age based on their date of birth and then converts it to relative years based on which planet the user would be on. Furthermore, life expectancy is determined based on gender and country of origin and calculates whether the user is under, has met, or has exceeded that life expectancy._

## Setup/Installation Requirements

* _Clone https://github.com/lake-bramlett/super-galactic-age-calculator repo locally_
* _In the command line, run `npm install` for necessary dependencies_
* _Run `npm build` (or whatever local equivalent) to compile code and build to /dist_
* _Open /dist/index.html in preferred web browser_
* _Use preferred text editor to edit_
* _Make any pull requests to https://github.com/lake-bramlett/super-galactic-age-calculator ._

## Specs

  | Spec | Input | Output |
  | ---- | :---: | -----: |
  | Returns user age in Earth Years | DoB: June 4th, 1989 | Age: 30 |
  | Returns user age in Mercury years | DoB: June 4th, 1989 | Age: 125 |
  | Returns user age in Venus years | DoB: June 4th, 1989 | Age: 48 |
  | Returns user age in Mars years | DoB: June 4th, 1989 | Age: 15 |
  | Returns user age in Jupiter years | DoB: June 4th, 1989 | Age: 2 |
  | Return user's remaining years left to live in Earth years | DoB: June 4th, 1989; Gender: Male; Country: USA; Planet: Earth | Years remaining: 46 years |
  | Return user's remaining years left to live on any planet and from any country | DoB: June 4th, 1989; Gender: Female; Country: France; Planet: Jupiter | Years remaining: 83 years |
  | Return user's years surpassed if age is greater than life expectancy | DoB: June 4th, 1989; Gender: Male; Country: USA; Planet: Mercury | Years over life expectancy: 49 |
  | Returns error message if user enters a future date and/or hasn't been born yet | DoB: June 4th, 2989 | "Nice try future person! You haven't been born yet! Try again in 970 years!" |

  ## Known Bugs

  _There are no known bugs at this time (28 June 2019)._

  ## Support and contact details

  _email: lake.bramlett@gmail.com_

  ## Technologies Used

  * _HTML_
  * _CSS_
  * _JavaScript_
  * _jQuery_
  * _Git_
  * _NPM_
  * _Webpack_
  * _Jasmine_
  * _Karma_


  ### License

  *This software is licensed under the MIT license.*

  Copyright (c) 2019 **_Lake Bramlett_**
