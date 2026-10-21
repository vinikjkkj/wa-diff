__d(
  "WAWebVoipCallsTabNotificationsOffBannerState",
  ["WAWebCoreActionsODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t, n) {
      var r = e;
      ((e = t),
        t && !r
          ? o("WAWebCoreActionsODS").logCallsTabNotificationsOffBanner("shown")
          : !t &&
            r &&
            !n &&
            o("WAWebCoreActionsODS").logCallsTabNotificationsOffBanner(
              "auto_dismiss",
            ));
    }
    l.logCallsTabNotificationsOffBannerEligibility = s;
  },
  98,
);
