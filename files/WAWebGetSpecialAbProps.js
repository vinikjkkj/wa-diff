__d(
  "WAWebGetSpecialAbProps",
  ["WALogger", "WAWebLocalStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "abprops_needed_early";
    function u(t) {
      var n =
        r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(s);
      if (n != null)
        try {
          var a = JSON.parse(n);
          return a[t];
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to parse special early abprops: ",
                  "",
                ])),
              t,
            )
            .sendLogs("parse-special-abprops-failure");
        }
      return null;
    }
    l.getSpecialAbpropValue = u;
  },
  98,
);
