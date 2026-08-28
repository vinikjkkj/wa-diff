__d(
  "AdsExperimentsDeliveryPushStateProviderPlugin",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsExperiments2026CreativeTestQEUtils",
    "AdsLoadObjectUtils",
    "AdsPEAdgroupSelectors",
    "adsUEditorAccountIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = new Map(),
        t = new Map(),
        n = new Map(),
        a = new Map();
      if (
        !o(
          "AdsExperiments2026CreativeTestQEUtils",
        ).getIsDeliveryPushedEnabledWithoutLogging()
      )
        return {
          adgroupIDToCreativeDeliveryPush: new Map(),
          adgroupIDToEntrySource: new Map(),
          adgroupIDToPublishedStudyData: new Map(),
          campaignGroupIDsWithMutatedAdgroupIDs: e,
          campaignGroupIDsWithPublishedAdgroupIDs: new Map(),
          campaignIDsWithMutatedAdgroupIDs: t,
          canceledAdgroupIDs: new Set(),
        };
      var i = r("AdsAdgroupDraftFragmentStore").getFragmentsInDraftFor(
          r("adsUEditorAccountIDSelector")(),
        ),
        l = i.keySeq().toOrderedSet();
      if (l.size > 0) {
        var s = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPEAdgroupSelectors").getAllSelector_LEGACY()(l),
        );
        s.forEach(function (r) {
          if (r.creative_delivery_push !== null) {
            var o,
              a,
              i = (o = e.get(r.campaign_id)) != null ? o : new Set();
            (i.add(r.id), e.set(r.campaign_id, i));
            var l = (a = t.get(r.adset_id)) != null ? a : new Set();
            (l.add(r.id),
              t.set(r.adset_id, l),
              n.set(r.id, "AdgroupCreativeDeliveryPushToggle"));
          }
        });
      }
      return {
        adgroupIDToCreativeDeliveryPush: new Map(),
        adgroupIDToEntrySource: n,
        adgroupIDToPublishedStudyData: a,
        campaignGroupIDsWithMutatedAdgroupIDs: e,
        campaignGroupIDsWithPublishedAdgroupIDs: new Map(),
        campaignIDsWithMutatedAdgroupIDs: t,
        canceledAdgroupIDs: new Set(),
      };
    }
    var s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
