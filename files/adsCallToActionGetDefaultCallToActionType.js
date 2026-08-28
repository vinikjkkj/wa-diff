__d(
  "adsCallToActionGetDefaultCallToActionType",
  ["AdsAPIObjectives", "AdsODAXUtils", "AdsPromotedObjectTypes", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = o("AdsODAXUtils").maybeTranslateObjectiveByPromotedObjectType(
          e,
          t,
        ),
        i;
      switch (a) {
        case r("AdsAPIObjectives").APP_INSTALLS:
          t === r("AdsPromotedObjectTypes").CANVAS_APP
            ? (i = "PLAY_GAME")
            : t === r("AdsPromotedObjectTypes").MOBILE_APP &&
              (i = "INSTALL_MOBILE_APP");
          break;
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").LINK_CLICKS: {
          var l = s(t);
          l != null
            ? (i = l)
            : (a === r("AdsAPIObjectives").CONVERSIONS ||
                  a === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) &&
                t === r("AdsPromotedObjectTypes").WEB_AND_SHOP
              ? (i = "SHOP_NOW")
              : (i = r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE");
          break;
        }
        case r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
          i = "PLAY_GAME";
          break;
        case r("AdsAPIObjectives").LEAD_GENERATION:
          t === r("AdsPromotedObjectTypes").PHONE_CALL
            ? (i = "CALL_NOW")
            : (i = "SIGN_UP");
          break;
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
          i = "USE_MOBILE_APP";
          break;
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
          i = "INSTALL_MOBILE_APP";
          break;
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").REACH:
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
        case r("AdsAPIObjectives").VIDEO_VIEWS:
          i = r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
          break;
        case r("AdsAPIObjectives").STORE_VISITS:
          i = n === !0 ? "GET_DIRECTIONS" : "MESSAGE_PAGE";
          break;
        case r("AdsAPIObjectives").OFFER_CLAIMS:
          i = "GET_OFFER_VIEW";
          break;
        case r("AdsAPIObjectives").MESSAGES:
          t === r("AdsPromotedObjectTypes").WHATSAPP
            ? (i = "WHATSAPP_MESSAGE")
            : t === r("AdsPromotedObjectTypes").INSTAGRAM
              ? (i = "INSTAGRAM_MESSAGE")
              : (i = "MESSAGE_PAGE");
          break;
        case r("AdsAPIObjectives").EVENT_RESPONSES:
          i = "EVENT_RSVP";
          break;
        case r("AdsAPIObjectives").PAGE_LIKES:
          i = "LIKE_PAGE";
          break;
      }
      return i;
    }
    function s(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").CANVAS_APP:
          return "USE_APP";
        case r("AdsPromotedObjectTypes").MOBILE_APP:
          return "USE_MOBILE_APP";
        case r("AdsPromotedObjectTypes").MESSENGER:
          return "MESSAGE_PAGE";
        case r("AdsPromotedObjectTypes").WHATSAPP:
          return "WHATSAPP_MESSAGE";
        case r("AdsPromotedObjectTypes").DONATION:
          return "DONATE";
        case r("AdsPromotedObjectTypes").PHONE_CALL:
          return "CALL_NOW";
      }
      return null;
    }
    l.default = e;
  },
  98,
);
