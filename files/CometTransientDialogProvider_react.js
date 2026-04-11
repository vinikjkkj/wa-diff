__d(
  "CometTransientDialogProvider.react",
  [
    "CometTransientDialogProviderImplContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.use;
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = u(r("CometTransientDialogProviderImplContext")),
        i;
      return (
        t[0] !== a || t[1] !== n
          ? ((i = s.jsx(a, { children: n })),
            (t[0] = a),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = c;
  },
  98,
);
