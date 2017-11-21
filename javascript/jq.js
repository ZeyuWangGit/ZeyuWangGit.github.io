/**
 * Created by ZeyuWang on 05/08/2017.
 */

$(".smooth").click(function(){
    var href = $(this).attr("href");
    var pos = $(href).offset().top;
    $("html,body").animate({scrollTop: pos}, 1000);
    return false;
});