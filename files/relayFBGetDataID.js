__d(
  "relayFBGetDataID",
  ["relay-runtime", "relayFBGetDataIDGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t === o("relay-runtime").VIEWER_TYPE)
        return o("relay-runtime").VIEWER_ID;
      if (
        t === "MessagingParticipant" ||
        t === "BlockedUser" ||
        t === "SRTUser" ||
        t === "MessengerViewerFBGroupChat" ||
        t === "MessengerGlobalFBGroupChat" ||
        t === "XOCFBHorizonEventView" ||
        t === "XOCHorizonWorldsFBSocialVRCustomWorldView" ||
        t === "XFBHorizonWorldDestination" ||
        t === "XOCFBSocialVRCustomWorldAccountLinkView" ||
        t === "XOCHorizonWorldsFBTogetherAppUserView" ||
        t === "XFBServiceLabExperimentV2" ||
        t === "XFBServiceLabTrialV2" ||
        t === "ShortFormVideoSoundtrackInfo" ||
        t === "XFBFBShortsLocationAttribution" ||
        t === "XFBVideoDeliveryResponse" ||
        t === "GemstoneViewerWrapper" ||
        t === "XFBIBAdObjectSpec" ||
        t === "DiscoverUnitFeedItem" ||
        t === "MeasurementSevReview" ||
        t === "MeasurementSevReviewEvaluation" ||
        t === "XFBWearablesOrchestratorPod" ||
        t === "XFBWearablesOrchestratorDeliverable" ||
        t === "ArtemisTaskAnalysisFeedback" ||
        (t === "XFBPAYIGUserExportForCAM" &&
          o("relayFBGetDataIDGating").shouldNamespaceIGUserExportForCAM())
      )
        return e.id == null ? null : t + ":" + String(e.id);
      if (t === "XFBABTestLaunchProposalReviewChecklistGuidelineResult") {
        var n = e.entry_key,
          r = n == null ? e.id : n;
        return r == null ? null : t + ":" + String(r);
      }
      return e.id;
    }
    l.default = e;
  },
  98,
);
