$(function(){
  var salaryPoll={
    init:function(){
      that = this;
      that.get_yzm();
      that.yuyin_yzm();
      that.login();
    },
    get_yzm:function(){
      //��ȡ��֤��
      $("#get_yzm").bind("click",function () {
          var $this = $(this);
          var phoneNum = $.trim($("#phone").val());
          var myreg = new RegExp(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/);
          if (!phoneNum.match(myreg)) {
            warnAlert('��������ȷ���ֻ���');
            return false;
          } 
          else if ($this.text() == "��ȡ��֤��") {
              var wait = 60;
              var sendCode = setInterval(function () {
                  if (wait == 0) {
                      $this.attr('disabled', false);
                      $this.removeClass("btn-gray").addClass("btn-blue").text('��ȡ��֤��');
                      wait = 60;
                      clearInterval(sendCode);
                  } else {
                      $this.removeClass("btn-blue").addClass("btn-gray").text(wait + '��');
                      $this.attr('disabled', true);
                      wait--;
                  }
              }, 1000);
          }
           $.ajax({
              type: "post",
              url: "/dsbapi/v2/user/getVerificationCode",
              data: {mobile:phoneNum,send_type:'1'},
              dataType: "json",
              success: function (data) {
                  if (data.error_code == "200") {
                  } else if(data.error_code == "0"){
                     warnAlert(data.msg);
                  }
              },
              error: function () {
                  warnAlert("��Ǹ��ϵͳ��������");
                 
              }
            });
      });
    },
    yuyin_yzm:function(){
      $("#yuyin_yzm").bind("click",function () {
          var phoneNum = $.trim($("#phone").val());
          var myreg = new RegExp(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/);
          if (!phoneNum.match(myreg)) {
            warnAlert('��������ȷ���ֻ���');
            return false;
          }else{
             $.ajax({
              type: "post",
              url: "/dsbapi/v2/user/getVerificationCode",
              data: {mobile:phoneNum,send_type:'2'},
              dataType: "json",
              success: function (data) {
                  if (data.error_code == "200") {
                  
                  } else if(data.error_code == "0"){
                     warnAlert(data.msg);
                  }
              },
              error: function () {
                  warnAlert("��Ǹ��ϵͳ��������");
              }
            });
          } 
        
          
      });
    },
    login:function(){
      $("#login").click(function(){
          var tel=$("#phone").val();
          var yzm=$("#yzm").val();
          var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
          if (!ifNotNull(tel)) {
            warnAlert('�ֻ��Ų���Ϊ��');
          } else if (!tel.match(myreg)) {
            warnAlert('��������ȷ���ֻ���');
          } else if (!ifNotNull(yzm)) {
            warnAlert('��֤�벻��Ϊ��');
          } else if (!yzm.match(/^\d{4}$/)) {
            warnAlert('��������Ч����֤��');
          }else{
             $.ajax({
              type: "post",
              url: "/dsbapi/v2/user/doLogin",
              data: {mobile:tel,code:yzm},
              dataType: "json",
              success: function (data) {
                  warnAlert(data.msg);
              },
              error: function () {
                  warnAlert("��Ǹ��ϵͳ��������");
                 
              }
            });
          }
          
      });
    },
  }
  salaryPoll.init();
})