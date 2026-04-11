__d(
  "CometComposedTextV2RootNodeRenderer.react",
  ["BaseTextContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        r;
      return (
        t[0] !== n
          ? ((r = s.jsx(o("BaseTextContext").BaseTextContextProvider, {
              nested: !0,
              children: n,
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    var c = u;
    l.default = c;
  },
  98,
);
