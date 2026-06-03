__d(
  "WAWebStorageGatingUtils",
  [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsDBSettings",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebModelStorageUtils").storageExists();
          if (n) {
            var a = yield o(
              "WAWebUserPrefsDBSettings",
            ).getColumnPackingValueFromStorage();
            return a == null
              ? (yield o(
                  "WAWebUserPrefsDBSettings",
                ).setColumnPackingValueToStorage(!1),
                !1)
              : a;
          }
          if (!r("gkx")("26258") && URLSearchParams) {
            var i = new URLSearchParams(window.location.search),
              l = i.get("pack");
            if (l != null)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[column-serialization] enabled from url request",
                    ])),
                ),
                yield o(
                  "WAWebUserPrefsDBSettings",
                ).setColumnPackingValueToStorage(l === "true" || l === "1"),
                !0
              );
          }
          return (
            yield o("WAWebUserPrefsDBSettings").setColumnPackingValueToStorage(
              t,
            ),
            t
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.columnPackingEnabled = s;
  },
  98,
);
