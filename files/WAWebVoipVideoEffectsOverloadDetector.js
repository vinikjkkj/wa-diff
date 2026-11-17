__d(
  "WAWebVoipVideoEffectsOverloadDetector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 66,
      l = 5e3,
      s = 2e3,
      u = 0.1,
      c = 2 * e,
      d = 10,
      m = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = -1 / 0),
            (this.$4 = 1 / 0));
        }
        var n = t.prototype;
        return (
          (n.record = function (n, r) {
            var t;
            (r - this.$3 > s && this.reset(), (this.$3 = r));
            var o = this.$1,
              a = o == null ? Math.min(n, e) : o + u * (this.$5(n) - o);
            if (((this.$1 = a), a <= e)) return ((this.$2 = null), !1);
            var i = (t = this.$2) != null ? t : r;
            return ((this.$2 = i), r - i >= l);
          }),
          (n.reset = function () {
            ((this.$1 = null),
              (this.$2 = null),
              (this.$3 = -1 / 0),
              (this.$4 = 1 / 0));
          }),
          (n.$5 = function (n) {
            var t = n > c,
              r = t && this.$4 >= d;
            return (
              (this.$4 = t ? 0 : this.$4 + 1),
              r ? e : Math.min(n, 3 * e)
            );
          }),
          t
        );
      })();
    i.WAWebVoipVideoEffectsOverloadDetector = m;
  },
  66,
);
