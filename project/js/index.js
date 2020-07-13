$(function () {
  $('.container-left li').click(function () {
    var text = $(this).text();
    if (text == '首页') {
      $('.content-main').load('./pages/home.html');
      // 样式变化
      $('.container-left li').css('color','#c5c2c2');
      $(this).css('color','#409EFF');
      // 标题变化
      $('.header-title').text(text);
    } else if (text == '栏目管理') {
      $('.content-main').load('./pages/category.html');
      $('.container-left li').css('color','#c5c2c2');
      $(this).css('color','#409EFF');
      $('.header-title').text(text);
    } else if (text == '文章管理') {
      $('.content-main').load('./pages/article.html');
      $('.container-left li').css('color','#c5c2c2');
      $(this).css('color','#409EFF');
      $('.header-title').text(text);
    } else if (text == '用户管理') {
      $('.content-main').load('./pages/user.html');
      $('.container-left li').css('color','#c5c2c2');
      $(this).css('color','#409EFF');
      $('.header-title').text(text);
    } else if (text == '评论管理') {
      $('.content-main').load('./pages/comment.html');
      $('.container-left li').css('color','#c5c2c2');
      $(this).css('color','#409EFF');
      $('.header-title').text(text);
    } else {
      return;
    }
  });
  $('.container-left li:first').click();
  // $('.container-left li:nth(3)').click();
})