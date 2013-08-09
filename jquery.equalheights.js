/*
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2012 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.4.2
 */
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.height(maxHeight);
    };

    // auto-initialize plugin
    $('[data-heights="equal"]').each(function(){
        var $this = $(this),
            target = $this.data('targets');
        $this.find(target).equalHeights();
    });

})(jQuery);
