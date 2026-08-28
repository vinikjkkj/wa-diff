__d(
  "ZenonSimulcastUtils",
  ["UserAgent", "ZenonSimulcastManager", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (e = r("gkx")("25212")) != null ? e : !1;
    }
    function s() {
      return u() && e();
    }
    function u() {
      return r("UserAgent").isBrowser("Chrome >= 88");
    }
    function c() {
      return r("gkx")("25212") ? o("ZenonSimulcastManager").NUM_LAYERS : 1;
    }
    function d() {
      return o("ZenonSimulcastManager").MAX_NUM_ACTIVE_LAYERS;
    }
    ((l.shouldUseChromeSimulcast = e),
      (l.shouldUseSimulcast = s),
      (l.isCurrentBrowserCompatibleWithSimulcast = u),
      (l.getNumLayers = c),
      (l.getMaxNumLayers = d));
  },
  98,
);
