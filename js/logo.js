var lo = {
  "book-slots": "../assets/guru/guruArtboard 1svg.svg",
  "course-feedback": "../assets/feedback/feedbackArtboard 1svg.svg",
  "event-feedback": "../assets/calender/calArtboard 1svg.svg",
  "certificate": "../assets/certificate/certificateArtboard 1svg.svg",
};

function changeLogo() {
  if ($(".form_logo").css("display") === "none") {
    try {
      if ($(".c-logo").find("i").length) {
        $(".c-logo")
          .find("i")[0]
          .remove();
        $(".c-logo").append('<img src="' + lo[$('.c-logo').data('logo')] + '" alt="Logo" class="c-logo__svg">');
      }
    } catch (error) { }
  } else if ($(".form_logo").css("display") === "flex") {
    try {
      if ($(".c-logo").find("img").length) {
        $(".c-logo")
          .find("img")[0]
          .remove();
        $(".c-logo").append(
          '<i class="login__icon fas fa-user-circle fa-5x"></i>'
        );
      }
    } catch (error) { }
  }
}

changeLogo();
$(window).resize(function () {
  changeLogo();
});
