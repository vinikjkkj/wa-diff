__d(
  "WAWebBizBroadcastProNuxTos",
  [
    "$InternalEnum",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebEventEmitter",
    "WAWebUserPrefsStore",
    "WAWebWamEnumBbTierType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "ELIGIBLE_TO_ONBOARD",
        "NOT_ELIGIBLE",
        "ONBOARDED",
      ]),
      u = "biz_broadcast_pro_onboarding_dismissed",
      c = null,
      d = !1,
      m = new (r("WAWebEventEmitter"))();
    function p() {
      d = !0;
    }
    function _() {
      !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() ||
        d ||
        ((d = !0),
        r("JSResourceForInteraction")(
          "WAWebBizBroadcastProNuxOnboardingStatusFetch",
        )
          .__setRef("WAWebBizBroadcastProNuxTos")
          .load()
          .then(function (e) {
            return e.syncBizBroadcastProNuxOnboardingStatusFromServer();
          })
          .catch(function (t) {
            ((d = !1),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[biz-broadcast-pro-nux-tos] onboarding status sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("bb-pro-nux-status-sync-failed"));
          }));
    }
    function f(e) {
      ((c = e), m.trigger("change"));
    }
    function g() {
      ((c = null), (d = !1), m.trigger("change"));
    }
    function h() {
      return c;
    }
    function y() {
      return h() != null;
    }
    function C() {
      return h() === s.ELIGIBLE_TO_ONBOARD;
    }
    function b() {
      return h() === s.ONBOARDED
        ? o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO
        : o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE;
    }
    function v() {
      return r("WAWebUserPrefsStore").getUser(u) === !0;
    }
    function S() {
      (r("WAWebUserPrefsStore").setUser(u, !0), m.trigger("change"));
    }
    ((l.BBProOnboardingStatus = s),
      (l.bizBroadcastProNuxStateEmitter = m),
      (l.suppressBizBroadcastProNuxServerSyncForTest = p),
      (l.ensureBizBroadcastProNuxSyncsStarted = _),
      (l.setBizBroadcastProNuxOnboardingStatus = f),
      (l.resetBizBroadcastProNuxOnboardingStatus = g),
      (l.isBizBroadcastProNuxOnboardingStatusResolved = y),
      (l.isBizBroadcastProEligibleToOnboard = C),
      (l.getBizBroadcastProductTier = b),
      (l.isBizBroadcastProNuxOnboardingDismissed = v),
      (l.dismissBizBroadcastProNuxOnboarding = S));
  },
  98,
);
