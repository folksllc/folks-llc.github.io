(function ($) {
  "use strict";

  /*
   * SVG Aspect Ratio
   */
  function aspectRatioSVG() {
    if ($(window).width() < 2000) {
      $("svg[preserveAspectRatio]").each(function () {
        $(this).attr("preserveAspectRatio", "xMinYMin");
      });
    } else {
      $("svg[preserveAspectRatio]").each(function () {
        $(this).attr("preserveAspectRatio", "none");
      });
    }
  }

  aspectRatioSVG();
  $(window).on("resize", function () {
    aspectRatioSVG();
  });
}).apply(this, [jQuery]);
