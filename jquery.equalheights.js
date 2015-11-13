/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.2
 */
(function($) {

    var watched = [];
    $(window).on('resize', function () {
        for (var i = 0, l = watched.length; i < l; i++) {
            if (watched[i]) {
                $(watched[i]).css('height', 'auto').equalHeights()
            }
        }
    })

    $.fn.equalHeights = function(options) {
        var maxHeight = 0,
            $this = $(this),
            equalHeightsFn = function() {
                var height = $(this).innerHeight();

                if ( height > maxHeight ) { maxHeight = height; }
            };
        options = options || {};

        $this.each(equalHeightsFn);

        if (options.watch || options.equalWatch) {
            watched.push(this)
        }

        if (options.unwatch || options.equalUnwatch) {
            for (var i = 0, l = watched.length, res = []; i < l; i++) {
                if (watched[i].length && !$this.is(watched[i])) {
                    res.push(watched[i]);
                }
            }
            watched = res;
            return this;
        }

        if (options.wait || options.equalWait) {
            var loop = setInterval(function() {
                if(maxHeight > 0) {
                    clearInterval(loop);
                    return $this.css('height', maxHeight);
                }
                $this.each(equalHeightsFn);
            }, 100);
            return this;
        } else {
            return $this.css('height', maxHeight);
        }
    };

    // auto-initialize plugin
    $(document).on('ready', function() {
       $('[data-equal]').each(function(){
            var $this = $(this),
                options = $this.data(),
                target = options.equal;
            $this.find(target).equalHeights(options);
        });
    });

})(jQuery);
