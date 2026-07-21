__d(
  "WAWebVelocityTransitionGroup",
  [
    "WAWebClassnames",
    "WAWebVelocityTransition",
    "react",
    "react-compiler-runtime",
    "react-transition-group",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.Children;
    function m(t) {
      var n = o("react-compiler-runtime").c(30),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, m, p, _, f, g, h, y, C;
      if (n[3] !== a || n[4] !== i) {
        var b = d.toArray(a.children),
          v = a,
          S = v.appear,
          R = v.component,
          L = v.delay,
          E = v.displayName,
          k = v.enter,
          I = v.exit,
          T = v.onAnimationComplete,
          D = v.testid,
          x = v.transitionName,
          $ = v.xstyle,
          P = R === void 0 ? "span" : R,
          N = x === void 0 ? "default" : x;
        ((u = P),
          (h = i),
          n[15] !== $
            ? ((y = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                (s || (s = r("stylex")))($),
              )),
              (n[15] = $),
              (n[16] = y))
            : (y = n[16]),
          (C = D),
          (l = o("react-transition-group").TransitionGroup),
          (m = null),
          (p = S),
          (_ = k),
          (f = I),
          (g =
            b == null
              ? void 0
              : b.map(function (e) {
                  return c.jsx(
                    r("WAWebVelocityTransition"),
                    {
                      transitionName: N,
                      delay: L,
                      onAnimationComplete: T,
                      displayName: E,
                      children: e,
                    },
                    e.key,
                  );
                })),
          (n[3] = a),
          (n[4] = i),
          (n[5] = l),
          (n[6] = u),
          (n[7] = m),
          (n[8] = p),
          (n[9] = _),
          (n[10] = f),
          (n[11] = g),
          (n[12] = h),
          (n[13] = y),
          (n[14] = C));
      } else
        ((l = n[5]),
          (u = n[6]),
          (m = n[7]),
          (p = n[8]),
          (_ = n[9]),
          (f = n[10]),
          (g = n[11]),
          (h = n[12]),
          (y = n[13]),
          (C = n[14]));
      var M;
      n[17] !== l ||
      n[18] !== m ||
      n[19] !== p ||
      n[20] !== _ ||
      n[21] !== f ||
      n[22] !== g
        ? ((M = c.jsx(l, {
            component: m,
            appear: p,
            enter: _,
            exit: f,
            children: g,
          })),
          (n[17] = l),
          (n[18] = m),
          (n[19] = p),
          (n[20] = _),
          (n[21] = f),
          (n[22] = g),
          (n[23] = M))
        : (M = n[23]);
      var w;
      return (
        n[24] !== u || n[25] !== h || n[26] !== y || n[27] !== C || n[28] !== M
          ? ((w = c.jsx(u, {
              ref: h,
              className: y,
              "data-testid": C,
              children: M,
            })),
            (n[24] = u),
            (n[25] = h),
            (n[26] = y),
            (n[27] = C),
            (n[28] = M),
            (n[29] = w))
          : (w = n[29]),
        w
      );
    }
    l.default = m;
  },
  98,
);
