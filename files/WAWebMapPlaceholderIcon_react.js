__d(
  "WAWebMapPlaceholderIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "map-placeholder";
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
      var E = 320,
        k = 580;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 580 320",
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P, N, M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx("title", { children: "ic_tempmap" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("defs", {})),
          (n[14] = P),
          (n[15] = N),
          (n[16] = M))
        : ((P = n[14]), (N = n[15]), (M = n[16]));
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsxs("g", {
            id: "ic_tempmap",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: [
              c.jsx("rect", {
                id: "Rectangle-6",
                fill: "#EAEAEA",
                x: 0,
                y: 112,
                width: 358,
                height: 208,
              }),
              c.jsx("path", {
                d: "M12.5,541 C-148.598871,541 -281,449.869854 -281,334 C-281,218.130146 -148.598871,127 12.5,127 C173.598871,127 306,218.130146 306,334 C306,449.869854 173.598871,541 12.5,541 Z M12.5,509 C157.919165,509 274,429.102921 274,334 C274,238.897079 157.919165,159 12.5,159 C-132.919165,159 -249,238.897079 -249,334 C-249,429.102921 -132.919165,509 12.5,509 Z",
                id: "Oval-3",
                fill: "#FFF1B6",
                fillRule: "nonzero",
              }),
              c.jsx("polygon", {
                id: "Rectangle-6",
                fill: "#CBE6A3",
                points: "6.37225587e-14 0 358 0 358 80 6.37225587e-14 80",
              }),
              c.jsx("polygon", {
                id: "Rectangle-6",
                fill: "#8CCEFF",
                points: "390 -2.82320336e-13 580 -2.82320336e-13 580 80 390 80",
              }),
              c.jsx("rect", {
                id: "Rectangle-6",
                fill: "#F0E0C9",
                x: 391,
                y: 112,
                width: 190,
                height: 59,
              }),
              c.jsx("rect", {
                id: "Rectangle-6",
                fill: "#F0E0C9",
                x: 391,
                y: 203,
                width: 110,
                height: 117,
              }),
              c.jsx("rect", {
                id: "Rectangle-6",
                fill: "#F0E0C9",
                x: 534,
                y: 203,
                width: 46,
                height: 117,
              }),
              c.jsx("rect", {
                id: "Rectangle",
                fill: "#FFF1B6",
                x: 0,
                y: 80,
                width: 580,
                height: 32,
              }),
              c.jsx("rect", {
                id: "Rectangle",
                fill: "#FFF1B6",
                x: 391,
                y: 171,
                width: 190,
                height: 32,
              }),
              c.jsx("rect", {
                id: "Rectangle",
                fill: "#FFF1B6",
                x: 358,
                y: 0,
                width: 33,
                height: 320,
              }),
              c.jsx("rect", {
                id: "Rectangle",
                fill: "#FFF1B6",
                x: 501,
                y: 171,
                width: 33,
                height: 149,
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
    l.MapPlaceholderIcon = m;
  },
  98,
);
