__d(
  "AdsMgmtAdgroupOnDraftPublishCompleteReducerPlugin",
  [
    "AdsAdgroupLiveStoreDataFields.experimental",
    "AdsInsightsQueryFieldUtil",
    "adsDraftGetIDsToInvalidateAfterPublish",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("adsDraftGetIDsToInvalidateAfterPublish")({
              response: n.response,
              ancestorIDs: n.ancestorIDs,
            }),
            a = Object.keys(
              o("AdsInsightsQueryFieldUtil").toAPIFieldsMap(
                r("AdsAdgroupLiveStoreDataFields.experimental").cheapFields,
                !0,
              ),
            );
          return t.deleteMulti(e, a);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
