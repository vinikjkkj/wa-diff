__d(
  "react-relay/relay-hooks/useMemoOperationDescriptor",
  [
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useMemoVariables",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = n("relay-runtime").createOperationDescriptor,
      c = n("relay-runtime").getRequest,
      d = s.useMemo;
    function m(e, t, r) {
      var o = l(7),
        a = n("react-relay/relay-hooks/useMemoVariables")(t),
        i;
      o[0] !== r ? ((i = r || {}), (o[0] = r), (o[1] = i)) : (i = o[1]);
      var s = n("react-relay/relay-hooks/useMemoVariables")(i),
        m,
        p;
      return (
        o[2] !== e || o[3] !== s || o[4] !== a
          ? ((m = function () {
              return u(c(e), a, s);
            }),
            (p = [e, a, s]),
            (o[2] = e),
            (o[3] = s),
            (o[4] = a),
            (o[5] = m),
            (o[6] = p))
          : ((m = o[5]), (p = o[6])),
        d(m, p)
      );
    }
    a.exports = m;
  },
  null,
);
