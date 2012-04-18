# jQuery Simple Equal Heights

Simple jQuery plugin to equalize heights of multiple elements on a page.

## Usage

Include `jquery.equalheights.min.js` after calling jQuery in the footer. Alternatively, include in your `plugins.js` file if using [HTML5 Boilerplate](http://html5boilerplate.com).

	$('#equalheight div').equalHeights(); 

Select whatever elements need equal height.

If using @font-face or Google Web Fonts, wrap selector in a `setTimeout` for 100ms (`jQuery.height()` needs to fire after the font is rendered to properly calculate the height).

## Requirements/Browsers

Tested with jQuery 1.7.x.

Works in IE6+, Chrome 14+, Safari 4+, Firefox 3.5+, Opera 10+.

## Examples

See `example.html` in examples folder.