__d(
  "WAWebPaymentLogoPixIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "payment-logo-pix";
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
      var E = 14,
        k = 14;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 14 14",
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
            d: "M3.518 3.548c.51 0 .99.199 1.35.56l1.958 1.956c.14.141.37.142.512 0l1.95-1.95c.36-.36.84-.559 1.35-.559h.235L8.397 1.078a1.975 1.975 0 0 0-2.793 0l-2.47 2.47zm7.12 6.898c-.51 0-.99-.199-1.35-.56l-1.95-1.95a.37.37 0 0 0-.512 0L4.869 9.895c-.36.36-.84.559-1.35.559h-.385l2.47 2.47a1.975 1.975 0 0 0 2.793 0l2.476-2.477zm.787-6.339 1.497 1.497a1.975 1.975 0 0 1 0 2.793l-1.497 1.497a.3.3 0 0 0-.106-.022h-.68a1.34 1.34 0 0 1-.945-.391l-1.95-1.95a.96.96 0 0 0-1.324 0L4.463 9.488a1.35 1.35 0 0 1-.945.391h-.836a.3.3 0 0 0-.101.02L1.078 8.398a1.975 1.975 0 0 1 0-2.793l1.503-1.503q.048.019.1.02h.837c.352 0 .696.143.945.392L6.42 6.47a.934.934 0 0 0 1.324 0l1.95-1.95c.248-.248.592-.391.944-.391h.68a.3.3 0 0 0 .107-.022",
            style: { fill: "color(display-p3 .1961 .7373 .6745)" },
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
    l.PaymentLogoPixIcon = m;
  },
  98,
);
