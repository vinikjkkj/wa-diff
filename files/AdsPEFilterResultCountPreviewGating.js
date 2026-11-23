__d(
  "AdsPEFilterResultCountPreviewGating",
  ["gkx", "qex", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      return e ? r("gkx")("13837") : !1;
    }
    function c(e) {
      return e === "campaign" || e === "ad_set" || e === "ad";
    }
    function d(e, t) {
      if (!e || !c(t)) return null;
      var n = r("qex")._("4962");
      return n === 1 ? "exact_count" : n === 2 ? "existence" : null;
    }
    function m(e, t) {
      !e || !c(t) || r("qex")._("3458");
    }
    function p(e) {
      var t = e.currentLevel,
        n = e.isGateEnabled,
        r = e.isVisible;
      s(
        function () {
          r && m(n, t);
        },
        [t, n, r],
      );
    }
    ((l.isAdsPEFilterResultCountPreviewGateEnabled = u),
      (l.getAdsPEFilterResultCountPreviewStrategyWithoutExposure = d),
      (l.logAdsPEFilterResultCountPreviewExposure = m),
      (l.useAdsPEFilterResultCountPreviewExposure = p));
  },
  98,
);
