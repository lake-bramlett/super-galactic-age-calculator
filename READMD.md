## Planning

1. Configuration/dependencies
  * Setup NPM dependencies
  * Configure Webpack
  * Configure Karma
  * Configure ESLinter

2. Specs
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

3. Integration
  * Write spec tests
  * Create backend logic
  * Integrate backend logic with frontend logic  

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor any necessary code
  * Delete unused code/variable
  * Flesh out README
