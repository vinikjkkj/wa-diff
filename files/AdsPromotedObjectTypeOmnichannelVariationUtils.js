__d(
  "AdsPromotedObjectTypeOmnichannelVariationUtils",
  ["AdsPromotedObjectTypes", "AdsPromotedObjectUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION":
          return r("AdsPromotedObjectTypes").PIXEL;
        case "PRODUCT_SET_AND_WEBSITE":
        case "PRODUCT_SET_AND_APP":
        case "PRODUCT_SET_AND_OMNICHANNEL":
        case "PRODUCT_SET_AND_IN_STORE":
        case "PRODUCT_SET_AND_PHONE_CALL":
        case "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL":
        case "PRODUCT_SET_WEBSITE_APP_AND_INSTORE":
          return r("AdsPromotedObjectTypes").PRODUCT_SET;
        default:
          return e;
      }
    }
    function s(e) {
      switch (e) {
        case "OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION":
          return r("AdsPromotedObjectTypes").PIXEL;
        case "PRODUCT_SET_AND_WEBSITE":
          return r("AdsPromotedObjectTypes").WEBSITE;
        case "PRODUCT_SET_AND_APP":
          return r("AdsPromotedObjectTypes").MOBILE_APP;
        case "PRODUCT_SET_AND_OMNICHANNEL":
          return r("AdsPromotedObjectTypes").WEB_AND_APP;
        case "PRODUCT_SET_AND_IN_STORE":
          return r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET;
        case "PRODUCT_SET_AND_PHONE_CALL":
          return r("AdsPromotedObjectTypes").PHONE_CALL;
        case "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL":
          return r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL;
        case "PRODUCT_SET_WEBSITE_APP_AND_INSTORE":
          return r("AdsPromotedObjectTypes").PRODUCT_SET;
        default:
          return e;
      }
    }
    function u(e) {
      switch (e) {
        case "OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION":
        case "PRODUCT_SET_AND_WEBSITE":
        case "PRODUCT_SET_AND_APP":
        case "PRODUCT_SET_AND_OMNICHANNEL":
        case "PRODUCT_SET_AND_IN_STORE":
        case "PRODUCT_SET_AND_PHONE_CALL":
        case "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL":
        case "PRODUCT_SET_WEBSITE_APP_AND_INSTORE":
          return e;
        default:
          return o("AdsPromotedObjectUtils").getTypeForUI(e);
      }
    }
    function c(e, t) {
      return e;
    }
    function d(e, t) {
      return e;
    }
    var m = [
        "OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION",
        "PRODUCT_SET_AND_WEBSITE",
        "PRODUCT_SET_AND_APP",
        "PRODUCT_SET_AND_OMNICHANNEL",
        "PRODUCT_SET_AND_IN_STORE",
        "PRODUCT_SET_AND_PHONE_CALL",
        "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL",
        "PRODUCT_SET_WEBSITE_APP_AND_INSTORE",
      ],
      p = new Set(m);
    function _(e) {
      return p.has(e);
    }
    function f(e) {
      for (var t of m) if (e === t) return t;
      return null;
    }
    ((l.getPromotedObjectType = e),
      (l.getPromotedObjectTypeFromAdsPromotedObjectTypeWithVariationTypeForConversionLocations =
        s),
      (l.getPromotedObjectTypeForUI = u),
      (l.addVariation = c),
      (l.addVariationForConversionLocation = d),
      (l.isVariationType = _),
      (l.getVariationType = f));
  },
  98,
);
