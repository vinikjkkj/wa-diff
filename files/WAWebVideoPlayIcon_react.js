__d(
  "WAWebVideoPlayIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-play";
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
      var E = 32,
        k = 32;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 32 32",
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P, N, M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx("title", { children: "video-play" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("path", {
            d: "M24.4,14.7910279 L11.4,7.29102793 C10.1,6.59102793 9,7.19102793 9,8.69102793 L9,23.6910279 C9,25.1910279 10.1,25.7910279 11.4,25.0910279 L24.4,17.5910279 C25.7,16.6910279 25.7,15.4910279 24.4,14.7910279 Z",
            id: "v-play-path-1",
          })),
          (n[14] = P),
          (n[15] = N),
          (n[16] = M))
        : ((P = n[14]), (N = n[15]), (M = n[16]));
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsxs("defs", {
            children: [
              M,
              c.jsxs("filter", {
                x: "-21.4%",
                y: "-13.6%",
                width: "142.7%",
                height: "138.1%",
                filterUnits: "objectBoundingBox",
                id: "v-play-filter-2",
                children: [
                  c.jsx("feOffset", {
                    dx: 0,
                    dy: 1,
                    in: "SourceAlpha",
                    result: "shadowOffsetOuter1",
                  }),
                  c.jsx("feGaussianBlur", {
                    stdDeviation: 1,
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1",
                  }),
                  c.jsx("feColorMatrix", {
                    values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0",
                    type: "matrix",
                    in: "shadowBlurOuter1",
                  }),
                ],
              }),
            ],
          })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx("g", {
            id: "video-play-Page-1",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: c.jsxs("g", {
              id: "video-play",
              fillRule: "nonzero",
              children: [
                c.jsx("use", {
                  fill: "black",
                  fillOpacity: 1,
                  filter: "url(#v-play-filter-2)",
                  xlinkHref: "#v-play-path-1",
                }),
                c.jsx("use", {
                  fill: "#FFFFFF",
                  fillRule: "evenodd",
                  xlinkHref: "#v-play-path-1",
                }),
              ],
            }),
          })),
          (n[18] = A))
        : (A = n[18]);
      var F;
      n[19] !== E || n[20] !== k || n[21] !== T || n[22] !== $
        ? ((F = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            version: "1.1",
            children: [P, N, w, A],
          })),
          (n[19] = E),
          (n[20] = k),
          (n[21] = T),
          (n[22] = $),
          (n[23] = F))
        : (F = n[23]);
      var O;
      return (
        n[24] !== u || n[25] !== I || n[26] !== F
          ? ((O = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: F }),
            )),
            (n[24] = u),
            (n[25] = I),
            (n[26] = F),
            (n[27] = O))
          : (O = n[27]),
        O
      );
    }
    l.VideoPlayIcon = m;
  },
  98,
);
