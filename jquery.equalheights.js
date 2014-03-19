/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.6.0
 */
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin with data-equal attribute
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        return $this.find(target).equalHeights();
    });

    // auto-initialize plugin with class of equalheight
    $('.equalheight').parent().each(function() {
        return $(this).find('.equalheight').equalHeights();
    });

})(jQuery);
