__d(
  "react-relay/buildReactRelayContainer",
  [
    "invariant",
    "react",
    "react-relay/ReactRelayContainerUtils",
    "react-relay/ReactRelayContext",
    "react-relay/ReactRelayQueryRendererContext",
    "react-relay/assertFragmentMap",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("react-relay/ReactRelayContainerUtils").getComponentName,
      u = n("react-relay/ReactRelayContainerUtils").getContainerName,
      c = e || (e = n("react")),
      d = n("relay-runtime").getFragment,
      m = c.useContext;
    function p(e, t, r) {
      var o = u(e);
      n("react-relay/assertFragmentMap")(s(e), t);
      var i = {};
      for (var p in t) i[p] = d(t[p]);
      var _ = r(e, i);
      _.displayName = o;
      function f(e, t) {
        var r,
          a = m(n("react-relay/ReactRelayContext"));
        a != null || l(0, 18241, o, o);
        var i = m(n("react-relay/ReactRelayQueryRendererContext"));
        return c.jsx(
          _,
          babelHelpers.extends({}, e, {
            __relayContext: a,
            __rootIsQueryRenderer:
              (r = i == null ? void 0 : i.rootIsQueryRenderer) != null ? r : !1,
            componentRef: e.componentRef || t,
          }),
        );
      }
      ((f.displayName = f.name + " [from " + a.id + "]"), (f.displayName = o));
      var g = c.forwardRef(f);
      return g;
    }
    a.exports = p;
  },
  null,
);
