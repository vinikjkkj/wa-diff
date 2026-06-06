__d(
  "BladeRunnerSocketStream",
  [
    "BladeRunnerStream",
    "BladeRunnerStreamState",
    "BladeRunnerStreamStatus",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = { reason: "stream_dead" },
      u = (function (t) {
        function n(n, o, a) {
          var i;
          return (
            (i = t.call(this, n) || this),
            (i.$BladeRunnerSocketStream$p_1 = a),
            (i.$BladeRunnerSocketStream$p_2 = new (r("BladeRunnerStreamState"))(
              o,
            )),
            i.$BladeRunnerSocketStream$p_2.setRetriesAllowed(e),
            i
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.start = function () {
            var e = this;
            return new Promise(function (t) {
              (e.send(), t());
            });
          }),
          (a.send = function () {
            var e,
              t,
              n = this.$BladeRunnerSocketStream$p_2.getRequest();
            ((e = n.e2eLogger) == null ||
              e.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                {
                  data_base64_size:
                    (t = n.payload) == null || (t = t.length) == null
                      ? void 0
                      : t.toString(),
                },
              ),
              this.$BladeRunnerSocketStream$p_1.sendNewStreamRequest(
                this.$BladeRunnerSocketStream$p_2,
                this.getStreamHandler(),
              ));
          }),
          (a.amendWithAck = async function (t) {
            var e,
              n = this.$BladeRunnerSocketStream$p_2.getRequest(),
              o = n.getInstrumentationData();
            if (o) {
              var a, i;
              ((o.auxId = r("uuidv4")()),
                (a = n.e2eLogger) == null ||
                  a.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                    r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                    {
                      data_size:
                        t == null || (i = t.length) == null
                          ? void 0
                          : i.toString(),
                    },
                    o.auxId,
                  ));
            }
            if (this.canAmend()) {
              if (o) {
                var l, u;
                (l = n.e2eLogger) == null ||
                  l.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                    r("RequestStreamE2EClientLoggerEvent").SENT,
                    {
                      data_size:
                        t == null || (u = t.length) == null
                          ? void 0
                          : u.toString(),
                    },
                    o.auxId,
                  );
              }
              return this.$BladeRunnerSocketStream$p_1.sendAmendmentWithAck(
                n.streamId,
                this.$BladeRunnerSocketStream$p_3(t),
                o == null ? null : JSON.stringify(o),
              );
            }
            return (
              (e = n.e2eLogger) == null ||
                e.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                  r("RequestStreamE2EClientLoggerEvent").FAILURE,
                  s,
                  o == null ? void 0 : o.auxId,
                ),
              Promise.reject("Stream is closed or not accepted")
            );
          }),
          (a.amendFireAndForget = function (t) {
            var e = this.$BladeRunnerSocketStream$p_2.getRequest(),
              n = e.getInstrumentationData();
            if (n) {
              var o, a;
              ((n.auxId = r("uuidv4")()),
                (o = e.e2eLogger) == null ||
                  o.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                    r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                    {
                      data_size:
                        t == null || (a = t.length) == null
                          ? void 0
                          : a.toString(),
                    },
                    n.auxId,
                  ));
            }
            if (this.canAmend()) {
              if (
                (this.$BladeRunnerSocketStream$p_1.sendAmendment(
                  this.$BladeRunnerSocketStream$p_2.getRequest().streamId,
                  this.$BladeRunnerSocketStream$p_3(t),
                  n == null ? null : JSON.stringify(n),
                ),
                n)
              ) {
                var i, l;
                (i = e.e2eLogger) == null ||
                  i.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                    r("RequestStreamE2EClientLoggerEvent").SENT,
                    {
                      data_size:
                        t == null || (l = t.length) == null
                          ? void 0
                          : l.toString(),
                    },
                    n.auxId,
                  );
              }
            } else {
              var u;
              (u = e.e2eLogger) == null ||
                u.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                  r("RequestStreamE2EClientLoggerEvent").FAILURE,
                  s,
                  n == null ? void 0 : n.auxId,
                );
              var c = new Error("Stream is closed or not accepted");
              throw (c.stack, c);
            }
          }),
          (a.amendWithoutAck = function (t) {
            this.amendFireAndForget(t);
          }),
          (a.$BladeRunnerSocketStream$p_3 = function (t) {
            return typeof t == "object"
              ? btoa(new TextDecoder("utf8").decode(t))
              : t;
          }),
          (a.cancel = function () {
            var e,
              t = this.$BladeRunnerSocketStream$p_2.getRequest();
            ((e = t.e2eLogger) == null ||
              e.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").CANCEL,
                r("RequestStreamE2EClientLoggerEvent").RECEIVED,
              ),
              this.isAlive() &&
                (this.$BladeRunnerSocketStream$p_1.sendCancel(
                  this.$BladeRunnerSocketStream$p_2.getRequest(),
                ),
                this.$BladeRunnerSocketStream$p_2.setLastStatus(
                  o("BladeRunnerStreamStatus").StreamStatus.CLOSED,
                ),
                this.getStreamHandler().onClientCancel()));
          }),
          (a.isAlive = function () {
            return this.$BladeRunnerSocketStream$p_2.isAlive();
          }),
          (a.canAmend = function () {
            return this.$BladeRunnerSocketStream$p_2.canAmend();
          }),
          (a.getStatus = function () {
            return this.$BladeRunnerSocketStream$p_2.getLastStatus();
          }),
          (a.getStreamId = function () {
            return this.$BladeRunnerSocketStream$p_2.getRequest().streamId;
          }),
          n
        );
      })(r("BladeRunnerStream"));
    l.default = u;
  },
  98,
);
