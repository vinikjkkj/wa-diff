__d(
  "WAWebMessageProcessorCache",
  [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBReportingTokenUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGroupDatabaseJob",
    "WAWebHandleMessageTypes",
    "WAWebHandleMsgCommon",
    "WAWebIdbTransactionCounter",
    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
    "WAWebMessageReceiveFlow",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPromiseQueue",
    "WAWebSendOfflineDeliveryReceiptJob",
    "WAWebSignalProtocolStore",
    "WAWebStoreMsgs",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:13546",
    "err",
    "gkx",
    "nullthrows",
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
      y,
      C,
      b = (e = n("cr:13546")) != null ? e : {},
      v = b.handleAddressingModeMismatch;
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
    }
    function R() {
      return L() > 0;
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_offline_message_processor_timeout_seconds",
      );
    }
    var E = 75e3,
      k = (function () {
        function e() {
          var e = this;
          ((this.$1 = []),
            (this.$2 = []),
            (this.$3 = new (o("WAWebPromiseQueue").PromiseQueue)()),
            (this.$4 = 0),
            (this.$6 = new Map()),
            (this.$7 = !1),
            (this.$8 = new Set()),
            (this.$9 = new Set()),
            (this.$10 = function () {
              return e.createSnapshot();
            }),
            (this.$11 = null),
            (this.$12 = null),
            (this.$5 = new (o("WAShiftTimer").ShiftTimer)(function () {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] flushing cache due to timeout",
                  ])),
              ),
                e.createSnapshot());
            })));
        }
        var t = e.prototype;
        return (
          (t.size = function () {
            return (C || (C = n("Promise"))).resolve(this.$1.length);
          }),
          (t.checkpointQueueSize = function () {
            return (C || (C = n("Promise"))).resolve(this.$3.size());
          }),
          (t.checkpointQueueWait = function () {
            return this.$3.wait();
          }),
          (t.addMessages = function (t, r) {
            var e;
            if ((r === void 0 && (r = !1), this.$11 != null))
              return (C || (C = n("Promise"))).reject(this.$11);
            (e = this.$1).push.apply(e, t);
            var a =
              t.length === 0 && this.$8.size > 0
                ? (C || (C = n("Promise"))).resolve()
                : this.$13();
            if ((this.$14(t), r))
              return ((this.$7 = !0), this.createSnapshot(), a);
            this.$7 = !1;
            var i = t.map(function (e) {
              var t, n, r, o;
              return e.msg != null
                ? "msg " +
                    ((t =
                      (n = e.msg) == null || (n = n.id) == null
                        ? void 0
                        : n.id) != null
                      ? t
                      : "")
                : "receipt " +
                    (((r = e.receiptInfo) == null ? void 0 : r.externalId) ||
                      ((o = e.duplicateMsgReceiptInfo) == null
                        ? void 0
                        : o.externalId) ||
                      "");
            });
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] add len=",
                    " nextIdx=",
                    ": ",
                    "",
                  ])),
                this.$1.length,
                this.$4,
                i,
              ),
              this.$1.length >= S()
                ? (this.createSnapshot(), a)
                : (R() &&
                    !this.$5.isScheduled() &&
                    this.$5.onOrBefore(L() * 1e3),
                  a)
            );
          }),
          (t.addAdditionalInfo = function (t, n) {
            if (
              (n === void 0 && (n = !1),
              this.$11 == null && (this.$2.push(t), n))
            ) {
              var e = this.$2;
              ((this.$2 = []), this.$15(e));
            }
          }),
          (t.holdCheckpointUntilMessageStaged = function (t) {
            var e = this;
            if (this.$11 != null) return null;
            var n = new (o("WAShiftTimer").ShiftTimer)(function () {
              return e.expireCheckpointHolds();
            });
            n.onOrBefore(E);
            var r = { msgKey: t, expiry: n };
            return (
              this.$8.add(r),
              function () {
                (e.$16(r), e.$17());
              }
            );
          }),
          (t.hasCheckpointHoldExpired = function () {
            return this.$11 != null;
          }),
          (t.expireCheckpointHolds = function () {
            var e = this,
              t,
              n;
            if (!(this.$11 != null || this.$8.size === 0)) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-cache] checkpoint hold expired: holds=",
                      " deferred=",
                      " cached=",
                      "",
                    ])),
                  this.$8.size,
                  this.$9.size,
                  this.$1.length,
                )
                .sendLogs("message-cache-checkpoint-hold-expired");
              var a = r("err")("Message cache checkpoint hold expired");
              ((this.$11 = a),
                this.$5.cancel(),
                this.$8.forEach(function (t) {
                  return e.$16(t);
                }),
                (t = this.$12) == null || t.call(this, a),
                this.$17(),
                (this.$1 = []),
                (this.$2 = []),
                (n = this.$6.get(this.$4)) == null || n.markCheckpointDone(a));
            }
          }),
          (t.onCheckpointHoldExpired = function (t) {
            this.$12 = t;
          }),
          (t.handleChangedAddressingMode = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = new Map();
                e.forEach(function (e) {
                  var n = e.msg;
                  if (n != null && n.id.remote.isGroup()) {
                    var r;
                    ((n == null ? void 0 : n.groupAddressingMode) === "pn"
                      ? (r = o("WAWebHandleMsgCommon")
                          .STANZA_MSG_ADDRESSING_MODE.pn)
                      : (n == null ? void 0 : n.groupAddressingMode) ===
                          "lid" &&
                        (r = o("WAWebHandleMsgCommon")
                          .STANZA_MSG_ADDRESSING_MODE.lid),
                      r != null && t.set(n.id.remote.toString(), r));
                  }
                });
                var a = Array.from(t.keys(), o("WAWebWidFactory").createWid),
                  i = yield o(
                    "WAWebGetGroupAddressingMode",
                  ).bulkGetGroupAddressingMode(a),
                  l = [];
                for (var s of t.entries()) {
                  var u = s[0],
                    c = s[1];
                  i.get(u) !== c && l.push(o("WAWebWidFactory").createWid(u));
                }
                (this.$7 ||
                  (yield o(
                    "WAWebGroupDatabaseJob",
                  ).bulkMarkGroupParticipantStaleJob(l)),
                  yield (C || (C = n("Promise"))).all(
                    l.map(function (e) {
                      return v == null
                        ? void 0
                        : v(e, {
                            localAddressingMode: i.get(e.toString()),
                            serverAddressingMode: r("nullthrows")(
                              t.get(e.toString()),
                              "missing server addressing mode for group",
                            ),
                            mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                              .MISMATCH_ORIGIN_TYPE.INCOMING_GROUP_MESSAGE,
                          });
                    }),
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$13 = function () {
            var e = this,
              t = this.$4;
            if (!this.$6.has(t)) {
              var o,
                a = function (t) {};
              this.$6.set(t, {
                promise: new (C || (C = n("Promise")))(function (e, t) {
                  ((o = e), (a = t));
                }),
                markCheckpointDone: function (r) {
                  if ((e.$6.delete(t), r != null)) {
                    a(r);
                    return;
                  }
                  o();
                },
              });
            }
            return r("nullthrows")(this.$6.get(t)).promise;
          }),
          (t.$14 = function (t) {
            var e = this;
            this.$8.size !== 0 &&
              (this.$8.forEach(function (n) {
                t.some(function (e) {
                  var t = e.msg;
                  return t == null ? void 0 : t.id.equals(n.msgKey);
                }) && e.$16(n);
              }),
              this.$17());
          }),
          (t.$16 = function (t) {
            (t.expiry.cancel(), this.$8.delete(t));
          }),
          (t.$17 = function () {
            if (!(this.$8.size > 0 || this.$9.size === 0)) {
              var e = this.$9;
              ((this.$9 = new Set()),
                e.forEach(function (e) {
                  return e();
                }));
            }
          }),
          (t.$18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = [];
                e.forEach(function (e) {
                  var t = e.msg;
                  t != null && n.push(t);
                });
                var a = o(
                    "WAWebIdbTransactionCounter",
                  ).getIdbTransactionCount(),
                  i = r("gkx")("20665")
                    ? o(
                        "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                      ).msgProcessReporter.startMarker(
                        o(
                          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                        ).msgProcessReporter.stage.DBStoring,
                      )
                    : null;
                (yield o("WAWebStoreMsgs").storeMsgs(
                  o(
                    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
                  ).withoutRoutedBrazilPaymentStateUpdates(n),
                ),
                  i == null || i(),
                  o(
                    "WAWebMessageReceiveFlow",
                  ).annotateMessageReceiveStorageCommit(t, {
                    batchSize: n.length,
                    transactionCount:
                      o("WAWebIdbTransactionCounter").getIdbTransactionCount() -
                      a,
                  }),
                  yield o(
                    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
                  ).keepAndApplyBrazilPaymentStateUpdatesInBatch(n));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e
                  .filter(function (e) {
                    return (
                      e.type ===
                      o("WAWebHandleMessageTypes").MsgAdditionalInfoType
                        .ReportingInfo
                    );
                  })
                  .map(function (e) {
                    return e.data;
                  });
                o("WAWebDBReportingTokenUtils").handleAddReportingInfos(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.writeSignalState = function (t) {
            var e = this;
            if (this.$11 != null)
              return (C || (C = n("Promise"))).reject(this.$11);
            var r = o("WAWebSignalProtocolStore").getSignalProtocolStore();
            if (!t && !r.hasPendingPersistWrites())
              return (C || (C = n("Promise"))).resolve();
            if (this.$8.size > 0)
              return new (C || (C = n("Promise")))(function (n) {
                e.$9.add(function () {
                  return n(e.writeSignalState(t));
                });
              });
            this.createSnapshot();
            var a = r.generateSnapshot();
            return this.$3.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                a != null
                  ? yield D(a)
                  : r.hasPendingPersistWrites() &&
                    (yield r.flushBufferToDiskIfNotMemOnlyMode());
              }),
            );
          }),
          (t.createSnapshot = function () {
            var e,
              t,
              r = this;
            if (this.$11 == null) {
              if (this.$8.size > 0) {
                this.$9.add(this.$10);
                return;
              }
              var a = this.$1,
                i = this.$2;
              ((this.$1 = []),
                (this.$2 = []),
                this.$5.isScheduled() && this.$5.cancel());
              var l = this.$4,
                s = l + a.length;
              if (
                ((this.$4 = s),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-cache] createSnapshot ",
                      "-",
                      ": ",
                      " messages/receipts",
                    ])),
                  l,
                  s,
                  a.length,
                ),
                a.length !== 0)
              ) {
                var u =
                    (e =
                      (t = this.$6.get(l)) == null
                        ? void 0
                        : t.markCheckpointDone) != null
                      ? e
                      : function (e) {
                          o("WALogger")
                            .ERROR(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "MessageProcessorCache: missing doneFn",
                                ])),
                            )
                            .sendLogs("message-cache-missing-doneFn");
                        },
                  c = o("WAWebSignalProtocolStore")
                    .getSignalProtocolStore()
                    .generateSnapshot(),
                  b = T(a);
                (this.$3.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                      (o(
                        "WAWebMessageReceiveFlow",
                      ).markMessageReceiveCheckpoint(
                        b.all,
                        "storage_commit_start",
                      ),
                        yield (C || (C = n("Promise"))).all([
                          r.$18(a, b.all),
                          o(
                            "WAWebDBCreateLidPnMappings",
                          ).flushLidPnMappingsToDb(),
                        ]),
                        o(
                          "WAWebMessageReceiveFlow",
                        ).markMessageReceiveCheckpoint(
                          b.all,
                          "storage_commit_end",
                        ),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": messages added to table",
                            ])),
                          l,
                          s,
                        ),
                        c != null &&
                          (o(
                            "WAWebMessageReceiveFlow",
                          ).markMessageReceiveCheckpoint(
                            b.all,
                            "checkpoint_signal_write_start",
                          ),
                          yield D(c),
                          o(
                            "WAWebMessageReceiveFlow",
                          ).markMessageReceiveCheckpoint(
                            b.all,
                            "checkpoint_signal_write_end",
                          ),
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[message-cache] createSnapshot ",
                                "-",
                                ": signal stores updated",
                              ])),
                            l,
                            s,
                          )));
                      var e = yield o(
                        "WAWebSendOfflineDeliveryReceiptJob",
                      ).sendAggregateOfflineReceipts(a);
                      (o("WAWebMessageReceiveFlow").endMessageReceiveWithNack(
                        e,
                      ),
                        o(
                          "WAWebMessageReceiveFlow",
                        ).endMessageReceiveWithAggregatedReceipt(
                          b.aggregatedReceipts.filter(function (t) {
                            return !e.includes(t);
                          }),
                          { batchSize: a.length, signalDirtyCount: x(c) },
                        ),
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": aggregated receipts sent",
                            ])),
                          l,
                          s,
                        ),
                        yield r.$15(i),
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": additional info processed",
                            ])),
                          l,
                          s,
                        ));
                    } catch (e) {
                      (o("WALogger").WARN(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": failed: ",
                            "",
                          ])),
                        l,
                        s,
                        e,
                      ),
                        o(
                          "WAWebMessageReceiveFlow",
                        ).failMessageReceiveCheckpoint(b.all),
                        u(e));
                      return;
                    }
                    (o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[message-cache] before markCheckpointDone",
                        ])),
                    ),
                      u());
                  }),
                ),
                  this.handleChangedAddressingMode(a));
              }
            }
          }),
          e
        );
      })(),
      I = new k();
    function T(e) {
      var t = new Set(),
        n = new Set();
      return (
        e.forEach(function (e) {
          var r,
            o,
            a = e.duplicateMsgReceiptInfo,
            i = e.msg,
            l = e.receiptInfo,
            s =
              (r = l == null ? void 0 : l.externalId) != null
                ? r
                : a == null
                  ? void 0
                  : a.externalId;
          s != null && (n.add(s), t.add(s));
          var u = i == null || (o = i.id) == null ? void 0 : o.id;
          u != null && t.add(u);
        }),
        { all: Array.from(t), aggregatedReceipts: Array.from(n) }
      );
    }
    function D(e) {
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .commitSnapshot(e);
    }
    function x(e) {
      return e == null
        ? 0
        : e.sessionUpdate.length +
            e.identityUpdate.length +
            e.senderKeyUpdate.length +
            e.preKeyRemove.length +
            e.sessionRemove.length +
            e.identityRemove.length;
    }
    l.messageProcessorCache = I;
  },
  98,
);
