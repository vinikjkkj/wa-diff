__d(
  "BaseThemeProvider.react",
  [
    "BaseThemeConfigContext",
    "BaseThemeDisplayModeContext",
    "react",
    "react-compiler-runtime",
    "useCurrentDisplayMode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.children,
        a = e.config,
        i = e.displayMode,
        l = c(r("BaseThemeConfigContext")),
        u = r("useCurrentDisplayMode")(),
        d = i != null ? i : u,
        m;
      a != null && a.type === "CLASSNAMES"
        ? (m = d === "dark" ? a.dark : a.light)
        : (m = d === "dark" ? l.darkClassName : l.lightClassName);
      var _;
      t[0] !== m
        ? ((_ = m != null ? { $$css: !0, theme: m } : null),
          (t[0] = m),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g = f,
        h;
      e: {
        if (a != null) {
          if (a.type === "VARIABLES") {
            var y;
            t[2] !== a.dark || t[3] !== l.darkVariables
              ? ((y = babelHelpers.extends({}, l.darkVariables, a.dark)),
                (t[2] = a.dark),
                (t[3] = l.darkVariables),
                (t[4] = y))
              : (y = t[4]);
            var C;
            t[5] !== a.light || t[6] !== l.lightVariables
              ? ((C = babelHelpers.extends({}, l.lightVariables, a.light)),
                (t[5] = a.light),
                (t[6] = l.lightVariables),
                (t[7] = C))
              : (C = t[7]);
            var b;
            (t[8] !== l || t[9] !== y || t[10] !== C
              ? ((b = babelHelpers.extends({}, l, {
                  darkVariables: y,
                  lightVariables: C,
                })),
                (t[8] = l),
                (t[9] = y),
                (t[10] = C),
                (t[11] = b))
              : (b = t[11]),
              (h = b));
            break e;
          } else if (a.type === "CLASSNAMES") {
            var v;
            (t[12] !== a.dark || t[13] !== a.light || t[14] !== l
              ? ((v = babelHelpers.extends({}, l, {
                  darkClassName: a.dark,
                  lightClassName: a.light,
                })),
                (t[12] = a.dark),
                (t[13] = a.light),
                (t[14] = l),
                (t[15] = v))
              : (v = t[15]),
              (h = v));
            break e;
          }
        }
        h = l;
      }
      var S = h,
        R,
        L,
        E,
        k,
        I;
      if (t[16] !== n || t[17] !== d || t[18] !== S || t[19] !== g) {
        var T = p(d === "dark" ? S.darkVariables : S.lightVariables);
        ((L = r("BaseThemeConfigContext").Provider),
          (I = S),
          (R = r("BaseThemeDisplayModeContext").Provider),
          (E = d),
          (k = n(g, T)),
          (t[16] = n),
          (t[17] = d),
          (t[18] = S),
          (t[19] = g),
          (t[20] = R),
          (t[21] = L),
          (t[22] = E),
          (t[23] = k),
          (t[24] = I));
      } else ((R = t[20]), (L = t[21]), (E = t[22]), (k = t[23]), (I = t[24]));
      var D;
      t[25] !== R || t[26] !== E || t[27] !== k
        ? ((D = s.jsx(R, { value: E, children: k })),
          (t[25] = R),
          (t[26] = E),
          (t[27] = k),
          (t[28] = D))
        : (D = t[28]);
      var x;
      return (
        t[29] !== L || t[30] !== I || t[31] !== D
          ? ((x = s.jsx(L, { value: I, children: D })),
            (t[29] = L),
            (t[30] = I),
            (t[31] = D),
            (t[32] = x))
          : (x = t[32]),
        x
      );
    }
    function p(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t["--" + n] = e[n];
        }),
        t
      );
    }
    l.default = m;
  },
  98,
);
