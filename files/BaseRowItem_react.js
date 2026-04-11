__d(
  "BaseRowItem.react",
  ["BaseRowContext", "BaseView.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["expanding", "useDeprecatedStyles", "verticalAlign", "xstyle"],
      u,
      c = u || (u = o("react")),
      d = u.useContext,
      m = {
        expanding: {
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          $$css: !0,
        },
        expandingWithWrap: { flexBasis: "x1l7klhg", $$css: !0 },
        item: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          $$css: !0,
        },
        item_DEPRECATED: {
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          $$css: !0,
        },
      },
      p = {
        0: { flexBasis: "xdl72j9", $$css: !0 },
        1: { flexBasis: "x1l7klhg", $$css: !0 },
        2: { flexBasis: "x4pfjvb", $$css: !0 },
        3: { flexBasis: "xnge29z", $$css: !0 },
        4: { flexBasis: "xhnlq4v", $$css: !0 },
        5: { flexBasis: "x15foiic", $$css: !0 },
        6: { flexBasis: "xct282r", $$css: !0 },
        7: { flexBasis: "x1ff4d62", $$css: !0 },
        8: { flexBasis: "xvuwby9", $$css: !0 },
        9: { flexBasis: "x30dmzn", $$css: !0 },
        10: { flexBasis: "x3cfelu", $$css: !0 },
      },
      _ = {
        bottom: { alignSelf: "xpvyfi4", $$css: !0 },
        center: { alignSelf: "xamitd3", $$css: !0 },
        stretch: { alignSelf: "xkh2ocl", $$css: !0 },
        top: { alignSelf: "xqcrz7y", $$css: !0 },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(20),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, f, g, h;
      if (n[3] !== a) {
        var y = a;
        ((u = y.expanding),
          (f = y.useDeprecatedStyles),
          (g = y.verticalAlign),
          (h = y.xstyle),
          (l = babelHelpers.objectWithoutPropertiesLoose(y, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = f),
          (n[7] = g),
          (n[8] = h));
      } else ((l = n[4]), (u = n[5]), (f = n[6]), (g = n[7]), (h = n[8]));
      var C = u === void 0 ? !1 : u,
        b = f === void 0 ? !1 : f,
        v = d(r("BaseRowContext")),
        S = v.columns,
        R = v.wrap,
        L = b ? m.item_DEPRECATED : m.item,
        E = C && m.expanding,
        k = C && R !== "none" && m.expandingWithWrap,
        I = S > 0 && p[S],
        T = g != null && _[g],
        D;
      n[9] !== L ||
      n[10] !== E ||
      n[11] !== k ||
      n[12] !== I ||
      n[13] !== T ||
      n[14] !== h
        ? ((D = [L, E, k, I, T, h]),
          (n[9] = L),
          (n[10] = E),
          (n[11] = k),
          (n[12] = I),
          (n[13] = T),
          (n[14] = h),
          (n[15] = D))
        : (D = n[15]);
      var x;
      return (
        n[16] !== l || n[17] !== i || n[18] !== D
          ? ((x = c.jsx(
              r("BaseView.react"),
              babelHelpers.extends({}, l, { ref: i, xstyle: D }),
            )),
            (n[16] = l),
            (n[17] = i),
            (n[18] = D),
            (n[19] = x))
          : (x = n[19]),
        x
      );
    }
    l.default = f;
  },
  98,
);
