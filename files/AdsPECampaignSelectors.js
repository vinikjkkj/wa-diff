__d(
  "AdsPECampaignSelectors",
  ["AdsCampaignCombinedStore", "adsCreateStoreThunkSelector"],
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
      g = e(s, s.getByFields.bind(s)),
      h = e(s, s.getCachedByFields.bind(s)),
      y = e(s, function (e, t) {
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
      (l.getAllByFieldsSelector = y));
  },
  98,
);
