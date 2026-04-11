__d(
  "WAWebLruCacheMap",
  ["WALruCache"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = e.getSize,
          n = e.sizeLimit;
        this.$1 = new (o("WALruCache").LruCache)({
          sizeLimit: n,
          getSize:
            t != null
              ? t
              : function () {
                  return 1;
                },
        });
      }
      var t = e.prototype;
      return (
        (t.clear = function () {
          this.$1.clear();
        }),
        (t.delete = function (t) {
          var e = this.has(t);
          return e ? (this.$1.delete(t), !0) : !1;
        }),
        (t.get = function (t) {
          return this.$1.get(t);
        }),
        (t.has = function (t) {
          return this.$1.has(t);
        }),
        (t.set = function (t, n) {
          return (this.$1.put(t, n), this);
        }),
        (t.iterateOnEach = function (t) {
          this.$1.forEach(t);
        }),
        babelHelpers.createClass(e, [
          {
            key: "size",
            get: function () {
              return this.$1.getCurrentSize();
            },
          },
        ])
      );
    })();
    l.LruCacheMap = e;
  },
  98,
);
