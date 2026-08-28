__d(
  "Batcher",
  ["TimedOnceFunc"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$5 = null),
          (this.$2 = e),
          (this.$3 = t),
          (this.$4 = n),
          (this.$1 = []));
      }
      var t = e.prototype;
      return (
        (t.batch = function () {
          var e,
            t = this.$1;
          ((this.$1 = []),
            (e = this.$5) == null || e.cancel(),
            (this.$5 = null),
            this.$4(t));
        }),
        (t.push = function (t) {
          var e = this;
          (this.$1.push(t),
            this.$5 == null &&
              (this.$5 = new (o("TimedOnceFunc").TimedOnceFunc)(function () {
                return e.batch();
              }, this.$3)),
            this.$1.length >= this.$2 && this.$5.run());
        }),
        e
      );
    })();
    l.Batcher = e;
  },
  98,
);
