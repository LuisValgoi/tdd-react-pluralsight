# Overview

- This repo was created to follow up the TDD Using React pluralsight course.

# Demo Company

- Wired Brain Cofee it's the company and they need a Store Locator.

# Store Locator Requirement

- Display a map
- Select a shop
- Marker shows location
- User can search
- Dtecte user location
- Get directions
- Scalable

# Containers

- `App.js` its a container. Its purpose its to hold other `components`.
- They also handle the state of the app.

# Components

- If its does more than rendering a pieace of the UI, it's called a smart/statefull component.
- The `Header.js` it's a stateless component.

# Pure Functions
- Functions that does not handle / messes with anything but the scope of that function.
- Its clean, decoupled, it messes only with the things of it.
- i.e: `Formatters`.

# Talk Testing

- A set of test it's called: `Suite`.
- A single test it's called `Spec`.
- Specs are made of `Assertion`.
- Assertion produces `true` or `false` values by using `Matcher`.
- And all of that it's run using `Test Runner`.

# Taking TDD

- Stands for: Test Driven Development.
- Different than "Write all your tests". It's a cycle.
- Rules / Cycle (![#f03c15](https://placehold.it/15/f03c15/000000?text=+), ![#c5f015](https://placehold.it/15/c5f015/000000?text=+), ![#1589F0](https://placehold.it/15/1589F0/000000?text=+)): 
    1. ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) First you test you UC.
    2. ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Second you implement you UC.
    3. ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Then refactor your code.
    4. Start all over until its done.

# Talking BDD

- Stands for: Behavior Driven Development.
- BDD comes from TDD.
- TDD was to hard to explain.
- BDD simpler way to write tests: _"Don't write a test, describe a behavior"_
- Example of BDD: `A method, should receive an argument and returs its metadata`.

# Testing Questions

- Does it render?
- Does it render correctly?
- Does it handle events correctly?
- Do conditionals work?
- Are edge cases handled properly?

# Good Testing

- Each test should be independent of the others.
- Any behaviors should be specified in only one test.
- No unnecessary assertions.
- Test only one code unit at a time.
- Avoid unnecessary preconditions.
      - If your tests relies on several things, then you need to refactor the test or the code.

# ToDo

- [ ] There should be a map.
- [ ] There should be a header above the buttons.
- [ ] Clicking a button passes a value to a function.
- [x] There should be a button for each store location.
- [x] Each store button should display the name of the location.
- [x] A map chooser functions returns an image file based on input given to it.
- [x] When no input is given to the map chooser function, it reeturns a default imagem file name.
- [x] When bad input is given to the map chooser function, it reeturns a default imagem file name.