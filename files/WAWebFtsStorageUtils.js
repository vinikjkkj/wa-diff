__d(
  "WAWebFtsStorageUtils",
  [
    "invariant",
    "Promise",
    "WAWebFtsStorageConsts",
    "WAWebIdb",
    "WAWebStorage",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = null;
    function c() {
      var e = new (r("WAWebIdb"))(o("WAWebFtsStorageConsts").DATABASE_NAME);
      u = new (o("WAWebStorage").Storage)(e);
    }
    function d() {
      return (u != null || s(0, 56265), u);
    }
    function m() {
      return u == null
        ? (e || (e = n("Promise"))).reject(
            r("err")(
              "[fts-storage] Storage should be created first before being destroyed",
            ),
          )
        : u
            .purge()
            .then(function () {
              u = null;
            })
            .catch(function (e) {
              throw ((u = null), e);
            });
    }
    ((l.createStorage = c), (l.getStorage = d), (l.destroyStorage = m));
  },
  98,
);
