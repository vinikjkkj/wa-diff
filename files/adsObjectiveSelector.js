__d(
  "adsObjectiveSelector",
  ["AdsPECampaignGroupSelectors", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        o("AdsPECampaignGroupSelectors").getCachedByFieldsSelector.getStores(),
        function (t) {
          var e = t.adgroup,
            n = e.campaign_id,
            r = o("AdsPECampaignGroupSelectors")
              .getCachedByFieldsSelector()(n, { objective: null }, i.id)
              .getValueEnforcing();
          return r.objective;
        },
        { name: i.id + ".adsObjectiveSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
