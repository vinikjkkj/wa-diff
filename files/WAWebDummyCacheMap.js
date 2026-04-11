__d(
  "WAWebDummyCacheMap",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        this.size = 0;
      }
      var t = e.prototype;
      return (
        (t.clear = function () {}),
        (t.delete = function () {
          return !1;
        }),
        (t.get = function () {}),
        (t.has = function () {
          return !1;
        }),
        (t.set = function () {
          return this;
        }),
        e
      );
    })();
    i.FakeCacheMap = e;
  },
  66,
);
