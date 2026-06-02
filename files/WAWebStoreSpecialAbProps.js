__d(
  "WAWebStoreSpecialAbProps",
  ["WALogger", "WAWebABProps", "WAWebLocalStorage", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        "wa_web_favicons_update_m1",
        "web_ui_refresh_m1",
        "web_hybrid_apply_latest_db_schema_optimization_enabled",
      ],
      u = "abprops_needed_early";
    async function c() {
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
    }
    l.storeSpecialAbProps = c;
  },
  98,
);
