# jQuery Simple Equal Heights

Version 1.5.3

## Summary

Simple jQuery plugin to equalize heights of multiple elements on a page.

## Author

Matt Banks ( [@mattbanks](http://twitter.com/mattbanks) / [kernelcreativemedia.com](http://www.kernelcreativemedia.com) / [mattbanks.me](http://www.mattbanks.me) )

## Usage

Include `jquery.equalheights.min.js` after calling jQuery in the footer. Alternatively, include in your `plugins.js` file if using [HTML5 Boilerplate](http://html5boilerplate.com).

Alternatively, install with [bower](https://github.com/bower/bower):

	bower install jquery.equalheights

### Auto Initialize

Add `data-equal="MYELEMENTS"` to the parent container, where MYELEMENTS is div, section, li, whatever you'd like. [See the example](https://github.com/mattbanks/jQuery.equalHeights/blob/master/example/example.html) for more information.
You can specify options by setting them as a data-attribute, for example: `data-watch="true"`.

### Manually Initialize

	$('.yourelements').equalHeights([options]);

Select whatever elements need equal height. You can optionally pass in an object with one or more options

#### Option: `wait`

If you pass in `{wait: true}` your elements' height will only be equalized as soon as they have layout.

	$('.yourelements').equalHeights({wait: true});

#### Option: `watch`

Pass in `{watch: true}` if you want to execute `equalHeights` on resize. This can improve the responsiveness of the elements with equalized heights.

	$('.yourelements').equalHeights({watch: true});

#### Option: `unwatch`

Pass in `{unwatch: true}` to unwatch a set of elements that are currently watched.

	$('.yourelements').equalHeights({unwatch: true});

### Caveats

If using @font-face or Google Web Fonts, you may need to wrap the function call in a `setTimeout` for 100ms-200ms or call it on `window` `load` (`jQuery.height()` needs to fire after the font is rendered to properly calculate the height). Otherwise even the `wait` option could fail here as the element might be rendered and have layout before the fonts are loaded and applied.

## Requirements/Browsers

Tested with jQuery 1.7.x.

Works in IE6+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

## Examples

See `example.html` in examples folder.

## Contributors

* [betweenbrain](https://github.com/betweenbrain)
* [Korri](https://github.com/Korri)
* [pafnuty](https://github.com/pafnuty)
* [osartun](https://github.com/osartun)

### Changelog

#### Version 1.5.3

* major rewrite (props [osartun](https://github.com/osartun))
* add `watch`, `unwatch`, and `wait` options

#### Version 1.5.2

* version bump for bower

#### Version 1.5.1

* fix bug with $.height() in jQuery 1.8+ with double padding when `box-sizing` is set to `border-box`

#### Version 1.5.0

* added Grunt for linting and minification
* change auto-initialization to use a single data attribute (props [pafnuty](https://github.com/pafnuty))

#### Version 1.4.2

* allow multiple `data-heights` elements per page (props [Korri](https://github.com/Korri))

#### Version 1.4.1

* add bower support

#### Version 1.4

* allow auto initialization with `data-heights` and `data-targets` (props [betweenbrain](https://github.com/betweenbrain))

#### Version 1.3

* properly return the jQuery object to allow chaining

#### Version 1.2

* properly cache `$(this)` since it's called twice in the main function
* calculate height by `innerheight()` instead of `height()` to include any padding

#### Version 1.1

* cleaned up function call
* updated `example.html` to properly validate

#### Version 1.0

* initial version
