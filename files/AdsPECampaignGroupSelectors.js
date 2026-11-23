__d(
  "AdsPECampaignGroupSelectors",
  [
    "AdsCampaignGroupCombinedStore",
    "AdsObjectTypes",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n) {
      return r("AdsCampaignGroupCombinedStore").getByFields(e, t, i.id);
    }
    function c(e, t, n) {
      return r("AdsCampaignGroupCombinedStore").getCachedByFields(e, t, i.id);
    }
    function d(e, t, n) {
      return r("AdsCampaignGroupCombinedStore").getAllByFields(e, t, i.id);
    }
    var m = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("AdsCampaignGroupCombinedStore")),
        s.getCachedObject.bind(s),
      ),
      p = e(s, s.getCachedRecord.bind(s)),
      _ = e(s, s.getObject.bind(s)),
      f = e(s, s.getRecord.bind(s)),
      g = r("adsCreateSelector")(
        [f],
        function (t) {
          return function (e) {
            return e.fbid == null ||
              e.type !== r("AdsObjectTypes").CAMPAIGN_GROUP
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : t(e.fbid);
          };
        },
        { name: i.id + ".getRecordStrongIDSelector" },
      ),
      h = e(s, s.getAllObjects.bind(s)),
      y = e(s, s.getAllCachedObjects.bind(s)),
      C = e(s, s.getAllRecords.bind(s)),
      b = e(s, u),
      v = e(s, c),
      S = r("adsCreateSelector")(
        [v],
        function (t) {
          return function (e, n, o) {
            return e.fbid == null ||
              e.type !== r("AdsObjectTypes").CAMPAIGN_GROUP
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : t(e.fbid, n, o);
          };
        },
        { name: i.id + ".getCachedByFieldsStrongIDSelector" },
      ),
      R = e(s, d),
      L = e(s, s.getAllCachedByFields.bind(s));
    ((l.getCachedSelector = m),
      (l.getCachedRecordSelector = p),
      (l.getSelector = _),
      (l.getRecordSelector = f),
      (l.getRecordStrongIDSelector = g),
      (l.getAllSelector = h),
      (l.getAllCachedSelector = y),
      (l.getAllRecordsSelector = C),
      (l.getByFieldsSelector = b),
      (l.getCachedByFieldsSelector = v),
      (l.getCachedByFieldsStrongIDSelector = S),
      (l.getAllByFieldsSelector = R),
      (l.getAllCachedByFieldsSelector = L));
  },
  98,
);
