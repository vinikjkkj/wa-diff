__d(
  "WAWebCurrencyDollarIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "currency-dollar";
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
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            d: "M12.025 21a.97.97 0 0 1-.713-.288.97.97 0 0 1-.287-.712v-1.15a5.2 5.2 0 0 1-1.975-.875q-.85-.625-1.375-1.75a.85.85 0 0 1-.013-.738q.163-.387.588-.562a.88.88 0 0 1 .725.012q.375.163.575.538.425.75 1.075 1.138t1.6.387q1.025 0 1.738-.462.712-.463.712-1.438 0-.875-.55-1.387-.55-.513-2.55-1.163-2.15-.675-2.95-1.613t-.8-2.287q0-1.625 1.05-2.525t2.15-1.025V4q0-.424.287-.712A.97.97 0 0 1 12.026 3q.424 0 .713.288.287.287.287.712v1.1q.95.15 1.65.613t1.15 1.137q.226.325.088.725a.94.94 0 0 1-.563.575.95.95 0 0 1-.725.012 1.8 1.8 0 0 1-.7-.487 2.2 2.2 0 0 0-.763-.537q-.437-.188-1.087-.188-1.1 0-1.675.487-.575.488-.575 1.213 0 .825.75 1.3t2.6 1q1.724.5 2.612 1.588.888 1.086.888 2.512 0 1.774-1.05 2.7-1.05.925-2.6 1.15V20q0 .424-.287.712a.97.97 0 0 1-.713.288",
            style: { fill: "color(display-p3 .3725 .3882 .4078)" },
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
    l.CurrencyDollarIcon = m;
  },
  98,
);
