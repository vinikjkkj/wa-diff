__d(
  "WAWebGmeetLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "gmeet-logo";
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
      var E = 72,
        k = 87.5;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 87.5 72",
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
      var M, w, A, F, O, B;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = c.jsx("path", {
            fill: "#00832d",
            d: "m49.5 36 8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z",
          })),
          (O = c.jsx("path", {
            fill: "#0066da",
            d: "M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z",
          })),
          (B = c.jsx("path", {
            fill: "#e94235",
            d: "M20.5 0 0 20.5l10.55 3 9.95-3 2.95-9.41z",
          })),
          (M = c.jsx("path", { fill: "#2684fc", d: "M20.5 20.5H0v31h20.5z" })),
          (w = c.jsx("path", {
            fill: "#00ac47",
            d: "M82.6 8.68 69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32M49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z",
          })),
          (A = c.jsx("path", {
            fill: "#ffba00",
            d: "M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F),
          (n[20] = O),
          (n[21] = B))
        : ((M = n[16]),
          (w = n[17]),
          (A = n[18]),
          (F = n[19]),
          (O = n[20]),
          (B = n[21]));
      var W;
      n[22] !== E || n[23] !== k || n[24] !== T || n[25] !== $ || n[26] !== N
        ? ((W = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, F, O, B, M, w, A],
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
    l.GmeetLogoIcon = m;
  },
  98,
);
