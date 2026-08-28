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
    function s(e) {
      var t = babelHelpers.extends({}, e);
      return (
        (t.isWAChecked = !1),
        t.isIGDChecked === !1 &&
          t.isMSGRChecked === !1 &&
          (t.isMSGRChecked = !0),
        t
      );
    }
    function u(e) {
      var t = babelHelpers.extends({}, e);
      return (
        (t.isIGDChecked = !1),
        t.isWAChecked === !1 &&
          t.isMSGRChecked === !1 &&
          (t.isMSGRChecked = !0),
        t
      );
    }
    function c(e, t) {
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
      (l.getWhatsAppExcludedDestinationState = s),
      (l.getInstagramDirectExcludedDestinationState = u),
      (l.maybeGetDestinationTypeForCTWAAwareness = c));
  },
  98,
);
