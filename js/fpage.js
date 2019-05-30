// Fullpaage scrolling

$(document).ready(function() {
  if (window.matchMedia("(min-width: 1202px)").matches) {
    // initialization
    $("#fullpage").fullpage({
      css3: true,
      navigation: true,
      navigationPosition: "right",
      keyboardScrolling: true,
      controlArrows: true,
      afterLoad: function(anchorLink, index) {
        // Heading change
        var loadedSection = $(this);
        if (index == 1) {
          $("#heading-slice").attr(
            "src",
            "../assets/slicecircle/slice-howitworks.png"
          );
        }
        if (index == 2) {
          //change heading
          $("#heading-slice").attr(
            "src",
            "../assets/slicecircle/slice-gettingcertificate.png"
          );
        }
      },
      //section2 animation
      onLeave: function(index, nextIndex, direction) {
        if (index == 1) {
          // animation
          $("#section1").addClass("animated fadeIn");
          $(".long-card").addClass("animated fadeInUp");
          $(".single-card--1").addClass("animated fadeInUp");
          $(".double-card").addClass("animated fadeInUp");
          $(".single-card--2").addClass("animated fadeInUp");
          $(".section__heading").addClass("animated fadeIn");
        }
      }
    });
  }
});
