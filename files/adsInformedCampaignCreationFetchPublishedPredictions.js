__d(
  "adsInformedCampaignCreationFetchPublishedPredictions",
  [
    "AdAsyncRequestStatus",
    "AdsDraftPublishDataProvider",
    "AdsManagerRelayEnvironment",
    "RelayHooks",
    "adsInformedCampaignCreationFetchPublishedPredictionsQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        ["ad_set", "CAMPAIGN"],
        ["campaign", "CAMPAIGN_GROUP"],
      ]),
      u = new Set(),
      c =
        e !== void 0
          ? e
          : (e = n(
              "adsInformedCampaignCreationFetchPublishedPredictionsQuery.graphql",
            ));
    function d() {
      var e = r("AdsDraftPublishDataProvider")();
      if (!(e.requestedAdObjectIDs.size + e.pendingAdObjectIDs.size > 0)) {
        for (var t of e.fragments.values())
          if (t.status === r("AdAsyncRequestStatus").SUCCESS) {
            var n = s.get(t.ad_object_type),
              a = t.ad_object_id;
            n == null ||
              a == null ||
              u.has(a) ||
              (u.add(a),
              o("RelayHooks")
                .fetchQuery(r("AdsManagerRelayEnvironment"), c, {
                  input: {
                    ad_object_level: n,
                    draft_fragment_id: a,
                    is_post_publish: !0,
                  },
                })
                .subscribe({ error: function () {} }));
          }
      }
    }
    l.default = d;
  },
  98,
);
