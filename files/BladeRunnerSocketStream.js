__d(
  "BladeRunnerSocketStream",
  [
    "BladeRunnerStream",
    "BladeRunnerStreamState",
    "BladeRunnerStreamStatus",
    "Promise",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "asyncToGeneratorRuntime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 4,
      u = { reason: "stream_dead" },
      c = (function (t) {
        function a(e, n, o) {
          var a;
          return (
            (a = t.call(this, e) || this),
            (a.$BladeRunnerSocketStream$p_1 = o),
            (a.$BladeRunnerSocketStream$p_2 = new (r("BladeRunnerStreamState"))(
              n,
            )),
            a.$BladeRunnerSocketStream$p_2.setRetriesAllowed(s),
            a
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.start = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e) {
              (t.send(), e());
            });
          }),
          (i.send = function () {
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
          (i.amendWithAck = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var o,
                  a = this.$BladeRunnerSocketStream$p_2.getRequest(),
                  i = a.getInstrumentationData();
                if (i) {
                  var l, s;
                  ((i.auxId = r("uuidv4")()),
                    (l = a.e2eLogger) == null ||
                      l.logE2EEvent(
                        r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                        r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                        {
                          data_size:
                            t == null || (s = t.length) == null
                              ? void 0
                              : s.toString(),
                        },
                        i.auxId,
                      ));
                }
                if (this.canAmend()) {
                  if (i) {
                    var c, d;
                    (c = a.e2eLogger) == null ||
                      c.logE2EEvent(
                        r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                        r("RequestStreamE2EClientLoggerEvent").SENT,
                        {
                          data_size:
                            t == null || (d = t.length) == null
                              ? void 0
                              : d.toString(),
                        },
                        i.auxId,
                      );
                  }
                  return this.$BladeRunnerSocketStream$p_1.sendAmendmentWithAck(
                    a.streamId,
                    this.$BladeRunnerSocketStream$p_3(t),
                    i == null ? null : JSON.stringify(i),
                  );
                }
                return (
                  (o = a.e2eLogger) == null ||
                    o.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                      r("RequestStreamE2EClientLoggerEvent").FAILURE,
                      u,
                      i == null ? void 0 : i.auxId,
                    ),
                  (e || (e = n("Promise"))).reject(
                    "Stream is closed or not accepted",
                  )
                );
              },
            );
            function o(e) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (i.amendFireAndForget = function (t) {
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
              var s;
              (s = e.e2eLogger) == null ||
                s.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                  r("RequestStreamE2EClientLoggerEvent").FAILURE,
                  u,
                  n == null ? void 0 : n.auxId,
                );
              var c = new Error("Stream is closed or not accepted");
              throw (c.stack, c);
            }
          }),
          (i.amendWithoutAck = function (t) {
            this.amendFireAndForget(t);
          }),
          (i.$BladeRunnerSocketStream$p_3 = function (t) {
            return typeof t == "object"
              ? btoa(new TextDecoder("utf8").decode(t))
              : t;
          }),
          (i.cancel = function () {
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
          (i.isAlive = function () {
            return this.$BladeRunnerSocketStream$p_2.isAlive();
          }),
          (i.canAmend = function () {
            return this.$BladeRunnerSocketStream$p_2.canAmend();
          }),
          (i.getStatus = function () {
            return this.$BladeRunnerSocketStream$p_2.getLastStatus();
          }),
          (i.getStreamId = function () {
            return this.$BladeRunnerSocketStream$p_2.getRequest().streamId;
          }),
          a
        );
      })(r("BladeRunnerStream"));
    l.default = c;
  },
  98,
);
