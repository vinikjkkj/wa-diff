__d(
  "WAWebJobsStorageUtils",
  [
    "invariant",
    "Promise",
    "WAWebIdb",
    "WAWebIndexedDB",
    "WAWebStorage",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "jobs-storage",
      c = null;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebIndexedDB");
          if ((e == null ? void 0 : e.databases) == null) return !1;
          try {
            var t = yield e.databases();
            return t.some(function (e) {
              var t = e.name;
              return t === u;
            });
          } catch (e) {
            return !1;
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      var e = new (r("WAWebIdb"))(u);
      c = new (o("WAWebStorage").Storage)(e);
    }
    function _() {
      return (c != null || s(0, 56369), c);
    }
    function f() {
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
      (l.createStorage = p),
      (l.getStorage = _),
      (l.destroyStorage = f));
  },
  98,
);
