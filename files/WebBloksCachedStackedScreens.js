__d(
  "WebBloksCachedStackedScreens",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.stackedScreens == null || e.stackedScreensConsumed === !0
        ? {}
        : {
            claimStackedScreens: function () {
              e.stackedScreensConsumed = !0;
            },
            stackedScreens: e.stackedScreens,
            stackedScreensDelayMs: e.stackedScreensDelayMs,
          };
    }
    i.readCachedStackedScreens = e;
  },
  66,
);
