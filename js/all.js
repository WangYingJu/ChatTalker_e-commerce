$(function () {
  // 事件監聽（哪一種事件監聽,要做什麼事）
  $(".btn2-program").on("click", function (e) {
    e.preventDefault();
    // 目標元素
    // 點擊person要發生的事件
    $(this).addClass("btn2-program-active");
    $(this)
      .parent()
      .siblings()
      .find(".btn2-program")
      .removeClass("btn2-program-active");
    $(".subscribers").text($(this).children().text());
  });

  // 常見問題集
  let imgUrl =
    "https://hexschool.github.io/webLayoutTraining1st/chatTalker_images/icon_plus.svg";

  let plus =
    "https://hexschool.github.io/webLayoutTraining1st/chatTalker_images/icon_plus.svg";

  let minus =
    "https://hexschool.github.io/webLayoutTraining1st/chatTalker_images/icon_minus.svg";

  $(".QA-list .QA-items .QA-info").hide();
  $(".QA-items").on("click", function (e) {
    e.preventDefault();
    if (imgUrl == plus) {
      imgUrl = minus;
    } else {
      imgUrl = plus;
    }
    $(this).find(".btn-QA-img").toggleClass("add-transform-right");
    $(this).find(".btn-QA-img").attr("src", imgUrl);
    $(this).find(".show-defalt h3").toggleClass("QA-select");
    $(this).children(".QA-info").slideToggle(1000);
  });

  // goTop
  // 顯示
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50) {
      $(".go-top").fadeIn(300);
    } else {
      $(".go-top").fadeOut(300);
    }
  });
  // 向上捲動
  $(".go-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
});
