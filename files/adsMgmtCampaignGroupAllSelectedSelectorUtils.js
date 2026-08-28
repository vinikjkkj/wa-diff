__d(
  "adsMgmtCampaignGroupAllSelectedSelectorUtils",
  ["AdFLEXSelectRowCheckboxHeaderConfig", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a = e.selection,
        i =
          (n =
            (o = r("AdFLEXSelectRowCheckboxHeaderConfig").get()) == null ||
            o.getEligibleSelectAllAdObjects == null
              ? void 0
              : o.getEligibleSelectAllAdObjects(
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                  t,
                )) != null
            ? n
            : t;
      return i.length !== 0 && a.size === i.length;
    }
    l.adsMgmtCampaignGroupAllSelected = e;
  },
  98,
);
