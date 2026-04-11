__d(
  "BaseHeadingContextWrapper.react",
  ["BaseHeadingContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = u(r("BaseHeadingContext")),
        i = a + 1,
        l;
      return (
        t[0] !== n || t[1] !== i
          ? ((l = s.jsx(r("BaseHeadingContext").Provider, {
              value: i,
              children: n,
            })),
            (t[0] = n),
            (t[1] = i),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = c;
  },
  98,
);
