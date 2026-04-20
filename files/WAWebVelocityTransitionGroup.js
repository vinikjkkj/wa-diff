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
      var n = o("react-compiler-runtime").c(31),
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
          R = v.className_DONOTUSE,
          L = v.component,
          E = v.delay,
          k = v.displayName,
          I = v.enter,
          T = v.exit,
          D = v.onAnimationComplete,
          x = v.testid,
          $ = v.transitionName,
          P = v.xstyle,
          N = L === void 0 ? "span" : L,
          M = $ === void 0 ? "default" : $;
        ((u = N),
          (h = i),
          n[15] !== R || n[16] !== P
            ? ((y = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                R,
                (s || (s = r("stylex")))(P),
              )),
              (n[15] = R),
              (n[16] = P),
              (n[17] = y))
            : (y = n[17]),
          (C = x),
          (l = o("react-transition-group").TransitionGroup),
          (m = null),
          (p = S),
          (_ = I),
          (f = T),
          (g =
            b == null
              ? void 0
              : b.map(function (e) {
                  return c.jsx(
                    r("WAWebVelocityTransition"),
                    {
                      transitionName: M,
                      delay: E,
                      onAnimationComplete: D,
                      displayName: k,
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
      var w;
      n[18] !== l ||
      n[19] !== m ||
      n[20] !== p ||
      n[21] !== _ ||
      n[22] !== f ||
      n[23] !== g
        ? ((w = c.jsx(l, {
            component: m,
            appear: p,
            enter: _,
            exit: f,
            children: g,
          })),
          (n[18] = l),
          (n[19] = m),
          (n[20] = p),
          (n[21] = _),
          (n[22] = f),
          (n[23] = g),
          (n[24] = w))
        : (w = n[24]);
      var A;
      return (
        n[25] !== u || n[26] !== h || n[27] !== y || n[28] !== C || n[29] !== w
          ? ((A = c.jsx(u, {
              ref: h,
              className: y,
              "data-testid": C,
              children: w,
            })),
            (n[25] = u),
            (n[26] = h),
            (n[27] = y),
            (n[28] = C),
            (n[29] = w),
            (n[30] = A))
          : (A = n[30]),
        A
      );
    }
    l.default = m;
  },
  98,
);
