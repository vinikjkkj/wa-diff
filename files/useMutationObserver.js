__d(
  "useMutationObserver",
  ["MutationObserver", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e, t) {
      var n = c({ observer: null, callback: e }),
        o = c(null),
        a = c({ element: null, options: null, observer: null }),
        i = u(
          function () {
            var e = a.current,
              r = e.element,
              i = e.observer,
              l = e.options,
              s = n.current.observer,
              u = o.current;
            (r != u || t != l || s != i) &&
              (i && i.disconnect(),
              s && u && s.observe(u, t),
              (a.current = { observer: s, element: u, options: t }));
          },
          [t],
        );
      return (
        (n.current.observer == null || n.current.callback !== e) &&
          (n.current.observer != null && n.current.observer.disconnect(),
          (n.current = {
            observer: new (r("MutationObserver"))(e),
            callback: e,
          })),
        i(),
        u(
          function (e) {
            ((o.current = e), i());
          },
          [i],
        )
      );
    }
    l.default = d;
  },
  98,
);
