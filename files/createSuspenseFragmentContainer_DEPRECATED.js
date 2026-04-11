__d(
  "createSuspenseFragmentContainer_DEPRECATED",
  [
    "mapObject",
    "react",
    "react-relay/assertFragmentMap",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "useFragmentNodes_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useMemo;
    function m(t, n) {
      var a = t.displayName || t.name || "Unknown",
        l = "RelaySuspenseFragmentContainer(" + a + ")";
      r("react-relay/assertFragmentMap")(a, n);
      var u = n,
        m = (s || (s = r("mapObject")))(u, o("relay-runtime").getFragment);
      function p(n) {
        var o = n.ref,
          a = babelHelpers.objectWithoutPropertiesLoose(n, e),
          i = r("react-relay/relay-hooks/useRelayEnvironment")(),
          s = d(
            function () {
              return { environment: i };
            },
            [i],
          ),
          u = r("useFragmentNodes_DEPRECATED")(m, a, l),
          p = u.data,
          _ = u.shouldUpdateGeneration;
        return d(
          function () {
            var e;
            return c.jsx(
              t,
              babelHelpers.extends({}, a, p, {
                ref: (e = a.componentRef) != null ? e : o,
                relay: s,
              }),
            );
          },
          [_, o],
        );
      }
      return (
        (p.displayName = p.name + " [from " + i.id + "]"),
        (p.displayName = l),
        p
      );
    }
    l.default = m;
  },
  98,
);
