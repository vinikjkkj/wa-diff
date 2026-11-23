__d(
  "AdsWhatsAppDestinationUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsBrandAwarenessUtils",
    "AdsCallToActionTypesUtils",
    "AdsODAXUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i =
        t == null
          ? e == null
            ? r("AdsAPIObjectives").NONE
            : o("AdsODAXUtils").maybeTranslateObjective(e, n, a)
          : t.pivots.objective;
      return (
        o("AdsBrandAwarenessUtils").isBrandObjective(i) ||
        i === r("AdsAPIObjectives").VIDEO_VIEWS
      );
    }
    function s(e, t) {
      var n =
        e.length > 0 &&
        e.every(function (e) {
          return (
            e !== null &&
            o(
              "AdsCallToActionTypesUtils",
            ).isWhatsAppDestinationTypeForAwareness(e, t)
          );
        });
      return n ? r("AdCampaignDestination").WHATSAPP : null;
    }
    ((l.isEligibleForL1WhatsAppDestination = e),
      (l.maybeGetDestinationTypeForCTWAAwareness = s));
  },
  98,
);
