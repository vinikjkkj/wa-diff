__d(
  "WAFlowsUseForwardRef",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e) {
      var t = c(null),
        n = u(
          function (n) {
            (typeof e == "function" ? e(n) : e && (e.current = n),
              (t.current = n));
          },
          [e],
        );
      return [t, n];
    }
    l.default = d;
  },
  98,
);
