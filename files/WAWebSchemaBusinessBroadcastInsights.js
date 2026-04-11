__d(
  "WAWebSchemaBusinessBroadcastInsights",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "biz-broadcast-insights";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addUserDefinedPrimaryKey;
      t.add(e)
        .version(
          o("WAWebModelStorageVersions").businessBroadcastInsightsCreateTable(),
          [
            a("campaignId"),
            r("deliveredCount"),
            r("lastUpdatedTimestampMs"),
            r("quickReplyCount"),
            r("readCount"),
            r("recipientCount"),
            r("repliedCount"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.addTable = s), (l.getBusinessBroadcastInsightsTable = u));
  },
  98,
);
