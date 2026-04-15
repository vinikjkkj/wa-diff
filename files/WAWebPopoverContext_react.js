__d(
  "WAWebPopoverContext.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["popover", "targetRef"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useContext,
      p = c.useMemo,
      _ = c.useRef,
      f = d(null);
    function g() {
      return m(f);
    }
    function h() {
      return _();
    }
    function y(t) {
      var n,
        r,
        a = o("react-compiler-runtime").c(11),
        i,
        l,
        s;
      a[0] !== t
        ? ((l = t.popover),
          (s = t.targetRef),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s))
        : ((i = a[1]), (l = a[2]), (s = a[3]));
      var c = _(),
        d = (n = (r = i) == null ? void 0 : r.controllerRef) != null ? n : c,
        m;
      a[4] !== d || a[5] !== i || a[6] !== s
        ? ((m = babelHelpers.extends({ targetRef: s }, i, {
            controllerRef: d,
          })),
          (a[4] = d),
          (a[5] = i),
          (a[6] = s),
          (a[7] = m))
        : (m = a[7]);
      var p = m,
        g;
      return (
        a[8] !== p || a[9] !== l
          ? ((g =
              l != null ? u.jsx(f.Provider, { value: p, children: l }) : null),
            (a[8] = p),
            (a[9] = l),
            (a[10] = g))
          : (g = a[10]),
        g
      );
    }
    ((l.useWAWebPopoverControllerContext = g),
      (l.useWAWebPopoverControllerRef = h),
      (l.WAWebPopoverController = y));
  },
  98,
);
