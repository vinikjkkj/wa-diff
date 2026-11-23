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
    "WAWebMessageReceiptUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageInfo",
    "WAWebSchemaPeerReadReceipt",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "compactMap",
    "getErrorSafe",
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
      g,
      h = Object.freeze(
        ((e = {}),
        (e[(g = o("WAWebAck")).ACK.SENT] = g.ACK_STRING.DELIVERY),
        (e[g.ACK.RECEIVED] = g.ACK_STRING.DELIVERY),
        (e[g.ACK.READ] = g.ACK_STRING.READ),
        (e[g.ACK.PLAYED] = g.ACK_STRING.PLAYED),
        (e[g.ACK.INACTIVE] = g.ACK_STRING.INACTIVE),
        e),
      ),
      y = { delayMs: 1e3 },
      C = (function () {
        function e() {
          var e = this;
          ((this.$1 = o("WABatcher").createSimpleBatcher(y, function (t) {
            return e.$2(t).then(function () {
              return [];
            });
          })),
            (this.$3 = o("WABatcher").createSimpleBatcher(y, function (t) {
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
                  var r = h[a];
                  if (r == null) {
                    n.length < 3 && n.push(a);
                    return;
                  }
                  var i = t + "," + u,
                    l = e.get(i);
                  if (l)
                    (r !== o("WAWebAck").ACK_STRING.INACTIVE &&
                      (l[r] = I(l[r], s)),
                      l.deviceDelivered.add(c));
                  else {
                    var d = { deviceDelivered: new Set([c]) };
                    ((d[r] = s), e.set(i, d));
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
            var n = t.filter(function (e) {
                return e.integrityDrop !== !0;
              }),
              a = new Set(
                t
                  .filter(function (e) {
                    return e.integrityDrop === !0;
                  })
                  .flatMap(function (e) {
                    return e.msgKeys;
                  }),
              ),
              i = this.$9(n),
              l = Array.from(
                new Set(
                  t.flatMap(function (e) {
                    return e.msgKeys;
                  }),
                ),
              ),
              s = await o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["message-info", "message", "chat", "participant"],
                  async function () {
                    var n = await Promise.all([
                        o("WAWebSchemaMessageInfo")
                          .getMessageInfoTable()
                          .bulkGet(
                            i.map(function (e) {
                              var t = e[0],
                                n = e[1];
                              return t;
                            }),
                          ),
                        o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(l),
                      ]),
                      s = n[0],
                      u = n[1],
                      c = new Map(
                        l.map(function (e, t) {
                          return [e, u[t]];
                        }),
                      ),
                      m = r("compactMap")(s, function (e, t) {
                        var n = i[t],
                          r = n[0],
                          o = r[0],
                          a = r[1],
                          l = n[1];
                        if (!l) return null;
                        if (!e)
                          return {
                            delivery: l.delivery,
                            read: l.read,
                            played: l.played,
                            msgKey: o,
                            receiverUserJid: a,
                            deviceDelivered: Array.from(l.deviceDelivered),
                            deviceNotDelivered: [],
                          };
                        var s = l.deviceDelivered;
                        return (
                          e.deviceDelivered.forEach(function (e) {
                            return s.add(e);
                          }),
                          babelHelpers.extends({}, e, {
                            delivery: I(e.delivery, l.delivery),
                            read: I(e.read, l.read),
                            played: I(e.played, l.played),
                            deviceDelivered: Array.from(s),
                            deviceNotDelivered: e.deviceNotDelivered.filter(
                              function (e) {
                                return !s.has(e);
                              },
                            ),
                          })
                        );
                      });
                    await o("WAWebSchemaMessageInfo")
                      .getMessageInfoTable()
                      .bulkCreateOrReplace(m);
                    var p = await e.$7(t, l),
                      _ = Array.from(p.entries()),
                      f = r("compactMap")(_, function (e) {
                        var t = e[0],
                          n = e[1],
                          o = r("WAWebMsgKey").fromString(t),
                          i = o.remote;
                        if (i.isUser() || i.isGroup() || i.isStatus())
                          return S(t, c.get(t), n, a.has(t));
                      }),
                      g = k(f);
                    return (
                      await o("WAWebSchemaMessage")
                        .getMessageTable()
                        .bulkCreateOrMerge(g)
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
                      { ackUpdates: g, receiptMsgKeyToMsg: c }
                    );
                  },
                );
            (L(a, s.receiptMsgKeyToMsg, s.ackUpdates),
              o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
                updates: s.ackUpdates.map(function (e) {
                  var t = e.ack,
                    n = e.id;
                  return { id: r("WAWebMsgKey").from(n), ack: t };
                }),
              }),
              o("WAWebBackendApi").frontendFireAndForget("updateMsgInfo", {
                updates: n
                  .flatMap(function (e) {
                    var t = e.ack,
                      n = e.msgKeys,
                      a = e.receiverId,
                      i = e.ts;
                    return n.map(function (e) {
                      var n = s.receiptMsgKeyToMsg.get(e);
                      if (n != null) {
                        var l = r("WAWebMsgKey").from(n.id);
                        if (
                          l.fromMe &&
                          (l.remote.isUser() ||
                            l.remote.isGroup() ||
                            l.remote.isStatus())
                        ) {
                          var u = o("WAWebWidFactory").asUserWidOrThrow(a);
                          if (!o("WAWebUserUtils").isMeAccount(u))
                            return { msgKey: l, ts: i, participant: u, ack: t };
                        }
                      }
                    });
                  })
                  .filter(Boolean),
              }),
              this.$6(this.$5(n)).catch(function () {
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
              (await o("WAPromiseMap").promiseMap(t, b),
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
    async function b(e) {
      var t = e.msgKeys.map(function (e) {
        return r("WAWebMsgKey").from(e);
      });
      if (e.remote.isStatus()) {
        await o("WAWebMessageReceiptUtils").markStatusesReadFromPeer(
          t.map(o("WAWebLidStatusMigrationKeyUtils").matKeyConvert),
          e.ts,
        );
        return;
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
          return (
            await v(e.msgKeys).catch(function (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "handleOnlinePeerReceipt: failed to store played acks",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("online-peer-played-db-update-failed");
            }),
            o("WAWebBackendApi").frontendSendAndReceive("updateMsgPeerAcks", {
              msgKeys: t,
              ack: o("WAWebAck").ACK.PLAYED,
              t: e.ts,
            })
          );
      }
    }
    function v(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "chat"], async function () {
          var t = await o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(e);
          await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkCreateOrMerge(
              r("compactMap")(t, function (e) {
                var t;
                return e != null &&
                  ((t = e.ack) != null ? t : Number.NEGATIVE_INFINITY) <
                    o("WAWebAck").ACK.PLAYED
                  ? { id: e.id, ack: o("WAWebAck").ACK.PLAYED }
                  : null;
              }),
            );
        });
    }
    function S(e, t, n, r) {
      var a;
      if (t != null && t.isScheduledMsg !== !0) {
        if (n === o("WAWebAck").ACK.FAILED && r)
          return R(e, t)
            ? { id: t.id.toString(), ack: o("WAWebAck").ACK.FAILED }
            : void 0;
        if (n > ((a = t.ack) != null ? a : Number.NEGATIVE_INFINITY))
          return { id: t.id.toString(), ack: n };
      }
    }
    function R(e, t) {
      return (
        r("WAWebMsgKey").fromString(e).id === r("WAWebMsgKey").from(t.id).id &&
        (t.ack === o("WAWebAck").ACK.CLOCK || t.ack === o("WAWebAck").ACK.SENT)
      );
    }
    function L(e, t, n) {
      var r = new Set(
        n
          .filter(function (e) {
            var t = e.ack;
            return t === o("WAWebAck").ACK.FAILED;
          })
          .map(function (e) {
            var t = e.id;
            return t;
          }),
      );
      for (var a of e) {
        var i = t.get(a);
        i == null
          ? E("no_message")
          : r.has(i.id.toString())
            ? E("failed")
            : E("ignored");
      }
    }
    function E(e) {
      o("WAWebBackendApi").frontendFireAndForget("logIntegrityDropOutcome", {
        outcome: e,
      });
    }
    function k(e) {
      var t = new Set(
        e
          .filter(function (e) {
            var t = e.ack;
            return t !== o("WAWebAck").ACK.FAILED;
          })
          .map(function (e) {
            var t = e.id;
            return t;
          }),
      );
      return e.filter(function (e) {
        var n = e.ack,
          r = e.id;
        return n !== o("WAWebAck").ACK.FAILED || !t.has(r);
      });
    }
    function I(e, t) {
      if (e != null && t != null) return Math.min(e, t);
      var n = e != null ? e : t;
      return n != null ? n : void 0;
    }
    var T = new C();
    l.receiptBatcher = T;
  },
  98,
);
