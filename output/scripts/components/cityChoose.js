$("#city").click(function(){$("#choose-city").addClass("show").removeClass("hide")}),$("html, body").animate({scrollTop:0}),$(".letter li").click(function(){var i=$(this).find("a").html(),a=$("#"+i+1).offset().top-$(".header").height();$("html, body").animate({scrollTop:a})}),$(function(){$(".city-list p").click(function(){var i=$(this).text();$("#city").val(i),$("#city").data("id",$(this).data("id")),"北京"==i?$("#quxian,#quxian-tip").removeClass("hide"):$("#quxian,#quxian-tip").addClass("hide"),$("#shebaojishu").val(""),$("#gongjijinjishu").val(""),$("#shebaojishu-check").attr("checked",!1),$("#gongjijinjishu-check").attr("checked",!1),$("#shebaojishu").data("min",$(this).data("smin")),$("#shebaojishu").data("max",$(this).data("smax")),$("#shebaojishu").attr("placeholder",$("#shebaojishu").data("min")+"~"+$("#shebaojishu").data("max")),$("#gongjijinjishu").data("min",$(this).data("gmin")),$("#gongjijinjishu").data("max",$(this).data("gmax")),$("#gongjijinjishu").attr("placeholder",$("#gongjijinjishu").data("min")+"~"+$("#gongjijinjishu").data("max")),$("#choose-city").addClass("hide").removeClass("show")})}),$("#close").click(function(){$("#choose-city").addClass("hide").removeClass("show")});