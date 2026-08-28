__d(
  "AdsPECampaignGroupSelectors",
  ["AdsCampaignGroupCombinedStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("AdsCampaignGroupCombinedStore")),
        s.getCachedObject.bind(s),
      ),
      c = e(s, s.getCachedRecord.bind(s)),
      d = e(s, s.getObject.bind(s)),
      m = e(s, s.getRecord.bind(s)),
      p = e(s, s.getAllObjects.bind(s)),
      _ = e(s, s.getAllCachedObjects.bind(s)),
      f = e(s, s.getAllRecords.bind(s)),
      g = e(s, s.getByFields.bind(s)),
      h = e(s, s.getCachedByFields.bind(s)),
      y = e(s, s.getAllByFields.bind(s)),
      C = e(s, s.getAllCachedByFields.bind(s));
    ((l.getCachedSelector = u),
      (l.getCachedRecordSelector = c),
      (l.getSelector = d),
      (l.getRecordSelector = m),
      (l.getAllSelector = p),
      (l.getAllCachedSelector = _),
      (l.getAllRecordsSelector = f),
      (l.getByFieldsSelector = g),
      (l.getCachedByFieldsSelector = h),
      (l.getAllByFieldsSelector = y),
      (l.getAllCachedByFieldsSelector = C));
  },
  98,
);
