__d(
  "react-relay/relay-hooks/useFragment",
  [
    "react",
    "react-relay/relay-hooks/useFragmentInternal",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = e || (e = n("react")),
      s = l.useDebugValue,
      u = n("relay-runtime").getFragment;
    function c(e, t) {
      var r = u(e);
      n("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        r,
        "first argument of useFragment()",
      );
      var o = n("react-relay/relay-hooks/useFragmentInternal")(
        r,
        t,
        "useFragment()",
      );
      return o;
    }
    a.exports = c;
  },
  null,
);
