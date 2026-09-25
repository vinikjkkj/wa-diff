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
      s = !1,
      u = !1,
      c = !1;
    function d(t) {
      ((e = t),
        (s = !0),
        (u = !0),
        o(
          "WAWebBizBroadcastProEligibilityEvent",
        ).bizBroadcastProEligibilityEmitter.trigger("change"));
    }
    function m(t) {
      var n;
      if (!u) {
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
        ((s = !0),
          r !== e &&
            ((e = r),
            o(
              "WAWebBizBroadcastProEligibilityEvent",
            ).bizBroadcastProEligibilityEmitter.trigger("change")));
      }
    }
    function p() {
      if (e == null && !s) {
        var t;
        s = !0;
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
      return (
        p() ===
        o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
          .ELIGIBLE_TO_ONBOARD
      );
    }
    function g() {
      return (
        p() ===
        o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
          .ONBOARDED
      );
    }
    function h() {
      return g()
        ? o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO
        : o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE;
    }
    function y() {
      return c;
    }
    function C() {
      ((c = !0),
        o(
          "WAWebBizBroadcastProEligibilityEvent",
        ).bizBroadcastProEligibilityEmitter.trigger("change"));
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
      (l.isBizBroadcastProEligibleToOnboard = f),
      (l.isBizBroadcastProOnboarded = g),
      (l.getBizBroadcastProductTier = h),
      (l.isBizBroadcastProNuxOnboardingDismissed = y),
      (l.dismissBizBroadcastProNuxOnboarding = C));
  },
  98,
);
