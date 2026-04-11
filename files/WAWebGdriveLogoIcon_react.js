__d(
  "WAWebGdriveLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "gdrive-logo";
    function m(t) {
      var n = o("react-compiler-runtime").c(32),
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
      var E = 78,
        k = 87.3;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 87.3 78",
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
      var M, w, A, F, O, B;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = c.jsx("path", {
            d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z",
            fill: "#0066da",
          })),
          (O = c.jsx("path", {
            d: "M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 0 0 0 53h27.5z",
            fill: "#00ac47",
          })),
          (B = c.jsx("path", {
            d: "M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.798l5.852 11.5z",
            fill: "#ea4335",
          })),
          (M = c.jsx("path", {
            d: "M43.65 25 57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z",
            fill: "#00832d",
          })),
          (w = c.jsx("path", {
            d: "M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z",
            fill: "#2684fc",
          })),
          (A = c.jsx("path", {
            d: "m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z",
            fill: "#ffba00",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F),
          (n[20] = O),
          (n[21] = B))
        : ((M = n[16]),
          (w = n[17]),
          (A = n[18]),
          (F = n[19]),
          (O = n[20]),
          (B = n[21]));
      var W;
      n[22] !== E || n[23] !== k || n[24] !== T || n[25] !== $ || n[26] !== N
        ? ((W = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            children: [N, F, O, B, M, w, A],
          })),
          (n[22] = E),
          (n[23] = k),
          (n[24] = T),
          (n[25] = $),
          (n[26] = N),
          (n[27] = W))
        : (W = n[27]);
      var q;
      return (
        n[28] !== u || n[29] !== I || n[30] !== W
          ? ((q = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: W }),
            )),
            (n[28] = u),
            (n[29] = I),
            (n[30] = W),
            (n[31] = q))
          : (q = n[31]),
        q
      );
    }
    l.GdriveLogoIcon = m;
  },
  98,
);
