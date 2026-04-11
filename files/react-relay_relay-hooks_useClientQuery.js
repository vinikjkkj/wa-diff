__d(
  "react-relay/relay-hooks/useClientQuery",
  ["react-compiler-runtime", "react-relay/relay-hooks/useLazyLoadQuery"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("react-compiler-runtime").c;
    function l(t, r, o) {
      var a = e(2),
        i = t,
        l;
      return (
        a[0] !== o
          ? ((l = babelHelpers.extends({}, o, { fetchPolicy: "store-only" })),
            (a[0] = o),
            (a[1] = l))
          : (l = a[1]),
        n("react-relay/relay-hooks/useLazyLoadQuery")(i, r, l)
      );
    }
    a.exports = l;
  },
  null,
);
