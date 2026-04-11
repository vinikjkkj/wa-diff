__d(
  "WAWebVideoExitFullscreenIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-exit-fullscreen";
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
        ? ((M = c.jsx("path", {
            d: "M15.0425532,1.93617021 L15.0425532,8.95744681 L22.0638298,8.95744681 C22.5808623,8.95744681 23,8.53830913 23,8.0212766 L23,7.08510638 C23,6.56807385 22.5808623,6.14893617 22.0638298,6.14893617 L17.8510638,6.14893617 L17.8510638,1.93617021 C17.8510638,1.41913768 17.4319261,1 16.9148936,1 L15.9787234,1 C15.4616909,1 15.0425532,1.41913768 15.0425532,1.93617021 Z M6.14893617,1.93617021 L6.14893617,6.14893617 L1.93617021,6.14893617 C1.41913768,6.14893617 1,6.56807385 1,7.08510638 L1,8.0212766 C1,8.53830913 1.41913768,8.95744681 1.93617021,8.95744681 L8.95744681,8.95744681 L8.95744681,1.93617021 C8.95744681,1.41913768 8.53830913,1 8.0212766,1 L7.08510638,1 C6.56807385,1 6.14893617,1.41913768 6.14893617,1.93617021 Z M15.0425532,15.0425532 L15.0425532,22.0638298 C15.0425532,22.5808623 15.4616909,23 15.9787234,23 L16.9148936,23 C17.4319261,23 17.8510638,22.5808623 17.8510638,22.0638298 L17.8510638,17.8510638 L22.0638298,17.8510638 C22.5808623,17.8510638 23,17.4319261 23,16.9148936 L23,15.9787234 C23,15.4616909 22.5808623,15.0425532 22.0638298,15.0425532 L15.0425532,15.0425532 Z M1,15.9787234 L1,16.9148936 C1,17.4319261 1.41913768,17.8510638 1.93617021,17.8510638 L6.14893617,17.8510638 L6.14893617,22.0638298 C6.14893617,22.5808623 6.56807385,23 7.08510638,23 L8.0212766,23 C8.53830913,23 8.95744681,22.5808623 8.95744681,22.0638298 L8.95744681,15.0425532 L1.93617021,15.0425532 C1.41913768,15.0425532 1,15.4616909 1,15.9787234 Z",
            id: "exit-fullscreen-path",
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsxs("defs", {
            children: [
              M,
              c.jsxs("filter", {
                x: "-15.9%",
                y: "-11.4%",
                width: "131.8%",
                height: "131.8%",
                filterUnits: "objectBoundingBox",
                id: "exit-fullscreen-filter",
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
            id: "exit-fullscreen-page",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: c.jsxs("g", {
              id: "exit-fullscreen",
              children: [
                c.jsx("use", {
                  fill: "black",
                  fillOpacity: 1,
                  filter: "url(#exit-fullscreen-filter)",
                  xlinkHref: "#exit-fullscreen-path",
                }),
                c.jsx("use", {
                  fill: "#FFFFFF",
                  fillRule: "evenodd",
                  xlinkHref: "#exit-fullscreen-path",
                }),
              ],
            }),
          })),
          (n[18] = A))
        : (A = n[18]);
      var F;
      n[19] !== E || n[20] !== k || n[21] !== T || n[22] !== $ || n[23] !== N
        ? ((F = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            version: "1.1",
            children: [N, w, A],
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
    l.VideoExitFullscreenIcon = m;
  },
  98,
);
