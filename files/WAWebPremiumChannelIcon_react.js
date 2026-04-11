__d(
  "WAWebPremiumChannelIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "premium-channel";
    function m(t) {
      var n = o("react-compiler-runtime").c(27),
        a,
        i,
        l,
        u,
        m,
        p;
      n[0] !== t
        ? ((a = t.height),
          (l = t.iconXstyle),
          (i = t.name),
          (m = t.viewBox),
          (p = t.width),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (p = n[6]));
      var _;
      if (m) {
        var f = m,
          g = f.height,
          h = f.width,
          y = f.x,
          C = f.y,
          b = g === void 0 ? 0 : g,
          v = h === void 0 ? 0 : h,
          S = y === void 0 ? 0 : y,
          R = C === void 0 ? 0 : C,
          L;
        (n[7] !== b || n[8] !== v || n[9] !== S || n[10] !== R
          ? ((L = [S, R, v, b]),
            (n[7] = b),
            (n[8] = v),
            (n[9] = S),
            (n[10] = R),
            (n[11] = L))
          : (L = n[11]),
          (_ = L.join(" ")));
      }
      var E = 24,
        k = 24;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 24 24",
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsxs("g", {
            fill: "currentColor",
            children: [
              c.jsx("path", {
                d: "m12.152 19.552 7.8-9.133a1.7 1.7 0 0 0 .143-2.015L18.457 5.82l1.52-.964 1.638 2.583a3.5 3.5 0 0 1-.294 4.148l-7.8 9.133a2 2 0 0 1-3.042 0l-7.8-9.133a3.5 3.5 0 0 1-.294-4.148l1.638-2.583A4 4 0 0 1 7.401 3h9.198a4 4 0 0 1 3.378 1.857l-1.52.964A2.2 2.2 0 0 0 16.599 4.8H7.401a2.2 2.2 0 0 0-1.858 1.021L3.905 8.404a1.7 1.7 0 0 0 .142 2.015l7.8 9.133a.2.2 0 0 0 .305 0",
              }),
              c.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.12 18.79a.9.9 0 1 0 1.76-.38L8.927 9.36l1.466-5.112a.9.9 0 1 0-1.73-.496l-1.59 5.547zm5.76 0a.9.9 0 0 1-1.76-.38l1.953-9.05-1.466-5.112a.9.9 0 1 1 1.73-.496l1.59 5.547z",
              }),
              c.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21 10.4H3V8.6h18z",
              }),
            ],
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] !== E || n[18] !== k || n[19] !== T || n[20] !== $ || n[21] !== N
        ? ((w = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M],
          })),
          (n[17] = E),
          (n[18] = k),
          (n[19] = T),
          (n[20] = $),
          (n[21] = N),
          (n[22] = w))
        : (w = n[22]);
      var A;
      return (
        n[23] !== u || n[24] !== I || n[25] !== w
          ? ((A = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: w }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = w),
            (n[26] = A))
          : (A = n[26]),
        A
      );
    }
    l.PremiumChannelIcon = m;
  },
  98,
);
