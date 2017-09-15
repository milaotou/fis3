$(function(){
  var index={
    init:function(){
      that = this;
      that.getLocation();
    },
    getLocation:function(){
        if(navigator.geolocation){
           // timeout at 60000 milliseconds (60 seconds)
           var options = {timeout:60000};
           navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
        }else{
           warnAlert("定位失败!");
        }

        function showLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            that.getCity(latitude,longitude);
         }

         function errorHandler(err) {
            if(err.code == 1) {
               warnAlert("未能允许定位!");
            }else if( err.code == 2) {
               warnAlert("定位失败!");
            }
         }  
    },
    getCity:function(latitude,longitude){

       $.ajax({
          type: "post",
          url: "/dsbapi/v2/city/getLocationCity",
          data: {latitude:latitude,longitude:longitude},
          dataType: "json",
          success: function (data) {
              if (data.error_code == "200") {
                 var city_info=data.data.city_info;
                 var city_id=city_info.city_id;
                 var city_name=city_info.city_name;
                 $("#city span").text(city_name);
                 addLocal('city_name',city_name);
                 addLocal('city_id',city_id);
              } else if(data.error_code == "0"){
                 warnAlert(data.msg);
              }
          },
          error: function () {
              warnAlert("抱歉，系统发生错误");
             
          }
        });
    },
  }
  index.init();
})