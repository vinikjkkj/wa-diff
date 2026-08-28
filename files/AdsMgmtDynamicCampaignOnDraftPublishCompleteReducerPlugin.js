__d(
  "AdsMgmtDynamicCampaignOnDraftPublishCompleteReducerPlugin",
  [
    "AdsDynamicCampaignDataManagerFieldsMap",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "adsDraftGetIDsToInvalidateAfterPublish",
    "adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("adsDraftGetIDsToInvalidateAfterPublish")({
              response: n.response,
              ancestorIDs: n.ancestorIDs,
            }),
            a = r("adsDraftGetFragmentStatusesFromPublishResponse")(n.response);
          a.map(function (t) {
            t.ad_object_type === "campaign" &&
              (e = e.concat(
                o(
                  "adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector",
                ).adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector()([
                  t.ad_object_id,
                ]),
              ));
          });
          var i = Object.keys(
            r("AdsDynamicCampaignDataManagerFieldsMap").fieldsMap,
          );
          return t.deleteMulti(e, i);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
