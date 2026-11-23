__d(
  "WAWebVelocityTransitionGroup",
  [
    "WAWebClassnames",
    "WAWebVelocityTransition",
    "react",
    "stylex",
    "useWAWebTransitionPresence",
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
        i = a.appear,
        l = a.component,
        u = l === void 0 ? "span" : l,
        d = a.delay,
        m = a.displayName,
        _ = a.enter,
        f = a.exit,
        g = a.onAnimationComplete,
        h = a.testid,
        y = a.transitionName,
        C = y === void 0 ? "default" : y,
        b = a.xstyle;
      return c.jsx(u, {
        ref: n,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (s || (s = r("stylex")))(b),
        ),
        "data-testid": h,
        children: c.jsx(p, {
          appear: i,
          enter: _,
          exit: f,
          transitionName: C,
          delay: d,
          onAnimationComplete: g,
          displayName: m,
          children: a.children,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n = e.appear,
        o = e.delay,
        a = e.displayName,
        i = e.enter,
        l = e.exit,
        s = e.onAnimationComplete,
        u = e.transitionName,
        m = [];
      (t = d.toArray(e.children)) == null ||
        t.forEach(function (e, t) {
          e != null &&
            m.push({
              key: _(e, t),
              element: {
                child: e,
                delay: o,
                displayName: a,
                exit: l,
                onAnimationComplete: s,
                transitionName: u,
              },
            });
        });
      var p = r("useWAWebTransitionPresence")(m),
        f = p.initialKeys,
        g = p.items,
        h = p.notifyExited;
      return c.jsx(c.Fragment, {
        children: g.map(function (e) {
          var t = e.element;
          return c.jsx(
            r("WAWebVelocityTransition"),
            {
              in: e.isPresent,
              appear: f.has(e.key) ? n === !0 : i !== !1,
              enter: i,
              exit: t.exit,
              transitionName: t.transitionName,
              delay: t.delay,
              onAnimationComplete: t.onAnimationComplete,
              displayName: t.displayName,
              onExited: function () {
                return h(e.key);
              },
              children: t.child,
            },
            e.key,
          );
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = Reflect.get(e, "key");
      return n == null ? "unkeyed-" + t : String(n);
    }
    l.default = m;
  },
  98,
);
