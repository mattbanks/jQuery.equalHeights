/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            $this.css('height', 'auto');
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    function equalByDataAttr() {
        // auto-initialize plugin
        $('[data-equal]').each(function(){
            var $this = $(this),
                target = $this.data('equal');
            $this.find(target).equalHeights();
        });
    }
    equalByDataAttr();

    $( window ).resize(function() {
        equalByDataAttr();
    });

})(jQuery);
