__d(
  "RelayFBMatchContainer",
  [
    "RelayFBModuleLoader",
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/MatchContainer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.fallback,
        a = e.match,
        i = e.props,
        l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = s.jsx(r("react-relay/relay-hooks/MatchContainer"), {
              fallback: n,
              loader: o("RelayFBModuleLoader").read,
              match: a,
              props: i,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = u;
  },
  98,
);
