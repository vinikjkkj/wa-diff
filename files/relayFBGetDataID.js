__d(
  "relayFBGetDataID",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime").VIEWER_ID,
      l = n("relay-runtime").VIEWER_TYPE;
    function s(t, n) {
      if (n === l) return e;
      if (
        n === "MessagingParticipant" ||
        n === "BlockedUser" ||
        n === "SRTUser" ||
        n === "MessengerViewerFBGroupChat" ||
        n === "MessengerGlobalFBGroupChat" ||
        n === "XOCFBHorizonEventView" ||
        n === "XOCHorizonWorldsFBSocialVRCustomWorldView" ||
        n === "XFBHorizonWorldDestination" ||
        n === "XOCFBSocialVRCustomWorldAccountLinkView" ||
        n === "XOCHorizonWorldsFBTogetherAppUserView" ||
        n === "XFBServiceLabExperimentV2" ||
        n === "XFBServiceLabTrialV2" ||
        n === "ShortFormVideoSoundtrackInfo" ||
        n === "XFBFBShortsLocationAttribution" ||
        n === "XFBVideoDeliveryResponse" ||
        n === "GemstoneViewerWrapper" ||
        n === "XFBIBAdObjectSpec" ||
        n === "DiscoverUnitFeedItem" ||
        n === "MeasurementSevReview" ||
        n === "MeasurementSevReviewEvaluation" ||
        n === "XFBWearablesOrchestratorPod" ||
        n === "XFBWearablesOrchestratorDeliverable" ||
        n === "ArtemisTaskAnalysisFeedback"
      )
        return t.id == null ? null : n + ":" + t.id;
      if (n === "XFBABTestLaunchProposalReviewChecklistGuidelineResult") {
        var r = t.entry_key,
          o = r == null ? t.id : r;
        return o == null ? null : n + ":" + String(o);
      }
      return t.id;
    }
    a.exports = s;
  },
  null,
);
