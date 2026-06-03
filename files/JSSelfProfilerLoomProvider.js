__d(
  "JSSelfProfilerLoomProvider",
  [
    "JSSPSetting",
    "JSSelfProfiler",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          var t, n;
          if (((this.$5 = !1), (this.$5 = !1), this.$5)) {
            this.$4 = performance.now();
            return;
          }
          this.$1 = e;
          var a = o("JSSelfProfilerUtils").getProfilerInitConfig(),
            i = a.maxBufferSize,
            l = a.sampleInterval,
            s =
              (t = (n = this.$1) == null ? void 0 : n.triggerInfo) != null
                ? t
                : {};
          this.$2 = r("JSSelfProfiler").startRecording(l, i, {
            triggerInfo: babelHelpers.extends({}, s),
            annotations: ["fast-profiler"],
          });
          var u = Math.min(l * 10, 100);
          (u > l &&
            (this.$3 = r("JSSelfProfiler").startRecording(u, i * 2, {
              triggerInfo: babelHelpers.extends({}, s),
              annotations: ["slow-profiler"],
            })),
            (this.$4 = performance.now()));
        }
        var t = e.prototype;
        return (
          (t.loomTraceWillEnd = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!this.$5) {
                var e = this.$1,
                  t = this.$2,
                  n = this.$3;
                if (e == null)
                  (yield t == null ? void 0 : t.abort(),
                    yield n == null ? void 0 : n.abort());
                else {
                  var r = performance.now() - this.$4,
                    a =
                      r > o("JSSPSetting").slowProfilerSpan && this.$3 != null,
                    i = a ? n : t,
                    l = a ? t : n;
                  (yield l == null ? void 0 : l.abort(),
                    (e.jsSelfProfilerData = yield i == null
                      ? void 0
                      : i.stopRecording()),
                    i == null || i.logStats());
                }
                ((this.$1 = null), (this.$2 = null), (this.$3 = null));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      s = {
        loomProviderId: "JSSelfProfiler",
        isSupported: function () {
          return r("JSSelfProfiler").isSupported();
        },
        getInstance: function (n) {
          return new e(n);
        },
      };
    l.default = s;
  },
  98,
);
