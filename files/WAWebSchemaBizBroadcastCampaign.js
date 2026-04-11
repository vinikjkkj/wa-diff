__d(
  "WAWebSchemaBizBroadcastCampaign",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "business-broadcast-campaigns";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addCompositePrimaryKey,
        i = n.addIndex;
      t.add(e)
        .version(
          o("WAWebModelStorageVersions").bizBroadcastCampaignCreateTable(),
          [
            a(["campaignId", "broadcastJid"]),
            r("msgId"),
            r("adGroupId"),
            r("createdTimestamp"),
            r("campaignName"),
            i("adGroupId"),
            i("createdTimestamp"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.addTable = s), (l.getBizBroadcastCampaignTable = u));
  },
  98,
);
