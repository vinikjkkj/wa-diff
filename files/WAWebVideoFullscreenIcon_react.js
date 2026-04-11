__d(
  "WAWebVideoFullscreenIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-fullscreen";
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
        ? ((P = c.jsx("title", { children: "video-fullscreen" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("path", {
            d: "M14,5.6 L14,6.18723404 C14,6.51860489 14.2686292,6.78723404 14.6,6.78723404 L17.212766,6.78723404 L17.212766,9.4 C17.212766,9.73137085 17.4813951,10 17.812766,10 L18.4,10 C18.7313708,10 19,9.73137085 19,9.4 L19,5 L14.6,5 C14.2686292,5 14,5.26862915 14,5.6 Z M5,5 L5,9.4 C5,9.73137085 5.26862915,10 5.6,10 L6.18723404,10 C6.51860489,10 6.78723404,9.73137085 6.78723404,9.4 L6.78723404,6.78723404 L9.4,6.78723404 C9.73137085,6.78723404 10,6.51860489 10,6.18723404 L10,5.6 C10,5.26862915 9.73137085,5 9.4,5 L5,5 Z M17.212766,14.6 L17.212766,17.212766 L14.6,17.212766 C14.2686292,17.212766 14,17.4813951 14,17.812766 L14,18.4 C14,18.7313708 14.2686292,19 14.6,19 L19,19 L19,14.6 C19,14.2686292 18.7313708,14 18.4,14 L17.812766,14 C17.4813951,14 17.212766,14.2686292 17.212766,14.6 Z M5,14.6 L5,19 L9.4,19 C9.73137085,19 10,18.7313708 10,18.4 L10,17.812766 C10,17.4813951 9.73137085,17.212766 9.4,17.212766 L6.78723404,17.212766 L6.78723404,14.6 C6.78723404,14.2686292 6.51860489,14 6.18723404,14 L5.6,14 C5.26862915,14 5,14.2686292 5,14.6 Z",
            id: "video-fullscreen-path-1",
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
                x: "-25.0%",
                y: "-17.9%",
                width: "150.0%",
                height: "150.0%",
                filterUnits: "objectBoundingBox",
                id: "video-fullscreen-filter-2",
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
            id: "video-fullscreen-Page-1",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: c.jsxs("g", {
              id: "video-fullscreen-fullscreen",
              children: [
                c.jsx("use", {
                  fill: "black",
                  fillOpacity: 1,
                  filter: "url(#video-fullscreen-filter-2)",
                  xlinkHref: "#video-fullscreen-path-1",
                }),
                c.jsx("use", {
                  fill: "#FFFFFF",
                  fillRule: "evenodd",
                  xlinkHref: "#video-fullscreen-path-1",
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
    l.VideoFullscreenIcon = m;
  },
  98,
);
