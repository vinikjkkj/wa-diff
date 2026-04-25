__d(
  "isWAWebFeatureDetectionAppleTouchscreen",
  ["WAWebBrowserInfo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("WAWebBrowserInfo")();
      return e.os.toLowerCase() !== "mac os"
        ? !1
        : !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
    }
    l.default = e;
  },
  98,
);
