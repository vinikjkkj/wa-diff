__d(
  "WAWebBusinessCategoryIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-category";
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
        ? ((P = c.jsx("title", { children: "business-category" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("defs", {})),
          (n[14] = P),
          (n[15] = N),
          (n[16] = M))
        : ((P = n[14]), (N = n[15]), (M = n[16]));
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsxs("g", {
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: [
              c.jsx("path", {
                d: "M5.60860827,7.15515467 C4.78378352,7.15515467 4.06206187,6.43343302 4.06206187,5.60860827 C4.06206187,4.78378352 4.78378352,4.06206187 5.60860827,4.06206187 C6.43343302,4.06206187 7.15515467,4.78378352 7.15515467,5.60860827 C7.15515467,6.43343302 6.43343302,7.15515467 5.60860827,7.15515467 M22.0020001,11.897897 L12.7227217,2.61861856 C12.4134124,2.20620619 11.897897,2 11.2792784,2 L4.06206187,2 C2.92792784,2 2,2.92792784 2,4.06206187 L2,11.2792784 C2,11.897897 2.20620619,12.4134124 2.61861856,12.7227217 L11.897897,22.0020001 C12.3103093,22.4144125 12.8258248,22.6206187 13.3413403,22.6206187 C13.9599588,22.6206187 14.4754743,22.4144125 14.7847836,22.0020001 L22.0020001,14.7847836 C22.4144125,14.3723712 22.6206187,13.8568557 22.6206187,13.3413403 C22.6206187,12.7227217 22.4144125,12.2072063 22.0020001,11.897897",
                id: "Page-1-Copy-2",
                fill: "currentColor",
              }),
              c.jsx("g", {
                id: "slices",
                transform: "translate(0.000000, -234.000000)",
              }),
            ],
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
    l.BusinessCategoryIcon = m;
  },
  98,
);
