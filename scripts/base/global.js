/**
 * Created by aidenZou on 2016/11/3.
 */
$(function () {
    var footerNav = {
        init: function () {
            this.render();
            this.bind();
        },
        render: function () {
            var me = this;
            me.nav_unit = $(".footer_nav .nav_unit");
        },
        bind: function () {
            //底部导航效果
            var me = this;
            $(".footer_nav .home").find(".active").show();
            $(".footer_nav .home").find(".default").hide();
            me.nav_unit.click(function (e) {
                var unit = $(".footer_nav .nav_unit");
                unit.find("p a").css("color", "#757575");
                $(this).find("p a").css("color", "#2196F3");
                unit.find("img:eq(0)").hide();
                unit.find("img:eq(1)").show();
                $(this).find("img:eq(0)").show()
                $(this).find("img:eq(1)").hide()
            })
        }
    }
    footerNav.init();
})

//自动关闭提示框
function warnAlert(str) {
    if(str.substr(0,1) == "\"" && str.substr(str.length-1,1) == "\"")
    {str = str.substr(1,str.length-2);}
    var bgDiv = document.createElement('div');
    bgDiv.className ='alertPopbg';
    bgDiv.id ='alertPopbg';
    var AlertDiv = document.createElement('div');
    AlertDiv.className ='AlertDiv';
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clientH = document.documentElement.clientHeight;
    AlertDiv.style.top = scrollTop+(clientH-100)/2+'px';
    AlertDiv.innerHTML = str;
    AlertDiv.id='alertmsgDiv';
    document.body.appendChild(AlertDiv);
    document.body.appendChild(bgDiv);
    //设置关闭时间
    window.setTimeout("closewin()",2000);
}
function closewin() {
    document.body.removeChild(document.getElementById("alertmsgDiv"));
    document.body.removeChild(document.getElementById("alertPopbg"));
}

// 不自动关闭提示框
function dangerAlert(dom){
    $('body').append("<div class='alertPopbg'></div>")
    $('#'+dom).addClass("show").removeClass("hide");
    $('.alertPopbg').click(function () {
        $('.alertPopbg').remove();
        $('#'+dom).addClass("hide").removeClass("show");
    })
}

$("#zhezhao").click(function () {
    dangerAlert('sbjisuanqi-bili');
})

//获取地址栏参数
function GetQueryString(paras) {
        var url = location.href;
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        var paraObj = {}
        for (i = 0; j = paraString[i]; i++) {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var returnValue = paraObj[paras.toLowerCase()];
        if (typeof (returnValue) == "undefined") {
            return "";
        } else {
            return decodeURIComponent(returnValue);
        }
}

//添加到本地存储
function addLocal(name,value) {
    if(ifNotNull(getCookie("noLocal"))){
        addCookie(name,value);
    }else{
        try{
            localStorage.setItem(name,value);
            //addCookie(name,value);
        }catch(e){
            addCookie("noLocal","true");//浏览器不支持local存储
            addCookie(name,value);
        }
    }
}
//获得本地存储
function getLocal(name) {
    if(ifNotNull(getCookie("noLocal"))){
        return getCookie(name);
    }else{
        if(ifNotNull(localStorage.getItem(name))){
            return localStorage.getItem(name);
        }else{
            return getCookie(name);
        }
    }
}
//删除本地存储
function delLocal(name) {
    if(ifNotNull(getCookie("noLocal"))){
        addCookie(name,"");
    }else{
        localStorage.removeItem(name);
    }
}
//添加cookie
function addCookie(name,value,expires){
    var str = name+"="+escape(value);
    var localhost_no = window.location.host;
    if(expires!=""){
        var date=new Date();
        date.setTime(date.getTime()+expires*24*3600*1000);//expires单位为天
        str+=";expires="+date.toGMTString();
    }
    str += ";path=/;domain="+localhost_no;
    document.cookie = str;
}
//取得cookie
function getCookie(name){
    var str=document.cookie.split(";");
    for(var i=0;i<str.length;i++){
        var str2=str[i].split("=");
        if(str2[0].trim()==name) return unescape(str2[1]);
    }
}
//删除cookie
function createCookie(name, value, days, Tdom) {
    var Tdom = (Tdom) ? Tdom : "/";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=" + Tdom;
}
//判断是否为空
function ifNotNull(obj) {
    if(obj != null && obj != "undefined" && obj != "null" && typeof(obj) != "undefined" && obj != undefined && typeof(obj) != undefined) {
        obj = $.trim(obj+"");
        if(obj != "") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
//提示框
function popup(data, callback) { //调用例子dom.popup({txt:'xxxxxx',btn:2})
    $('#popup').remove();
    var btn = '',
        txt_true = '确定',
        txt_false = '取消',
        txt_title = '提示',
        style = '',
        txt_style = '';
    data = data || {};
    txt_title = data.txt_title || txt_title;
    style = data.style || style;
    txt_style = data.txt_style || txt_style;
    txt_true = data.txt_true || txt_true;
    txt_false = data.txt_false || txt_false;
    if (data.btn == '2') {
        btn = '<span class="popup_false" id="popup_false">' + txt_false + '</span><span class="popup_true" id="popup_true">' + txt_true + '</span>';
    }else {
        btn = '<span class="popup_true" style="margin: auto;" id="popup_true">好的</span>';
    }

    var html = '<div class="loading_line" id="popup" style="visibility: visible;">' +
        '<div class="box-middle">' +
        '<div class="popup_box f26" ' + style + '>' +
        '<div class="popup_title font_ff5050">' + txt_title +
        '</div>' +
        '<div class="popup_txt main-color" ' + txt_style + '><div>' + data.txt + '</div></div>' +
        '<div class="popup_bt">' + btn + '</div>' +
        '</div>' +
        '</div></div>';
    $("body").append(html);
    $('#popup_true').bind('click', function(e) {
        e.preventDefault();
        $('#popup').hide();
        if (callback) {
            callback();
        }
    });
    $('#popup_fals').bind('click', function(e) {
        e.preventDefault();
        $('#popup').hide();         
    });
}
//防止页面滚动
function pageNoScroll(){
    $("body").css({"height":window.innerHeight,"overflow":"hidden"});
}
//解除防止页面滚动
function pageScroll(){
    $("body").css({"height":"auto","overflow":"auto"});
}

//回退
$(".goBack").click(function(){
    javascript:history.back(-1);
});
var hideHead=$("#hideNavbar").val();
if (hideHead=='1') {
   $(".bar-nav").hide();
}
