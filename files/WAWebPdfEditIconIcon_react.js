__d(
  "WAWebPdfEditIconIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "pdf-edit-icon";
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
      var E = 17,
        k = 17;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 17 17",
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
            d: "M16.628 10.346c-1.267-1.318-4.732-.778-5.568-.682a15 15 0 0 1-2.34-3.073 14 14 0 0 0 .777-4.051C9.497 1.318 9.008 0 7.64 0c-.482.013-.92.27-1.17.682-.585 1.022-.341 3.073.585 5.176a35 35 0 0 1-2.392 5.568C3.247 12.011.27 13.381.026 14.84c-.09.45.058.913.392 1.222.34.29.772.444 1.222.437 1.807 0 3.562-2.488 4.784-4.59a33 33 0 0 1 4.25-1.126c1.903 1.659 3.562 1.903 4.443 1.903 1.17 0 1.614-.488 1.755-.926a1.27 1.27 0 0 0-.244-1.414m-1.222.836c-.051.34-.488.681-1.266.488a6.7 6.7 0 0 1-2.489-1.266c.637-.097 2.051-.245 3.074-.052.386.097.778.34.681.83M7.253 1.119a.5.5 0 0 1 .392-.245c.438 0 .54.54.54.978A10.8 10.8 0 0 1 7.6 4.88c-.74-1.954-.591-3.318-.347-3.761m-.096 9.471q.635-1.332 1.125-2.733c.45.72.977 1.39 1.562 2-.006.051-1.517.347-2.687.733m-2.88 1.955c-1.126 1.858-2.296 3.028-2.933 3.028a.8.8 0 0 1-.296-.096.37.37 0 0 1-.148-.437c.155-.688 1.421-1.614 3.376-2.495",
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
    l.PdfEditIconIcon = m;
  },
  98,
);
