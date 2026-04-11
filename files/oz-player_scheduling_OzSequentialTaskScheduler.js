__d(
  "oz-player/scheduling/OzSequentialTaskScheduler",
  [
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/ozReportUnexpectedError",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$3 = 0), (this.$1 = e));
        var n = t || {},
          r = n.taskTimeout;
        this.$4 = r || 0;
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          var e = this;
          this.$1.setOnTaskUpdated(function (t, n) {
            return e.$5(t, n);
          });
          var t = this.$1.dequeue();
          t && this.$6(t, "immediate");
        }),
        (t.destroy = function () {
          (this.$2 && this.$2.cancel(), this.$1.clearOnTaskUpdated());
        }),
        (t.$5 = function (t, n) {
          var e = this.$6(t, n);
          e && this.$1.remove(t);
        }),
        (t.$6 = function (t, n) {
          var e = this;
          if (this.$2 && n !== "immediate") return !1;
          this.$2 && this.$2.cancel();
          var o = t.run().catch(function (e) {});
          return (
            this.$4 > 0 &&
              (o = r("oz-player/shims/OzMaybeNativePromise").race([
                o,
                new (r("oz-player/shims/OzMaybeNativePromise"))(function (
                  t,
                  n,
                ) {
                  r("oz-player/shims/ozSetTimeoutAcrossTransitions")(t, e.$4);
                }),
              ])),
            this.$3++,
            (this.$2 = t),
            (o = o.then(function () {
              if ((e.$3--, e.$2 === t && (e.$2 = null), e.$3 === 0)) {
                var n = e.$1.dequeue();
                n && e.$6(n, "immediate");
              }
            })),
            o.catch(function (e) {
              r("oz-player/shims/ozReportUnexpectedError")(
                e,
                "OzSequentialTaskScheduler task complete",
              );
            }),
            !0
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
