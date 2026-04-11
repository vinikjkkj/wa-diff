__d(
  "WAWebSchemaBusinessBroadcastCampaign",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebProtobufSyncAction.pb",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "biz-broadcast-campaigns";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addIndex,
        i = n.addUserDefinedPrimaryKey;
      t.add(e)
        .version(
          o(
            "WAWebModelStorageVersions",
          ).businessBroadcastCampaignsCreateTable(),
          [
            i("campaignId"),
            r("adGroupId"),
            r("adId"),
            r("broadcastJid"),
            r("campaignName"),
            r("createdTimestamp"),
            r("deviceId"),
            r("msgId"),
            r("pendingBroadcastMessageId"),
            r("reservedQuota"),
            r("scheduledTimestamp"),
            r("status"),
            a("adGroupId"),
            a("broadcastJid"),
            a("createdTimestamp"),
            a("deviceId"),
            a("status"),
            a("msgId"),
          ],
        )
        .version(o("WAWebModelStorageVersions").customerDataCreateTable(), [])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.BusinessBroadcastCampaignStatus = o(
      "WAWebProtobufSyncAction.pb",
    ).SyncActionValue$BusinessBroadcastCampaignStatus),
      (l.addTable = s),
      (l.getBusinessBroadcastCampaignTable = u));
  },
  98,
);
