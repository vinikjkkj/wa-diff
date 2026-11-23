__d(
  "AdsPECampaignSelectors",
  [
    "AdsCampaignCombinedStore",
    "AdsObjectTypes",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("AdsCampaignCombinedStore")),
        function (e) {
          return r("AdsCampaignCombinedStore").getCachedObject(e);
        },
      ),
      c = e(s, function (e) {
        return r("AdsCampaignCombinedStore").getCachedRecord(e);
      }),
      d = e(s, function (e) {
        return r("AdsCampaignCombinedStore").getObject(e);
      }),
      m = e(s, function (e) {
        return r("AdsCampaignCombinedStore").getRecord(e);
      }),
      p = e(s, function (e) {
        return r("AdsCampaignCombinedStore").getAllObjects(e);
      }),
      _ = e(s, function (e) {
        return r("AdsCampaignCombinedStore").getAllCachedObjects(e);
      }),
      f = e(s, function (e, t) {
        return r("AdsCampaignCombinedStore").getAllRecords(e, t);
      }),
      g = e(s, function (e, t) {
        return r("AdsCampaignCombinedStore").getByFields(e, t, i.id);
      }),
      h = e(s, s.getCachedByFields.bind(s)),
      y = r("adsCreateSelector")(
        [h],
        function (t) {
          return function (e, n, o) {
            return e.fbid == null || e.type !== r("AdsObjectTypes").CAMPAIGN
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : t(e.fbid, n, o);
          };
        },
        { name: i.id + ".getCachedByFieldsStrongIDSelector" },
      ),
      C = e(s, function (e, t) {
        return r("AdsCampaignCombinedStore").getAllByFields(e, t, i.id);
      });
    ((l.getCachedSelector = u),
      (l.getCachedRecordSelector = c),
      (l.getSelector = d),
      (l.getRecordSelector = m),
      (l.getAllSelector = p),
      (l.getAllCachedSelector = _),
      (l.getAllRecordsSelector = f),
      (l.getByFieldsSelector = g),
      (l.getCachedByFieldsSelector = h),
      (l.getCachedByFieldsStrongIDSelector = y),
      (l.getAllByFieldsSelector = C));
  },
  98,
);
