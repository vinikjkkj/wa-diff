__d(
  "WAWebVideoPipIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-pip";
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
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("defs", {
            children: c.jsxs("filter", {
              x: "-39.5%",
              y: "-46.4%",
              width: "173.7%",
              height: "200.0%",
              filterUnits: "objectBoundingBox",
              id: "video-pip-filter-1",
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
                  result: "shadowMatrixOuter1",
                }),
                c.jsxs("feMerge", {
                  children: [
                    c.jsx("feMergeNode", { in: "shadowMatrixOuter1" }),
                    c.jsx("feMergeNode", { in: "SourceGraphic" }),
                  ],
                }),
              ],
            }),
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("g", {
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: c.jsxs("g", {
              filter: "url(#video-pip-filter-1)",
              transform: "translate(3.000000, 4.000000)",
              fill: "#FFFFFF",
              children: [
                c.jsx("path", {
                  d: "M11.3499993,5.99999964 L17.349999,5.99999964 C18.0123989,5.99999964 18.5499989,5.46239967 18.5499989,4.79999971 L18.5499989,1.19999993 C18.5499989,0.537599968 18.0123989,0 17.349999,0 L11.3499993,0 C10.6875994,0 10.1499994,0.537599968 10.1499994,1.19999993 L10.1499994,4.79999971 C10.1499994,5.46239967 10.6875994,5.99999964 11.3499993,5.99999964",
                }),
                c.jsx("path", {
                  d: "M8.64999941,1.87499984 L8.64999941,3.37499984 L1.20029993,3.37499984 C0.951778708,3.37499984 0.7503,3.57654815 0.7503,3.82499977 L0.7503,12.4249992 C0.7503,12.6734508 0.951778708,12.8749991 1.20029993,12.8749991 L14.6002991,12.8749991 C14.8484855,12.8749991 15.050299,12.6731856 15.050299,12.4249992 L15.050299,7.17479957 L16.550299,7.17479957 L16.550299,12.4249992 C16.550299,13.5016127 15.6769126,14.3749991 14.6002991,14.3749991 L1.20029993,14.3749991 C0.123235593,14.3749991 -0.7497,13.501762 -0.7497,12.4249992 L-0.7497,3.82499977 C-0.7497,2.74823697 0.123235593,1.87499984 1.20029993,1.87499984 L8.64999941,1.87499984 Z",
                  fillRule: "nonzero",
                }),
              ],
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
            version: "1.1",
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
    l.VideoPipIcon = m;
  },
  98,
);
