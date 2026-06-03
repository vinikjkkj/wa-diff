__d(
  "WAWebLruMediaStorageUtils",
  ["invariant", "WAWebIdb", "WAWebStorage", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e = "lru-media-storage-idb",
      u = null;
    function c() {
      var t = new (r("WAWebIdb"))(e);
      u = new (o("WAWebStorage").Storage)(t);
    }
    function d() {
      return (u != null || s(0, 56300), u);
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (u == null)
            throw r("err")(
              "[lru-media-storage-idb] Storage should be created first before being destroyed",
            );
          try {
            yield u.purge();
          } finally {
            u = null;
          }
        })),
        p.apply(this, arguments)
      );
    }
    (c(), (l.getStorage = d), (l.destroyStorage = m));
  },
  98,
);
