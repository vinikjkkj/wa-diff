__d(
  "WAWebVideoXIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-x";
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
      var P, N, M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx("title", { children: "video-x" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("path", {
            d: "M17.5268719,5.42394001 L12.6402,10.31144 L7.75252027,5.42404786 C7.51826184,5.18978943 7.13847373,5.18972508 6.90413593,5.42390412 L6.42426412,5.90287593 C6.18987015,6.13711109 6.18974142,6.51701006 6.42397658,6.75140402 C6.42402449,6.75145196 6.4240724,6.75149989 6.42412032,6.75154781 L11.3118,11.63894 L6.42412032,16.5263322 C6.18980575,16.7606468 6.18980575,17.1405457 6.42412032,17.3748603 C6.42416825,17.3749082 6.42421618,17.3749562 6.42426412,17.3750041 L6.90413593,17.8539759 C7.13847373,18.0881549 7.51826184,18.0880906 7.75252027,17.8538321 L12.6402,12.96644 L17.5266921,17.8541197 C17.7609868,18.0884542 18.1408858,18.0884864 18.3752202,17.8541916 C18.3752802,17.8541317 18.3753401,17.8540718 18.3754,17.8540118 L18.8533999,17.3749681 C19.0875648,17.1406443 19.0875165,16.760884 18.853292,16.5266198 L13.9668,11.63894 L18.853292,6.75126018 C19.0875165,6.51699597 19.0875648,6.13723565 18.8533999,5.90291188 L18.3754,5.4238682 C18.1411649,5.18947418 17.7612659,5.18934536 17.5268719,5.42358046 C17.526812,5.42364038 17.526752,5.42370031 17.5266921,5.42376025 Z",
            id: "path-1",
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
                x: "-23.2%",
                y: "-15.6%",
                width: "146.3%",
                height: "146.3%",
                filterUnits: "objectBoundingBox",
                id: "filter-2",
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
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: c.jsxs("g", {
              id: "x",
              children: [
                c.jsx("use", {
                  fill: "black",
                  fillOpacity: 1,
                  filter: "url(#filter-2)",
                  xlinkHref: "#path-1",
                }),
                c.jsx("use", {
                  fill: "#FFFFFF",
                  fillRule: "evenodd",
                  xlinkHref: "#path-1",
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
    l.VideoXIcon = m;
  },
  98,
);
