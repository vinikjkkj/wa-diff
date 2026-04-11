__d(
  "BladeRunnerInstrumentedStreamHandler",
  [
    "BladeRunnerDeferredClient",
    "BladeRunnerStreamHandler",
    "BladeRunnerStreamStatus",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 6e4,
      s = (function (t) {
        function n(n, o) {
          var a;
          return (
            (a = t.call(this) || this),
            (a.$BladeRunnerInstrumentedStreamHandler$p_1 = n),
            (a.$BladeRunnerInstrumentedStreamHandler$p_2 = o),
            (a.$BladeRunnerInstrumentedStreamHandler$p_3 = Date.now()),
            (a.$BladeRunnerInstrumentedStreamHandler$p_5 = r(
              "setTimeoutAcrossTransitions",
            )(function () {
              a.$BladeRunnerInstrumentedStreamHandler$p_4 == null &&
                a.$BladeRunnerInstrumentedStreamHandler$p_6(-1, Date.now());
            }, e)),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.onData = function (t) {
            (r("BladeRunnerDeferredClient").bumpCounter(
              "received_data." + this.$BladeRunnerInstrumentedStreamHandler$p_2,
            ),
              this.$BladeRunnerInstrumentedStreamHandler$p_1.onData(t));
          }),
          (a.onStatusUpdate = function (t) {
            (this.$BladeRunnerInstrumentedStreamHandler$p_6(t, Date.now()),
              this.$BladeRunnerInstrumentedStreamHandler$p_1.onStatusUpdate(t));
          }),
          (a.onLog = function (t) {
            this.$BladeRunnerInstrumentedStreamHandler$p_1.onLog(t);
          }),
          (a.onBatch = function (t) {
            this.$BladeRunnerInstrumentedStreamHandler$p_1.onBatch(t);
          }),
          (a.onClientCancel = function () {
            this.$BladeRunnerInstrumentedStreamHandler$p_6(
              o("BladeRunnerStreamStatus").StreamStatus.CLOSED,
              Date.now(),
            );
          }),
          (a.$BladeRunnerInstrumentedStreamHandler$p_6 = function (t, n) {
            if (
              (r("BladeRunnerDeferredClient").bumpCounter(
                "received_status_" +
                  t +
                  "." +
                  this.$BladeRunnerInstrumentedStreamHandler$p_2,
              ),
              this.$BladeRunnerInstrumentedStreamHandler$p_4 == null)
            ) {
              this.$BladeRunnerInstrumentedStreamHandler$p_4 = n;
              var e = Math.max(
                  this.$BladeRunnerInstrumentedStreamHandler$p_4 -
                    this.$BladeRunnerInstrumentedStreamHandler$p_3,
                  0,
                ),
                o =
                  e >= 1e4
                    ? Math.round(Math.min(e / 1e4, 6)) * 10
                    : Math.round(Math.min(e / 1e3, 10));
              r("BladeRunnerDeferredClient").bumpCounter(
                "status_latency." +
                  this.$BladeRunnerInstrumentedStreamHandler$p_2 +
                  "." +
                  o +
                  ".s",
              );
            }
            clearTimeout(this.$BladeRunnerInstrumentedStreamHandler$p_5);
          }),
          n
        );
      })(r("BladeRunnerStreamHandler"));
    l.default = s;
  },
  98,
);
