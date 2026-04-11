__d(
  "WAWebBusinessDataSharingIllustrationDarkIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-data-sharing-illustration-dark";
    function m(t) {
      var n = o("react-compiler-runtime").c(28),
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
      var E = 56,
        k = 56;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 56 56",
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
            clipPath: "url(#clip0_722_104803)",
            children: [
              c.jsx("path", {
                d: "M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z",
                fill: "#092D2F",
              }),
              c.jsx("path", {
                d: "M22.15 39.53C22.67 39.01 22.67 38.16 22.15 37.63L19.32 34.8H39.85C40.59 34.8 41.19 34.2 41.19 33.46C41.19 32.72 40.59 32.12 39.85 32.12H19.36L22.15 29.33C22.68 28.8 22.68 27.95 22.15 27.42C21.62 26.89 20.76 26.89 20.24 27.42L15.26 32.41C14.67 33 14.68 33.95 15.26 34.53L20.26 39.52C20.78 40.04 21.63 40.04 22.15 39.52V39.53Z",
                fill: "#00A884",
              }),
              c.jsx("path", {
                d: "M33.85 15.7001C33.33 16.2201 33.33 17.0701 33.85 17.6001L36.68 20.4301H16.15C15.41 20.4301 14.81 21.0301 14.81 21.7701C14.81 22.5101 15.41 23.1101 16.15 23.1101H36.64L33.85 25.9001C33.32 26.4301 33.32 27.2801 33.85 27.8101C34.38 28.3401 35.24 28.3401 35.76 27.8101L40.74 22.8201C41.33 22.2301 41.32 21.2801 40.74 20.7001L35.74 15.7101C35.22 15.1901 34.37 15.1901 33.85 15.7101V15.7001Z",
                fill: "#00A884",
              }),
            ],
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("defs", {
            children: c.jsx("clipPath", {
              id: "clip0_722_104803",
              children: c.jsx("rect", { width: 56, height: 56, fill: "white" }),
            }),
          })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] !== E || n[19] !== k || n[20] !== T || n[21] !== $ || n[22] !== N
        ? ((A = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w],
          })),
          (n[18] = E),
          (n[19] = k),
          (n[20] = T),
          (n[21] = $),
          (n[22] = N),
          (n[23] = A))
        : (A = n[23]);
      var F;
      return (
        n[24] !== u || n[25] !== I || n[26] !== A
          ? ((F = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: A }),
            )),
            (n[24] = u),
            (n[25] = I),
            (n[26] = A),
            (n[27] = F))
          : (F = n[27]),
        F
      );
    }
    l.BusinessDataSharingIllustrationDarkIcon = m;
  },
  98,
);
