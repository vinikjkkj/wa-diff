__d(
  "WAWebLruMediaStorageUtils",
  ["invariant", "WAWebIdb", "WAWebStorage", "err"],
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
    async function m() {
      if (u == null)
        throw r("err")(
          "[lru-media-storage-idb] Storage should be created first before being destroyed",
        );
      try {
        await u.purge();
      } finally {
        u = null;
      }
    }
    (c(), (l.getStorage = d), (l.destroyStorage = m));
  },
  98,
);
