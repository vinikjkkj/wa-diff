__d(
  "WAWebVoipCallsTabPermissionsOffBannerState",
  ["WAWebCoreActionsODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t, n) {
      var r = e;
      ((e = t),
        t && !r
          ? o("WAWebCoreActionsODS").logCallsTabPermissionsOffBanner("shown")
          : !t &&
            r &&
            !n &&
            o("WAWebCoreActionsODS").logCallsTabPermissionsOffBanner(
              "auto_dismiss",
            ));
    }
    l.logCallsTabPermissionsOffBannerEligibility = s;
  },
  98,
);
