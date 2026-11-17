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
    "asyncToGeneratorRuntime",
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
      h,
      y = Object.freeze(
        ((e = {}),
        (e[(h = o("WAWebAck")).ACK.SENT] = h.ACK_STRING.DELIVERY),
        (e[h.ACK.RECEIVED] = h.ACK_STRING.DELIVERY),
        (e[h.ACK.READ] = h.ACK_STRING.READ),
        (e[h.ACK.PLAYED] = h.ACK_STRING.PLAYED),
        (e[h.ACK.INACTIVE] = h.ACK_STRING.INACTIVE),
        e),
      ),
      C = { delayMs: 1e3 },
      b = (function () {
        function e() {
          var e = this;
          ((this.$1 = o("WABatcher").createSimpleBatcher(C, function (t) {
            return e.$2(t).then(function () {
              return [];
            });
          })),
            (this.$3 = o("WABatcher").createSimpleBatcher(C, function (t) {
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
            return (g || (g = n("Promise")))
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
                  var r = y[a];
                  if (r == null) {
                    n.length < 3 && n.push(a);
                    return;
                  }
                  var i = t + "," + u,
                    l = e.get(i);
                  if (l)
                    (r !== o("WAWebAck").ACK_STRING.INACTIVE &&
                      (l[r] = D(l[r], s)),
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
                var a = e.filter(function (e) {
                    return e.integrityDrop !== !0;
                  }),
                  i = new Set(
                    e
                      .filter(function (e) {
                        return e.integrityDrop === !0;
                      })
                      .flatMap(function (e) {
                        return e.msgKeys;
                      }),
                  ),
                  l = this.$9(a),
                  s = Array.from(
                    new Set(
                      e.flatMap(function (e) {
                        return e.msgKeys;
                      }),
                    ),
                  ),
                  u = yield o("WAWebModelStorageUtils")
                    .getStorage()
                    .lock(
                      ["message-info", "message", "chat", "participant"],
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var a = yield (g || (g = n("Promise"))).all([
                              o("WAWebSchemaMessageInfo")
                                .getMessageInfoTable()
                                .bulkGet(
                                  l.map(function (e) {
                                    var t = e[0],
                                      n = e[1];
                                    return t;
                                  }),
                                ),
                              o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(s),
                            ]),
                            u = a[0],
                            c = a[1],
                            m = new Map(
                              s.map(function (e, t) {
                                return [e, c[t]];
                              }),
                            ),
                            p = r("compactMap")(u, function (e, t) {
                              var n = l[t],
                                r = n[0],
                                o = r[0],
                                a = r[1],
                                i = n[1];
                              if (!i) return null;
                              if (!e)
                                return {
                                  delivery: i.delivery,
                                  read: i.read,
                                  played: i.played,
                                  msgKey: o,
                                  receiverUserJid: a,
                                  deviceDelivered: Array.from(
                                    i.deviceDelivered,
                                  ),
                                  deviceNotDelivered: [],
                                };
                              var s = i.deviceDelivered;
                              return (
                                e.deviceDelivered.forEach(function (e) {
                                  return s.add(e);
                                }),
                                babelHelpers.extends({}, e, {
                                  delivery: D(e.delivery, i.delivery),
                                  read: D(e.read, i.read),
                                  played: D(e.played, i.played),
                                  deviceDelivered: Array.from(s),
                                  deviceNotDelivered:
                                    e.deviceNotDelivered.filter(function (e) {
                                      return !s.has(e);
                                    }),
                                })
                              );
                            });
                          yield o("WAWebSchemaMessageInfo")
                            .getMessageInfoTable()
                            .bulkCreateOrReplace(p);
                          var _ = yield t.$7(e, s),
                            f = Array.from(_.entries()),
                            h = r("compactMap")(f, function (e) {
                              var t = e[0],
                                n = e[1],
                                o = r("WAWebMsgKey").fromString(t),
                                a = o.remote;
                              if (a.isUser() || a.isGroup() || a.isStatus())
                                return L(t, m.get(t), n, i.has(t));
                            }),
                            y = T(h);
                          return (
                            yield o("WAWebSchemaMessage")
                              .getMessageTable()
                              .bulkCreateOrMerge(y)
                              .catch(function (e) {
                                throw (
                                  o("WALogger")
                                    .ERROR(
                                      d ||
                                        (d =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "_processOtherReceipts: db msg ack update failed: ",
                                              "",
                                            ],
                                          )),
                                      e,
                                    )
                                    .sendLogs(
                                      "process-other-receipts-failed-to-update-db-msg-acks",
                                    ),
                                  e
                                );
                              }),
                            { ackUpdates: y, receiptMsgKeyToMsg: m }
                          );
                        },
                      ),
                    );
                (k(i, u.receiptMsgKeyToMsg, u.ackUpdates),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateMsgModelAcks",
                    {
                      updates: u.ackUpdates.map(function (e) {
                        var t = e.ack,
                          n = e.id;
                        return { id: r("WAWebMsgKey").from(n), ack: t };
                      }),
                    },
                  ),
                  o("WAWebBackendApi").frontendFireAndForget("updateMsgInfo", {
                    updates: a
                      .flatMap(function (e) {
                        var t = e.ack,
                          n = e.msgKeys,
                          a = e.receiverId,
                          i = e.ts;
                        return n.map(function (e) {
                          var n = u.receiptMsgKeyToMsg.get(e);
                          if (n != null) {
                            var l = r("WAWebMsgKey").from(n.id);
                            if (
                              l.fromMe &&
                              (l.remote.isUser() ||
                                l.remote.isGroup() ||
                                l.remote.isStatus())
                            ) {
                              var s = o("WAWebWidFactory").asUserWidOrThrow(a);
                              if (!o("WAWebUserUtils").isMeAccount(s))
                                return {
                                  msgKey: l,
                                  ts: i,
                                  participant: s,
                                  ack: t,
                                };
                            }
                          }
                        });
                      })
                      .filter(Boolean),
                  }),
                  this.$6(this.$5(a)).catch(function () {
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
                  (yield o("WAPromiseMap").promiseMap(e, v),
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgKeys.map(function (e) {
            return r("WAWebMsgKey").from(e);
          });
          if (e.remote.isStatus()) {
            yield o("WAWebMessageReceiptUtils").markStatusesReadFromPeer(
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
                yield R(e.msgKeys).catch(function (e) {
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
                o("WAWebBackendApi").frontendSendAndReceive(
                  "updateMsgPeerAcks",
                  { msgKeys: t, ack: o("WAWebAck").ACK.PLAYED, t: e.ts },
                )
              );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message", "chat"],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(e);
            yield o("WAWebSchemaMessage")
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
          }),
        );
    }
    function L(e, t, n, r) {
      var a;
      if (t != null && t.isScheduledMsg !== !0) {
        if (n === o("WAWebAck").ACK.FAILED && r)
          return E(e, t)
            ? { id: t.id.toString(), ack: o("WAWebAck").ACK.FAILED }
            : void 0;
        if (n > ((a = t.ack) != null ? a : Number.NEGATIVE_INFINITY))
          return { id: t.id.toString(), ack: n };
      }
    }
    function E(e, t) {
      return (
        r("WAWebMsgKey").fromString(e).id === r("WAWebMsgKey").from(t.id).id &&
        (t.ack === o("WAWebAck").ACK.CLOCK || t.ack === o("WAWebAck").ACK.SENT)
      );
    }
    function k(e, t, n) {
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
          ? I("no_message")
          : r.has(i.id.toString())
            ? I("failed")
            : I("ignored");
      }
    }
    function I(e) {
      o("WAWebBackendApi").frontendFireAndForget("logIntegrityDropOutcome", {
        outcome: e,
      });
    }
    function T(e) {
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
    function D(e, t) {
      if (e != null && t != null) return Math.min(e, t);
      var n = e != null ? e : t;
      return n != null ? n : void 0;
    }
    var x = new b();
    l.receiptBatcher = x;
  },
  98,
);
