__d(
  "WAWebPopoverContext.react",
  ["react"],
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
        r = t.popover,
        o = t.targetRef,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = _(),
        l = (n = a == null ? void 0 : a.controllerRef) != null ? n : i,
        s = p(
          function () {
            return babelHelpers.extends({ targetRef: o }, a, {
              controllerRef: l,
            });
          },
          [o, a, l],
        );
      return r != null ? u.jsx(f.Provider, { value: s, children: r }) : null;
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.useWAWebPopoverControllerContext = g),
      (l.useWAWebPopoverControllerRef = h),
      (l.WAWebPopoverController = y));
  },
  98,
);
