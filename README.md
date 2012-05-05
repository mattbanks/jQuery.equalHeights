# jQuery Simple Equal Heights

Version 1.1

## Summary 

Simple jQuery plugin to equalize heights of multiple elements on a page.

## Contributors:

Matt Banks ( [@mattbanks](http://twitter.com/mattbanks) / [kernelcreativemedia.com](http://www.kernelcreativemedia.com) / [mattbanks.me](http://www.mattbanks.me) )

## Usage

Include `jquery.equalheights.min.js` after calling jQuery in the footer. Alternatively, include in your `plugins.js` file if using [HTML5 Boilerplate](http://html5boilerplate.com).

	$('.yourelements').equalHeights(); 

Select whatever elements need equal height.

If using @font-face or Google Web Fonts, you may need to wrap the function call in a `setTimeout` for 100ms-200ms (`jQuery.height()` needs to fire after the font is rendered to properly calculate the height).

## Requirements/Browsers

Tested with jQuery 1.7.x.

Works in IE6+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

## Examples

See `example.html` in examples folder.

### Changelog

#### Version 1.1

* cleaned up function call
* updated `example.html` to properly validate

#### Version 1.0

* initial version