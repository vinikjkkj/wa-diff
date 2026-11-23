__d(
  "AdsPECampaignLiveSelectors",
  [
    "AdsAPICampaignRecord",
    "AdsPECampaignLiveTableStore",
    "adsCreateStoreThunkSelector",
    "adsUEditorSlowSelectorsLogging",
    "memoizeMapImmutableMap",
    "memoizeWithArgsByKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("memoizeWithArgsByKey")(function (e) {
        return e.map(function (e) {
          return new (r("AdsAPICampaignRecord"))(e);
        });
      }),
      c = r("memoizeMapImmutableMap")(u),
      d = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("AdsPECampaignLiveTableStore")),
        function (e) {
          return r("AdsPECampaignLiveTableStore").getCached(e);
        },
      ),
      m = e(s, function (e) {
        return r("AdsPECampaignLiveTableStore").getCachedRecord(e);
      }),
      p = e(s, function (e) {
        return r("AdsPECampaignLiveTableStore").get(e);
      }),
      _ = e(s, function (e) {
        return r("AdsPECampaignLiveTableStore").getRecord(e);
      }),
      f = e(s, function (e) {
        return o(
          "adsUEditorSlowSelectorsLogging",
        ).checkAndLogCampaignStoreOverfetching(
          r("AdsPECampaignLiveTableStore").getAll(e),
        );
      }),
      g = e(s, function (e) {
        return r("AdsPECampaignLiveTableStore").getAllCached(e);
      }),
      h = e(s, function (e) {
        return r("AdsPECampaignLiveTableStore").getAllCachedRecords(e);
      }),
      y = e(s, function (e) {
        return o(
          "adsUEditorSlowSelectorsLogging",
        ).checkAndLogCampaignStoreOverfetching(
          r("AdsPECampaignLiveTableStore").getAllRecords(e),
        );
      }),
      C = e(s, function (e, t) {
        return r("AdsPECampaignLiveTableStore").getByFields(e, t);
      }),
      b = e(s, function (e, t) {
        return r("AdsPECampaignLiveTableStore").getCachedByFields(e, t);
      });
    ((l.getCachedSelector = d),
      (l.getCachedRecordSelector = m),
      (l.getSelector = p),
      (l.getRecordSelector = _),
      (l.getAllSelector = f),
      (l.getAllCachedSelector = g),
      (l.getAllCachedRecordsSelector = h),
      (l.getAllRecordsSelector = y),
      (l.getByFieldsSelector = C),
      (l.getCachedByFieldsSelector = b));
  },
  98,
);
