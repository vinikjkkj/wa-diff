__d(
  "WAWebModelStorageUtils",
  [
    "invariant",
    "Promise",
    "WAWeb-dexie",
    "WAWebDexieCastTypes",
    "WAWebIdb",
    "WAWebStorage",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "model-storage",
      c = null;
    function d() {
      return (c != null || s(0, 56367), c);
    }
    function m() {
      return o("WAWebDexieCastTypes").dexieCastToPromise(
        r("WAWeb-dexie").exists(u),
      );
    }
    function p(e) {
      var t = new (r("WAWebIdb"))(u, { packColumns: e.packColumns });
      c = new (o("WAWebStorage").Storage)(t, e);
    }
    function _() {
      return c == null
        ? (e || (e = n("Promise"))).reject(
            r("err")(
              "[model-storage] Storage should be created first before being destroyed",
            ),
          )
        : c
            .purge()
            .then(function () {
              c = null;
            })
            .catch(function (e) {
              throw ((c = null), e);
            });
    }
    ((l.DATABASE_NAME = u),
      (l.getStorage = d),
      (l.storageExists = m),
      (l.createStorage = p),
      (l.destroyStorage = _));
  },
  98,
);
