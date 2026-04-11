__d(
  "react-relay/relay-hooks/useIsParentQueryActive",
  [
    "react-compiler-runtime",
    "react-relay/relay-hooks/useIsOperationNodeActive",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("react-compiler-runtime").c,
      l = n("relay-runtime").getFragment;
    function s(t, r) {
      var o = e(2),
        a;
      o[0] !== t ? ((a = l(t)), (o[0] = t), (o[1] = a)) : (a = o[1]);
      var i = a;
      return (
        n("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
          i,
          "first argument of useIsParentQueryActive()",
        ),
        n("react-relay/relay-hooks/useIsOperationNodeActive")(i, r)
      );
    }
    a.exports = s;
  },
  null,
);
