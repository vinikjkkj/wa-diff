__d(
  "useSetAttributeRef",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r;
      return (
        n[0] !== e || n[1] !== t
          ? ((r = function (r) {
              r != null && r.setAttribute(e, t);
            }),
            (n[0] = e),
            (n[1] = t),
            (n[2] = r))
          : (r = n[2]),
        r
      );
    }
    l.default = u;
  },
  98,
);
