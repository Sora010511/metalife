// アコーディオン
$(function() {
  $(".faq dt").on("click", function () {
    // 対応する答えだけ開閉
    $(this).next("dd").slideToggle(300);
    
    // 他の答えを閉じる（任意）
    $(".faq dd").not($(this).next()).slideUp(300);
  });
});

