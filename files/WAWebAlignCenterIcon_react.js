__d(
  "WAWebAlignCenterIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "align-center";
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
      var E = 28,
        k = 28;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 28 28",
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
            fill: "currentColor",
            d: "M18.5,19 C18.7761424,19 19,19.2238576 19,19.5 L19,20 C19,20.2761424 18.7761424,20.5 18.5,20.5 L9.5,20.5 C9.22385763,20.5 9,20.2761424 9,20 L9,19.5 C9,19.2238576 9.22385763,19 9.5,19 L18.5,19 Z M22.5,15 C22.7761424,15 23,15.2238576 23,15.5 L23,16 C23,16.2761424 22.7761424,16.5 22.5,16.5 L5.5,16.5 C5.22385763,16.5 5,16.2761424 5,16 L5,15.5 C5,15.2238576 5.22385763,15 5.5,15 L22.5,15 Z M21.5,11 C21.7761424,11 22,11.2238576 22,11.5 L22,12 C22,12.2761424 21.7761424,12.5 21.5,12.5 L6.5,12.5 C6.22385763,12.5 6,12.2761424 6,12 L6,11.5 C6,11.2238576 6.22385763,11 6.5,11 L21.5,11 Z M22.5,7 C22.7761424,7 23,7.22385763 23,7.5 L23,8 C23,8.27614237 22.7761424,8.5 22.5,8.5 L5.5,8.5 C5.22385763,8.5 5,8.27614237 5,8 L5,7.5 C5,7.22385763 5.22385763,7 5.5,7 L22.5,7 Z",
            id: "Combined-Shape",
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
            version: "1.1",
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
    l.AlignCenterIcon = m;
  },
  98,
);
