__d(
  "AdsMgmtDynamicAdgroupOnDraftPublishCompleteReducerPlugin",
  [
    "AdsDynamicAdgroupDataManagerFieldsMap.experimental",
    "AdsPECampaignGroupSelectors",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "adsMgmtGetChildrenAdgroupIDsForCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.ancestorIDs,
            a = n.response,
            l = r("adsDraftGetFragmentStatusesFromPublishResponse")(a),
            s = l
              .filter(function (e) {
                return e.ad_object_type === "campaign";
              })
              .map(function (e) {
                return e.ad_object_id;
              }),
            u = l.some(function (e) {
              return e.ad_object_type === "ad_set";
            });
          if (u && e != null) {
            var c = o(
              "AdsPECampaignGroupSelectors",
            ).getAllCachedByFieldsSelector()(e.toArray(), { id: null }, i.id);
            for (var d of c.values()) {
              var m,
                p = (m = d.getValue()) == null ? void 0 : m.id;
              p != null && s.push(p);
            }
          }
          var _ = l
              .filter(function (e) {
                return e.ad_object_type === "ad";
              })
              .map(function (e) {
                return e.ad_object_id;
              })
              .concat(
                r("adsMgmtGetChildrenAdgroupIDsForCampaignGroupIDsSelector")()(
                  s,
                ),
              ),
            f = Object.keys(
              r("AdsDynamicAdgroupDataManagerFieldsMap.experimental").fieldsMap,
            );
          return t.deleteMulti(_, f);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
