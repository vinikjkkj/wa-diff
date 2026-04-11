__d(
  "CometRelayEnvironmentProvider",
  ["CometRelay", "CometRelayEnvironment", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = e.environment,
        i = a || r("CometRelayEnvironment"),
        l;
      return (
        t[0] !== n || t[1] !== i
          ? ((l = s.jsx(o("CometRelay").RelayEnvironmentProvider, {
              environment: i,
              children: n,
            })),
            (t[0] = n),
            (t[1] = i),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = u;
  },
  98,
);
