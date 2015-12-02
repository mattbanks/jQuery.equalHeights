/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2015 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.3
 */
(function($) {

    var watched = [],
    calcMaxHeight = function($elems) {
        var height, maxHeight = 0;
        $elems.each(function () {
            height = $(this).innerHeight();
            if ( height > maxHeight ) { maxHeight = height; }
        });
        return maxHeight;
    },
    height = 'height',
    docEl = document.documentElement;

    $(window).on('resize', function () {
        // Bundle reading and writing styles to reduce synchronous layout / jank

        // Reset heights
        for (var i = 0, l = watched.length, elems, _w = [], m = []; i < l; i++) {
            elems = watched[i];
            // Don't waste time on elements that aren't in the DOM
            if (elems.length && $.contains(docEl, elems[0]) ) {
                _w.push(elems);
                elems.css(height, 'auto');
            }
        }

        // Calc max height
        for (i = 0, l = _w.length; i < l; i++) { m[i] = calcMaxHeight(_w[i]); }

        // Set max height
        for (i = 0; i < l; i++) { _w[i].css(height, m[i]); }
    });

    $.fn.equalHeights = function(options) {
        var maxHeight, $this = $(this), i, l, isContained, res, loop;
        options = options || {};

        maxHeight = calcMaxHeight($this);

        if (options.watch) {
            for (i = 0, l = watched.length, isContained; i < l; i++) {
                if ($this.is(watched[i])) {
                    isContained = true;
                    break;
                }
            }
            if (!isContained) {
                watched.push($this);
            }
        }

        if (options.unwatch) {
            for (i = 0, l = watched.length, res = []; i < l; i++) {
                if (!$this.is(watched[i])) { res.push(watched[i]); }
            }
            watched = res;
            return this;
        }

        if (options.wait) {
            loop = setInterval(function() {
                if(maxHeight > 0) {
                    clearInterval(loop);
                    return $this.css(height, maxHeight);
                }
                maxHeight = calcMaxHeight($this);
            }, 100);
            return this;
        } else {
            return $this.css(height, maxHeight);
        }
    };

    // Auto-initialize plugin
    $(document).on('ready', function() {
       $('[data-equal]').each(function(){
            var $this = $(this),
                options = $this.data(),
                target = options.equal;
            $this.find(target).equalHeights(options);
        });
    });

})(jQuery);
