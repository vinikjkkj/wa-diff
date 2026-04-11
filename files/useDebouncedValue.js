__d(
  "useDebouncedValue",
  ["clearTimeout", "react", "react-compiler-runtime", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(4),
        a = c(e),
        i = a[0],
        l = a[1],
        s,
        d;
      return (
        n[0] !== t || n[1] !== e
          ? ((s = function () {
              var n = r("setTimeout")(function () {
                return l(e);
              }, t);
              return function () {
                return r("clearTimeout")(n);
              };
            }),
            (d = [e, t]),
            (n[0] = t),
            (n[1] = e),
            (n[2] = s),
            (n[3] = d))
          : ((s = n[2]), (d = n[3])),
        u(s, d),
        i
      );
    }
    l.default = d;
  },
  98,
);
