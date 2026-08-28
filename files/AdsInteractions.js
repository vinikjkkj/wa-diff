__d(
  "AdsInteractions",
  ["performanceNow", "requestAnimationFrameAcrossTransitions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.start = function (n) {
            if (this.$1.has(n)) return null;
            var t = (e || (e = r("performanceNow")))(),
              o = { name: n, startTime: t };
            return (this.$1.set(n, o), o);
          }),
          (n.end = function (t) {
            this.$1.has(t) && this.$1.delete(t);
          }),
          (n.singleFrameInteraction = function (t) {
            var e = this,
              n = this.start(t);
            n &&
              r("requestAnimationFrameAcrossTransitions")(function () {
                r("requestAnimationFrameAcrossTransitions")(function () {
                  e.$1.get(t) === n && e.end(t);
                });
              });
          }),
          (n.getActiveInteractions = function () {
            return this.$1;
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
