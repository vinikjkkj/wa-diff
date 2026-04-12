__d(
  "WAWebInteractiveBloksWidget.react",
  ["WAWebBloksEntryPointLoadable", "WAWebThemeContext", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = 1e4;
    function p(e) {
      var t,
        n,
        r = e.bloksWidget,
        a = o("WAWebThemeContext").useIsDarkTheme(),
        i = d(!1),
        l = i[0],
        u = i[1];
      return (
        c(function () {
          var e = !1,
            t = window.setTimeout(function () {
              e || u(!0);
            }, m);
          return (
            o("WAWebBloksEntryPointLoadable")
              .requireBundle()
              .then(function () {
                e || window.clearTimeout(t);
              }),
            function () {
              ((e = !0), window.clearTimeout(t));
            }
          );
        }, []),
        l || r == null || (r.uuid == null && r.data == null && r.type == null)
          ? null
          : s.jsx(
              o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable,
              {
                componentType: (t = r.type) != null ? t : "",
                componentData: (n = r.data) != null ? n : "",
                uuid: r.uuid,
                theme: a ? "dark" : "light",
              },
            )
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
