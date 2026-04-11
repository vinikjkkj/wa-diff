__d(
  "WAWebJiraLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "jira-logo";
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
      var E = 2500,
        k = 2500;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 -30.632 255.324 285.956",
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
        ? ((F = c.jsxs("linearGradient", {
            id: "a",
            children: [
              c.jsx("stop", { offset: 0.18, stopColor: "#0052cc" }),
              c.jsx("stop", { offset: 1, stopColor: "#2684ff" }),
            ],
          })),
          (O = c.jsx("linearGradient", {
            id: "b",
            x1: "98.031%",
            x2: "58.888%",
            xlinkHref: "#a",
            y1: ".161%",
            y2: "40.766%",
          })),
          (B = c.jsx("linearGradient", {
            id: "c",
            x1: "100.665%",
            x2: "55.402%",
            xlinkHref: "#a",
            y1: ".455%",
            y2: "44.727%",
          })),
          (M = c.jsx("path", {
            d: "M244.658 0H121.707a55.5 55.5 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0",
            fill: "#2684ff",
          })),
          (w = c.jsx("path", {
            d: "M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z",
            fill: "url(#b)",
          })),
          (A = c.jsx("path", {
            d: "M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667",
            fill: "url(#c)",
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
    l.JiraLogoIcon = m;
  },
  98,
);
