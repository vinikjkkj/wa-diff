__d(
  "ContextualConfigExposureEvent",
  ["Random"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$2 = e),
          (this.$4 = o("Random").random() < 1 / e.sample_rate),
          (this.$3 = t),
          (this.$1 = n));
      }
      var t = e.prototype;
      return (
        (t.getData = function () {
          return this.$2;
        }),
        (t.log = function (t) {
          var e = this.$2,
            n = this.$3,
            r = this.$4;
          return (t && n(e), r && this.$1(e), this);
        }),
        (t.isSampled = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
