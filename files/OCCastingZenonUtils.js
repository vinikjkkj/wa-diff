__d(
  "OCCastingZenonUtils",
  ["UserAgent", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return t === "Connected" || t === "Connecting";
    };
    function s() {
      return (
        r("gkx")("1930") ||
        (r("gkx")("25763") &&
          (r("UserAgent").isBrowser("Chrome for iOS") ||
            r("UserAgent").isBrowser("Mobile Safari")))
      );
    }
    ((l.hasCallStarted = e), (l.isBrowserSupportedForMobileWebCasting = s));
  },
  98,
);
