__d(
  "getODAXSmartDefaultDataForLinkClicksFromInstagramSource",
  ["AdsODAXUtils", "adsCFGetDefaultPageUIState_HACK"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i =
          (a = r("adsCFGetDefaultPageUIState_HACK")(void 0)) == null
            ? void 0
            : a.id,
        l = e;
      return (
        l != null &&
          i != null &&
          o("AdsODAXUtils").isODAXTrafficCampaignGroup(n, t) &&
          (l = babelHelpers.extends({}, l, { default_page_id: i })),
        l
      );
    }
    l.default = e;
  },
  98,
);
