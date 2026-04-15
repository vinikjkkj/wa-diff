__d(
  "WAWebOnedriveLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "onedrive-logo";
    function m(t) {
      var n = o("react-compiler-runtime").c(30),
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
      var E = 20.5,
        k = 32;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 5.5 32 20.5",
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
      var M, w, A, F;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", {
            d: "m12.202 11.193 6.718 4.024 4.003-1.685A6.5 6.5 0 0 1 25.5 13q.222.001.439.016a10 10 0 0 0-18.041-3.013L8 10a7.96 7.96 0 0 1 4.202 1.193",
            fill: "#0364b8",
          })),
          (A = c.jsx("path", {
            d: "M12.203 11.192A7.96 7.96 0 0 0 8 10l-.102.003a7.997 7.997 0 0 0-6.46 12.57L7.36 20.08l2.634-1.108 5.863-2.468 3.062-1.288Z",
            fill: "#0078d4",
          })),
          (F = c.jsx("path", {
            d: "M25.939 13.016A7 7 0 0 0 25.5 13a6.5 6.5 0 0 0-2.576.532l-4.004 1.684 1.161.695 3.805 2.279 1.66.994 5.677 3.4a6.5 6.5 0 0 0-5.284-9.568",
            fill: "#1490df",
          })),
          (M = c.jsx("path", {
            d: "m25.546 19.184-1.66-.994-3.805-2.28-1.16-.694-3.063 1.288-5.863 2.468L7.36 20.08l-5.924 2.493A7.99 7.99 0 0 0 8 26h17.5a6.5 6.5 0 0 0 5.723-3.416Z",
            fill: "#28a8ea",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F))
        : ((M = n[16]), (w = n[17]), (A = n[18]), (F = n[19]));
      var O;
      n[20] !== E || n[21] !== k || n[22] !== T || n[23] !== $ || n[24] !== N
        ? ((O = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            children: [N, w, A, F, M],
          })),
          (n[20] = E),
          (n[21] = k),
          (n[22] = T),
          (n[23] = $),
          (n[24] = N),
          (n[25] = O))
        : (O = n[25]);
      var B;
      return (
        n[26] !== u || n[27] !== I || n[28] !== O
          ? ((B = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: O }),
            )),
            (n[26] = u),
            (n[27] = I),
            (n[28] = O),
            (n[29] = B))
          : (B = n[29]),
        B
      );
    }
    l.OnedriveLogoIcon = m;
  },
  98,
);
