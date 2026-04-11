__d(
  "useWAWebCatalog",
  [
    "WAWebCatalogCollection",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        a;
      t[0] !== e
        ? ((a = function () {
            return o("WAWebCatalogCollection").CatalogCollection.get(e);
          }),
          (t[0] = e),
          (t[1] = a))
        : (a = t[1]);
      var i = c(a),
        l = i[0],
        s = i[1],
        d = r("useWAWebUnmountSignal")(),
        m,
        p;
      return (
        t[2] !== l || t[3] !== e || t[4] !== d
          ? ((m = function () {
              var t = o("WAWebCatalogCollection").CatalogCollection.get(e);
              t !== l &&
                (t != null
                  ? s(t)
                  : n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      var t = yield o(
                        "WAWebCatalogCollection",
                      ).CatalogCollection.find(e);
                      d.aborted || s(t);
                    })());
            }),
            (p = [e, l, d]),
            (t[2] = l),
            (t[3] = e),
            (t[4] = d),
            (t[5] = m),
            (t[6] = p))
          : ((m = t[5]), (p = t[6])),
        u(m, p),
        l
      );
    }
    l.default = d;
  },
  98,
);
