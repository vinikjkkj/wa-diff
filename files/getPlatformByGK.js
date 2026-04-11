__d(
  "getPlatformByGK",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("6470") ? "android" : r("gkx")("6488") ? "ios" : "wa_web",
      s = r("gkx")("6470")
        ? "android"
        : r("gkx")("6488")
          ? "iOS"
          : navigator.userAgent.includes("Mac OS X")
            ? "macWeb"
            : "windowsWeb";
    function u() {
      return e;
    }
    ((l.getPlatformByGK = u), (l.FLOWS_PLATFORM = e), (l.WDS_PLATFORM = s));
  },
  98,
);
