__d(
  "AdsPEAdgroupSelectors",
  ["AdsAdgroupCombinedStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("AdsAdgroupCombinedStore")),
        function (e) {
          return r("AdsAdgroupCombinedStore").getCachedObject(e);
        },
      ),
      c = e(s, function (e) {
        return r("AdsAdgroupCombinedStore").getCachedRecord(e);
      }),
      d = e(s, function (e) {
        return r("AdsAdgroupCombinedStore").getObject(e);
      }),
      m = e(s, function (e) {
        return r("AdsAdgroupCombinedStore").getRecord(e);
      }),
      p = e(s, function (e) {
        return r("AdsAdgroupCombinedStore").getAllCachedObjects(e);
      }),
      _ = e(s, function (e) {
        return r("AdsAdgroupCombinedStore").getAllObjects(e);
      }),
      f = e(s, function (e, t) {
        return r("AdsAdgroupCombinedStore").getAllRecords(e, t);
      }),
      g = e(s, function (e, t, n) {
        return r("AdsAdgroupCombinedStore").getByFields(e, t, n);
      }),
      h = e(s, function (e, t) {
        return r("AdsAdgroupCombinedStore").getCachedByFields(e, t, i.id);
      }),
      y = e(s, function (e, t, n) {
        return r("AdsAdgroupCombinedStore").getAllByFields(e, t, n);
      }),
      C = e(s, function (e, t, n) {
        return r("AdsAdgroupCombinedStore").getAllCachedByFields(e, t, n);
      });
    ((l.getCachedSelector_LEGACY = u),
      (l.getCachedRecordSelector_LEGACY = c),
      (l.getSelector_LEGACY = d),
      (l.getRecordSelector_LEGACY = m),
      (l.getAllCachedSelector_LEGACY = p),
      (l.getAllSelector_LEGACY = _),
      (l.getAllRecordsSelector_LEGACY = f),
      (l.getByFieldsSelector = g),
      (l.getCachedByFieldsSelector = h),
      (l.getAllByFieldsSelector = y),
      (l.getAllCachedByFieldsSelector = C));
  },
  98,
);
