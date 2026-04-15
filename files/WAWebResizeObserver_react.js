__d(
  "WAWebResizeObserver.react",
  [
    "WAWebClassnames",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebMeasure",
    "useWAWebPrevious",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["children", "className", "component", "onResize"],
      u,
      c = u || (u = o("react")),
      d = u.useLayoutEffect;
    function m(t) {
      var n = o("react-compiler-runtime").c(22),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, m, p, _;
      if (n[3] !== a) {
        var f = a;
        ((l = f.children),
          (u = f.className),
          (m = f.component),
          (p = f.onResize),
          (_ = babelHelpers.objectWithoutPropertiesLoose(f, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = m),
          (n[7] = p),
          (n[8] = _));
      } else ((l = n[4]), (u = n[5]), (m = n[6]), (p = n[7]), (_ = n[8]));
      var g = m != null ? m : "div",
        h = r("useWAWebStableCallback")(p),
        y = r("useWAWebMeasure")(),
        C = y[0],
        b = y[1],
        v = r("useMergeRefs")(C, i),
        S = r("useWAWebPrevious")(b),
        R,
        L;
      (n[9] !== h || n[10] !== S || n[11] !== b
        ? ((R = function () {
            if (S != null && (b.width !== S.width || b.height !== S.height)) {
              var e = b.height,
                t = b.width;
              h({ width: t, height: e });
            }
          }),
          (L = [b, S, h]),
          (n[9] = h),
          (n[10] = S),
          (n[11] = b),
          (n[12] = R),
          (n[13] = L))
        : ((R = n[12]), (L = n[13])),
        d(R, L));
      var E;
      n[14] !== u
        ? ((E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x1n2onr6",
            u,
          )),
          (n[14] = u),
          (n[15] = E))
        : (E = n[15]);
      var k;
      return (
        n[16] !== g || n[17] !== l || n[18] !== v || n[19] !== _ || n[20] !== E
          ? ((k = c.jsx(
              g,
              babelHelpers.extends({}, _, {
                className: E,
                ref: v,
                children: l,
              }),
            )),
            (n[16] = g),
            (n[17] = l),
            (n[18] = v),
            (n[19] = _),
            (n[20] = E),
            (n[21] = k))
          : (k = n[21]),
        k
      );
    }
    l.default = m;
  },
  98,
);
