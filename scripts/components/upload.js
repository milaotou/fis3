/**
 * Created by aidenZou on 2016/11/9.
 */
var updata = function(oid,sid,callback){//上传预览函数
    var that = this;
    var init = function(oid,sid){
        that.oid = document.getElementById(oid);
        that.sid = document.getElementById(sid);
    };
    var readFile = function(){
        var file = this.files[0];
        if(!/image\/\w+/.test(file.type)){//这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
            alert("请选择正确格式的图片");
            return false;
        }
        if(file.name!=''){

        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            that.sid.src = this.result;
            if(callback){
                callback();
            }
        }
    };
    init(oid,sid);
    that.oid.addEventListener('change',readFile,false);
};