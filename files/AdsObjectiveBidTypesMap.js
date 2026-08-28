__d(
  "AdsObjectiveBidTypesMap",
  [
    "AdsAPIBidType",
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsLegacyObjectivesUtils",
    "AdsToplineProductSettings",
    "FBLogger",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {};
    ((u[(e = r("AdsAPIObjectives")).NONE] = [
      (s = r("AdsAPIBidType")).ABSOLUTE_OCPM,
      s.CPA,
      s.CPC,
      s.CPM,
      s.FIXED_CPM,
      s.MULTI_PREMIUM,
    ]),
      (u[e.OFFER_CLAIMS] = [s.CPC, s.MULTI_PREMIUM, s.ABSOLUTE_OCPM]),
      (u[e.PAGE_LIKES] = [
        s.CPC,
        s.ABSOLUTE_OCPM,
        s.FIXED_CPM,
        s.MULTI_PREMIUM,
      ]),
      (u[e.CANVAS_APP_INSTALLS] = [
        s.CPA,
        s.ABSOLUTE_OCPM,
        s.CPC,
        s.FIXED_CPM,
        s.MULTI_PREMIUM,
      ]),
      (u[e.EVENT_RESPONSES] = [s.CPC, s.CPM, s.ABSOLUTE_OCPM]),
      (u[e.CANVAS_APP_ENGAGEMENT] = [s.MULTI_PREMIUM, s.ABSOLUTE_OCPM, s.CPC]),
      (u[e.POST_ENGAGEMENT] = [
        s.CPC,
        s.CPM,
        s.FIXED_CPM,
        s.MULTI_PREMIUM,
        s.ABSOLUTE_OCPM,
      ]),
      (u[e.REACH] = [
        s.CPC,
        s.CPM,
        s.FIXED_CPM,
        s.MULTI_PREMIUM,
        s.ABSOLUTE_OCPM,
      ]),
      (u[e.CONVERSIONS] = [s.CPC, s.CPM, s.MULTI_PREMIUM, s.ABSOLUTE_OCPM]),
      (u[e.MOBILE_APP_INSTALLS] = [s.FIXED_CPM, s.ABSOLUTE_OCPM, s.CPA, s.CPC]),
      (u[e.LINK_CLICKS] = [
        s.CPA,
        s.CPM,
        s.ABSOLUTE_OCPM,
        s.FIXED_CPM,
        s.MULTI_PREMIUM,
      ]),
      (u[e.MOBILE_APP_ENGAGEMENT] = [s.CPC, s.ABSOLUTE_OCPM]),
      (u[e.VIDEO_VIEWS] = [
        s.FIXED_CPM,
        s.MULTI_PREMIUM,
        s.ABSOLUTE_OCPM,
        s.CPA,
      ]),
      (u[e.MEDIA_DOWNLOADS] = []),
      (u[e.EXTERNAL] = []),
      (u[e.STORE_VISITS] = [s.ABSOLUTE_OCPM]),
      (u[e.PRODUCT_CATALOG_SALES] = [s.ABSOLUTE_OCPM, s.CPC, s.CPM]),
      (u[e.LEAD_GENERATION] = [s.ABSOLUTE_OCPM]),
      (u[e.BRAND_AWARENESS] = [s.ABSOLUTE_OCPM]),
      (u[e.MESSAGES] = [s.MULTI_PREMIUM, s.ABSOLUTE_OCPM]));
    var c = {};
    ((c[r("AdsBuyingTypes").AUCTION] = function (e) {
      return (
        e !== r("AdsAPIBidType").FIXED_CPM &&
        e !== r("AdsAPIBidType").FIXED_PRICING &&
        e !== r("AdsAPIBidType").MULTI_PREMIUM
      );
    }),
      (c[r("AdsBuyingTypes").RESERVED] = function (e) {
        return e === r("AdsAPIBidType").MULTI_PREMIUM;
      }),
      (c[r("AdsBuyingTypes").MIXED] = function (e) {
        return !0;
      }));
    function d(e, t, n, a) {
      var i = o(
          "AdsLegacyObjectivesUtils",
        ).convertToLegacyAppInstallsObjectives_HACK(t, n),
        l = u[i];
      if (!l)
        return (
          r("FBLogger")("ads").mustfix(
            "The objective supplied (%s) is invalid",
            i,
          ),
          []
        );
      var s = c[e];
      if (
        (s ||
          ((s = function (t) {
            return !0;
          }),
          r("FBLogger")("ads").mustfix(
            "The buying type supplied (%s) is invalid",
            e,
          )),
        r("isTruthy")(a))
      ) {
        var d =
          e === r("AdsBuyingTypes").AUCTION
            ? r("AdsToplineProductSettings").auctionBidTypes[a]
            : r("AdsToplineProductSettings").bidTypes[a];
        if (!d)
          r("FBLogger")("ads").mustfix(
            "No valid bid types listed for topline type %s",
            a,
          );
        else
          return (
            (l = l.filter(function (e) {
              return !!d[e];
            })),
            l
          );
      }
      return l.filter(s);
    }
    l.getValidBidTypes = d;
  },
  98,
);
