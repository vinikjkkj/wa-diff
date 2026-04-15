__d(
  "WAWebRefreshLargeIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "refresh-large";
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
      var E = 48,
        k = 48;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 48 48",
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P, N, M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx("title", { children: "refresh-l-light" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("defs", {})),
          (n[14] = P),
          (n[15] = N),
          (n[16] = M))
        : ((P = n[14]), (N = n[15]), (M = n[16]));
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("g", {
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: c.jsx("g", {
              id: "ic_refresh_black_24px",
              fill: "currentColor",
              fillRule: "nonzero",
              children: c.jsx("path", {
                d: "M35.3,12.7 C32.4,9.8 28.42,8 24,8 C15.16,8 8.02,15.16 8.02,24 C8.02,32.84 15.16,40 24,40 C31.46,40 37.68,34.9 39.46,28 L35.3,28 C33.66,32.66 29.22,36 24,36 C17.38,36 12,30.62 12,24 C12,17.38 17.38,12 24,12 C27.32,12 30.28,13.38 32.44,15.56 L26,22 L40,22 L40,8 L35.3,12.7 Z",
                id: "Shape",
              }),
            }),
          })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] !== E || n[19] !== k || n[20] !== T || n[21] !== $
        ? ((A = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            version: "1.1",
            children: [P, N, M, w],
          })),
          (n[18] = E),
          (n[19] = k),
          (n[20] = T),
          (n[21] = $),
          (n[22] = A))
        : (A = n[22]);
      var F;
      return (
        n[23] !== u || n[24] !== I || n[25] !== A
          ? ((F = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: A }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = A),
            (n[26] = F))
          : (F = n[26]),
        F
      );
    }
    l.RefreshLargeIcon = m;
  },
  98,
);
