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

## 3. Create a feature component      
### Make the HeroDetailComponent
~~
ng generate component hero-detail
    . Write the template
    . Add the @Input() hero property
        https://angular.io/generated/images/guide/inputs-outputs/input.svg
###  Show the HeroDetailComponent
    . Update the HeroesComponent template
    . What changed?
    . Final code review
    . Summary
        - You created a separate, reusable HeroDetailComponent.
        - You used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.
        - You used the @Input decorator to make the hero property available for binding by the external HeroesComponent.
## 4. Add Services
    . Why services
       . Inject in HeroService, which uses the service to send a message.
       . Inject in MessagesComponent, which displays that message, and also displays the ID when the user clicks a hero.
### Create the HeroService
~~
ng generate service hero

    . @Injectable() services
    . Get hero data
    . Provide the HeroService
    . Update HeroesComponen
    . Inject the HeroService
    . Add getHeroes()
    . Call it in ngOnInit()
    . See it run
###  Observable data  
    . Observable HeroService
    . Subscribe in HeroesComponent
    . Show messages
### Create MessagesComponent
~~
ng generate component messages
### Create the MessageService
~~
ng generate service message
    . Inject it into the HeroService
    . Send a message from HeroService
    . Display the message from HeroService
    . Bind to the MessageService
    . Add additional messages to hero service
    . Final code review
    . Summary
        - You refactored data access to the HeroService class.
        - You registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the app.
        - You used Angular Dependency Injection to inject it into a component.
        - You gave the HeroService get data method an asynchronous signature.
        - You discovered Observable and the RxJS Observable library.
        - You used RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
        - The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
        - You created a MessageService for loosely-coupled communication between classes.
        - The HeroService injected into a component is created with another injected service, MessageService.
## 5. Add Navigation
     There are new requirements for the Tour of Heroes app:
        . Add a Dashboard view.
        . Add the ability to navigate between the Heroes and Dashboard views.
        . When users click a hero name in either view, navigate to a detail view of the selected hero.
        . When users click a deep link in an email, open the detail view for a particular hero.
### Add the AppRoutingModule
~~
ng generate module app-routing --flat --module=app
    . Routes
    . RouterModule.forRoot()
    . Add RouterOutlet
        . Try it
    . Add a navigation link (routerLink)

### Add a dashboard view
~~
ng generate component dashboard
    . Add the dashboard route
    . Add a default route
    . Add dashboard link to the shell
    . Navigating to hero details
        . Delete hero details from HeroesComponent
        . Add a hero detail route
        . DashboardComponent hero links
        . HeroesComponent hero links
        . Remove dead code (optional)
    . Remove dead code (optional)
    . Routable HeroDetailComponent
        . Extract the id route parameter
        . Add HeroService.getHero()
        . Find the way back
    . Final code review
    .  Summary
        - You added the Angular router to navigate among different components.
        - You turned the AppComponent into a navigation shell with <a> links and a <router-outlet>.
        - You configured the router in an AppRoutingModule
        - You defined routes, a redirect route, and a parameterized route.
        - You used the routerLink directive in anchor elements.
        - You refactored a tightly-coupled master/detail view into a routed detail view.
        - You used router link parameters to navigate to the detail view of a user-selected hero.
        - You shared the HeroService among multiple component s.





    





https://angular.io/generated/images/guide/toh/nav-diagram.png


