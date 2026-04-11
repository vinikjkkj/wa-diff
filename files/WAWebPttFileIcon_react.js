__d(
  "WAWebPttFileIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ptt-file";
    function m(t) {
      var n = o("react-compiler-runtime").c(30),
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
      var E = 55,
        k = 55;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 55 55",
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
      var M, w, A, F;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", { fill: "#FA6533", d: "M0,0h55v55H0V0z" })),
          (A = c.jsx("path", {
            fill: "#FFFFFF",
            d: "M27.1,14.8c1.8,0,3.2,1.5,3.2,3.5v9.5c0,1.9-1.4,3.5-3.2,3.5c-1.8,0-3.2-1.5-3.2-3.5v-9.5 C24,16.3,25.4,14.8,27.1,14.8z",
          })),
          (F = c.jsx("path", {
            fill: "#FFFFFF",
            d: "M27.4,35.1c-0.1,0-0.5,0-0.7,0l-0.2,0c-3.1-0.3-5.6-2.9-6-6.3l0-0.3c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7l0.1,0.3c0.5,2.5,2.5,4.4,5,4.4c2.4,0,4.5-1.9,4.9-4.4l0.1-0.4c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0.1-0.1,0.5c-0.5,3.3-3.1,5.9-6.3,6.1L27.4,35.1z",
          })),
          (M = c.jsx("path", {
            fill: "#FFFFFF",
            d: "M28,39.5c0,0.4-0.3,0.7-0.7,0.7H27c-0.4,0-0.7-0.3-0.7-0.7v-4.6c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7V39.5z",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F))
        : ((M = n[16]), (w = n[17]), (A = n[18]), (F = n[19]));
      var O;
      n[20] !== E || n[21] !== k || n[22] !== T || n[23] !== $ || n[24] !== N
        ? ((O = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            version: "1.1",
            x: "0px",
            y: "0px",
            enableBackground: "new 0 0 55 55",
            children: [N, w, A, F, M],
          })),
          (n[20] = E),
          (n[21] = k),
          (n[22] = T),
          (n[23] = $),
          (n[24] = N),
          (n[25] = O))
        : (O = n[25]);
      var B;
      return (
        n[26] !== u || n[27] !== I || n[28] !== O
          ? ((B = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: O }),
            )),
            (n[26] = u),
            (n[27] = I),
            (n[28] = O),
            (n[29] = B))
          : (B = n[29]),
        B
      );
    }
    l.PttFileIcon = m;
  },
  98,
);
