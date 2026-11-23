__d(
  "animateScreenFromCurrentXPosition",
  ["getStyleValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e !== null) {
        var n = window.getComputedStyle(e),
          r = window.DOMMatrix ? new window.DOMMatrix(n.transform).e : 0,
          a =
            t === "enter" && r === 0
              ? o("getStyleValue").getStyleValue(
                  "--waf-wds-animation-screen-pop-init-x",
                  e,
                ) || 0
              : r + "px";
        e.style.transform = "translateX(" + a + ")";
      }
    }
    l.animateScreenFromCurrentXPosition = e;
  },
  98,
);
