// about
$(function () {

  $(window).scroll(function () {
    $(".left-content").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("animation-left");
      }
    });
  
    $(".right-content").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("animation-right");
      }
    });

  //voice
    $(".left-voice").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("voice-content");
      }
    });
    $(".right-voice").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("voice-content");
      }
    });
  });
});

// キャラクター
const follower = document.querySelector(".follower");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

// マウス位置更新
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// 緩やかに追従
function animate() {
  // 線形補間 (lerp)
  const speed = 0.02; // 数値が小さいほどゆっくり
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  follower.style.left = `${currentX}px`;
  follower.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

animate();


// アコーディオン
$(function() {
  $("#faq dt").on("click", function () {
    // 対応する答えだけ開閉
    $(this).next("dd").slideToggle(300);
    
    // 他の答えを閉じる（任意）
    $("#faq dd").not($(this).next()).slideUp(300);
  });
});

// アコーディオンのタイトルに「+」を追加
$(function() {
  $("#faq dt").each(function() {
    $(this).append('<span class="toggle-icon">+</span>');
  });

  // タイトルクリック時の処理
  $("#faq dt").on("click", function() {
    $(this).toggleClass("is-active");
    $(this).find(".toggle-icon").text($(this).hasClass("is-active") ? "-" : "+");
  });
});

