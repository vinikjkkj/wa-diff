__d(
  "WAWebJobsStorageUtils",
  ["invariant", "Promise", "WAWebIdb", "WAWebStorage", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "jobs-storage",
      c = null;
    function d() {
      var e = new (r("WAWebIdb"))(u);
      c = new (o("WAWebStorage").Storage)(e);
    }
    function m() {
      return (c != null || s(0, 56369), c);
    }
    function p() {
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
      (l.createStorage = d),
      (l.getStorage = m),
      (l.destroyStorage = p));
  },
  98,
);
