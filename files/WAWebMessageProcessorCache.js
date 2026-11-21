__d(
  "WAWebMessageProcessorCache",
  [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebMessageBatchWriter",
    "WAWebMessageReceiveFlow",
    "WAWebNoop",
    "WAWebPromiseQueue",
    "WAWebSendOfflineDeliveryReceiptJob",
    "WAWebSignalProtocolStore",
    "WAWebSignalSnapshotWriter",
    "asyncToGeneratorRuntime",
    "err",
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
      C = 75e3,
      b = (function () {
        function t() {
          var t = this;
          ((this.$1 = []),
            (this.$2 = []),
            (this.$3 = new (o("WAWebPromiseQueue").PromiseQueue)()),
            (this.$4 = 0),
            (this.$6 = new Map()),
            (this.$7 = !1),
            (this.$8 = new Set()),
            (this.$9 = new Set()),
            (this.$10 = function () {
              return t.createSnapshot();
            }),
            (this.$11 = null),
            (this.$12 = null),
            (this.$13 = null),
            (this.$20 = function () {
              return t.$19();
            }),
            (this.$5 = new (o("WAShiftTimer").ShiftTimer)(function () {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] flushing cache due to timeout",
                  ])),
              ),
                t.createSnapshot());
            })));
        }
        var a = t.prototype;
        return (
          (a.replaceWith = function (t) {
            return (this.createSnapshot(), (this.$13 = t), this.$3.wait());
          }),
          (a.size = function () {
            return this.$13 != null
              ? this.$13.size()
              : (y || (y = n("Promise"))).resolve(this.$1.length);
          }),
          (a.checkpointQueueSize = function () {
            return this.$13 != null
              ? this.$13.checkpointQueueSize()
              : (y || (y = n("Promise"))).resolve(this.$3.size());
          }),
          (a.checkpointQueueWait = function () {
            return this.$13 != null
              ? this.$13.checkpointQueueWait()
              : this.$3.wait();
          }),
          (a.addMessages = function (t, r) {
            var e;
            if ((r === void 0 && (r = !1), this.$13 != null))
              return this.$13.addMessages(t, r);
            var a = this.$11;
            if (a != null) return (y || (y = n("Promise"))).reject(a.error);
            (e = this.$1).push.apply(e, t);
            var i =
              t.length === 0 && this.$8.size > 0
                ? (y || (y = n("Promise"))).resolve()
                : this.$14();
            if ((this.$15(t), r))
              return ((this.$7 = !0), this.createSnapshot(), i);
            this.$7 = !1;
            var l = t.map(function (e) {
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
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] add len=",
                    " nextIdx=",
                    ": ",
                    "",
                  ])),
                this.$1.length,
                this.$4,
                l,
              ),
              this.$1.length >=
                o("WAWebMessageBatchWriter").getMessageBatchMaxSize())
            )
              return (this.createSnapshot(), i);
            var u = o("WAWebMessageBatchWriter").getMessageBatchTimeoutMs();
            return (
              u > 0 && !this.$5.isScheduled() && this.$5.onOrBefore(u),
              i
            );
          }),
          (a.addAdditionalInfo = function (t, n) {
            if ((n === void 0 && (n = !1), this.$13 != null)) {
              this.$13.addAdditionalInfo(t, n);
              return;
            }
            if (this.$11 == null && (this.$2.push(t), n)) {
              var e = this.$2;
              ((this.$2 = []),
                o("WAWebMessageBatchWriter").processMsgAdditionalInfo(e));
            }
          }),
          (a.holdCheckpointUntilMessageStaged = function (t) {
            var e = this;
            if (this.$13 != null)
              return this.$13.holdCheckpointUntilMessageStaged(t);
            if (this.$11 != null) return null;
            var n = new (o("WAShiftTimer").ShiftTimer)(function () {
              return e.expireCheckpointHolds();
            });
            n.onOrBefore(C);
            var r = { msgKey: t, expiry: n };
            return (
              this.$8.add(r),
              function () {
                (e.$16(r), e.$17());
              }
            );
          }),
          (a.isFailClosed = function () {
            return this.$13 != null
              ? this.$13.isFailClosed()
              : this.$11 != null;
          }),
          (a.expireCheckpointHolds = function () {
            this.$11 != null ||
              this.$8.size === 0 ||
              (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-cache] checkpoint hold expired: holds=",
                      " deferred=",
                      " cached=",
                      "",
                    ])),
                  this.$8.size,
                  this.$9.size,
                  this.$1.length,
                )
                .sendLogs("message-cache-checkpoint-hold-expired"),
              this.$18({
                reason: "checkpoint_hold_expired",
                error: r("err")("Message cache checkpoint hold expired"),
              }));
          }),
          (a.stopCommits = function () {
            var e;
            ((e = this.$11) == null ? void 0 : e.reason) !==
              "commits_stopped" &&
              (this.$6.forEach(function (e) {
                var t = e.promise;
                t.catch(r("WAWebNoop"));
              }),
              this.$18({
                reason: "commits_stopped",
                error: r("err")("Message cache commits stopped"),
              }));
          }),
          (a.$18 = function (t) {
            var e = this,
              n,
              r;
            ((this.$11 = t),
              this.$5.cancel(),
              this.$8.forEach(function (t) {
                return e.$16(t);
              }),
              (n = this.$12) == null || n.call(this, t),
              this.$17(),
              (this.$1 = []),
              (this.$2 = []),
              (r = this.$6.get(this.$4)) == null ||
                r.markCheckpointDone(t.error));
          }),
          (a.onFailClosed = function (t) {
            this.$12 = t;
          }),
          (a.$14 = function () {
            var e = this,
              t = this.$4;
            if (!this.$6.has(t)) {
              var o,
                a = function (t) {};
              this.$6.set(t, {
                promise: new (y || (y = n("Promise")))(function (e, t) {
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
          (a.$15 = function (t) {
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
          (a.$16 = function (t) {
            (t.expiry.cancel(), this.$8.delete(t));
          }),
          (a.$17 = function () {
            if (!(this.$8.size > 0 || this.$9.size === 0)) {
              var e = this.$9;
              ((this.$9 = new Set()),
                e.forEach(function (e) {
                  return e();
                }));
            }
          }),
          (a.$19 = function () {
            var e = this.$11;
            if ((e == null ? void 0 : e.reason) === "commits_stopped")
              throw e.error;
          }),
          (a.writeSignalState = function (t) {
            var e = this;
            if (this.$13 != null) return this.$13.writeSignalState(t);
            var r = this.$11;
            if (r != null) return (y || (y = n("Promise"))).reject(r.error);
            var a = o("WAWebSignalProtocolStore").getSignalProtocolStore();
            if (!t && !a.hasPendingPersistWrites())
              return (y || (y = n("Promise"))).resolve();
            if (this.$8.size > 0)
              return new (y || (y = n("Promise")))(function (n) {
                e.$9.add(function () {
                  return n(e.writeSignalState(t));
                });
              });
            this.createSnapshot();
            var i = a.generateSnapshot();
            return this.$3.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (e.$19(),
                  i != null
                    ? yield o("WAWebSignalSnapshotWriter").writeSignalSnapshot(
                        i,
                        e.$20,
                      )
                    : a.hasPendingPersistWrites() &&
                      (yield a.flushBufferToDiskIfNotMemOnlyMode(e.$20)));
              }),
            );
          }),
          (a.createSnapshot = function () {
            var e,
              t,
              r = this;
            if (this.$13 != null) {
              this.$13.createSnapshot();
              return;
            }
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "MessageProcessorCache: missing doneFn",
                                ])),
                            )
                            .sendLogs("message-cache-missing-doneFn");
                        },
                  y = o("WAWebSignalProtocolStore")
                    .getSignalProtocolStore()
                    .generateSnapshot(),
                  C = o("WAWebMessageBatchWriter").getCheckpointStanzaIds(a);
                (this.$3.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                      (r.$19(),
                        yield o("WAWebMessageBatchWriter").writeMessageBatch(
                          a,
                          C.all,
                        ),
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": messages added to table",
                            ])),
                          l,
                          s,
                        ),
                        r.$19(),
                        y != null &&
                          (o(
                            "WAWebMessageReceiveFlow",
                          ).markMessageReceiveCheckpoint(
                            C.all,
                            "checkpoint_signal_write_start",
                          ),
                          yield o(
                            "WAWebSignalSnapshotWriter",
                          ).writeSignalSnapshot(y, r.$20),
                          o(
                            "WAWebMessageReceiveFlow",
                          ).markMessageReceiveCheckpoint(
                            C.all,
                            "checkpoint_signal_write_end",
                          ),
                          o("WALogger").LOG(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
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
                          C.aggregatedReceipts.filter(function (t) {
                            return !e.includes(t);
                          }),
                          { batchSize: a.length, signalDirtyCount: S(y) },
                        ),
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": aggregated receipts sent",
                            ])),
                          l,
                          s,
                        ),
                        o("WAWebMessageBatchWriter").processMsgAdditionalInfo(
                          i,
                        ),
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": additional info processed",
                            ])),
                          l,
                          s,
                        ));
                    } catch (e) {
                      (o("WALogger").WARN(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
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
                        ).failMessageReceiveCheckpoint(C.all),
                        u(e));
                      return;
                    }
                    (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[message-cache] before markCheckpointDone",
                        ])),
                    ),
                      u());
                  }),
                ),
                  o("WAWebMessageBatchWriter").handleChangedAddressingMode(
                    a,
                    function () {
                      return !r.$7;
                    },
                  ));
              }
            }
          }),
          t
        );
      })(),
      v = new b();
    function S(e) {
      return e == null
        ? 0
        : e.sessionUpdate.length +
            e.identityUpdate.length +
            e.senderKeyUpdate.length +
            e.preKeyRemove.length +
            e.sessionRemove.length +
            e.identityRemove.length;
    }
    l.messageProcessorCache = v;
  },
  98,
);
