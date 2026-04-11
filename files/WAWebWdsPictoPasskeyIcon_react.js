__d(
  "WAWebWdsPictoPasskeyIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-passkey";
    function m(t) {
      var n = o("react-compiler-runtime").c(29),
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
      var E = 88,
        k = 88;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 88 88",
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
      var M, w, A;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fill: "#e6ffda",
            stroke: "#111b21",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M72.46 49.27A11.11 11.11 0 1 0 57.3 59.6v14L61.35 77l6.38-5.78-2.32-3.54v-2.14l2.32-2.8-2.32-3.04v-.11a11.1 11.1 0 0 0 7.05-10.34zm-11.11-3c1.66 0 3 1.33 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.67 1.34-3 3-3Z",
          })),
          (w = c.jsx("path", {
            fill: "#25d366",
            d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4M45.93 43.93q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64",
          })),
          (A = c.jsx("path", {
            stroke: "#111b21",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4ZM45.93 43.93q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64Z",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A))
        : ((M = n[16]), (w = n[17]), (A = n[18]));
      var F;
      n[19] !== E || n[20] !== k || n[21] !== T || n[22] !== $ || n[23] !== N
        ? ((F = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w, A],
          })),
          (n[19] = E),
          (n[20] = k),
          (n[21] = T),
          (n[22] = $),
          (n[23] = N),
          (n[24] = F))
        : (F = n[24]);
      var O;
      return (
        n[25] !== u || n[26] !== I || n[27] !== F
          ? ((O = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: F }),
            )),
            (n[25] = u),
            (n[26] = I),
            (n[27] = F),
            (n[28] = O))
          : (O = n[28]),
        O
      );
    }
    l.WdsPictoPasskeyIcon = m;
  },
  98,
);
