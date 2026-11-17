__d(
  "WAWebVoipBackgroundBlurLevel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["light", "medium", "strong"],
      l = "medium";
    function s(e) {
      switch (e) {
        case "light":
        case "medium":
        case "strong":
          return e;
        default:
          return null;
      }
    }
    ((i.BACKGROUND_BLUR_LEVELS = e),
      (i.DEFAULT_BACKGROUND_BLUR_LEVEL = l),
      (i.parseBackgroundBlurLevel = s));
  },
  66,
);
