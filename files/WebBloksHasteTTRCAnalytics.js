__d(
  "WebBloksHasteTTRCAnalytics",
  ["QPLJoinUtils", "QuickPerformanceLogger", "Random", "guid", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Math.round(o("Random").random() * 1e3),
      u = r("qpl")._(719983200, "2401"),
      c = r("qpl")._(720000263, "2371"),
      d = r("guid")(),
      m = (function () {
        function t() {
          ((this.$1 = u), (this.$1 = u));
        }
        var n = t.prototype;
        return (
          (n.setMarkerId = function (t) {
            t === 720000263 ? (this.$1 = c) : (this.$1 = u);
          }),
          (n.onStart = function (n, a) {
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(
              this.$1,
              s,
              n,
              { cancelExisting: !0 },
            ),
              o("QPLJoinUtils").setJoinId(e, this.$1, d, { instanceKey: s }),
              e.markerAnnotate(
                this.$1,
                { string: { app_id: a } },
                { instanceKey: s },
              ));
          }),
          (n.onEnd = function (n) {
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              this.$1,
              2,
              s,
              n.startTime,
            );
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
