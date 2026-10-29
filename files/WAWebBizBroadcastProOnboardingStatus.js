__d(
  "WAWebBizBroadcastProOnboardingStatus",
  [
    "WAWebBizBroadcastEligibilityCache",
    "WAWebBizBroadcastProEligibilityEvent",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebWamEnumBbTierType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = !1,
      c = !1;
    function d(t) {
      ((e = t),
        C(t),
        (u = !0),
        (c = !0),
        o(
          "WAWebBizBroadcastProEligibilityEvent",
        ).bizBroadcastProEligibilityEmitter.trigger("change"));
    }
    function m(t) {
      var n;
      if (!c) {
        var r =
          (n =
            t != null
              ? o(
                  "WAWebBizBroadcastProOnboardingStatusType",
                ).BBProOnboardingStatus.cast(t)
              : null) != null
            ? n
            : o("WAWebBizBroadcastProOnboardingStatusType")
                .BBProOnboardingStatus.NOT_ELIGIBLE;
        ((u = !0),
          C(r),
          r !== e &&
            ((e = r),
            o(
              "WAWebBizBroadcastProEligibilityEvent",
            ).bizBroadcastProEligibilityEmitter.trigger("change")));
      }
    }
    function p() {
      if (e == null && !u) {
        var t;
        u = !0;
        var n =
          (t = o("WAWebBizBroadcastEligibilityCache").readCache()) == null ||
          (t = t.result.bbPro) == null
            ? void 0
            : t.status;
        if (n != null) {
          var r;
          e =
            (r = o(
              "WAWebBizBroadcastProOnboardingStatusType",
            ).BBProOnboardingStatus.cast(n)) != null
              ? r
              : o("WAWebBizBroadcastProOnboardingStatusType")
                  .BBProOnboardingStatus.NOT_ELIGIBLE;
        }
      }
      return e;
    }
    function _() {
      return p() != null;
    }
    function f() {
      return p() ===
        o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
          .ONBOARDED
        ? o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO
        : o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE;
    }
    function g() {
      return s;
    }
    function h(e) {
      s = e;
    }
    function y(e) {
      s = e || s === !0;
    }
    function C(e) {
      e ===
        o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
          .ONBOARDED && (s = !0);
    }
    ((l.BBProOnboardingStatus = o(
      "WAWebBizBroadcastProOnboardingStatusType",
    ).BBProOnboardingStatus),
      (l.bizBroadcastProNuxStateEmitter = o(
        "WAWebBizBroadcastProEligibilityEvent",
      ).bizBroadcastProEligibilityEmitter),
      (l.debugSetBizBroadcastProOnboardingStatus = d),
      (l.updateBizBroadcastProEligibility = m),
      (l.getBizBroadcastProNuxOnboardingStatus = p),
      (l.isBizBroadcastProNuxOnboardingStatusResolved = _),
      (l.getBizBroadcastProductTier = f),
      (l.getBizBroadcastProHasOnboardingHistory = g),
      (l.debugSetBizBroadcastProOnboardingHistory = h),
      (l.updateBizBroadcastProOnboardingHistory = y));
  },
  98,
);
