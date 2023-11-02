# VidyaAmple

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Follow the following Steps


1.create new project
 >ng new vidya-ample
 >cd vidya-ample
 >code .
2. open app.component.html--> remove existing code--> put some dummy welcome msg
3. now start the server and run the application(ng serve)
4. open angular.json file--->modify outputPath--> remove existing value and put only "docs"
5. now build the project in production mode with following command
>ng build --output-path docs --base-href vidya-ample


6. now open github-->create a repo-->give any repo name(vidya-ample-classes)-->create

7. open git-bash inside project directory(i.e vidya-ample)
8. >git init
   > git remote add origin https://github.com/chandrajha/vidya-ample-classes.git
   >git status
   >git add .
   >git status
   >git commit -m "project has been added to repo"
   >git push -u origin master

9. now refresh the github page, will find all the code there.
10. now click on setting tab --> click on pages tag in left side nav
11. change the source from none to master in the dropdown--> root folder to docs---> click on save
12. after sometime one link will be gerated(like https://chandrajha.github.io/vidya-ample/)
13. open the link in new tab
