__d(
  "JSSelfProfilerLoomProvider",
  ["JSSPSetting", "JSSelfProfiler", "JSSelfProfilerUtils"],
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
          (t.loomTraceWillEnd = async function () {
            if (!this.$5) {
              var e = this.$1,
                t = this.$2,
                n = this.$3;
              if (e == null)
                (await (t == null ? void 0 : t.abort()),
                  await (n == null ? void 0 : n.abort()));
              else {
                var r = performance.now() - this.$4,
                  a = r > o("JSSPSetting").slowProfilerSpan && this.$3 != null,
                  i = a ? n : t,
                  l = a ? t : n;
                (await (l == null ? void 0 : l.abort()),
                  (e.jsSelfProfilerData = await (i == null
                    ? void 0
                    : i.stopRecording())),
                  i == null || i.logStats());
              }
              ((this.$1 = null), (this.$2 = null), (this.$3 = null));
            }
          }),
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
