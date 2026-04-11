__d(
  "usePrevious",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = c(null);
      return (
        u(
          function () {
            t.current = e;
          },
          void 0,
        ),
        t.current
      );
    }
    l.default = d;
  },
  98,
);
