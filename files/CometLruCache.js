__d(
  "CometLruCache",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e),
          (this.$2 = t),
          e <= 0 &&
            r("FBLogger")("CometLruCache").mustfix(
              "CometLruCache: Unable to create instance of cache with zero or negative capacity.",
            ),
          (this.$3 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.set = function (t, n) {
          if (
            (this.$3.delete(t),
            this.$3.set(t, { timestamp: Date.now(), value: n }),
            this.$3.size > this.$1)
          ) {
            var e = this.$3.keys().next();
            e.done || this.$3.delete(e.value);
          }
        }),
        (t.get = function (t) {
          var e = this.$3.get(t);
          return e != null
            ? Date.now() > e.timestamp + this.$2
              ? (this.$3.delete(t), null)
              : (this.$3.delete(t), this.$3.set(t, e), e.value)
            : null;
        }),
        (t.has = function (t) {
          return this.$3.has(t);
        }),
        (t.delete = function (t) {
          this.$3.delete(t);
        }),
        (t.size = function () {
          return this.$3.size;
        }),
        (t.capacity = function () {
          return this.$1 - this.$3.size;
        }),
        (t.clear = function () {
          this.$3.clear();
        }),
        e
      );
    })();
    function s(t, n) {
      return (n === void 0 && (n = Number.MAX_SAFE_INTEGER), new e(t, n));
    }
    l.create = s;
  },
  98,
);
