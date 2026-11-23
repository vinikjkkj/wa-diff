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
        case r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
          i = u(a, t);
          break;
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").LINK_CLICKS:
          i = c(a, t);
          break;
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").MESSAGES:
          i = s(a, t);
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
        case r("AdsAPIObjectives").EVENT_RESPONSES:
          i = "EVENT_RSVP";
          break;
        case r("AdsAPIObjectives").PAGE_LIKES:
          i = "LIKE_PAGE";
          break;
      }
      return i;
    }
    function s(e, t) {
      return e === r("AdsAPIObjectives").LEAD_GENERATION
        ? t === r("AdsPromotedObjectTypes").PHONE_CALL
          ? "CALL_NOW"
          : "SIGN_UP"
        : t === r("AdsPromotedObjectTypes").WHATSAPP
          ? "WHATSAPP_MESSAGE"
          : t === r("AdsPromotedObjectTypes").INSTAGRAM
            ? "INSTAGRAM_MESSAGE"
            : "MESSAGE_PAGE";
    }
    function u(e, t) {
      switch (e) {
        case r("AdsAPIObjectives").APP_INSTALLS:
          if (t === r("AdsPromotedObjectTypes").CANVAS_APP) return "PLAY_GAME";
          if (t === r("AdsPromotedObjectTypes").MOBILE_APP)
            return "INSTALL_MOBILE_APP";
          break;
        case r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
          return "PLAY_GAME";
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
          return "USE_MOBILE_APP";
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
          return "INSTALL_MOBILE_APP";
      }
    }
    function c(e, t) {
      var n = d(t);
      return n != null
        ? n
        : (e === r("AdsAPIObjectives").CONVERSIONS ||
              e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) &&
            t === r("AdsPromotedObjectTypes").WEB_AND_SHOP
          ? "SHOP_NOW"
          : r("gkx")("14839")
            ? "SEE_DETAILS"
            : "LEARN_MORE";
    }
    function d(e) {
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
