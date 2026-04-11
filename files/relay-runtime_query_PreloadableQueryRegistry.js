__d(
  "relay-runtime/query/PreloadableQueryRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new Map()), (this.$2 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.set = function (t, n) {
            this.$1.set(t, n);
            var e = this.$2.get(t);
            e != null &&
              e.forEach(function (e) {
                try {
                  e(n);
                } catch (e) {
                  setTimeout(function () {
                    throw e;
                  }, 0);
                }
              });
          }),
          (t.get = function (t) {
            return this.$1.get(t);
          }),
          (t.onLoad = function (t, n) {
            var e,
              r = (e = this.$2.get(t)) != null ? e : new Set();
            r.add(n);
            var o = function () {
              r.delete(n);
            };
            return (this.$2.set(t, r), { dispose: o });
          }),
          (t.clear = function () {
            this.$1.clear();
          }),
          e
        );
      })(),
      l = new e();
    a.exports = l;
  },
  null,
);
