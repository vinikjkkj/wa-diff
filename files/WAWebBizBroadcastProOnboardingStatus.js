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
      u = !1;
    function c(t) {
      ((e = t),
        (s = !0),
        (u = !0),
        o(
          "WAWebBizBroadcastProEligibilityEvent",
        ).bizBroadcastProEligibilityEmitter.trigger("change"));
    }
    function d(t) {
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
    function m() {
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
    function p() {
      return m() != null;
    }
    function _() {
      return m() ===
        o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
          .ONBOARDED
        ? o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO
        : o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE;
    }
    ((l.BBProOnboardingStatus = o(
      "WAWebBizBroadcastProOnboardingStatusType",
    ).BBProOnboardingStatus),
      (l.bizBroadcastProNuxStateEmitter = o(
        "WAWebBizBroadcastProEligibilityEvent",
      ).bizBroadcastProEligibilityEmitter),
      (l.debugSetBizBroadcastProOnboardingStatus = c),
      (l.updateBizBroadcastProEligibility = d),
      (l.getBizBroadcastProNuxOnboardingStatus = m),
      (l.isBizBroadcastProNuxOnboardingStatusResolved = p),
      (l.getBizBroadcastProductTier = _));
  },
  98,
);
