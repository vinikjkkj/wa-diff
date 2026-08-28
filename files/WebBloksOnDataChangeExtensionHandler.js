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
      p = ")",
      _ = "*",
      f = "#",
      g = "(",
      h = {
        onMount: function (t, n, r) {
          var e = t.getExpression(g);
          if (e != null)
            return function () {
              r.executeCatch(t, e, [r.bloksContext]);
            };
        },
        wrap: function (t, n) {
          return s.jsx(C, { model: t, children: n });
        },
      },
      y = h;
    function C(e) {
      var t = e.children,
        n = e.model,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = n.get(p),
        i = n.get(_),
        l = n.getExpression(f),
        u = m(o("WebBloksBooleanUtils").isFalse(i)),
        g = u[0],
        h = u[1],
        y = d(null);
      return (
        c(
          function () {
            (g
              ? h(!1)
              : o("WebBloksUtils").deepEquals(y.current, a) ||
                (l != null && r.executeCatch(n, l, [r, y.current, a])),
              (y.current = a));
          },
          [a],
        ),
        s.jsx(s.Fragment, { children: t })
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
