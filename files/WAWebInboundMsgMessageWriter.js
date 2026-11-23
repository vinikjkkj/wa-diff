__d(
  "WAWebInboundMsgMessageWriter",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
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
        var n = t.prototype;
        return (
          (n.addMessages = function (t, n) {
            var e, r;
            if (
              (n === void 0 && (n = !1), t.length === 0 && this.$1.length === 0)
            )
              return Promise.resolve();
            var a = o(
              "WAWebSignalStateOneQueueFlushable",
            ).getNextSignalStateWrite();
            (e = this.$1).push.apply(
              e,
              t.map(function (e) {
                return { entry: e, signalStateWrite: a };
              }),
            );
            var i =
              (r = this.$3) != null ? r : new (o("WAResolvable").Resolvable)();
            if (
              ((this.$3 = i),
              (this.$6 = n),
              n ||
                this.$1.length >=
                  o("WAWebMessageBatchWriter").getMessageBatchMaxSize())
            )
              return (this.createSnapshot(), i.promise);
            var l = o("WAWebMessageBatchWriter").getMessageBatchTimeoutMs();
            return (
              l > 0 && !this.$5.isScheduled() && this.$5.onOrBefore(l),
              i.promise
            );
          }),
          (n.addAdditionalInfo = function (t, n) {
            if ((n === void 0 && (n = !1), this.$2.push(t), n)) {
              var e = this.$2;
              ((this.$2 = []),
                o("WAWebMessageBatchWriter").processMsgAdditionalInfo(e));
            }
          }),
          (n.holdCheckpointUntilMessageStaged = function () {
            return r("WAWebNoop");
          }),
          (n.isFailClosed = function () {
            return !1;
          }),
          (n.createSnapshot = function () {
            var t = this,
              n = this.$1,
              a = this.$2,
              i = this.$3;
            if (
              ((this.$1 = []),
              (this.$2 = []),
              (this.$3 = null),
              this.$5.isScheduled() && this.$5.cancel(),
              n.length === 0)
            ) {
              (c(a), i == null || i.resolve());
              return;
            }
            var l = n.map(function (e) {
                var t = e.entry;
                return t;
              }),
              u = o("WAWebMessageBatchWriter").getCheckpointStanzaIds(l).all,
              m = o(
                "WAWebMessageReceiveFlow",
              ).withoutHandedOffMessageReceiveWrites(u);
            (this.$4.enqueue(async function () {
              var s;
              try {
                await o("WAWebMessageBatchWriter").writeMessageBatch(l, m);
              } catch (t) {
                (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[inbound-msg-writer] a batch of ",
                        " failed to be written",
                      ])),
                    l.length,
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("messaging"),
                  o("WAWebMessageReceiveFlow").failMessageReceiveCheckpoint(m),
                  i == null || i.reject(t));
                return;
              }
              ((s = t.$7).push.apply(
                s,
                n.filter(function (e) {
                  var t = e.entry;
                  return d(t);
                }),
              ),
                c(a),
                i == null || i.resolve());
            }),
              o("WAWebMessageBatchWriter")
                .handleChangedAddressingMode(l, function () {
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
          (n.writeSignalState = function (t) {
            return o(
              "WAWebSignalStateOneQueueFlushable",
            ).writeSignalStateAfterInboundMsgRows();
          }),
          (n.checkpointQueueWait = function () {
            return this.$4.wait();
          }),
          (n.checkpointQueueSize = function () {
            return Promise.resolve(this.$4.size());
          }),
          (n.size = function () {
            return Promise.resolve(this.$1.length);
          }),
          (n.startAfter = function (t) {
            this.$4.enqueue(function () {
              return t.catch(r("WAWebNoop"));
            });
          }),
          (n.takeWrittenReceipts = function () {
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
    function c(e) {
      e.length > 0 && o("WAWebMessageBatchWriter").processMsgAdditionalInfo(e);
    }
    function d(e) {
      var t = e.duplicateMsgReceiptInfo,
        n = e.msg,
        r = e.receiptInfo;
      return n == null && (r != null || t != null);
    }
    var m = new u(),
      p = !1;
    function _() {
      (m.startAfter(
        o("WAWebMessageProcessorCache").messageProcessorCache.replaceWith(m),
      ),
        o("WAWebGetMessageCache").setMessageCache(m),
        (p = !0),
        o(
          "WAWebDecryptsOutsideInboundMsgRows",
        ).noteDecryptOutsideInboundMsgRows());
    }
    function f() {
      return p ? m : o("WAWebMessageProcessorCache").messageProcessorCache;
    }
    ((l.inboundMsgMessageWriter = m),
      (l.installInboundMsgMessageWriter = _),
      (l.getInboundMsgDrainMessageCache = f));
  },
  98,
);
