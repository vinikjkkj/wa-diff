__d(
  "WAWebPendingBusinessBroadcastAPI",
  [
    "Promise",
    "WAWebModelStorageUtils",
    "WAWebPendingBusinessBroadcastSerialization",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaPendingBusinessBroadcast",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "Pending broadcast table not available",
      u = "Ad Group ID not found",
      c = "Pending broadcast message not found",
      d = { FAILURE: "failure", OK: "ok" };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebSchemaPendingBusinessBroadcast",
            ).canUsePendingBroadcastTable()
          )
            return { message: s, type: d.FAILURE };
          try {
            var t = r("WAWebPonyfillsCryptoRandomUUID")(),
              n = yield o(
                "WAWebPendingBusinessBroadcastSerialization",
              ).serializePendingBusinessBroadcast(e, t),
              a = n.messageRow,
              i = n.parentRow;
            return (
              yield o("WAWebSchemaPendingBusinessBroadcastMessage")
                .getPendingBusinessBroadcastMessageTable()
                .create(a),
              yield o("WAWebSchemaPendingBusinessBroadcast")
                .getPendingBusinessBroadcastTable()
                .create(i),
              { type: d.OK }
            );
          } catch (e) {
            var l = e instanceof Error ? e.message : String(e);
            return { message: l, type: d.FAILURE };
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o(
              "WAWebSchemaPendingBusinessBroadcast",
            ).canUsePendingBroadcastTable()
          )
            return (e || (e = n("Promise"))).reject(s);
          var r = yield o("WAWebSchemaPendingBusinessBroadcast")
            .getPendingBusinessBroadcastTable()
            .get(t, !0);
          if (r == null) return (e || (e = n("Promise"))).reject(u);
          var a = yield o("WAWebSchemaPendingBusinessBroadcastMessage")
            .getPendingBusinessBroadcastMessageTable()
            .get(r.pendingBroadcastMessageId);
          return a == null
            ? (e || (e = n("Promise"))).reject(c)
            : o(
                "WAWebPendingBusinessBroadcastSerialization",
              ).deserializePendingBusinessBroadcast(r, a);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o(
              "WAWebSchemaPendingBusinessBroadcast",
            ).canUsePendingBroadcastTable()
          ) {
            var t = yield o("WAWebSchemaPendingBusinessBroadcast")
              .getPendingBusinessBroadcastTable()
              .get(e, !0);
            if (t != null) {
              var r = t.pendingBroadcastMessageId;
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  [
                    "pending-business-broadcast",
                    "pending-business-broadcast-message",
                  ],
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n = t[0],
                          o = t[1];
                        yield n.remove(e);
                        var a = yield n.all(),
                          i = a.some(function (e) {
                            return e.pendingBroadcastMessageId === r;
                          });
                        i || (yield o.remove(r));
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return o("WAWebSchemaPendingBusinessBroadcast")
        .getPendingBusinessBroadcastTable()
        .all();
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield y();
          return t.filter(function (t) {
            return t.broadcastJid === e;
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o(
              "WAWebSchemaPendingBusinessBroadcast",
            ).canUsePendingBroadcastTable()
          )
            return { message: s, type: d.FAILURE };
          try {
            var n = r("WAWebPonyfillsCryptoRandomUUID")(),
              a = null,
              i = null,
              l = t.mediaFile;
            return (
              l != null &&
                ((a = yield l.arrayBuffer()),
                (i = JSON.stringify({
                  lastModified: l.lastModified,
                  name: l.name,
                  type: l.type,
                }))),
              yield o("WAWebSchemaPendingBusinessBroadcastMessage")
                .getPendingBusinessBroadcastMessageTable()
                .create({
                  ctaButtonJson: t.ctaButtonJson,
                  mediaData: a,
                  mediaMetadata: i,
                  messageBody: t.messageBody,
                  pendingBroadcastMessageId: n,
                }),
              yield o("WAWebSchemaPendingBusinessBroadcast")
                .getPendingBusinessBroadcastTable()
                .bulkCreate(
                  e.map(function (e) {
                    return {
                      adGroupId: e.adGroupId,
                      broadcastJid: e.broadcastJid,
                      freeReservedMsgs: e.freeReservedMsgs,
                      pendingBroadcastMessageId: n,
                      sendTimestamp: e.sendTimestamp,
                    };
                  }),
                ),
              { type: d.OK }
            );
          } catch (e) {
            var u = e instanceof Error ? e.message : String(e);
            return { message: u, type: d.FAILURE };
          }
        })),
        S.apply(this, arguments)
      );
    }
    ((l.PENDING_BROADCAST_TABLE_NOT_AVAILABLE_ERROR = s),
      (l.AD_GROUP_NOT_FOUND_ERROR = u),
      (l.MESSAGE_NOT_FOUND_ERROR = c),
      (l.CreatePendingBroadcastStatus = d),
      (l.createPendingBroadcast = m),
      (l.getPendingBroadcast = _),
      (l.deletePendingBroadcast = g),
      (l.getAllPendingBroadcasts = y),
      (l.getPendingBroadcastsByBroadcastJid = C),
      (l.createPendingBroadcasts = v));
  },
  98,
);
