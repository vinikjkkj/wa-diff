__d(
  "relayFBGetDataID",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime").VIEWER_ID,
      l = n("relay-runtime").VIEWER_TYPE;
    function s(t, n) {
      return n === l
        ? e
        : n === "MessagingParticipant" ||
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
            n === "XFBIBAdObjectSpec"
          ? t.id == null
            ? null
            : n + ":" + t.id
          : t.id;
    }
    a.exports = s;
  },
  null,
);
