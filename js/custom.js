/**
 * Created by sanchahous on 28.03.2017.
 */
$('#countdown').countdown('2017/03/28 19:00:00').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
        + ' <div class="top-line__timer top-line__hour"> <span>%H</span> <span>часов</span> <span class="top-line__timer__points">:</span></div>'
        +  '<div class="top-line__timer top-line__min"> <span>%M</span> <span>минут</span> <span class="top-line__timer__points">:</span> </div>'
        +  '<div class="top-line__timer top-line__sec"> <span>%S</span> <span>секунд</span> </div>'
    ));
});
