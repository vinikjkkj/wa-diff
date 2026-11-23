__d(
  "WAWebJobsStorageUtils",
  ["invariant", "WAWebIdb", "WAWebIndexedDB", "WAWebStorage", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e = "jobs-storage",
      u = null;
    async function c() {
      var t = r("WAWebIndexedDB");
      if ((t == null ? void 0 : t.databases) == null) return !1;
      try {
        var n = await t.databases();
        return n.some(function (t) {
          var n = t.name;
          return n === e;
        });
      } catch (e) {
        return !1;
      }
    }
    function d() {
      var t = new (r("WAWebIdb"))(e);
      u = new (o("WAWebStorage").Storage)(t);
    }
    function m() {
      return (u != null || s(0, 56369), u);
    }
    function p() {
      return u == null
        ? Promise.reject(
            r("err")(
              "[jobs-storage] Storage should be created first before being destroyed",
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
    ((l.DATABASE_NAME = e),
      (l.storageExists = c),
      (l.createStorage = d),
      (l.getStorage = m),
      (l.destroyStorage = p));
  },
  98,
);
