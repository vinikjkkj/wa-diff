__d(
  "WAWebBizBroadcastProOnboardingStatus",
  [
    "WAWebBizBroadcastEligibilityCache",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebEventEmitter",
    "WAWebWamEnumBbTierType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = !1,
      u = !1,
      c = !1,
      d = new (r("WAWebEventEmitter"))();
    function m(t) {
      ((e = t), (s = !0), (u = !0), d.trigger("change"));
    }
    function p(t) {
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
        ((s = !0), r !== e && ((e = r), d.trigger("change")));
      }
    }
    function _() {
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
    function f() {
      return _() != null;
    }
    function g() {
      return (
        _() ===
        o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
          .ELIGIBLE_TO_ONBOARD
      );
    }
    function h() {
      return (
        _() ===
        o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
          .ONBOARDED
      );
    }
    function y() {
      return h()
        ? o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO
        : o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE;
    }
    function C() {
      return c;
    }
    function b() {
      ((c = !0), d.trigger("change"));
    }
    ((l.BBProOnboardingStatus = o(
      "WAWebBizBroadcastProOnboardingStatusType",
    ).BBProOnboardingStatus),
      (l.bizBroadcastProNuxStateEmitter = d),
      (l.debugSetBizBroadcastProOnboardingStatus = m),
      (l.updateBizBroadcastProEligibility = p),
      (l.getBizBroadcastProNuxOnboardingStatus = _),
      (l.isBizBroadcastProNuxOnboardingStatusResolved = f),
      (l.isBizBroadcastProEligibleToOnboard = g),
      (l.isBizBroadcastProOnboarded = h),
      (l.getBizBroadcastProductTier = y),
      (l.isBizBroadcastProNuxOnboardingDismissed = C),
      (l.dismissBizBroadcastProNuxOnboarding = b));
  },
  98,
);
