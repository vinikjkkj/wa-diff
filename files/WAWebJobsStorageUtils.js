__d(
  "WAWebJobsStorageUtils",
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
      u = "jobs-storage",
      c = null;
    function d() {
      return o("WAWebDexieCastTypes").dexieCastToPromise(
        r("WAWeb-dexie").exists(u),
      );
    }
    function m() {
      var e = new (r("WAWebIdb"))(u);
      c = new (o("WAWebStorage").Storage)(e);
    }
    function p() {
      return (c != null || s(0, 56369), c);
    }
    function _() {
      return c == null
        ? (e || (e = n("Promise"))).reject(
            r("err")(
              "[jobs-storage] Storage should be created first before being destroyed",
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
      (l.storageExists = d),
      (l.createStorage = m),
      (l.getStorage = p),
      (l.destroyStorage = _));
  },
  98,
);
