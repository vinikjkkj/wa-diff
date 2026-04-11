__d(
  "WAWebOffdStorageUtils",
  ["invariant", "Promise", "WAWebIdb", "WAWebStorage", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "offd-storage",
      c = null;
    function d() {
      var e = new (r("WAWebIdb"))(u);
      c = new (o("WAWebStorage").Storage)(e);
    }
    function m() {
      return c != null;
    }
    function p() {
      return (c != null || s(0, 56317), c);
    }
    function _() {
      return c == null
        ? (e || (e = n("Promise"))).reject(
            r("err")(
              "[offd-storage] Storage should be created first before being destroyed",
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
      (l.createStorage = d),
      (l.isStorageCreated = m),
      (l.getStorage = p),
      (l.destroyStorage = _));
  },
  98,
);
