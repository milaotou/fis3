/**
 * Created by aidenZou on 2016/11/9.
 */
var validator = {};
//姓名
validator.name = function (name) {
    var reg = /^[\u4E00-\u9FA5]+$/;
    return name && reg.test(name);

}
// 手机号码
validator.phone = function (phone) {
    var reg = /^13[0-9]{1}[0-9]{8}$|^15[012356789]{1}[0-9]{8}$|^17[0-9]{1}[0-9]{8}$|^18[012356789]{1}[0-9]{8}$/;
    return phone && reg.test(phone);
};

// 不为空
validator.notBlank = function (val) {
    var reg = /\S/;
    if (val == undefined) {
        return false;
    }
    return reg.test(val);
};

//身份证号码
validator.carid = function (carid) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return carid && reg.test(carid);

}

//银行卡号验证
validator.bankNum = function (bankNum) {
    var reg = /^(\d{16,20})$/;
    return bankNum && reg.test(bankNum);

}

//qq验证
validator.qq = function (qq) {
    var reg = /^[1-9][0-9]{4,9}$/;
    return qq && reg.test(qq);
}

//email验证
validator.email = function (email) {
    var reg =  /^([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return email && reg.test(email);

}


