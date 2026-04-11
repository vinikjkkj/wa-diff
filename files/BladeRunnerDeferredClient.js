__d(
  "BladeRunnerDeferredClient",
  ["Promise", "nullthrows", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          this.$1 = null;
        }
        var o = t.prototype;
        return (
          (o.requestStream = function (t, n, o, a) {
            return (
              this.$2(),
              r("nullthrows")(this.$1).then(function (e) {
                return e.requestStream(t, n, o, a);
              })
            );
          }),
          (o.logInfo = function (t) {
            return (
              this.$2(),
              r("nullthrows")(this.$1).then(function (e) {
                e.logInfo(t);
              })
            );
          }),
          (o.bumpCounter = function (t) {
            return (
              this.$2(),
              r("nullthrows")(this.$1).then(function (e) {
                e.bumpCounter(t);
              })
            );
          }),
          (o.$2 = function () {
            this.$1 == null &&
              (this.$1 = new (e || (e = n("Promise")))(function (e) {
                r("requireDeferred")("BladeRunnerClient")
                  .__setRef("BladeRunnerDeferredClient")
                  .onReady(function (t) {
                    e(new t());
                  });
              }));
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
