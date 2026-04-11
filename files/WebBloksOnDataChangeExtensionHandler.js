__d(
  "WebBloksOnDataChangeExtensionHandler",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState,
      p = {
        onMount: function (t, n, r) {
          var e = t.getExpression("on_cleanup");
          if (e != null)
            return function () {
              r.executeCatch(t, e, [r.bloksContext]);
            };
        },
        wrap: function (t, n) {
          return s.jsx(f, { model: t, children: n });
        },
      },
      _ = p;
    function f(e) {
      var t = e.children,
        n = e.model,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = n.getValues(),
        i = a.data,
        l = a.fire_on_first_mount,
        u = n.getExpression("on_change"),
        p = m(o("WebBloksBooleanUtils").isFalse(l)),
        _ = p[0],
        f = p[1],
        g = d(null);
      return (
        c(
          function () {
            (_
              ? f(!1)
              : o("WebBloksUtils").deepEquals(g.current, i) ||
                (u != null && r.executeCatch(n, u, [r, g.current, i])),
              (g.current = i));
          },
          [i],
        ),
        s.jsx(s.Fragment, { children: t })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
