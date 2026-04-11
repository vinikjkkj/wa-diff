__d(
  "WebBloksFragment",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e.children
          ? ((n = s.jsx(s.Fragment, { children: e.children })),
            (t[0] = e.children),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    l.default = u;
  },
  98,
);
