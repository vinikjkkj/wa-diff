__d(
  "WAWebHelpIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "help";
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
      var E = 21,
        k = 20;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 20 21",
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 10.5C0 4.98 4.48 0.5 10 0.5C15.52 0.5 20 4.98 20 10.5C20 16.02 15.52 20.5 10 20.5C4.48 20.5 0 16.02 0 10.5ZM2 10.5C2 14.91 5.59 18.5 10 18.5C14.41 18.5 18 14.91 18 10.5C18 6.09 14.41 2.5 10 2.5C5.59 2.5 2 6.09 2 10.5ZM11 14.5V16.5H9V14.5H11ZM6.18 7.33C6.73 5.51 8.55 4.24 10.61 4.54C12.35 4.8 13.72 6.27 13.96 8.01C14.1881 9.62354 13.2957 10.4021 12.4344 11.1535C12.2762 11.2916 12.119 11.4288 11.97 11.57C11.85 11.68 11.74 11.79 11.64 11.91C11.635 11.915 11.63 11.9225 11.625 11.93C11.62 11.9375 11.615 11.945 11.61 11.95C11.51 12.07 11.41 12.2 11.33 12.34C11.32 12.355 11.3125 12.37 11.305 12.385C11.2975 12.4 11.29 12.415 11.28 12.43C11.11 12.73 11 13.08 11 13.5H9C9 13 9.08 12.59 9.2 12.25C9.20438 12.2368 9.20685 12.2256 9.20907 12.2155C9.21192 12.2025 9.21438 12.1912 9.22 12.18C9.225 12.165 9.2325 12.1525 9.24 12.14C9.2475 12.1275 9.255 12.115 9.26 12.1C9.33 11.92 9.42 11.75 9.51 11.6C9.515 11.59 9.52 11.5825 9.525 11.575C9.53 11.5675 9.535 11.56 9.54 11.55C9.54 11.545 9.5425 11.5425 9.545 11.54C9.5475 11.5375 9.55 11.535 9.55 11.53C9.89058 11.0171 10.3473 10.6658 10.7745 10.3373C11.3883 9.8652 11.941 9.44014 12 8.65C12.08 7.68 11.38 6.75 10.43 6.55C9.4 6.33 8.45 6.94 8.13 7.83C7.99 8.21 7.66 8.5 7.25 8.5H7.05C6.44 8.5 6 7.91 6.18 7.33Z",
            fill: "currentColor",
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
    l.HelpIcon = m;
  },
  98,
);
