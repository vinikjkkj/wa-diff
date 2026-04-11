__d(
  "WAWebGformsLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "gforms-logo";
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
        k = 64;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 64 88",
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
            d: "m42 22 12.065 2.28L64 22 42 0l-3.035 10.43Z",
            fill: "#56368a",
          })),
          (w = c.jsx("path", {
            d: "M42 22V0H6C2.685 0 0 2.685 0 6v76c0 3.315 2.685 6 6 6h52c3.315 0 6-2.685 6-6V22Z",
            fill: "#7248b9",
          })),
          (A = c.jsx("path", {
            d: "M17 63.5c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3m0-12c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3m0-12c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3M50 63H25v-5h25zm0-12H25v-5h25zm0-12H25v-5h25z",
            fill: "#fff",
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
    l.GformsLogoIcon = m;
  },
  98,
);
