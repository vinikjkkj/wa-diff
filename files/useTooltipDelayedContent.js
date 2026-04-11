__d(
  "useTooltipDelayedContent",
  ["clearTimeout", "react", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useLayoutEffect,
      c = s.useRef,
      d = s.useState;
    function m(e) {
      var t = e.delayContentMs,
        n = e.isVisible,
        o = c(n),
        a = c(null),
        i = d(function () {
          return n && !o.current && t > 0;
        }),
        l = i[0],
        s = i[1];
      return (
        u(
          function () {
            if (n && !o.current && t > 0)
              return (
                s(!0),
                (a.current = r("setTimeout")(function () {
                  (s(!1), (a.current = null));
                }, t)),
                function () {
                  (r("clearTimeout")(a.current), (a.current = null));
                }
              );
            (a.current != null &&
              (s(!1), r("clearTimeout")(a.current), (a.current = null)),
              (o.current = n));
          },
          [t, n],
        ),
        { isPending: l }
      );
    }
    l.default = m;
  },
  98,
);
