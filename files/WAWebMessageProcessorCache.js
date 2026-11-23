__d(
  "WAWebMessageProcessorCache",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebMessageBatchWriter",
    "WAWebMessageReceiveFlow",
    "WAWebNoop",
    "WAWebPromiseQueue",
    "WAWebSendOfflineDeliveryReceiptJob",
    "WAWebSignalProtocolStore",
    "WAWebSignalSnapshotWriter",
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
      y = 75e3,
      C = (function () {
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
        var n = t.prototype;
        return (
          (n.replaceWith = function (t) {
            return (this.createSnapshot(), (this.$13 = t), this.$3.wait());
          }),
          (n.size = function () {
            return this.$13 != null
              ? this.$13.size()
              : Promise.resolve(this.$1.length);
          }),
          (n.checkpointQueueSize = function () {
            return this.$13 != null
              ? this.$13.checkpointQueueSize()
              : Promise.resolve(this.$3.size());
          }),
          (n.checkpointQueueWait = function () {
            return this.$13 != null
              ? this.$13.checkpointQueueWait()
              : this.$3.wait();
          }),
          (n.addMessages = function (t, n) {
            var e;
            if ((n === void 0 && (n = !1), this.$13 != null))
              return this.$13.addMessages(t, n);
            var r = this.$11;
            if (r != null) return Promise.reject(r.error);
            (e = this.$1).push.apply(e, t);
            var a =
              t.length === 0 && this.$8.size > 0
                ? Promise.resolve()
                : this.$14();
            if ((this.$15(t), n))
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
                i,
              ),
              this.$1.length >=
                o("WAWebMessageBatchWriter").getMessageBatchMaxSize())
            )
              return (this.createSnapshot(), a);
            var l = o("WAWebMessageBatchWriter").getMessageBatchTimeoutMs();
            return (
              l > 0 && !this.$5.isScheduled() && this.$5.onOrBefore(l),
              a
            );
          }),
          (n.addAdditionalInfo = function (t, n) {
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
          (n.holdCheckpointUntilMessageStaged = function (t) {
            var e = this;
            if (this.$13 != null)
              return this.$13.holdCheckpointUntilMessageStaged(t);
            if (this.$11 != null) return null;
            var n = new (o("WAShiftTimer").ShiftTimer)(function () {
              return e.expireCheckpointHolds();
            });
            n.onOrBefore(y);
            var r = { msgKey: t, expiry: n };
            return (
              this.$8.add(r),
              function () {
                (e.$16(r), e.$17());
              }
            );
          }),
          (n.isFailClosed = function () {
            return this.$13 != null
              ? this.$13.isFailClosed()
              : this.$11 != null;
          }),
          (n.expireCheckpointHolds = function () {
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
          (n.stopCommits = function () {
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
          (n.$18 = function (t) {
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
          (n.onFailClosed = function (t) {
            this.$12 = t;
          }),
          (n.$14 = function () {
            var e = this,
              t = this.$4;
            if (!this.$6.has(t)) {
              var n,
                o = function (t) {};
              this.$6.set(t, {
                promise: new Promise(function (e, t) {
                  ((n = e), (o = t));
                }),
                markCheckpointDone: function (a) {
                  if ((e.$6.delete(t), a != null)) {
                    o(a);
                    return;
                  }
                  n();
                },
              });
            }
            return r("nullthrows")(this.$6.get(t)).promise;
          }),
          (n.$15 = function (t) {
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
          (n.$16 = function (t) {
            (t.expiry.cancel(), this.$8.delete(t));
          }),
          (n.$17 = function () {
            if (!(this.$8.size > 0 || this.$9.size === 0)) {
              var e = this.$9;
              ((this.$9 = new Set()),
                e.forEach(function (e) {
                  return e();
                }));
            }
          }),
          (n.$19 = function () {
            var e = this.$11;
            if ((e == null ? void 0 : e.reason) === "commits_stopped")
              throw e.error;
          }),
          (n.writeSignalState = function (t) {
            var e = this;
            if (this.$13 != null) return this.$13.writeSignalState(t);
            var n = this.$11;
            if (n != null) return Promise.reject(n.error);
            var r = o("WAWebSignalProtocolStore").getSignalProtocolStore();
            if (!t && !r.hasPendingPersistWrites()) return Promise.resolve();
            if (this.$8.size > 0)
              return new Promise(function (n) {
                e.$9.add(function () {
                  return n(e.writeSignalState(t));
                });
              });
            this.createSnapshot();
            var a = r.generateSnapshot();
            return this.$3.enqueue(async function () {
              (e.$19(),
                a != null
                  ? await o("WAWebSignalSnapshotWriter").writeSignalSnapshot(
                      a,
                      e.$20,
                    )
                  : r.hasPendingPersistWrites() &&
                    (await r.flushBufferToDiskIfNotMemOnlyMode(e.$20)));
            });
          }),
          (n.createSnapshot = function () {
            var e,
              t,
              n = this;
            if (this.$13 != null) {
              this.$13.createSnapshot();
              return;
            }
            if (this.$11 == null) {
              if (this.$8.size > 0) {
                this.$9.add(this.$10);
                return;
              }
              var r = this.$1,
                a = this.$2;
              ((this.$1 = []),
                (this.$2 = []),
                this.$5.isScheduled() && this.$5.cancel());
              var i = this.$4,
                l = i + r.length;
              if (
                ((this.$4 = l),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-cache] createSnapshot ",
                      "-",
                      ": ",
                      " messages/receipts",
                    ])),
                  i,
                  l,
                  r.length,
                ),
                r.length !== 0)
              ) {
                var s =
                    (e =
                      (t = this.$6.get(i)) == null
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
                  u = o("WAWebSignalProtocolStore")
                    .getSignalProtocolStore()
                    .generateSnapshot(),
                  y = o("WAWebMessageBatchWriter").getCheckpointStanzaIds(r);
                (this.$3.enqueue(async function () {
                  try {
                    (n.$19(),
                      await o("WAWebMessageBatchWriter").writeMessageBatch(
                        r,
                        y.all,
                      ),
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": messages added to table",
                          ])),
                        i,
                        l,
                      ),
                      n.$19(),
                      u != null &&
                        (o(
                          "WAWebMessageReceiveFlow",
                        ).markMessageReceiveCheckpoint(
                          y.all,
                          "checkpoint_signal_write_start",
                        ),
                        await o(
                          "WAWebSignalSnapshotWriter",
                        ).writeSignalSnapshot(u, n.$20),
                        o(
                          "WAWebMessageReceiveFlow",
                        ).markMessageReceiveCheckpoint(
                          y.all,
                          "checkpoint_signal_write_end",
                        ),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": signal stores updated",
                            ])),
                          i,
                          l,
                        )));
                    var e = await o(
                      "WAWebSendOfflineDeliveryReceiptJob",
                    ).sendAggregateOfflineReceipts(r);
                    (o("WAWebMessageReceiveFlow").endMessageReceiveWithNack(e),
                      o(
                        "WAWebMessageReceiveFlow",
                      ).endMessageReceiveWithAggregatedReceipt(
                        y.aggregatedReceipts.filter(function (t) {
                          return !e.includes(t);
                        }),
                        { batchSize: r.length, signalDirtyCount: v(u) },
                      ),
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": aggregated receipts sent",
                          ])),
                        i,
                        l,
                      ),
                      o("WAWebMessageBatchWriter").processMsgAdditionalInfo(a),
                      o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": additional info processed",
                          ])),
                        i,
                        l,
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
                      i,
                      l,
                      e,
                    ),
                      o("WAWebMessageReceiveFlow").failMessageReceiveCheckpoint(
                        y.all,
                      ),
                      s(e));
                    return;
                  }
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[message-cache] before markCheckpointDone",
                      ])),
                  ),
                    s());
                }),
                  o("WAWebMessageBatchWriter").handleChangedAddressingMode(
                    r,
                    function () {
                      return !n.$7;
                    },
                  ));
              }
            }
          }),
          t
        );
      })(),
      b = new C();
    function v(e) {
      return e == null
        ? 0
        : e.sessionUpdate.length +
            e.identityUpdate.length +
            e.senderKeyUpdate.length +
            e.preKeyRemove.length +
            e.sessionRemove.length +
            e.identityRemove.length;
    }
    l.messageProcessorCache = b;
  },
  98,
);
