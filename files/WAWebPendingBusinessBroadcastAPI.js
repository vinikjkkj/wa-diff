__d(
  "WAWebPendingBusinessBroadcastAPI",
  [
    "WAWebModelStorageUtils",
    "WAWebPendingBusinessBroadcastSerialization",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaPendingBusinessBroadcast",
    "WAWebSchemaPendingBusinessBroadcastMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "Pending broadcast table not available",
      s = "Ad Group ID not found",
      u = "Pending broadcast message not found",
      c = { FAILURE: "failure", OK: "ok" };
    async function d(t) {
      if (
        !o("WAWebSchemaPendingBusinessBroadcast").canUsePendingBroadcastTable()
      )
        return { message: e, type: c.FAILURE };
      try {
        var n = r("WAWebPonyfillsCryptoRandomUUID")(),
          a = await o(
            "WAWebPendingBusinessBroadcastSerialization",
          ).serializePendingBusinessBroadcast(t, n),
          i = a.messageRow,
          l = a.parentRow;
        return (
          await o("WAWebSchemaPendingBusinessBroadcastMessage")
            .getPendingBusinessBroadcastMessageTable()
            .create(i),
          await o("WAWebSchemaPendingBusinessBroadcast")
            .getPendingBusinessBroadcastTable()
            .create(l),
          { type: c.OK }
        );
      } catch (e) {
        var s = e instanceof Error ? e.message : String(e);
        return { message: s, type: c.FAILURE };
      }
    }
    async function m(t) {
      if (
        !o("WAWebSchemaPendingBusinessBroadcast").canUsePendingBroadcastTable()
      )
        return Promise.reject(e);
      var n = await o("WAWebSchemaPendingBusinessBroadcast")
        .getPendingBusinessBroadcastTable()
        .get(t, !0);
      if (n == null) return Promise.reject(s);
      var r = await o("WAWebSchemaPendingBusinessBroadcastMessage")
        .getPendingBusinessBroadcastMessageTable()
        .get(n.pendingBroadcastMessageId);
      return r == null
        ? Promise.reject(u)
        : o(
            "WAWebPendingBusinessBroadcastSerialization",
          ).deserializePendingBusinessBroadcast(n, r);
    }
    async function p(e) {
      if (
        o("WAWebSchemaPendingBusinessBroadcast").canUsePendingBroadcastTable()
      ) {
        var t = await o("WAWebSchemaPendingBusinessBroadcast")
          .getPendingBusinessBroadcastTable()
          .get(e, !0);
        if (t != null) {
          var n = t.pendingBroadcastMessageId;
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              [
                "pending-business-broadcast",
                "pending-business-broadcast-message",
              ],
              async function (t) {
                var r = t[0],
                  o = t[1];
                await r.remove(e);
                var a = await r.all(),
                  i = a.some(function (e) {
                    return e.pendingBroadcastMessageId === n;
                  });
                i || (await o.remove(n));
              },
            );
        }
      }
    }
    function _() {
      return o("WAWebSchemaPendingBusinessBroadcast")
        .getPendingBusinessBroadcastTable()
        .all();
    }
    async function f(e) {
      var t = await _();
      return t.filter(function (t) {
        return t.broadcastJid === e;
      });
    }
    async function g(t, n) {
      if (
        !o("WAWebSchemaPendingBusinessBroadcast").canUsePendingBroadcastTable()
      )
        return { message: e, type: c.FAILURE };
      try {
        var a = r("WAWebPonyfillsCryptoRandomUUID")(),
          i = null,
          l = null,
          s = n.mediaFile;
        return (
          s != null &&
            ((i = await s.arrayBuffer()),
            (l = JSON.stringify({
              lastModified: s.lastModified,
              name: s.name,
              type: s.type,
            }))),
          await o("WAWebSchemaPendingBusinessBroadcastMessage")
            .getPendingBusinessBroadcastMessageTable()
            .create({
              ctaButtonJson: n.ctaButtonJson,
              mediaData: i,
              mediaMetadata: l,
              messageBody: n.messageBody,
              pendingBroadcastMessageId: a,
            }),
          await o("WAWebSchemaPendingBusinessBroadcast")
            .getPendingBusinessBroadcastTable()
            .bulkCreate(
              t.map(function (e) {
                return {
                  adGroupId: e.adGroupId,
                  broadcastJid: e.broadcastJid,
                  freeReservedMsgs: e.freeReservedMsgs,
                  pendingBroadcastMessageId: a,
                  sendTimestamp: e.sendTimestamp,
                };
              }),
            ),
          { type: c.OK }
        );
      } catch (e) {
        var u = e instanceof Error ? e.message : String(e);
        return { message: u, type: c.FAILURE };
      }
    }
    ((l.PENDING_BROADCAST_TABLE_NOT_AVAILABLE_ERROR = e),
      (l.AD_GROUP_NOT_FOUND_ERROR = s),
      (l.MESSAGE_NOT_FOUND_ERROR = u),
      (l.CreatePendingBroadcastStatus = c),
      (l.createPendingBroadcast = d),
      (l.getPendingBroadcast = m),
      (l.deletePendingBroadcast = p),
      (l.getAllPendingBroadcasts = _),
      (l.getPendingBroadcastsByBroadcastJid = f),
      (l.createPendingBroadcasts = g));
  },
  98,
);
