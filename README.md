# jQuery Simple Equal Heights

Version 1.6.0

## Summary

Simple jQuery plugin to equalize heights of multiple elements on a page.

## Author

Matt Banks ( [@mattbanks](http://twitter.com/mattbanks) / [kernelcreativemedia.com](http://www.kernelcreativemedia.com) / [mattbanks.me](http://www.mattbanks.me) )

## Usage

Include `jquery.equalheights.min.js` after calling jQuery in the footer. You can also include in your `plugins.js` file if using [HTML5 Boilerplate](http://html5boilerplate.com).

Alternatively, install with [bower](https://github.com/bower/bower):

	bower install jquery.equalheights

### Auto Initialize

There are two options for auto initialization:

1. Add `data-equal="MYELEMENTS"` to the parent container, where MYELEMENTS is div, section, li, whatever you'd like.

2. Alternatively, add class of `equalheight` to elements and that need their heights equalized and don't adding the `data-equal` element to the parent.

### Manually Initialize

	$('.yourelements').equalHeights();

Select whatever elements need equal height.

### Responsive

The plugin is responsive and will re-call itself whenever the window is resized, ensuring the elements remain the same size during browser changes.

### Caveats

If using @font-face or Google Web Fonts, you may need to wrap the function call in a `setTimeout` for 100ms-200ms (`jQuery.height()` needs to fire after the font is rendered to properly calculate the height).

You can also call `equalHeights` on `$(window).load()`, although [there are some issues on when that event gets fired between various browsers](http://api.jquery.com/load-event/).

## Requirements/Browsers

Tested with jQuery 1.7.x+.

Works in IE6+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

## Examples

[See the example](https://github.com/mattbanks/jQuery.equalHeights/blob/master/example/example.html) for more information.

## Contributing

Anyone and everyone is welcome to contribute! Check out the [Contributing Guidelines](CONTRIBUTING.md).

## Contributors

* [betweenbrain](https://github.com/betweenbrain)
* [Korri](https://github.com/Korri)
* [pafnuty](https://github.com/pafnuty)
* [svitaliyv](https://github.com/svitaliyv)
* [yuvilio](https://github.com/yuvilio)
* [bramwillemse](https://github.com/bramwillemse)
