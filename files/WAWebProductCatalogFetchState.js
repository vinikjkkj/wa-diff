__d(
  "WAWebProductCatalogFetchState",
  ["WALogger", "WAWebBackendErrors", "WAWebMiscErrors"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
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
        else throw (n("ERROR"), t);
    }
    l.parseErrorState = s;
  },
  98,
);
