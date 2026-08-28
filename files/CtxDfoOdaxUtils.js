__d(
  "CtxDfoOdaxUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsUEditorMessagingDestinationUtils",
    "CtxDfoEngagementRemovalNoticeUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      if (
        (a === void 0 && (a = !1),
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          o("AdsUEditorMessagingDestinationUtils").isCTM(t))
      ) {
        o("CtxDfoEngagementRemovalNoticeUtils").shouldPassPhase2AATest(a, n);
        var i = r("gkx")("13847");
        return (
          i && o("CtxDfoEngagementRemovalNoticeUtils").shouldPassPhase1QE(a, n)
        );
      }
      return !1;
    }
    function s(e, t, n, a) {
      if (
        (a === void 0 && (a = !1),
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          t === r("AdCampaignDestination").MESSENGER)
      ) {
        var i = r("gkx")("6789");
        return i
          ? o("CtxDfoEngagementRemovalNoticeUtils").shouldPassPhase1QE(a, n)
          : !1;
      }
      return !1;
    }
    ((l.getIsCtmDfoOdaxPhase2Enabled = e),
      (l.getIsCtmDfoDefaultingRemovalEnabled = s));
  },
  98,
);
