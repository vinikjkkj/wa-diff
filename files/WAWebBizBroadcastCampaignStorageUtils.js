__d(
  "WAWebBizBroadcastCampaignStorageUtils",
  [
    "WALogger",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, r) {
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["biz-broadcast-campaigns"],
        r,
        async function (e) {
          var r = e[0],
            o = await r.get(t);
          o != null
            ? await r.createOrReplace(babelHelpers.extends({}, o, n))
            : await r.create(babelHelpers.extends({ campaignId: t }, n));
        },
      ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-storage] Campaign ",
              " synced",
            ])),
          t,
        ));
    }
    async function u(e) {
      var t = await o("WAWebSchemaBusinessBroadcastCampaign")
        .getBusinessBroadcastCampaignTable()
        .get(e);
      (t == null ? void 0 : t.pendingBroadcastMessageId) != null &&
        (await o("WAWebSchemaPendingBusinessBroadcastMessage")
          .getPendingBusinessBroadcastMessageTable()
          .remove(t.pendingBroadcastMessageId));
    }
    async function c(e, t) {
      var n,
        r,
        a,
        i,
        l,
        u = await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .get(e);
      if (u != null) {
        var c = babelHelpers.extends({}, u, t),
          d = Date.now(),
          m = {
            adId: (n = c.adId) != null ? n : void 0,
            broadcastJid: c.broadcastJid,
            createTimestamp: c.createdTimestamp,
            deviceId: c.deviceId,
            msgId: (r = c.msgId) != null ? r : void 0,
            name: (a = c.campaignName) != null ? a : void 0,
            reservedQuota: (i = c.reservedQuota) != null ? i : void 0,
            scheduledTimestamp: (l = c.scheduledTimestamp) != null ? l : void 0,
            status: c.status,
          },
          p = { businessBroadcastCampaignAction: m },
          _ = o("WAWebSyncdActionUtils").buildPendingMutation({
            action: o("WAWebSyncdConst").Actions.BusinessBroadcastCampaign,
            collection: o("WAWebSyncdConst").CollectionName.Regular,
            indexArgs: [e],
            operation: o("WAWebProtobufsServerSync.pb")
              .SyncdMutation$SyncdOperation.SET,
            timestamp: d,
            value: p,
            version: 1,
          });
        await s(e, t, [_]);
      }
    }
    ((l.updateCampaignWithSync = s),
      (l.cleanupPendingCampaignData = u),
      (l.updateCampaignStatusWithSync = c));
  },
  98,
);
