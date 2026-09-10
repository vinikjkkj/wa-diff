__d(
  "WAWebProductCatalogFetchState",
  ["WALogger", "WAWebBackendErrors", "WAWebMiscErrors"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      if (!(t instanceof o("WAWebMiscErrors").Unmount))
        if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError)
          t.status === "not_found" || t.status === 404
            ? n("NOT_FOUND")
            : (n("ERROR"),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseErrorState:Failed to fetch from server",
                  ])),
              ));
        else if (t instanceof o("WAWebBackendErrors").CatalogUnknownError)
          (n("ERROR"),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseErrorState:Catalog fetch failed",
                ])),
            ));
        else throw (n("ERROR"), t);
    }
    l.parseErrorState = u;
  },
  98,
);
