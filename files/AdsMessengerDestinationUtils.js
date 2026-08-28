__d(
  "AdsMessengerDestinationUtils",
  [
    "AdsBuyingTypes",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l = !!t && o("AdsPromotedObjectAppUtils").isAppType(t),
        s =
          o("AdsWebsiteAdUtils").isWebsiteClickObjective(e) ||
          o("AdsWebsiteAdUtils").isWebsiteConversionsObjective(e),
        u = r("isTruthy")(a) && i != null && i !== "MESSENGER";
      return (
        (!l &&
          t !== r("AdsPromotedObjectTypes").PRODUCT_SET &&
          s &&
          n !== r("AdsBuyingTypes").RESERVED &&
          !u) ||
        t === r("AdsPromotedObjectTypes").MESSENGER
      );
    }
    l.isMessengerDestinationEnabled = e;
  },
  98,
);
