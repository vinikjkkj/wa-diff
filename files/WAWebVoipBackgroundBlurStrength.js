__d(
  "WAWebVoipBackgroundBlurStrength",
  ["WAWebVoipBackgroundBlurLevel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100;
    function s(e) {
      return e === "light"
        ? 30
        : e === "medium"
          ? 50
          : e === "strong"
            ? 75
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(e) {
      return o("WAWebVoipBackgroundBlurLevel").BACKGROUND_BLUR_LEVELS.reduce(
        function (t, n) {
          return Math.abs(s(n) - e) < Math.abs(s(t) - e) ? n : t;
        },
      );
    }
    function c(t) {
      if (t <= 0) return "off";
      var n = u(t);
      return e - t < t - s(n) ? "strongest" : n;
    }
    function d(t) {
      return typeof t == "number" && t >= 0 && t <= e ? t : null;
    }
    var m = s(o("WAWebVoipBackgroundBlurLevel").DEFAULT_BACKGROUND_BLUR_LEVEL);
    ((l.MAX_BLUR_STRENGTH = e),
      (l.getBlurLevelStrength = s),
      (l.getNearestBlurLevel = u),
      (l.getBlurStrengthStep = c),
      (l.parseBlurStrength = d),
      (l.DEFAULT_BLUR_STRENGTH = m));
  },
  98,
);
