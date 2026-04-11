__d(
  "react-relay/relay-hooks/RelayEnvironmentProvider",
  ["react", "react-compiler-runtime", "react-relay/ReactRelayContext"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = s.useMemo;
    function c(e) {
      var t = l(7),
        r = e.children,
        o = e.environment,
        a = e.getEnvironmentForActor,
        i,
        c;
      t[0] !== o || t[1] !== a
        ? ((i = function () {
            return { environment: o, getEnvironmentForActor: a };
          }),
          (c = [o, a]),
          (t[0] = o),
          (t[1] = a),
          (t[2] = i),
          (t[3] = c))
        : ((i = t[2]), (c = t[3]));
      var d = u(i, c),
        m;
      return (
        t[4] !== r || t[5] !== d
          ? ((m = s.jsx(n("react-relay/ReactRelayContext").Provider, {
              value: d,
              children: r,
            })),
            (t[4] = r),
            (t[5] = d),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    a.exports = c;
  },
  null,
);
