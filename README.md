# schibsted-test — A test project for Schibsted

This project uses an application skeleton for a typical [AngularJS](http://angularjs.org/) web app,
to quickly bootstrap an angular webapp projects and dev environment.

## Getting Started

To get you started you can simply clone the schibsted-test repository and install the dependencies:

### Prerequisites

You need git to clone the schibsted-test repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Browser compatibility

Since the app has been written in ES6 but without using Babel to transcript to standard ES5, it
will only run in the major browsers that support ES6 natively. IE is *NOT* one of them.
Feel free to test it on Chrome, Safari and Firefox.

### Clone schibsted-test

Clone the schibsted-test repository using [git][git]:

```
git clone https://github.com/n2o1988/schibsted-test.git
cd schibsted-test
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

I have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

I have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    scm-filters/              --> filter component (similarly all the other components)
      scm-filters.component.js  --> controller and component for the filters
      scm-filters.component.html  --> filters component template
      scm-filters.component.css    --> filters component style
    ...
  constants/            --> contains angular constants specific to the app
      config.constants.js --> configuration constants like endpoints etc.
  resources/            --> static resources
      img/                  --> images
      test-data.json        --> mock json containing 50 videos from VIMEO
  services/               --> Services folder
      videos.service.js     --> service dedicated to retrieve and filter the videos from the mock API
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```

## Contact

For more information on AngularJS please check out http://angularjs.org/

[angular-seed]: https://github.com/angular/angular-seed
[bower]: http://bower.io
[git]: http://git-scm.com/
[http-server]: https://github.com/nodeapps/http-server
[jasmine]: https://jasmine.github.io
[jdk]: https://en.wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads/index.html
[karma]: https://karma-runner.github.io
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/
[protractor]: https://github.com/angular/protractor
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/

## Screenshot
![Alt text](/screen.png?raw=true "Screenshot")