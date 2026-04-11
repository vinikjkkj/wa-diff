__d(
  "WebBloksHasteAsyncActionAnalytics",
  ["QPLJoinUtils", "QuickPerformanceLogger", "Random", "guid", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Math.round(o("Random").random() * 1e3),
      u = r("qpl")._(36707139, "1111"),
      c = r("guid")(),
      d = (function () {
        function t() {
          ((this.$1 = u), (this.$1 = u));
        }
        var n = t.prototype;
        return (
          (n.onStart = function (n, a) {
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(
              this.$1,
              s,
              n,
              { cancelExisting: !0 },
            ),
              o("QPLJoinUtils").setJoinId(e, this.$1, c, { instanceKey: s }),
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
          (n.onCancel = function () {
            (e || (e = r("QuickPerformanceLogger"))).markerDrop(this.$1, s);
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
