__d(
  "WAWebInteractiveBloksWidget.react",
  [
    "WAWebBloksEntryPointLoadable",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
  ],
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
        r = o("react-compiler-runtime").c(7),
        a = e.bloksWidget,
        i = o("WAWebThemeContext").useIsDarkTheme(),
        l = d(!1),
        u = l[0],
        p = l[1],
        _,
        f;
      if (
        (r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = function () {
              var e = !1,
                t = window.setTimeout(function () {
                  e || p(!0);
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
            }),
            (f = []),
            (r[0] = _),
            (r[1] = f))
          : ((_ = r[0]), (f = r[1])),
        c(_, f),
        u || a == null || (a.uuid == null && a.data == null && a.type == null))
      )
        return null;
      var g = (t = a.type) != null ? t : "",
        h = (n = a.data) != null ? n : "",
        y = i ? "dark" : "light",
        C;
      return (
        r[2] !== a.uuid || r[3] !== g || r[4] !== h || r[5] !== y
          ? ((C = s.jsx(
              o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable,
              { componentType: g, componentData: h, uuid: a.uuid, theme: y },
            )),
            (r[2] = a.uuid),
            (r[3] = g),
            (r[4] = h),
            (r[5] = y),
            (r[6] = C))
          : (C = r[6]),
        C
      );
    }
    l.default = p;
  },
  98,
);
