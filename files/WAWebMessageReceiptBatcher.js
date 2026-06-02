__d(
  "WAWebMessageReceiptBatcher",
  [
    "WABatcher",
    "WAJids",
    "WALogger",
    "WAPromiseMap",
    "WAWebAck",
    "WAWebApiMessageInfoStore",
    "WAWebBackendApi",
    "WAWebDBBulkGetRootMsgs",
    "WAWebHandleMsgReceiptCommon",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageInfo",
    "WAWebSchemaPeerReadReceipt",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = Object.freeze(
        ((e = {}),
        (e[(f = o("WAWebAck")).ACK.SENT] = f.ACK_STRING.DELIVERY),
        (e[f.ACK.RECEIVED] = f.ACK_STRING.DELIVERY),
        (e[f.ACK.READ] = f.ACK_STRING.READ),
        (e[f.ACK.PLAYED] = f.ACK_STRING.PLAYED),
        (e[f.ACK.INACTIVE] = f.ACK_STRING.INACTIVE),
        e),
      ),
      h = { delayMs: 1e3 },
      y = (function () {
        function e() {
          var e = this;
          ((this.$1 = o("WABatcher").createSimpleBatcher(h, function (t) {
            return e.$2(t).then(function () {
              return [];
            });
          })),
            (this.$3 = o("WABatcher").createSimpleBatcher(h, function (t) {
              return e.$4(t).then(function () {
                return [];
              });
            })));
        }
        var t = e.prototype;
        return (
          (t.acceptPeerReceipt = function (t) {
            return this.$1.accept(t);
          }),
          (t.acceptOtherReceipt = function (t) {
            return this.$3.accept(t);
          }),
          (t.runActiveBatches = function () {
            return Promise.all([
              this.$1.runActiveBatch(),
              this.$3.runActiveBatch(),
            ]).then(r("WAWebNoop"));
          }),
          (t.$5 = function (t) {
            var e = [];
            for (var n of t) {
              var a = n.ack,
                i = n.msgKeys,
                l = n.privacyMode,
                s = n.receiverId;
              a === o("WAWebAck").ACK.RECEIVED &&
                l != null &&
                e.push({
                  remote: s,
                  deliveryPrivacyMode: l,
                  msgKeys: i.map(function (e) {
                    return r("WAWebMsgKey").from(e);
                  }),
                });
            }
            return e;
          }),
          (t.$6 = async function (t) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processPrivacyModeUpdates",
                ])),
            ),
              await o("WAPromiseMap").promiseMap(t, async function (e) {
                (await o(
                  "WAWebHandlePrivacyModeUpdateMsgAction",
                ).handlePrivacyModeTransition(e.remote, e.deliveryPrivacyMode),
                  await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "updateBizPrivacyStatus",
                    { msgIds: e.msgKeys, privacyMode: e.deliveryPrivacyMode },
                  ));
              }));
          }),
          (t.$7 = async function (t, n) {
            var e = this.$8(t),
              a = n
                .map(function (e) {
                  return r("WAWebMsgKey").from(e);
                })
                .filter(function (e) {
                  return (
                    e.remote.isGroup() ||
                    e.remote.isStatus() ||
                    e.remote.isBot()
                  );
                }),
              i = await o("WAWebApiMessageInfoStore").getHighestMsgAcks(a);
            for (var l of i.entries()) {
              var s = l[0],
                u = l[1];
              e.set(s, u);
            }
            return e;
          }),
          (t.$8 = function (t) {
            var e = new Map();
            for (var n of t) {
              var o = n.ack,
                a = n.isBotInvoke,
                i = n.isSender,
                l = n.msgKeys;
              for (var s of l)
                if (
                  r("WAWebMsgKey").from(s).remote.isUser() &&
                  a !== !0 &&
                  i !== !0
                ) {
                  var u;
                  e.set(
                    s,
                    Math.max(
                      o,
                      (u = e.get(s)) != null ? u : Number.NEGATIVE_INFINITY,
                    ),
                  );
                }
            }
            return e;
          }),
          (t.$9 = function (t) {
            var e = new Map(),
              n = [];
            return (
              t.forEach(function (t) {
                var r,
                  a = t.ack,
                  i = t.msgKeys,
                  l = t.receiverId,
                  s = t.ts,
                  u = l.isNewsletter()
                    ? l.toJid()
                    : o("WAWebWidFactory").asUserWidOrThrow(l).toString(),
                  c =
                    (r = l.device) != null ? r : o("WAJids").DEFAULT_DEVICE_ID;
                i.forEach(function (t) {
                  var r = g[a];
                  if (r == null) {
                    n.length < 3 && n.push(a);
                    return;
                  }
                  var i = t + "," + u,
                    l = e.get(i);
                  if (l)
                    (r !== g[o("WAWebAck").ACK.INACTIVE] && (l[r] = b(l[r], s)),
                      l.deviceDelivered.add(c));
                  else {
                    var d;
                    e.set(
                      i,
                      ((d = {}),
                      (d[r] = s),
                      (d.deviceDelivered = new Set([c])),
                      d),
                    );
                  }
                });
              }),
              n.length > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[unify][batcher]: ",
                      " receipts have unsupported ack types => ",
                      "",
                    ])),
                  n.length,
                  n,
                ),
              Array.from(e, function (e) {
                var t = e[0],
                  n = e[1],
                  r = t.split(","),
                  o = r[0],
                  a = r[1];
                return [[o, a], n];
              })
            );
          }),
          (t.$4 = async function (t) {
            var e = this;
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "processOtherReceipts",
                ])),
            );
            var n = this.$9(t),
              a = Array.from(
                new Set(
                  t.flatMap(function (e) {
                    return e.msgKeys;
                  }),
                ),
              ),
              i = await o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["message-info", "message", "chat"], async function () {
                  var i = await Promise.all([
                      o("WAWebSchemaMessageInfo")
                        .getMessageInfoTable()
                        .bulkGet(
                          n.map(function (e) {
                            var t = e[0],
                              n = e[1];
                            return t;
                          }),
                        ),
                      o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(a, !1),
                    ]),
                    l = i[0],
                    s = i[1],
                    u = new Map(
                      a.map(function (e, t) {
                        return [e, s[t]];
                      }),
                    ),
                    c = r("compactMap")(l, function (e, t) {
                      var r = n[t],
                        o = r[0],
                        a = o[0],
                        i = o[1],
                        l = r[1];
                      if (!l) return null;
                      if (!e)
                        return {
                          delivery: l.delivery,
                          read: l.read,
                          played: l.played,
                          msgKey: a,
                          receiverUserJid: i,
                          deviceDelivered: Array.from(l.deviceDelivered),
                          deviceNotDelivered: [],
                        };
                      var s = l.deviceDelivered;
                      return (
                        e.deviceDelivered.forEach(function (e) {
                          return s.add(e);
                        }),
                        {
                          delivery: b(e.delivery, l.delivery),
                          read: b(e.read, l.read),
                          played: b(e.played, l.played),
                          msgKey: e.msgKey,
                          receiverUserJid: e.receiverUserJid,
                          deviceDelivered: Array.from(s),
                          deviceNotDelivered: e.deviceNotDelivered.filter(
                            function (e) {
                              return !s.has(e);
                            },
                          ),
                        }
                      );
                    });
                  await o("WAWebSchemaMessageInfo")
                    .getMessageInfoTable()
                    .bulkCreateOrReplace(c);
                  var d = await e.$7(t, a),
                    m = Array.from(d.entries()),
                    p = r("compactMap")(m, function (e) {
                      var t = e[0],
                        n = e[1],
                        o = r("WAWebMsgKey").fromString(t),
                        a = o.remote;
                      if (a.isUser() || a.isGroup() || a.isStatus()) {
                        var i,
                          l = u.get(t);
                        if (l == null || l.isScheduledMsg === !0) return;
                        if (
                          n >
                          ((i = l.ack) != null ? i : Number.NEGATIVE_INFINITY)
                        )
                          return { id: l.id.toString(), ack: n };
                      }
                    });
                  return { ackUpdates: p, receiptMsgKeyToMsg: u };
                });
            (await o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateOrMerge(i.ackUpdates)
              .catch(function (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "_processOtherReceipts: db msg ack update failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs(
                      "process-other-receipts-failed-to-update-db-msg-acks",
                    ),
                  e
                );
              }),
              o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
                updates: i.ackUpdates.map(function (e) {
                  var t = e.ack,
                    n = e.id;
                  return { id: r("WAWebMsgKey").from(n), ack: t };
                }),
              }),
              o("WAWebBackendApi").frontendFireAndForget("updateMsgInfo", {
                updates: t
                  .flatMap(function (e) {
                    var t = e.ack,
                      n = e.msgKeys,
                      a = e.receiverId,
                      l = e.ts;
                    return n.map(function (e) {
                      var n = i.receiptMsgKeyToMsg.get(e);
                      if (n != null) {
                        var s = r("WAWebMsgKey").from(n.id);
                        if (
                          s.fromMe &&
                          (s.remote.isUser() ||
                            s.remote.isGroup() ||
                            s.remote.isStatus())
                        ) {
                          var u = o("WAWebWidFactory").asUserWidOrThrow(a);
                          if (!o("WAWebUserPrefsMeUser").isMeAccount(u))
                            return { msgKey: s, ts: l, participant: u, ack: t };
                        }
                      }
                    });
                  })
                  .filter(Boolean),
              }),
              this.$6(this.$5(t)).catch(function () {
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "_processOtherReceipts: privacy mode update failed",
                    ])),
                );
              }));
          }),
          (t.$2 = async function (t) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "processPeerReceipts",
                ])),
            );
            var e = t.some(function (e) {
              return !e.isOffline;
            });
            if (e) {
              (await o("WAPromiseMap").promiseMap(t, C),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "handleOnlinePeerReceipt: processed ",
                      " receipts",
                    ])),
                  t.length,
                ));
              return;
            }
            var n = t.map(function (e) {
              var t = e.ack,
                n = e.msgKeys,
                r = e.ts;
              return { ts: r, msgKeys: n, ack: t };
            });
            await o("WAWebSchemaPeerReadReceipt").getTable().bulkCreate(n);
          }),
          e
        );
      })();
    async function C(e) {
      var t = e.msgKeys.map(function (e) {
        return r("WAWebMsgKey").from(e);
      });
      if (e.remote.isStatus()) {
        var n = t.map(o("WAWebLidStatusMigrationKeyUtils").matKeyConvert);
        return (
          o("WAWebBackendApi").frontendFireAndForget("handleReadStatus", {
            msgKeys: n,
          }),
          o("WAWebBackendApi").frontendSendAndReceive("updateMsgPeerAcks", {
            msgKeys: n,
            ack: o("WAWebAck").ACK.READ,
            t: e.ts,
          })
        );
      }
      if (
        (e.remote.isUser() ||
          e.remote.isGroup() ||
          e.remote.isNewsletter() ||
          e.remote.isBot()) &&
        e.ack >= o("WAWebAck").ACK.RECEIVED
      ) {
        if (e.ack === o("WAWebAck").ACK.READ)
          return o("WAWebHandleMsgReceiptCommon").updateChatPeerRead(
            e.remote,
            t,
            e.ts,
          );
        if (e.ack === o("WAWebAck").ACK.PLAYED)
          return o("WAWebBackendApi").frontendSendAndReceive(
            "updateMsgPeerAcks",
            { msgKeys: t, ack: e.ack, t: e.ts },
          );
      }
    }
    function b(e, t) {
      if (e != null && t != null) return Math.min(e, t);
      var n = e != null ? e : t;
      return n != null ? n : void 0;
    }
    var v = new y();
    l.receiptBatcher = v;
  },
  98,
);
