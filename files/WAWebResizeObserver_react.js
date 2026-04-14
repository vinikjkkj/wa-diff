__d(
  "WAWebResizeObserver.react",
  [
    "WAWebClassnames",
    "react",
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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a.className,
        u = a.component,
        m = a.onResize,
        p = babelHelpers.objectWithoutPropertiesLoose(a, s),
        _ = u != null ? u : "div",
        f = r("useWAWebStableCallback")(m),
        g = r("useWAWebMeasure")(),
        h = g[0],
        y = g[1],
        C = r("useMergeRefs")(h, n),
        b = r("useWAWebPrevious")(y);
      return (
        d(
          function () {
            if (b != null && (y.width !== b.width || y.height !== b.height)) {
              var e = y.height,
                t = y.width;
              f({ width: t, height: e });
            }
          },
          [y, b, f],
        ),
        c.jsx(
          _,
          babelHelpers.extends({}, p, {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "x1n2onr6",
              l,
            ),
            ref: C,
            children: i,
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
