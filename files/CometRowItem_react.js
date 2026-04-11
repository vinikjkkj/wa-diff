__d(
  "CometRowItem.react",
  [
    "BaseRowItem.react",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRowContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["fallback", "placeholder"],
      u = ["placeholder"],
      c = ["fallback"],
      d,
      m = d || (d = o("react")),
      p = d.useContext,
      _ = {
        4: {
          paddingInlineEnd: "x14vy60q",
          paddingInlineStart: "xyiysdx",
          $$css: !0,
        },
        8: {
          paddingInlineEnd: "x11lfxj5",
          paddingInlineStart: "x135b78x",
          $$css: !0,
        },
        12: {
          paddingInlineEnd: "x1icxu4v",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        16: {
          paddingInlineEnd: "xf159sx",
          paddingInlineStart: "xmzvs34",
          $$css: !0,
        },
        24: {
          paddingInlineEnd: "xpdmqnj",
          paddingInlineStart: "x1g0dm76",
          $$css: !0,
        },
        32: {
          paddingInlineEnd: "xv54qhq",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
      },
      f = {
        4: { paddingBottom: "x1120s5i", paddingTop: "x1nn3v0j", $$css: !0 },
        8: { paddingBottom: "xjkvuk6", paddingTop: "x1iorvi4", $$css: !0 },
        12: { paddingBottom: "x10b6aqq", paddingTop: "x1yrsyyn", $$css: !0 },
        16: { paddingBottom: "xwib8y2", paddingTop: "x1y1aw1k", $$css: !0 },
        24: { paddingBottom: "xsag5q8", paddingTop: "xz9dl7a", $$css: !0 },
        32: { paddingBottom: "x1l90r2v", paddingTop: "xyamay9", $$css: !0 },
      };
    function g(t) {
      var n,
        a = o("react-compiler-runtime").c(45),
        l,
        d;
      a[0] !== t
        ? ((d = t.ref),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = l),
          (a[2] = d))
        : ((l = a[1]), (d = a[2]));
      var h = (n = p(r("CometRowContext"))) != null ? n : {},
        y = h.spacingHorizontal,
        C = h.spacingVertical,
        b,
        v,
        S;
      if (a[3] !== l) {
        var R = l;
        ((b = R.fallback),
          (S = R.placeholder),
          (v = babelHelpers.objectWithoutPropertiesLoose(R, s)),
          (a[3] = l),
          (a[4] = b),
          (a[5] = v),
          (a[6] = S));
      } else ((b = a[4]), (v = a[5]), (S = a[6]));
      if (S !== void 0) {
        var L;
        if (a[7] !== l) {
          var E = l,
            k = E.placeholder,
            I = babelHelpers.objectWithoutPropertiesLoose(E, u);
          ((L = I), (a[7] = l), (a[8] = L));
        } else L = a[8];
        var T;
        a[9] !== L || a[10] !== S || a[11] !== d
          ? ((T =
              S != null
                ? m.jsx(g, babelHelpers.extends({}, L, { ref: d, children: S }))
                : null),
            (a[9] = L),
            (a[10] = S),
            (a[11] = d),
            (a[12] = T))
          : (T = a[12]);
        var D;
        a[13] !== L || a[14] !== d
          ? ((D = m.jsx(g, babelHelpers.extends({}, L, { ref: d }))),
            (a[13] = L),
            (a[14] = d),
            (a[15] = D))
          : (D = a[15]);
        var x;
        return (
          a[16] !== T || a[17] !== D
            ? ((x = m.jsx(r("CometPlaceholder.react"), {
                fallback: T,
                name: i.id,
                children: D,
              })),
              (a[16] = T),
              (a[17] = D),
              (a[18] = x))
            : (x = a[18]),
          x
        );
      }
      if (b !== void 0) {
        var $;
        if (a[19] !== l) {
          var P = l,
            N = P.fallback,
            M = babelHelpers.objectWithoutPropertiesLoose(P, c);
          (($ = M), (a[19] = l), (a[20] = $));
        } else $ = a[20];
        if (b === null) {
          var w;
          return (
            a[21] !== $ || a[22] !== d
              ? ((w = m.jsx(r("CometErrorBoundary.react"), {
                  children: m.jsx(g, babelHelpers.extends({}, $, { ref: d })),
                })),
                (a[21] = $),
                (a[22] = d),
                (a[23] = w))
              : (w = a[23]),
            w
          );
        }
        var A;
        a[24] !== b || a[25] !== $ || a[26] !== d
          ? ((A = function (t, n) {
              return m.jsx(
                g,
                babelHelpers.extends({}, $, {
                  ref: d,
                  children: typeof b == "function" ? b(t, n) : b,
                }),
              );
            }),
            (a[24] = b),
            (a[25] = $),
            (a[26] = d),
            (a[27] = A))
          : (A = a[27]);
        var F;
        a[28] !== $ || a[29] !== d
          ? ((F = m.jsx(g, babelHelpers.extends({}, $, { ref: d }))),
            (a[28] = $),
            (a[29] = d),
            (a[30] = F))
          : (F = a[30]);
        var O;
        return (
          a[31] !== A || a[32] !== F
            ? ((O = m.jsx(r("CometErrorBoundary.react"), {
                fallback: A,
                children: F,
              })),
              (a[31] = A),
              (a[32] = F),
              (a[33] = O))
            : (O = a[33]),
          O
        );
      }
      var B = _[y],
        W = f[C],
        q;
      a[34] !== v.xstyle || a[35] !== B || a[36] !== W
        ? ((q = [B, W, v.xstyle]),
          (a[34] = v.xstyle),
          (a[35] = B),
          (a[36] = W),
          (a[37] = q))
        : (q = a[37]);
      var U;
      a[38] !== v.children
        ? ((U = m.jsx(r("CometRowContext").Provider, {
            value: null,
            children: v.children,
          })),
          (a[38] = v.children),
          (a[39] = U))
        : (U = a[39]);
      var V;
      return (
        a[40] !== v || a[41] !== d || a[42] !== q || a[43] !== U
          ? ((V = m.jsx(
              r("BaseRowItem.react"),
              babelHelpers.extends({}, v, {
                ref: d,
                useDeprecatedStyles: v.useDeprecatedStyles,
                xstyle: q,
                children: U,
              }),
            )),
            (a[40] = v),
            (a[41] = d),
            (a[42] = q),
            (a[43] = U),
            (a[44] = V))
          : (V = a[44]),
        V
      );
    }
    l.default = g;
  },
  98,
);
