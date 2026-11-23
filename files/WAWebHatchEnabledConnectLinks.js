__d(
  "WAWebHatchEnabledConnectLinks",
  ["WAWebHatchConnectLinks", "WAWebHatchFrontendGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebHatchConnectLinks").decodeHatchCustomConnectLink(e);
      return t != null &&
        o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled()
        ? t
        : null;
    }
    l.decodeEnabledHatchCustomConnectLink = e;
  },
  98,
);
