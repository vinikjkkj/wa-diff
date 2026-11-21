__d(
  "WAWebInboundMsgMessageWriter",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAShiftTimer",
    "WAWebDecryptsOutsideInboundMsgRows",
    "WAWebGetMessageCache",
    "WAWebMessageBatchWriter",
    "WAWebMessageProcessorCache",
    "WAWebMessageReceiveFlow",
    "WAWebNoop",
    "WAWebPromiseQueue",
    "WAWebSignalStateOneQueueFlushable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t() {
          var e = this;
          ((this.$1 = []),
            (this.$2 = []),
            (this.$3 = null),
            (this.$4 = new (o("WAWebPromiseQueue").PromiseQueue)()),
            (this.$5 = new (o("WAShiftTimer").ShiftTimer)(function () {
              return e.createSnapshot();
            })),
            (this.$6 = !1),
            (this.$7 = []));
        }
        var a = t.prototype;
        return (
          (a.addMessages = function (t, r) {
            var e, a;
            if (
              (r === void 0 && (r = !1), t.length === 0 && this.$1.length === 0)
            )
              return (u || (u = n("Promise"))).resolve();
            var i = o(
              "WAWebSignalStateOneQueueFlushable",
            ).getNextSignalStateWrite();
            (e = this.$1).push.apply(
              e,
              t.map(function (e) {
                return { entry: e, signalStateWrite: i };
              }),
            );
            var l =
              (a = this.$3) != null ? a : new (o("WAResolvable").Resolvable)();
            if (
              ((this.$3 = l),
              (this.$6 = r),
              r ||
                this.$1.length >=
                  o("WAWebMessageBatchWriter").getMessageBatchMaxSize())
            )
              return (this.createSnapshot(), l.promise);
            var s = o("WAWebMessageBatchWriter").getMessageBatchTimeoutMs();
            return (
              s > 0 && !this.$5.isScheduled() && this.$5.onOrBefore(s),
              l.promise
            );
          }),
          (a.addAdditionalInfo = function (t, n) {
            if ((n === void 0 && (n = !1), this.$2.push(t), n)) {
              var e = this.$2;
              ((this.$2 = []),
                o("WAWebMessageBatchWriter").processMsgAdditionalInfo(e));
            }
          }),
          (a.holdCheckpointUntilMessageStaged = function () {
            return r("WAWebNoop");
          }),
          (a.isFailClosed = function () {
            return !1;
          }),
          (a.createSnapshot = function () {
            var t = this,
              a = this.$1,
              i = this.$2,
              l = this.$3;
            if (
              ((this.$1 = []),
              (this.$2 = []),
              (this.$3 = null),
              this.$5.isScheduled() && this.$5.cancel(),
              a.length === 0)
            ) {
              (d(i), l == null || l.resolve());
              return;
            }
            var u = a.map(function (e) {
                var t = e.entry;
                return t;
              }),
              c = o("WAWebMessageBatchWriter").getCheckpointStanzaIds(u).all,
              p = o(
                "WAWebMessageReceiveFlow",
              ).withoutHandedOffMessageReceiveWrites(c);
            (this.$4.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n;
                try {
                  yield o("WAWebMessageBatchWriter").writeMessageBatch(u, p);
                } catch (t) {
                  (o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[inbound-msg-writer] a batch of ",
                          " failed to be written",
                        ])),
                      u.length,
                    )
                    .catching(r("getErrorSafe")(t))
                    .tags("messaging"),
                    o("WAWebMessageReceiveFlow").failMessageReceiveCheckpoint(
                      p,
                    ),
                    l == null || l.reject(t));
                  return;
                }
                ((n = t.$7).push.apply(
                  n,
                  a.filter(function (e) {
                    var t = e.entry;
                    return m(t);
                  }),
                ),
                  d(i),
                  l == null || l.resolve());
              }),
            ),
              o("WAWebMessageBatchWriter")
                .handleChangedAddressingMode(u, function () {
                  return !t.$6;
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[inbound-msg-queue] handling a changed addressing mode failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("messaging")
                    .sendLogs("inbound-msg-changed-addressing-mode-failed");
                }));
          }),
          (a.writeSignalState = function (t) {
            return o(
              "WAWebSignalStateOneQueueFlushable",
            ).writeSignalStateAfterInboundMsgRows();
          }),
          (a.checkpointQueueWait = function () {
            return this.$4.wait();
          }),
          (a.checkpointQueueSize = function () {
            return (u || (u = n("Promise"))).resolve(this.$4.size());
          }),
          (a.size = function () {
            return (u || (u = n("Promise"))).resolve(this.$1.length);
          }),
          (a.startAfter = function (t) {
            this.$4.enqueue(function () {
              return t.catch(r("WAWebNoop"));
            });
          }),
          (a.takeWrittenReceipts = function () {
            var e = this.$7
              .filter(function (e) {
                var t = e.signalStateWrite;
                return o(
                  "WAWebSignalStateOneQueueFlushable",
                ).isSignalStateWriteDurable(t);
              })
              .map(function (e) {
                var t = e.entry;
                return t;
              });
            return (
              (this.$7 = this.$7.filter(function (e) {
                var t = e.signalStateWrite;
                return !o(
                  "WAWebSignalStateOneQueueFlushable",
                ).isSignalStateWriteDurable(t);
              })),
              e
            );
          }),
          t
        );
      })();
    function d(e) {
      e.length > 0 && o("WAWebMessageBatchWriter").processMsgAdditionalInfo(e);
    }
    function m(e) {
      var t = e.duplicateMsgReceiptInfo,
        n = e.msg,
        r = e.receiptInfo;
      return n == null && (r != null || t != null);
    }
    var p = new c(),
      _ = !1;
    function f() {
      (p.startAfter(
        o("WAWebMessageProcessorCache").messageProcessorCache.replaceWith(p),
      ),
        o("WAWebGetMessageCache").setMessageCache(p),
        (_ = !0),
        o(
          "WAWebDecryptsOutsideInboundMsgRows",
        ).noteDecryptOutsideInboundMsgRows());
    }
    function g() {
      return _ ? p : o("WAWebMessageProcessorCache").messageProcessorCache;
    }
    ((l.inboundMsgMessageWriter = p),
      (l.installInboundMsgMessageWriter = f),
      (l.getInboundMsgDrainMessageCache = g));
  },
  98,
);
