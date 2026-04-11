__d(
  "BladeRunnerEventHandler",
  [
    "BladeRunnerLogger",
    "BladeRunnerStreamStatus",
    "BladeRunnerTypes",
    "BladeRunnerTypesInternal",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "getErrorSafe",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3,
      s = (function () {
        function t(e, t, n) {
          ((this.$2 = e), (this.$1 = t), (this.$3 = n));
        }
        var n = t.prototype;
        return (
          (n.onProxyResponse = function (t) {
            var e, n;
            this.$4(t);
            var a = [];
            for (var i of t.getFrames()) this.$2.witnessFrame(i) && a.push(i);
            var l = this.$2.getRequest();
            ((e = l.e2eLogger) == null ||
              e.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                r("RequestStreamE2EClientLoggerEvent").SENT,
                {},
                (n = t.getInstrumentationData()) == null ? void 0 : n.auxId,
                null,
                t.getInstrumentationDataDfTraceId(),
              ),
              a.length > 0 &&
                this.$5(
                  new (o("BladeRunnerTypesInternal").GatewayStreamBatch)(
                    t.batchId,
                    a,
                    t.instrumentationData,
                  ),
                ));
          }),
          (n.onDisconnect = function () {
            this.$2.resetErrors();
            var e = new (o(
              "BladeRunnerTypesInternal",
            ).GatewayStreamStatusUpdate)();
            ((e.streamId = this.$2.getRequest().streamId),
              (e.status = o("BladeRunnerStreamStatus").StreamStatus.CLOSED),
              (e.shouldRetry = !0),
              (e.retryDelayMs = 0));
            var t = new (o("BladeRunnerTypesInternal").GatewayStreamBatch)(
              null,
              [
                o(
                  "BladeRunnerTypesInternal",
                ).GatewayStreamFrame.newStatusUpdateFrame(e),
              ],
            );
            this.onProxyResponse(t);
          }),
          (n.$4 = function (n) {
            var t = this,
              a = n.getFrames().filter(function (e) {
                return (
                  e.type == o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE
                );
              });
            for (var i of a) {
              var l = i.getStatusUpdate();
              if (
                l.status == o("BladeRunnerStreamStatus").StreamStatus.CLOSED ||
                l.status == o("BladeRunnerStreamStatus").StreamStatus.REJECTED
              ) {
                this.$2.onError();
                var s = l.shouldRetry != null && l.shouldRetry,
                  u = l.message != null ? l.message : "null";
                if (
                  s &&
                  this.$2.getErrorCount() <= this.$2.getRetriesAllowed()
                ) {
                  l.status = o("BladeRunnerStreamStatus").StreamStatus.STOPPED;
                  var c = e;
                  (l.retryDelayMs != null && (c = l.retryDelayMs),
                    r("BladeRunnerLogger").info(
                      "Can retry: stream " +
                        l.streamId +
                        " closed with status " +
                        l.status +
                        ", message " +
                        u +
                        ". Error count: " +
                        this.$2.getErrorCount() +
                        ", retryDelay " +
                        c +
                        "ms. Already retrying: " +
                        this.$2.getRetryRequestScheduled().toString(),
                    ),
                    this.$2.getRetryRequestScheduled()
                      ? r("BladeRunnerLogger").bumpCounter(
                          "stream_closed_already_retrying",
                        )
                      : (r("BladeRunnerLogger").bumpCounter(
                          "stream_closed_will_retry",
                        ),
                        this.$2.setRetryRequestScheduled(!0),
                        c > 0
                          ? r("setTimeoutAcrossTransitions")(function () {
                              return t.$6();
                            }, c)
                          : this.$6()));
                } else
                  (r("BladeRunnerLogger").info(
                    "Will not retry: stream " +
                      l.streamId +
                      " closed with status " +
                      l.status +
                      ", message " +
                      u +
                      ". Error count: " +
                      this.$2.getErrorCount() +
                      ", shouldRetry " +
                      s.toString() +
                      ". Already retrying: " +
                      this.$2.getRetryRequestScheduled().toString(),
                  ),
                    s
                      ? r("BladeRunnerLogger").bumpCounter(
                          "stream_closed_retry_exceeded",
                        )
                      : r("BladeRunnerLogger").bumpCounter(
                          "stream_closed_no_retry",
                        ),
                    this.$3.removeStream(l.streamId));
              }
            }
          }),
          (n.$6 = function () {
            if ((this.$2.setRetryRequestScheduled(!1), this.$2.isAlive())) {
              var e = this.$1.getUpdatedRequestBody();
              (e != null && this.$2.updateRetryRequestPayload(e),
                this.$3.sendRetryStreamRequest(this.$2));
            }
          }),
          (n.$5 = function (t) {
            r("BladeRunnerLogger").bumpCounter("send_to_handler");
            var e = [];
            this.$1.onBatch(t);
            for (var n of t.getFrames())
              try {
                switch (n.type) {
                  case o("BladeRunnerTypes").StreamFrameType.DATA:
                    (this.$1.onData(n.getData()), e.push(n.getData()));
                    break;
                  case o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                    this.$1.onStatusUpdate(n.getStatusUpdate().status);
                    break;
                  case o("BladeRunnerTypes").StreamFrameType.LOG:
                    var a = n.getLog().message;
                    a != null && this.$1.onLog(a);
                    break;
                  case o("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                    break;
                  default:
                    throw new Error("Frame with unexpected type");
                }
              } catch (e) {
                var i = r("getErrorSafe")(e);
                (r("BladeRunnerLogger").bumpCounter("send_to_handler_error"),
                  r("BladeRunnerLogger").exception(
                    i,
                    "Failed sending frame to stream handler",
                  ));
              }
            this.$7(e);
          }),
          (n.$7 = function (t) {
            var e = [];
            for (var n of t)
              if (n.shouldAck === !0 && n.dataId != null) {
                var r = new (o(
                  "BladeRunnerTypesInternal",
                ).GatewayStreamDataAck)();
                ((r.streamId = n.streamId),
                  (r.dataId = n.dataId),
                  (r.success = !0),
                  e.push(r));
              }
            this.$3.sendDataAcks(e);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
