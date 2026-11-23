__d(
  "getShouldEnableAdsManagerMultiPostSelection",
  [
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectOmnichannelInStoreUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUnifiedProfileVisitUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      if (
        (n === void 0 && (n = !0),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        !n)
      )
        return !1;
      var l = a ? r("gkx")("17231") : r("gkx")("17904");
      return l || r("gkx")("5392")
        ? !1
        : o(
              "AdsUEditorMessagingDestinationUtils",
            ).isClickToMessageAdDestination(e) ||
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsUnifiedProfileVisitsDestination(e)
          ? !0
          : o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e)
            ? o("AdsPromotedObjectAppUtils").isAppType(t) ||
              o(
                "AdsPromotedObjectOmnichannelInStoreUtils",
              ).isOmnichannelPromotedObject(t) ||
              t === r("AdsPromotedObjectTypes").WEB_AND_APP ||
              t === r("AdsPromotedObjectTypes").WEB_AND_SHOP
              ? i
              : a
                ? r("qex")._("1668") === !0
                : r("qex")._("1672") === !0
            : !1;
    }
    l.default = e;
  },
  98,
);
