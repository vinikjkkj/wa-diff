__d(
  "WAWebBaseContainerQueryElement.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "ref",
        "breakpoint",
        "inverseToContainer",
        "maxWidth",
        "minWidth",
        "xstyle",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        root: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(19),
        a,
        i,
        l,
        u,
        m,
        p,
        _;
      n[0] !== t
        ? ((m = t.ref),
          (a = t.breakpoint),
          (p = t.inverseToContainer),
          (i = t.maxWidth),
          (l = t.minWidth),
          (_ = t.xstyle),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p),
          (n[7] = _))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (p = n[6]),
          (_ = n[7]));
      var f = p === void 0 ? !1 : p,
        g;
      n[8] !== _
        ? ((g = (s || (s = r("stylex")))(d.root, _)), (n[8] = _), (n[9] = g))
        : (g = n[9]);
      var h = f
          ? "calc((" + a + "px - 100%) * 9999)"
          : "calc((100% - " + (a - 0.1) + "px) * 9999)",
        y;
      n[10] !== i || n[11] !== l || n[12] !== h
        ? ((y = { maxWidth: i, minWidth: l, width: h }),
          (n[10] = i),
          (n[11] = l),
          (n[12] = h),
          (n[13] = y))
        : (y = n[13]);
      var C;
      return (
        n[14] !== u || n[15] !== m || n[16] !== g || n[17] !== y
          ? ((C = c.jsx(
              "div",
              babelHelpers.extends({}, u, { className: g, ref: m, style: y }),
            )),
            (n[14] = u),
            (n[15] = m),
            (n[16] = g),
            (n[17] = y),
            (n[18] = C))
          : (C = n[18]),
        C
      );
    }
    l.default = m;
  },
  98,
);
