__d(
  "react-relay/relay-hooks/useRefetchableFragment",
  [
    "react",
    "react-relay/relay-hooks/useRefetchableFragmentInternal",
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
        "first argument of useRefetchableFragment()",
      );
      var o = n("react-relay/relay-hooks/useRefetchableFragmentInternal")(
          r,
          t,
          "useRefetchableFragment()",
        ),
        a = o.fragmentData,
        i = o.refetch;
      return [a, i];
    }
    a.exports = c;
  },
  null,
);
