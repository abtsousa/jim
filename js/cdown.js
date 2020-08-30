$(function () {


    /* =========================================
        COUNTDOWN 1
     ========================================= */
    $('#clock').countdown('2021/1/1').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 text-white font-weight-bold">%D</span> Dias'
        + '<span class="h1 text-white font-weight-bold">%H</span> H'
        + '<span class="h1 text-white font-weight-bold">%M</span> Min'
        + '<span class="h1 text-white font-weight-bold">%S</span> Sec'));
    });

});
