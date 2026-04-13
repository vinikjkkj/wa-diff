__d(
  "WAWebInfoShieldIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "info-shield";
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
      var E = 16,
        k = 12;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 12 16",
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
            d: "M5.25 11.75H6.75V7.25H5.25V11.75ZM6 5.75C6.2125 5.75 6.39063 5.67813 6.53438 5.53438C6.67813 5.39062 6.75 5.2125 6.75 5C6.75 4.7875 6.67813 4.60938 6.53438 4.46563C6.39063 4.32188 6.2125 4.25 6 4.25C5.7875 4.25 5.60938 4.32188 5.46563 4.46563C5.32188 4.60938 5.25 4.7875 5.25 5C5.25 5.2125 5.32188 5.39062 5.46563 5.53438C5.60938 5.67813 5.7875 5.75 6 5.75ZM6 15.5C4.2625 15.0625 2.82812 14.0656 1.69688 12.5094C0.565625 10.9531 0 9.225 0 7.325V2.75L6 0.5L12 2.75V7.325C12 9.225 11.4344 10.9531 10.3031 12.5094C9.17188 14.0656 7.7375 15.0625 6 15.5ZM6 13.925C7.3 13.5125 8.375 12.6875 9.225 11.45C10.075 10.2125 10.5 8.8375 10.5 7.325V3.78125L6 2.09375L1.5 3.78125V7.325C1.5 8.8375 1.925 10.2125 2.775 11.45C3.625 12.6875 4.7 13.5125 6 13.925Z",
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
            fill: "currentColor",
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
    l.InfoShieldIcon = m;
  },
  98,
);
