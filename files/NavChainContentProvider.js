__d(
  "NavChainContentProvider",
  ["NavChainContentContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = e.content_id,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(r("NavChainContentContext").Provider, {
              value: a,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    var c = s.memo(u);
    l.default = c;
  },
  98,
);
