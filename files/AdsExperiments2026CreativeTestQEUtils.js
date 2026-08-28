__d(
  "AdsExperiments2026CreativeTestQEUtils",
  ["IntlCurrentLocale", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("justknobx")._("5400");
    }
    function s(e) {
      var t,
        n,
        o = e.shouldLog,
        a = o
          ? (t = r("qex")._("2711")) != null
            ? t
            : !1
          : (n = r("qex")._("2725")) != null
            ? n
            : !1;
      return a;
    }
    function u() {
      return s({ shouldLog: !0 });
    }
    function c() {
      return s({ shouldLog: !1 });
    }
    function d() {
      var e;
      return (e = r("qex")._("3657")) != null ? e : !1;
    }
    function m() {
      var e;
      return ((e = r("qex")._("4854")) != null ? e : !1) === !0;
    }
    function p() {
      return r("gkx")("15750");
    }
    function _() {
      return r("gkx")("15757");
    }
    function f() {
      return r("IntlCurrentLocale").code === "en_US" && r("gkx")("24132");
    }
    ((l.getIsConfirmationModalEnabledForCreativeTesting = e),
      (l.getIsDeliveryPushedEnabled = u),
      (l.getIsDeliveryPushedEnabledWithoutLogging = c),
      (l.getIsDeliveryPushDeferMCTFetchEnabled = d),
      (l.getIsCreativeTest7CellEnabled = m),
      (l.getIsPortfolioOptimizerEnabled = p),
      (l.getIsPortfolioOptimizerEnabledWithoutLogging = _),
      (l.getIsAIInsightEnabled = f));
  },
  98,
);
