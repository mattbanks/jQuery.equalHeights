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
        var $this = $(this),
            curTallest = 0,
            curRowBegin = 0,
            rowLength = [],
            element,
            topPos = 0;

        return $this.each( function() {
            element = $(this);
            // if element is on same row or not
            topPos = element.offset().top;
            runFor = function() {
                for(curDiv = 0; curDiv < rowLength.length; curDiv++) {
                    rowLength[curDiv].css('min-height', curTallest);
                }
            };
            if(curRowBegin !== topPos) {
                runFor();
                rowLength.length = 0;
                curRowBegin = topPos;
                curTallest = element.outerHeight();
                rowLength.push(element);
            } else {
                rowLength.push(element);
                curTallest = (curTallest < element.outerHeight()) ? (element.outerHeight()) : (curTallest);
            }
            runFor();
        });

    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);
