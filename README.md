# AngularHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

By the end you do the following:

. Use built-in Angular directives to show and hide elements and display lists of hero data.
. Create Angular components to display hero details and show an array of heroes.
. Use one-way data binding for read-only data.
. Add editable fields to update a model with two-way data binding.
. Bind component methods to user events, like keystrokes and clicks.
. Enable users to select a hero from a master list and edit that hero in . the details view.
. Format data with pipes.
. Create a shared service to assemble the heroes.
. Use routing to navigate among different views and their components.

## 1. The Hero editor
### create the heroes component
~~
ng generate component heroes
### Create a Hero interface (src/app/hero.ts)
    . Give it id and name properties.
    . Show the hero object
    . Format with UppercasePipe
    . Edit the hero
    . Two -way binding
    . AppModule
    . Import FormsModule
    . Declare HeroesComponent
    . Final code review
    . Summary
       - You used the CLI to create a second HeroesComponent.
       - You displayed the HeroesComponent by adding it to the AppComponent shell.
       - You applied the UppercasePipe to format the name.
       - You used two-way data binding with the ngModel directive.
       - You learned about the AppModule.
       - You imported the FormsModule in the AppModule so that Angular would recognize and apply the ngModel   directive.
       - You learned the importance of declaring components in the AppModule and appreciated that the CLI declared it for you.
## 2. Display a List       
### Display a selection list
    . Create mock heroes
    . Displaying heroes
    . List heroes with *ngFor
    . Style the heroes
    . Viewing details
    . Add a click event binding
    . Add the click event handler
    . Add a details section
    . Style the selected hero
     . Summary
        - The Tour of Heroes application displays a list of heroes with a detail view.
        - The user can select a hero and see that hero's details.
        - You used *ngFor to display a list.
        - You used *ngIf to conditionally include or exclude a block of HTML.
        - You can toggle a CSS style class with a class binding.

<img alt="heroes" scr="https://angular.io/generated/images/guide/toh/nav-diagram.png" />


