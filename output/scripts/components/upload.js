var updata=function(e,t,n){var a=this,i=function(e,t){a.oid=document.getElementById(e),a.sid=document.getElementById(t)},d=function(){var e=this.files[0];if(!/image\/\w+/.test(e.type))return alert("请选择正确格式的图片"),!1;""!=e.name;var t=new FileReader;t.readAsDataURL(e),t.onload=function(){a.sid.src=this.result,n&&n()}};i(e,t),a.oid.addEventListener("change",d,!1)};