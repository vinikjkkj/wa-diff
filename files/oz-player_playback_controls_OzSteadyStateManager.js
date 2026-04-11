__d(
  "oz-player/playback_controls/OzSteadyStateManager",
  ["oz-player/shims/ozvariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = (function () {
      function e(e, t) {
        ((this.$1 = []), (this.$2 = e), (this.$3 = t));
      }
      var t = e.prototype;
      return (
        (t.addSample = function (t) {
          var e,
            n,
            r = Math.floor(Date.now() / (1e3 * this.$3)),
            o = r % this.$2;
          (((e = this.$1[o]) == null ? void 0 : e.bucketNumber) != r &&
            (this.$1[o] = { bucketNumber: 0, val: null }),
            (this.$1[o] = {
              bucketNumber: r,
              val: Math.min(t, (n = this.$1[o].val) != null ? n : t),
            }));
        }),
        (t.min = function () {
          var e = this,
            t,
            n = Date.now(),
            o = this.$1.filter(function (t) {
              return (
                t != null &&
                t.val != null &&
                n - e.$2 * 1e3 * e.$3 < t.bucketNumber * 1e3 * e.$3
              );
            });
          if (o.length < this.$2) return null;
          var a = o.reduce(function (e, t) {
            if (e == null) return t;
            var n = t.val;
            n != null || r("oz-player/shims/ozvariant")(0, 56011);
            var o = e.val;
            return (
              o != null || r("oz-player/shims/ozvariant")(0, 56011),
              n < o ? t : e
            );
          }, null);
          return (t = a) == null ? void 0 : t.val;
        }),
        (t.reset = function () {
          this.$1 = [];
        }),
        e
      );
    })();
    l.default = s;
  },
  98,
);
