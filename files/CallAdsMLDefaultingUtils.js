__d(
  "CallAdsMLDefaultingUtils",
  [
    "AdsDefaultPageDataProvider",
    "AdsInterfacesLogger",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.75,
      s = 0.85,
      u = 0.75,
      c = 0.85,
      d = 0.9,
      m = 0.75,
      p = 0.85,
      _ = 0.9,
      f = 0.75,
      g = 0.85,
      h = 0.9,
      y = {
        conversion_location: r("AdsPromotedObjectTypes").PHONE_CALL,
        source: "call_ads_ml_defaulting",
      };
    function C(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5482") === !0 : r("qex")._("5483") === !0
      );
    }
    function b() {
      var t;
      return (t = r("qex")._("5484")) != null ? t : e;
    }
    function v(e) {
      var t = $(e);
      return t == null ? void 0 : t.call_ads_traffic_default_ml_score;
    }
    function S(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5485") === !0 : r("qex")._("5486") === !0
      );
    }
    function R() {
      var e;
      return (e = r("qex")._("5487")) != null ? e : u;
    }
    function L(e) {
      var t = $(e);
      return t == null ? void 0 : t.call_ads_sales_default_ml_score;
    }
    function E(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5488") === !0 : r("qex")._("5489") === !0
      );
    }
    function k() {
      var e;
      return (e = r("qex")._("5490")) != null ? e : m;
    }
    function I(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5491") === !0 : r("qex")._("5492") === !0
      );
    }
    function T() {
      var e;
      return (e = r("qex")._("5493")) != null ? e : f;
    }
    function D(e) {
      var t = $(e);
      return t == null ? void 0 : t.call_ads_engagement_default_ml_score;
    }
    function x(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "call_ads_l2_defaulting_decision",
        data:
          ((n = {}),
          (n.objective = e),
          (n.message = JSON.stringify({
            control_default: t.controlDefault,
            final_default: t.finalDefault,
            ml_score: t.mlScore,
            test_default: t.testDefault,
          })),
          n),
      });
    }
    function $(e) {
      var t,
        n,
        o =
          (t = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
            ? void 0
            : t.pageID,
        a =
          o != null
            ? (n = r("AdsPageStore").getLoadObject(o)) == null
              ? void 0
              : n.getValue()
            : null;
      return a;
    }
    ((l.TRAFFIC_THRESHOLD_A = e),
      (l.TRAFFIC_THRESHOLD_B = s),
      (l.SALES_THRESHOLD_A = u),
      (l.SALES_THRESHOLD_B = c),
      (l.SALES_THRESHOLD_C = d),
      (l.LEADS_THRESHOLD_A = m),
      (l.LEADS_THRESHOLD_B = p),
      (l.LEADS_THRESHOLD_C = _),
      (l.ENGAGEMENT_THRESHOLD_A = f),
      (l.ENGAGEMENT_THRESHOLD_B = g),
      (l.ENGAGEMENT_THRESHOLD_C = h),
      (l.CALL_ADS_ML_DEFAULT_DATA = y),
      (l.isCallAdsMLDefaultingEnabledTraffic = C),
      (l.getCallAdsMLGroupThresholdTraffic = b),
      (l.getCallAdsTrafficDefaultMLScore = v),
      (l.isCallAdsMLDefaultingEnabledSales = S),
      (l.getCallAdsMLGroupThresholdSales = R),
      (l.getCallAdsSalesDefaultMLScore = L),
      (l.isCallAdsMLDefaultingEnabledLeads = E),
      (l.getCallAdsMLGroupThresholdLeads = k),
      (l.isCallAdsMLDefaultingEnabledEngagement = I),
      (l.getCallAdsMLGroupThresholdEngagement = T),
      (l.getCallAdsEngagementDefaultMLScore = D),
      (l.logCallAdsMLDefaultingDecision = x));
  },
  98,
);
