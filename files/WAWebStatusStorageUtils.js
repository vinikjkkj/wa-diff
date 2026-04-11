__d(
  "WAWebStatusStorageUtils",
  ["invariant", "WAWebIdb", "WAWebStorage"],
  function (t, n, r, o, a, i, l, s) {
    var e = "status-storage",
      u = null;
    function c() {
      var t = new (r("WAWebIdb"))(e);
      u = new (o("WAWebStorage").Storage)(t);
    }
    function d() {
      return (u != null || s(0, 92225), u);
    }
    ((l.createStorage = c), (l.getStorage = d));
  },
  98,
);
