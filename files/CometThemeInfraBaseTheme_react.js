__d(
  "CometThemeInfraBaseTheme.react",
  [
    "BaseView.react",
    "CometThemeInfraBaseThemeContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["displayMode", "ref", "themes", "children", "xstyle"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(18),
        a,
        i,
        l,
        s,
        c,
        d;
      n[0] !== t
        ? ((i = t.displayMode),
          (s = t.ref),
          (c = t.themes),
          (a = t.children),
          (d = t.xstyle),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = d))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (c = n[5]),
          (d = n[6]));
      var m = c[i != null ? i : "auto"],
        p;
      n[7] !== m || n[8] !== d
        ? ((p = [m, d]), (n[7] = m), (n[8] = d), (n[9] = p))
        : (p = n[9]);
      var _;
      n[10] !== a || n[11] !== l || n[12] !== s || n[13] !== p
        ? ((_ = u.jsx(
            r("BaseView.react"),
            babelHelpers.extends({ xstyle: p }, l, { ref: s, children: a }),
          )),
          (n[10] = a),
          (n[11] = l),
          (n[12] = s),
          (n[13] = p),
          (n[14] = _))
        : (_ = n[14]);
      var f;
      return (
        n[15] !== _ || n[16] !== c
          ? ((f = u.jsx(r("CometThemeInfraBaseThemeContext.react").Provider, {
              value: c,
              children: _,
            })),
            (n[15] = _),
            (n[16] = c),
            (n[17] = f))
          : (f = n[17]),
        f
      );
    }
    l.default = c;
  },
  98,
);
