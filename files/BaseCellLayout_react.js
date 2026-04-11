__d(
  "BaseCellLayout.react",
  ["react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        children: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        middleContainer: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          width: "xh8yej3",
          $$css: !0,
        },
        root: { display: "x78zum5", flexDirection: "xdt5ytf", $$css: !0 },
      };
    function c(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        c,
        d = o("react-compiler-runtime").c(31),
        m = e.addOnBottom,
        p = e.addOnEnd,
        _ = e.addOnStart,
        f = e.addOnTop,
        g = e.children,
        h = e.variant,
        y = (t = h.xstyleConfig) == null ? void 0 : t.root,
        C;
      d[0] !== y ? ((C = [u.root, y]), (d[0] = y), (d[1] = C)) : (C = d[1]);
      var b;
      if (
        d[2] !== f ||
        d[3] !== ((n = h.xstyleConfig) == null ? void 0 : n.addOnTop)
      ) {
        var v, S;
        ((b =
          !!f &&
          s.jsx(o("react-strict-dom").html.div, {
            style: (v = h.xstyleConfig) == null ? void 0 : v.addOnTop,
            children: f,
          })),
          (d[2] = f),
          (d[3] = (S = h.xstyleConfig) == null ? void 0 : S.addOnTop),
          (d[4] = b));
      } else b = d[4];
      var R = (r = h.xstyleConfig) == null ? void 0 : r.horizontalContainer,
        L;
      d[5] !== R
        ? ((L = [u.middleContainer, R]), (d[5] = R), (d[6] = L))
        : (L = d[6]);
      var E;
      if (
        d[7] !== _ ||
        d[8] !== ((a = h.xstyleConfig) == null ? void 0 : a.addOnStart)
      ) {
        var k, I;
        ((E =
          !!_ &&
          s.jsx(o("react-strict-dom").html.div, {
            style: (k = h.xstyleConfig) == null ? void 0 : k.addOnStart,
            children: _,
          })),
          (d[7] = _),
          (d[8] = (I = h.xstyleConfig) == null ? void 0 : I.addOnStart),
          (d[9] = E));
      } else E = d[9];
      var T = (i = h.xstyleConfig) == null ? void 0 : i.children,
        D;
      d[10] !== T
        ? ((D = [u.children, T]), (d[10] = T), (d[11] = D))
        : (D = d[11]);
      var x;
      d[12] !== g || d[13] !== D
        ? ((x = s.jsx(o("react-strict-dom").html.div, {
            style: D,
            children: g,
          })),
          (d[12] = g),
          (d[13] = D),
          (d[14] = x))
        : (x = d[14]);
      var $;
      if (
        d[15] !== p ||
        d[16] !== ((l = h.xstyleConfig) == null ? void 0 : l.addOnEnd)
      ) {
        var P, N;
        (($ =
          !!p &&
          s.jsx(o("react-strict-dom").html.div, {
            style: (P = h.xstyleConfig) == null ? void 0 : P.addOnEnd,
            children: p,
          })),
          (d[15] = p),
          (d[16] = (N = h.xstyleConfig) == null ? void 0 : N.addOnEnd),
          (d[17] = $));
      } else $ = d[17];
      var M;
      d[18] !== $ || d[19] !== L || d[20] !== E || d[21] !== x
        ? ((M = s.jsxs(o("react-strict-dom").html.div, {
            style: L,
            children: [E, x, $],
          })),
          (d[18] = $),
          (d[19] = L),
          (d[20] = E),
          (d[21] = x),
          (d[22] = M))
        : (M = d[22]);
      var w;
      if (
        d[23] !== m ||
        d[24] !== ((c = h.xstyleConfig) == null ? void 0 : c.addOnBottom)
      ) {
        var A, F;
        ((w =
          !!m &&
          s.jsx(o("react-strict-dom").html.div, {
            style: (A = h.xstyleConfig) == null ? void 0 : A.addOnBottom,
            children: m,
          })),
          (d[23] = m),
          (d[24] = (F = h.xstyleConfig) == null ? void 0 : F.addOnBottom),
          (d[25] = w));
      } else w = d[25];
      var O;
      return (
        d[26] !== M || d[27] !== w || d[28] !== C || d[29] !== b
          ? ((O = s.jsxs(o("react-strict-dom").html.div, {
              style: C,
              children: [b, M, w],
            })),
            (d[26] = M),
            (d[27] = w),
            (d[28] = C),
            (d[29] = b),
            (d[30] = O))
          : (O = d[30]),
        O
      );
    }
    l.default = c;
  },
  98,
);
