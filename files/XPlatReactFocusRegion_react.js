__d(
  "XPlatReactFocusRegion.react",
  ["FocusRegion.react", "focusScopeQueries", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.autoFocusQuery,
        r = e.autoRestoreFocus,
        a = e.children,
        i = e.containFocusQuery,
        l = e.id,
        u = e.recoverFocusQuery,
        c = n != null ? n : o("focusScopeQueries").headerOrTabbableScopeQuery,
        d;
      return (
        t[0] !== r ||
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== u ||
        t[5] !== c
          ? ((d = s.jsx(o("FocusRegion.react").FocusRegion, {
              autoFocusQuery: c,
              autoRestoreFocus: r,
              containFocusQuery: i,
              id: l,
              recoverFocusQuery: u,
              children: a,
            })),
            (t[0] = r),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = u;
  },
  98,
);
