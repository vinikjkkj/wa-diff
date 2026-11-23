__d(
  "AdsBulkEditCTXEarlyPausePreventionVisibilitySelectors",
  [
    "AdsBulkEditCTXEarlyPausePreventionPluginFetcher",
    "AdsEditingCampaignContext",
    "AdsEditingCampaignGroupContext",
    "AdsMgmtCTXCampaignPausePreventionEligibleStoreUtils",
    "AdsObjectTypes",
    "firstx",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        plugins: [],
        ctxPausePreventionData: o(
          "AdsMgmtCTXCampaignPausePreventionEligibleStoreUtils",
        ).DEFAULT_CTX_PAUSE_PREVENTION_DATA,
        bulk: !1,
      };
    function u(t) {
      var n = r("AdsBulkEditCTXEarlyPausePreventionPluginFetcher")(t);
      if ((e || (e = r("isEmpty")))(n)) return s;
      var o = r("firstx")(n),
        a = o.visibilitySelector;
      if (a == null) return s;
      var i;
      if (t === r("AdsObjectTypes").CAMPAIGN)
        i = r("AdsEditingCampaignContext");
      else if (t === r("AdsObjectTypes").CAMPAIGN_GROUP)
        i = r("AdsEditingCampaignGroupContext");
      else return s;
      var l = a(i),
        u = l.bulk,
        c = l.ctxPausePreventionData;
      return { ctxPausePreventionData: c, plugins: n, bulk: u };
    }
    l.default = u;
  },
  98,
);
