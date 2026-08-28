__d(
  "AdsMgmtDynamicCampaignGroupOnDraftPublishCompleteReducerPlugin",
  [
    "AdsDynamicCampaignGroupDataManagerFieldsMapV2.experimental",
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
            o = Object.keys(
              r("AdsDynamicCampaignGroupDataManagerFieldsMapV2.experimental")
                .fieldsMap,
            );
          return t.deleteMulti(e, o);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
