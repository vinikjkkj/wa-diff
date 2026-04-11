__d(
  "WAWebPreviewSlidesIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "preview-slides";
    function m(t) {
      var n = o("react-compiler-runtime").c(33),
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
        k = 110;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 110 88",
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
            transform: "translate(4 3)",
            children: [
              c.jsx("use", {
                fill: "#000",
                filter: "url(#filter-2)",
                xlinkHref: "#path-1",
              }),
              c.jsx("rect", {
                strokeOpacity: 0.08,
                stroke: "#000",
                fill: "#FFF",
                x: -0.5,
                y: -0.5,
                width: 105,
                height: 81,
                rx: 3,
              }),
            ],
          })),
          (n[16] = M))
        : (M = n[16]);
      var w, A, F, O, B;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = c.jsx("rect", {
            fillOpacity: 0.1,
            fill: "#000",
            width: 96,
            height: 56,
            rx: 2,
          })),
          (B = c.jsx("rect", {
            fillOpacity: 0.2,
            fill: "#000",
            x: 55,
            y: 19,
            width: 30,
            height: 2,
            rx: 0.5,
          })),
          (w = c.jsx("rect", {
            fillOpacity: 0.2,
            fill: "#000",
            x: 55,
            y: 24,
            width: 30,
            height: 2,
            rx: 0.5,
          })),
          (A = c.jsx("rect", {
            fillOpacity: 0.2,
            fill: "#000",
            x: 55,
            y: 29,
            width: 30,
            height: 2,
            rx: 0.5,
          })),
          (F = c.jsx("rect", {
            fillOpacity: 0.2,
            fill: "#000",
            x: 55,
            y: 34,
            width: 18,
            height: 2,
            rx: 0.5,
          })),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F),
          (n[20] = O),
          (n[21] = B))
        : ((w = n[17]), (A = n[18]), (F = n[19]), (O = n[20]), (B = n[21]));
      var W;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = c.jsxs("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              M,
              c.jsxs("g", {
                transform: "translate(8 15)",
                children: [
                  O,
                  B,
                  w,
                  A,
                  F,
                  c.jsxs("g", {
                    transform: "translate(12 13)",
                    children: [
                      c.jsx("circle", {
                        fillOpacity: 0.2,
                        fill: "#000",
                        cx: 16,
                        cy: 16,
                        r: 16,
                      }),
                      c.jsx("path", {
                        d: "M32 16c0 8.837-7.163 16-16 16V16z",
                        fill: "#FFF",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })),
          (n[22] = W))
        : (W = n[22]);
      var q;
      n[23] !== E || n[24] !== k || n[25] !== T || n[26] !== $ || n[27] !== N
        ? ((q = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            children: [N, W],
          })),
          (n[23] = E),
          (n[24] = k),
          (n[25] = T),
          (n[26] = $),
          (n[27] = N),
          (n[28] = q))
        : (q = n[28]);
      var U;
      return (
        n[29] !== u || n[30] !== I || n[31] !== q
          ? ((U = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: q }),
            )),
            (n[29] = u),
            (n[30] = I),
            (n[31] = q),
            (n[32] = U))
          : (U = n[32]),
        U
      );
    }
    l.PreviewSlidesIcon = m;
  },
  98,
);
