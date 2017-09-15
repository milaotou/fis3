/**
 * Created by aidenZou on 2016/11/8.
 */
$("#city").click(function () {
    $("#choose-city").addClass('show').removeClass('hide')
})
//按字母选择城市
$("html, body").animate({scrollTop: 0})
$(".letter li").click(function(){
    var letter = $(this).find("a").html();
    var top = $("#" + letter+1).offset().top - $(".header").height();
    $("html, body").animate({scrollTop: top})
})

//选择城市
$(function(){
    $(".city-list p").click(function(){
        var city=$(this).text();
        $("#city").val(city);
        $("#city").data("id",$(this).data('id'));
        
        if (city=='北京') {
            $("#quxian,#quxian-tip").removeClass('hide');
        } else {
            $("#quxian,#quxian-tip").addClass('hide');
        }
        // 同时把社保计算器的基数最大值最小值重新赋值;
        // smin,smax,gmin,gmax自定义,要和后台沟通
        $('#shebaojishu').val('');
        $('#gongjijinjishu').val('');
        $('#shebaojishu-check').attr("checked",false);
        $('#gongjijinjishu-check').attr("checked",false);

        $('#shebaojishu').data('min',$(this).data('smin'));
        $('#shebaojishu').data('max',$(this).data('smax'));
        $('#shebaojishu').attr('placeholder',$('#shebaojishu').data('min')+'~'+$('#shebaojishu').data('max'));

        $('#gongjijinjishu').data('min',$(this).data('gmin'));
        $('#gongjijinjishu').data('max',$(this).data('gmax'));
        $('#gongjijinjishu').attr('placeholder',$('#gongjijinjishu').data('min')+'~'+$('#gongjijinjishu').data('max'));


        $("#choose-city").addClass('hide').removeClass('show');
    })
})

// 关闭
$("#close").click(function () {
    $("#choose-city").addClass('hide').removeClass('show')
})