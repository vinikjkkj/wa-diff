__d(
  "WebToWAExistingPostUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
          e === r("AdsAPIObjectives").OUTCOME_SALES &&
          t === r("AdsPromotedObjectTypes").PIXEL,
        o = e === r("AdsAPIObjectives").OUTCOME_AWARENESS,
        a =
          e === r("AdsAPIObjectives").LINK_CLICKS &&
          t === r("AdsPromotedObjectTypes").WEBSITE,
        i =
          e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          t === r("AdsPromotedObjectTypes").PIXEL,
        l =
          e === r("AdsAPIObjectives").OUTCOME_LEADS &&
          t === r("AdsPromotedObjectTypes").PIXEL;
      return n || o || a || i || l;
    }
    function s(e, t) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        t === r("AdsPromotedObjectTypes").POST
      );
    }
    function u(e) {
      return e == null
        ? !1
        : e !== "NO_BUTTON" &&
            e !== "INSTAGRAM_MESSAGE" &&
            e !== "WHATSAPP_MESSAGE" &&
            e !== "MESSAGE_PAGE" &&
            e !== "CALL_NOW";
    }
    function c(e, t) {
      var n =
          e === r("AdsAPIObjectives").OUTCOME_SALES &&
          t === r("AdsPromotedObjectTypes").PIXEL,
        a = o("AdsAPICampaignRecordUtils").isWebAndAppPromotedObjectType(e, t),
        i =
          e === r("AdsAPIObjectives").LINK_CLICKS &&
          t === r("AdsPromotedObjectTypes").WEBSITE,
        l =
          e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          t === r("AdsPromotedObjectTypes").PIXEL,
        s =
          e === r("AdsAPIObjectives").OUTCOME_LEADS &&
          t === r("AdsPromotedObjectTypes").PIXEL,
        u = n || i || l || s || a;
      return u;
    }
    function d(e, t, n) {
      return e == null ||
        t == null ||
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS
        ? !1
        : p(e, t) && u(n);
    }
    function m(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("15706") : r("gkx")("23588")
      );
    }
    function p(t, n) {
      var r = s(t, n),
        o = e(t, n);
      return o || r;
    }
    ((l.isWebToXEligibleForExistingPostsSelectedCTA = u),
      (l.shouldDisableCTXDefaultingForWTWAExistingPosts = c),
      (l.isEligibleForExistingPostHeadlineForWTWA = d),
      (l.isExistingPostHeadlineEnabledForWTWA = m),
      (l.isWebToWhatsappEligibleForExistingPostsObj = p));
  },
  98,
);
