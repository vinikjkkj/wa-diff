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
        a = n.get("data"),
        i = n.get("fire_on_first_mount"),
        l = n.getExpression("on_change"),
        u = m(o("WebBloksBooleanUtils").isFalse(i)),
        p = u[0],
        _ = u[1],
        f = d(null);
      return (
        c(
          function () {
            (p
              ? _(!1)
              : o("WebBloksUtils").deepEquals(f.current, a) ||
                (l != null && r.executeCatch(n, l, [r, f.current, a])),
              (f.current = a));
          },
          [a],
        ),
        s.jsx(s.Fragment, { children: t })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
