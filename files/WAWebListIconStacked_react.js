__d(
  "WAWebListIconStacked.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = 2,
      d = 12,
      m = 9,
      p = {
        container: {
          display: "x3nfvp2",
          alignItems: "x6s0dn4",
          position: "x1n2onr6",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(36),
        a = t.colors,
        i = t.size,
        l = t.horizontalOffset,
        s = t.xstyle,
        _ = i === void 0 ? d : i,
        f = l === void 0 ? m : l;
      if (a.length === 0) return null;
      var g;
      n[0] !== a ? ((g = a.slice(0, c)), (n[0] = a), (n[1] = g)) : (g = n[1]);
      var h = g,
        y = h.length === 1 ? _ : _ + (h.length - 1) * f;
      if (h.length === 1) {
        var C;
        n[2] !== s
          ? ((C = (e || (e = r("stylex"))).props(p.container, s)),
            (n[2] = s),
            (n[3] = C))
          : (C = n[3]);
        var b;
        n[4] !== _ || n[5] !== y
          ? ((b = { width: y, height: _ }), (n[4] = _), (n[5] = y), (n[6] = b))
          : (b = n[6]);
        var v;
        n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = {
              className:
                "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo",
            }),
            (n[7] = v))
          : (v = n[7]);
        var S;
        n[8] !== _ || n[9] !== h[0]
          ? ((S = u.jsx(
              "span",
              babelHelpers.extends({}, v, {
                style: { backgroundColor: h[0], width: _, height: _, left: 0 },
              }),
            )),
            (n[8] = _),
            (n[9] = h[0]),
            (n[10] = S))
          : (S = n[10]);
        var R;
        return (
          n[11] !== C || n[12] !== b || n[13] !== S
            ? ((R = u.jsx(
                "span",
                babelHelpers.extends({ "data-testid": void 0 }, C, {
                  style: b,
                  children: S,
                }),
              )),
              (n[11] = C),
              (n[12] = b),
              (n[13] = S),
              (n[14] = R))
            : (R = n[14]),
          R
        );
      }
      var L = _ / 2 - f,
        E = _ / 2,
        k = _ / 2 + 2.5,
        I;
      n[15] !== s
        ? ((I = (e || (e = r("stylex"))).props(p.container, s)),
          (n[15] = s),
          (n[16] = I))
        : (I = n[16]);
      var T;
      n[17] !== _ || n[18] !== y
        ? ((T = { width: y, height: _ }), (n[17] = _), (n[18] = y), (n[19] = T))
        : (T = n[19]);
      var D;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = {
            className:
              "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk x1vjfegm",
          }),
          (n[20] = D))
        : (D = n[20]);
      var x =
          "radial-gradient(circle at " +
          L +
          "px " +
          E +
          "px, transparent 0, transparent " +
          k +
          "px, black " +
          k +
          "px)",
        $ =
          "radial-gradient(circle at " +
          L +
          "px " +
          E +
          "px, transparent 0, transparent " +
          k +
          "px, black " +
          k +
          "px)",
        P;
      n[21] !== f || n[22] !== _ || n[23] !== x || n[24] !== $ || n[25] !== h[1]
        ? ((P = u.jsx(
            "span",
            babelHelpers.extends({}, D, {
              style: {
                backgroundColor: h[1],
                width: _,
                height: _,
                left: f,
                maskImage: x,
                WebkitMaskImage: $,
              },
            }),
          )),
          (n[21] = f),
          (n[22] = _),
          (n[23] = x),
          (n[24] = $),
          (n[25] = h[1]),
          (n[26] = P))
        : (P = n[26]);
      var N;
      n[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            className:
              "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo",
          }),
          (n[27] = N))
        : (N = n[27]);
      var M;
      n[28] !== _ || n[29] !== h[0]
        ? ((M = u.jsx(
            "span",
            babelHelpers.extends({}, N, {
              style: { backgroundColor: h[0], width: _, height: _, left: 0 },
            }),
          )),
          (n[28] = _),
          (n[29] = h[0]),
          (n[30] = M))
        : (M = n[30]);
      var w;
      return (
        n[31] !== M || n[32] !== I || n[33] !== T || n[34] !== P
          ? ((w = u.jsxs(
              "span",
              babelHelpers.extends({ "data-testid": void 0 }, I, {
                style: T,
                children: [P, M],
              }),
            )),
            (n[31] = M),
            (n[32] = I),
            (n[33] = T),
            (n[34] = P),
            (n[35] = w))
          : (w = n[35]),
        w
      );
    }
    l.default = _;
  },
  98,
);
