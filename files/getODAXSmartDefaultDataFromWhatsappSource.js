__d(
  "getODAXSmartDefaultDataFromWhatsappSource",
  [
    "AdsODAXUtils",
    "SharedSmartDefaultVariables",
    "adsCFGetDefaultPageUIState_HACK",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["SHOPS_ADS_DEFAULT_OPT_IN"];
    function s(t, n, a, i) {
      if (
        e.some(function (e) {
          return n.capabilities.includes(e);
        })
      )
        return null;
      if (t != null) {
        var l;
        o(
          "SharedSmartDefaultVariables",
        ).setLastObjectiveEligibleForWhatsAppDefault(a);
        var s =
          (l = r("adsCFGetDefaultPageUIState_HACK")(void 0)) == null
            ? void 0
            : l.id;
        return s != null && o("AdsODAXUtils").isODAXTrafficCampaignGroup(i, a)
          ? babelHelpers.extends({}, t, { default_page_id: s })
          : t;
      }
      return null;
    }
    l.default = s;
  },
  98,
);
