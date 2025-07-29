// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  $(window).scroll(function () {
    $(".left-content").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("animation-left-reason");
      }
    });
  
    $(".right-content").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("animation-right-reason");
      }
    });
  
  });
});






