__d(
  "WAWebVideoVolumeMutedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-volume-muted";
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
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            d: "M3,16.9574612 C3,17.5715879 3.50689011,18.0694861 4.13180121,18.0694861 L6.9999111,18.0694861 L11.1050409,22.0986131 C11.4346995,22.4221684 12,22.1928525 12,21.7342208 L12,8.51557421 C12,8.05733512 11.4346995,7.82762659 11.1050409,8.15157452 L6.9999111,12.1803089 L4.13180121,12.1803089 C3.50689011,12.1803089 3,12.6782071 3,13.2915485 L3,16.9574612 Z",
            id: "vvm-path-1",
          })),
          (n[16] = M))
        : (M = n[16]);
      var w, A;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsxs("filter", {
            x: "-38.9%",
            y: "-16.5%",
            width: "177.8%",
            height: "144.4%",
            filterUnits: "objectBoundingBox",
            id: "vvm-filter-2",
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
          })),
          (A = c.jsx("path", {
            d: "M22.8281041,14.5906672 L25.9892792,17.7518424 C26.2739489,18.0365121 26.2739489,18.4980528 25.9892792,18.7827225 L25.7827225,18.9892792 C25.4980528,19.2739489 25.0365121,19.2739489 24.7518424,18.9892792 L21.5906672,15.8281041 L18.4294921,18.9892792 C18.1448224,19.2739489 17.6832817,19.2739489 17.398612,18.9892792 L17.1920552,18.7827225 C16.9073856,18.4980528 16.9073856,18.0365121 17.1920552,17.7518424 L20.3532304,14.5906672 L17.1920552,11.4294921 C16.9073856,11.1448224 16.9073856,10.6832817 17.1920552,10.398612 L17.398612,10.1920552 C17.6832817,9.90738555 18.1448224,9.90738555 18.4294921,10.1920552 L21.5906672,13.3532304 L24.7518424,10.1920552 C25.0365121,9.90738555 25.4980528,9.90738555 25.7827225,10.1920552 L25.9892792,10.398612 C26.2739489,10.6832817 26.2739489,11.1448224 25.9892792,11.4294921 L22.8281041,14.5906672 Z",
            id: "vvm-path-3",
          })),
          (n[17] = w),
          (n[18] = A))
        : ((w = n[17]), (A = n[18]));
      var F;
      n[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = c.jsxs("defs", {
            children: [
              M,
              w,
              A,
              c.jsxs("filter", {
                x: "-37.9%",
                y: "-27.1%",
                width: "175.9%",
                height: "175.9%",
                filterUnits: "objectBoundingBox",
                id: "vvm-filter-4",
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
          (n[19] = F))
        : (F = n[19]);
      var O;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = c.jsxs("g", {
            id: "Fill-1",
            children: [
              c.jsx("use", {
                fill: "black",
                fillOpacity: 1,
                filter: "url(#vvm-filter-2)",
                xlinkHref: "#vvm-path-1",
              }),
              c.jsx("use", {
                fill: "#FFFFFF",
                fillRule: "evenodd",
                xlinkHref: "#vvm-path-1",
              }),
            ],
          })),
          (n[20] = O))
        : (O = n[20]);
      var B;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = c.jsxs("g", {
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: [
              O,
              c.jsxs("g", {
                id: "Combined-Shape",
                children: [
                  c.jsx("use", {
                    fill: "black",
                    fillOpacity: 1,
                    filter: "url(#vvm-filter-4)",
                    xlinkHref: "#vvm-path-3",
                  }),
                  c.jsx("use", {
                    fill: "#FFFFFF",
                    fillRule: "evenodd",
                    xlinkHref: "#vvm-path-3",
                  }),
                ],
              }),
            ],
          })),
          (n[21] = B))
        : (B = n[21]);
      var W;
      n[22] !== E || n[23] !== k || n[24] !== T || n[25] !== $ || n[26] !== N
        ? ((W = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            version: "1.1",
            children: [N, F, B],
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
    l.VideoVolumeMutedIcon = m;
  },
  98,
);
