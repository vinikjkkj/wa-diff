__d(
  "WAWebVelocityTransitionGroup",
  [
    "WAWebClassnames",
    "WAWebVelocityTransition",
    "react",
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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = d.toArray(a.children),
        l = a.appear,
        u = a.className_DONOTUSE,
        m = a.component,
        p = m === void 0 ? "span" : m,
        _ = a.delay,
        f = a.displayName,
        g = a.enter,
        h = a.exit,
        y = a.onAnimationComplete,
        C = a.testid,
        b = a.transitionName,
        v = b === void 0 ? "default" : b,
        S = a.xstyle;
      return c.jsx(p, {
        ref: n,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          u,
          (s || (s = r("stylex")))(S),
        ),
        "data-testid": void 0,
        children: c.jsx(o("react-transition-group").TransitionGroup, {
          component: null,
          appear: l,
          enter: g,
          exit: h,
          children:
            i == null
              ? void 0
              : i.map(function (e) {
                  return c.jsx(
                    r("WAWebVelocityTransition"),
                    {
                      transitionName: v,
                      delay: _,
                      onAnimationComplete: y,
                      displayName: f,
                      children: e,
                    },
                    e.key,
                  );
                }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
