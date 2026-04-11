__d(
  "WAWebReelPluginVideoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "reel-plugin-video";
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
      var E = 22,
        k = 22;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 22 22",
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
            d: "M15.105 5.27L11.945 0H7.445H7.185C6.845 0.005 6.52 0.02 6.22 0.04L9.005 5.265H15.105V5.27ZM4.545 0.315C3.53 0.58 2.605 1.11 1.865 1.85C0.94 2.775 0.34 3.975 0.155 5.27H7.185L4.545 0.315ZM21.84 5.27C21.66 3.985 21.065 2.79 20.15 1.865C18.805 0.565 17.31 0 14.555 0H13.815L16.975 5.27H21.84ZM22 7.25C22 7.12 21.995 7.125 21.99 7H0.00999999L0.005 7.06C-4.65661e-09 7.185 0 7.315 0 7.445V14.56V14.77C0.03 17.39 0.595 18.84 1.85 20.14C3.195 21.435 4.69 22 7.445 22H14.555H14.765C17.385 21.97 18.835 21.405 20.135 20.155C21.435 18.81 22 17.315 22 14.56V7.445V7.25ZM14.59 14.675L9.455 17.675L9.4 17.705C9 17.9 8.52 17.73 8.33 17.33C8.275 17.22 8.25 17.1 8.25 16.98V10.98V10.915C8.285 10.475 8.67 10.145 9.115 10.18C9.235 10.19 9.35 10.225 9.455 10.285L14.59 13.285L14.65 13.325C15.01 13.58 15.095 14.085 14.835 14.445C14.775 14.54 14.69 14.615 14.59 14.675Z",
            fill: "white",
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] !== E || n[18] !== k || n[19] !== T || n[20] !== $ || n[21] !== N
        ? ((w = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M],
          })),
          (n[17] = E),
          (n[18] = k),
          (n[19] = T),
          (n[20] = $),
          (n[21] = N),
          (n[22] = w))
        : (w = n[22]);
      var A;
      return (
        n[23] !== u || n[24] !== I || n[25] !== w
          ? ((A = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: w }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = w),
            (n[26] = A))
          : (A = n[26]),
        A
      );
    }
    l.ReelPluginVideoIcon = m;
  },
  98,
);
