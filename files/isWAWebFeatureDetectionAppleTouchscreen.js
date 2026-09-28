__d(
  "isWAWebFeatureDetectionAppleTouchscreen",
  ["WAWebBrowserInfo", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("WAWebBrowserInfo")().os.toLowerCase();
      return e === "mac os"
        ? !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2
        : e === "ios"
          ? o("WAWebUA").UA.parser.getDevice().type === "tablet"
          : !1;
    }
    l.default = e;
  },
  98,
);
