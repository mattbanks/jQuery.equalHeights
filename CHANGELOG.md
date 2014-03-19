# Changelog

## Version 1.6.0

* allow auto initialization with equalheight class
* make plugin responsive
* add contributing docs
* move changelog to separate file to cleanup readme
* update grunt dependencies
* move example to gh-pages branch

## Version 1.5.2

* version bump for bower

## Version 1.5.1

* fix bug with $.height() in jQuery 1.8+ with double padding when `box-sizing` is set to `border-box`

## Version 1.5.0

* added Grunt for linting and minification
* change auto-initialization to use a single data attribute (props [pafnuty](https://github.com/pafnuty))

## Version 1.4.2

* allow multiple `data-heights` elements per page (props [Korri](https://github.com/Korri))

## Version 1.4.1

* add bower support

## Version 1.4

* allow auto initialization with `data-heights` and `data-targets` (props [betweenbrain](https://github.com/betweenbrain))

## Version 1.3

* properly return the jQuery object to allow chaining

## Version 1.2

* properly cache `$(this)` since it's called twice in the main function
* calculate height by `innerheight()` instead of `height()` to include any padding

## Version 1.1

* cleaned up function call
* updated `example.html` to properly validate

## Version 1.0

* initial version
