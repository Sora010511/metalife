// 
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




// アコーディオン
$(function() {
  $(".faq dt").on("click", function () {
    // 対応する答えだけ開閉
    $(this).next("dd").slideToggle(300);
    
    // 他の答えを閉じる（任意）
    $(".faq dd").not($(this).next()).slideUp(300);
  });
});

