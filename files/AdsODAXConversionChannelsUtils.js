__d(
  "AdsODAXConversionChannelsUtils",
  [
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsGroupUtils",
    "AdsPromotedObjectTypes",
    "adsPostInteractionUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
      );
    }
    function u(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS
      );
    }
    function c(e) {
      return (
        e !== r("AdsPromotedObjectTypes").EVENT &&
        e !== r("AdsPromotedObjectTypes").POST &&
        (o("AdsGroupUtils").isGroupPromotionEligibleForH1(
          r("AdsAccountStore").getSelectedAccount().getValue(),
        )
          ? e !== r("AdsPromotedObjectTypes").GROUP
          : !0) &&
        e !== r("AdsPromotedObjectTypes").REMINDER
      );
    }
    function d(e) {
      return (
        e !== r("AdsPromotedObjectTypes").INSTAGRAM &&
        e !== r("AdsPromotedObjectTypes").WHATSAPP &&
        e !== r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT
      );
    }
    function m(e) {
      return e === r("AdsPromotedObjectTypes").INSTAGRAM;
    }
    function p(e) {
      return e === r("AdsPromotedObjectTypes").WHATSAPP;
    }
    var _ = [
        (e = r("AdsPromotedObjectTypes")).POST,
        e.VIDEO,
        e.REMINDER,
        e.EVENT,
        e.GROUP,
      ],
      f = function (t, n) {
        return (
          o(
            "adsPostInteractionUtils",
          ).getIsEnabledForPostInteractionContent() &&
          _.some(function (e) {
            return e === t;
          }) &&
          n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
        );
      };
    ((l.supportsPixelPromotedObjectType = s),
      (l.supportsMobileAppPromotedObjectType = u),
      (l.supportsVideoPromotedObjectType = c),
      (l.supportsMessengerPromotedObjectType = d),
      (l.supportsInstagramPromotedObjectType = m),
      (l.supportsWhatsAppPromotedObjectType = p),
      (l.ON_YOUR_AD_PROMOTED_OBJECT_TYPES = _),
      (l.shouldReplaceByInteractionsContent = f));
  },
  98,
);
