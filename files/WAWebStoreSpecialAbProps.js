__d(
  "WAWebStoreSpecialAbProps",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebLocalStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        "wa_web_favicons_update_m1",
        "web_ui_refresh_m1",
        "web_hybrid_apply_latest_db_schema_optimization_enabled",
      ],
      u = "abprops_needed_early";
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = s.reduce(function (e, t) {
              var n = o("WAWebABProps").getABPropConfigValue(t);
              return (n != null && (e[t] = n), e);
            }, {});
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").setItem(u, JSON.stringify(t));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to store special early abprops",
                  ])),
              )
              .sendLogs(r("getErrorSafe")(t).message);
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.storeSpecialAbProps = c;
  },
  98,
);
