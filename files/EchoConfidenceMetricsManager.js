__d(
  "EchoConfidenceMetricsManager",
  ["ZenonMediaActionLogger", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ZenonEchoConfidenceMetricsManager",
      s = "[EchoConfidenceMetricsManager]",
      u = (function () {
        function t() {
          ((this.$1 = !1),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null));
        }
        var o = t.prototype;
        return (
          (o.setEnabled = function (t) {
            this.$1 = t;
          }),
          (o.setProcessorUrl = function (t) {
            this.$3 = t;
          }),
          (o.setAudioContext = function (t) {
            ((this.$2 = t), (this.$4 = null));
          }),
          (o.getProcessor = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$2 === null
                ? null
                : this.$4
                  ? this.$4
                  : (yield this.$6(), this.$4);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.getAndResetEchoConfidenceMetrics = function () {
            if (!this.$1) return null;
            var e = this.$5;
            return ((this.$5 = null), e);
          }),
          (o.cleanUp = function () {
            var e;
            ((e = this.$4) == null || e.port.postMessage("clean"),
              (this.$4 = null));
          }),
          (o.$6 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this;
              if (
                (r("ZenonMediaActionLogger").logCheckpoint(
                  s + " Initializing the Echo Confidence Metrics Processor!",
                ),
                !this.$2)
              ) {
                var n =
                  "Audio Context is null when initializing the Echo Confidence Metrics Processor!";
                r("ZenonMediaActionLogger").logErrorToFbLogger(
                  s + " " + n,
                  e,
                  null,
                  "warn",
                );
                return;
              }
              if (this.$3 === null || this.$3 === "") {
                var o = "Unable to retrieve processor url!";
                (r("ZenonMediaActionLogger").logErrorToFbLogger(
                  s + " " + o,
                  e,
                  null,
                  "warn",
                ),
                  (this.$2 = null));
                return;
              }
              try {
                yield this.$2.audioWorklet.addModule(this.$3);
              } catch (t) {
                var a = r("getErrorSafe")(t),
                  i =
                    "Audio Worklet AddModule method returned the following error: " +
                    a.message;
                r("ZenonMediaActionLogger").logErrorToFbLogger(
                  s + " " + i,
                  e,
                  null,
                  "warn",
                );
                return;
              }
              ((this.$4 = new AudioWorkletNode(
                this.$2,
                "echo-confidence-metrics-processor",
                { numberOfInputs: 2 },
              )),
                (this.$4.port.onmessage = function (n) {
                  if (n.data.type === "metrics") {
                    if (!n.data.metrics) {
                      var o =
                        "AudioWorklet Processor Node returned null metrics!";
                      r("ZenonMediaActionLogger").logErrorToFbLogger(
                        s + " " + o,
                        e,
                        null,
                        "warn",
                      );
                    }
                    t.$5 === null
                      ? (t.$5 = n.data.metrics)
                      : t.$7(n.data.metrics, t.$5);
                  } else if (n.data.type === "error") {
                    var a =
                      "AudioWorklet Processor Node returned the following error: " +
                      n.data.message;
                    r("ZenonMediaActionLogger").logErrorToFbLogger(
                      s + " " + a,
                      e,
                      null,
                      "warn",
                    );
                  }
                }),
                (this.$4.onprocessorerror = function (t) {
                  var n =
                    "AudioWorklet Processor Node returned the following uncaught error: " +
                    t.message;
                  r("ZenonMediaActionLogger").logErrorToFbLogger(
                    s + " " + n,
                    e,
                    null,
                    "warn",
                  );
                }));
            });
            function o() {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (o.$7 = function (t, n) {
            ((n.echoConfidence = Math.max(n.echoConfidence, t.echoConfidence)),
              (n.echoCrossCorrelation = Math.max(
                n.echoCrossCorrelation,
                t.echoCrossCorrelation,
              )),
              (n.echoDelay = Math.max(n.echoDelay, t.echoDelay)),
              (n.echoERL = Math.max(n.echoERL, t.echoERL)),
              (n.echoLpbRMS = Math.max(n.echoLpbRMS, t.echoLpbRMS)),
              (n.echoRMS = Math.max(n.echoRMS, t.echoRMS)),
              (n.goldenEchoMetric = Math.max(
                n.goldenEchoMetric,
                t.goldenEchoMetric,
              )),
              (n.ltEchoConfidence = Math.max(
                n.ltEchoConfidence,
                t.ltEchoConfidence,
              )),
              (n.ltEchoDelay = Math.max(n.ltEchoDelay, t.ltEchoDelay)),
              (n.ltEchoDelayEntropy = Math.max(
                n.ltEchoDelayEntropy,
                t.ltEchoDelayEntropy,
              )),
              (n.ltEchoERL = Math.max(n.ltEchoERL, t.ltEchoERL)),
              (n.ltEchoFramesPercentage = Math.max(
                n.ltEchoFramesPercentage,
                t.ltEchoFramesPercentage,
              )));
          }),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);
