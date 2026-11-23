__d(
  "CTXAdvantageCatalogEligibilityUtils",
  ["AdCampaignDestination", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e !== r("AdCampaignDestination").WHATSAPP &&
        e !== r("AdCampaignDestination").MESSENGER
        ? !1
        : t
          ? r("qex")._("1819") === !0
          : r("qex")._("3470") === !0;
    }
    l.isEligibleForCTXAdvantageCatalog = e;
  },
  98,
);
