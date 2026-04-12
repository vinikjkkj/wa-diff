__d(
  "useWAWebCatalog",
  [
    "WAWebCatalogCollection",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = c(function () {
          return o("WAWebCatalogCollection").CatalogCollection.get(e);
        }),
        a = t[0],
        i = t[1],
        l = r("useWAWebUnmountSignal")();
      return (
        u(
          function () {
            var t = o("WAWebCatalogCollection").CatalogCollection.get(e);
            t !== a &&
              (t != null
                ? i(t)
                : n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var t = yield o(
                      "WAWebCatalogCollection",
                    ).CatalogCollection.find(e);
                    l.aborted || i(t);
                  })());
          },
          [e, a, l],
        ),
        a
      );
    }
    l.default = d;
  },
  98,
);
