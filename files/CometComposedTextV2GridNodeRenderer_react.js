__d(
  "CometComposedTextV2GridNodeRenderer.react",
  ["BaseFixedGrid.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        a;
      return (
        t[0] !== n
          ? ((a = s.jsx(r("BaseFixedGrid.react"), {
              columns: 2,
              gap: 8,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = u;
  },
  98,
);
