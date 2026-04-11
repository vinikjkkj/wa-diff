__d(
  "WAWebMessageReceiptBatcher",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "lodash",
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
            return (f || (f = n("Promise")))
              .all([this.$1.runActiveBatch(), this.$3.runActiveBatch()])
              .then(r("WAWebNoop"));
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
          (t.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "processPrivacyModeUpdates",
                    ])),
                ),
                  yield o("WAPromiseMap").promiseMap(
                    e,
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          (yield o(
                            "WAWebHandlePrivacyModeUpdateMsgAction",
                          ).handlePrivacyModeTransition(
                            e.remote,
                            e.deliveryPrivacyMode,
                          ),
                            yield o(
                              "WAWebWorkerSafeBackendApi",
                            ).workerSafeSendAndReceive(
                              "updateBizPrivacyStatus",
                              {
                                msgIds: e.msgKeys,
                                privacyMode: e.deliveryPrivacyMode,
                              },
                            ));
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this.$8(e),
                  a = t
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
                  i = yield o("WAWebApiMessageInfoStore").getHighestMsgAcks(a);
                for (var l of i.entries()) {
                  var s = l[0],
                    u = l[1];
                  n.set(s, u);
                }
                return n;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
                    (r !== h[o("WAWebAck").ACK.INACTIVE] && (l[r] = S(l[r], s)),
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
          (t.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "processOtherReceipts",
                    ])),
                );
                var a = this.$9(e),
                  i = Array.from(
                    new Set(
                      r("lodash").flatMap(e, function (e) {
                        return e.msgKeys;
                      }),
                    ),
                  ),
                  l = yield o("WAWebModelStorageUtils")
                    .getStorage()
                    .lock(
                      ["message-info", "message", "chat"],
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var l = yield (f || (f = n("Promise"))).all([
                              o("WAWebSchemaMessageInfo")
                                .getMessageInfoTable()
                                .bulkGet(
                                  a.map(function (e) {
                                    var t = e[0],
                                      n = e[1];
                                    return t;
                                  }),
                                ),
                              o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(
                                i,
                                !1,
                              ),
                            ]),
                            s = l[0],
                            u = l[1],
                            c = new Map(
                              i.map(function (e, t) {
                                return [e, u[t]];
                              }),
                            ),
                            d = r("compactMap")(s, function (e, t) {
                              var n = a[t],
                                r = n[0],
                                o = r[0],
                                i = r[1],
                                l = n[1];
                              if (!l) return null;
                              if (!e)
                                return {
                                  delivery: l.delivery,
                                  read: l.read,
                                  played: l.played,
                                  msgKey: o,
                                  receiverUserJid: i,
                                  deviceDelivered: Array.from(
                                    l.deviceDelivered,
                                  ),
                                  deviceNotDelivered: [],
                                };
                              var s = l.deviceDelivered;
                              return (
                                e.deviceDelivered.forEach(function (e) {
                                  return s.add(e);
                                }),
                                {
                                  delivery: S(e.delivery, l.delivery),
                                  read: S(e.read, l.read),
                                  played: S(e.played, l.played),
                                  msgKey: e.msgKey,
                                  receiverUserJid: e.receiverUserJid,
                                  deviceDelivered: Array.from(s),
                                  deviceNotDelivered:
                                    e.deviceNotDelivered.filter(function (e) {
                                      return !s.has(e);
                                    }),
                                }
                              );
                            });
                          yield o("WAWebSchemaMessageInfo")
                            .getMessageInfoTable()
                            .bulkCreateOrReplace(d);
                          var m = yield t.$7(e, i),
                            p = Array.from(m.entries()),
                            _ = r("compactMap")(p, function (e) {
                              var t = e[0],
                                n = e[1],
                                o = r("WAWebMsgKey").fromString(t),
                                a = o.remote;
                              if (a.isUser() || a.isGroup() || a.isStatus()) {
                                var i,
                                  l = c.get(t);
                                if (l == null) return;
                                if (
                                  n >
                                  ((i = l.ack) != null
                                    ? i
                                    : Number.NEGATIVE_INFINITY)
                                )
                                  return { id: l.id.toString(), ack: n };
                              }
                            });
                          return { ackUpdates: _, receiptMsgKeyToMsg: c };
                        },
                      ),
                    );
                (yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkCreateOrMerge(l.ackUpdates)
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
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateMsgModelAcks",
                    {
                      updates: l.ackUpdates.map(function (e) {
                        var t = e.ack,
                          n = e.id;
                        return { id: r("WAWebMsgKey").from(n), ack: t };
                      }),
                    },
                  ),
                  o("WAWebBackendApi").frontendFireAndForget("updateMsgInfo", {
                    updates: r("lodash")
                      .flatMap(e, function (e) {
                        var t = e.ack,
                          n = e.msgKeys,
                          a = e.receiverId,
                          i = e.ts;
                        return n.map(function (e) {
                          var n = l.receiptMsgKeyToMsg.get(e);
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
                                return {
                                  msgKey: s,
                                  ts: i,
                                  participant: u,
                                  ack: t,
                                };
                            }
                          }
                        });
                      })
                      .filter(Boolean),
                  }),
                  this.$6(this.$5(e)).catch(function () {
                    o("WALogger").ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "_processOtherReceipts: privacy mode update failed",
                        ])),
                    );
                  }));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "processPeerReceipts",
                    ])),
                );
                var t = e.some(function (e) {
                  return !e.isOffline;
                });
                if (t) {
                  (yield o("WAPromiseMap").promiseMap(e, b),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "handleOnlinePeerReceipt: processed ",
                          " receipts",
                        ])),
                      e.length,
                    ));
                  return;
                }
                var n = e.map(function (e) {
                  var t = e.ack,
                    n = e.msgKeys,
                    r = e.ts;
                  return { ts: r, msgKeys: n, ack: t };
                });
                yield o("WAWebSchemaPeerReadReceipt").getTable().bulkCreate(n);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })();
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              );
            if (e.ack === o("WAWebAck").ACK.PLAYED)
              return o("WAWebBackendApi").frontendSendAndReceive(
                "updateMsgPeerAcks",
                { msgKeys: t, ack: e.ack, t: e.ts },
              );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      if (e != null && t != null) return Math.min(e, t);
      var n = e != null ? e : t;
      return n != null ? n : void 0;
    }
    var R = new C();
    l.receiptBatcher = R;
  },
  98,
);
