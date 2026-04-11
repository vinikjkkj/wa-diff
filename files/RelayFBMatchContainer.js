__d(
  "RelayFBMatchContainer",
  ["RelayFBModuleLoader", "react", "react-relay/relay-hooks/MatchContainer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.fallback,
        n = e.match,
        a = e.props;
      return s.jsx(r("react-relay/relay-hooks/MatchContainer"), {
        fallback: t,
        loader: o("RelayFBModuleLoader").read,
        match: n,
        props: a,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
