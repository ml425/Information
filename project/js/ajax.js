// 封装jQuery的ajax
// 请求的路径、请求的方式、携带的数据、响应内容
// 后台服务器的基础路径
// var baseURL = 'http://39.97.107.26:8888';
var baseURL = 'http://39.98.124.4:7788';
function myAjax(url,method,param,successHandle,errorHandle){
    $.ajax({
        url:baseURL + url,
        method:method,
        data:param,
        success:successHandle,
        error:errorHandle||function(err){
            console.log(err);
        }
    });
}
// 引用的时候
// maAjax('/manager/category/findAllCategory','get',{},function(res){
//     // 响应函数的应用
// },function(err){

// });