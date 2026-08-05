__d(
  "WAWebBizBroadcastProOnboardingStatus",
  [
    "$InternalEnum",
    "WAWebBizBroadcastEligibilityCache",
    "WAWebEventEmitter",
    "WAWebWamEnumBbTierType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "ELIGIBLE_TO_ONBOARD",
        "NOT_ELIGIBLE",
        "ONBOARDED",
      ]),
      s = null,
      u = !1,
      c = !1,
      d = !1,
      m = new (r("WAWebEventEmitter"))();
    function p(e) {
      ((s = e), (u = !0), (c = !0), m.trigger("change"));
    }
    function _(t) {
      var n;
      if (!c) {
        var r = (n = t != null ? e.cast(t) : null) != null ? n : e.NOT_ELIGIBLE;
        ((u = !0), r !== s && ((s = r), m.trigger("change")));
      }
    }
    function f() {
      if (s == null && !u) {
        var t;
        u = !0;
        var n =
          (t = o("WAWebBizBroadcastEligibilityCache").readCache()) == null ||
          (t = t.result.bbPro) == null
            ? void 0
            : t.status;
        if (n != null) {
          var r;
          s = (r = e.cast(n)) != null ? r : e.NOT_ELIGIBLE;
        }
      }
      return s;
    }
    function g() {
      return f() != null;
    }
    function h() {
      return f() === e.ELIGIBLE_TO_ONBOARD;
    }
    function y() {
      return f() === e.ONBOARDED;
    }
    function C() {
      return y()
        ? o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO
        : o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE;
    }
    function b() {
      return d;
    }
    function v() {
      ((d = !0), m.trigger("change"));
    }
    ((l.BBProOnboardingStatus = e),
      (l.bizBroadcastProNuxStateEmitter = m),
      (l.debugSetBizBroadcastProOnboardingStatus = p),
      (l.updateBizBroadcastProEligibility = _),
      (l.isBizBroadcastProNuxOnboardingStatusResolved = g),
      (l.isBizBroadcastProEligibleToOnboard = h),
      (l.isBizBroadcastProOnboarded = y),
      (l.getBizBroadcastProductTier = C),
      (l.isBizBroadcastProNuxOnboardingDismissed = b),
      (l.dismissBizBroadcastProNuxOnboarding = v));
  },
  98,
);
