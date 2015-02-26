# angular-toggle-switch [![Build Status](https://travis-ci.org/cgarvis/angular-toggle-switch.png?branch=master)](https://travis-ci.org/cgarvis/angular-toggle-switch)

Toggle Switches for AngularJS.  Based off [Bootstrap switch](http://www.larentis.eu/switch/) by Matt Lartentis.

## Demo
[cgarvis.github.io/angular-toggle-switch](http://cgarvis.github.io/angular-toggle-switch)

## Installation

Download [angular-toggle-switch.min.js](https://raw.github.com/cgarvis/angular-toggle-switch/master/angular-toggle-switch.min.js) or install with bower.

```bash
$ bower install angular-toggle-switch --save
```

Load `angular-toggle-switch.min.js` then add the `toggle-switch` module to your Angular App.

```javascript
angular.module('app', ['toggle-switch']);
```

See [demo](http://cgarvis.github.io/angular-toggle-switch) for usage.

## Development

Testing is done using Karma Test Runner.

```bash
$ grunt test
```

## Release

```bash
$ grunt release
```
