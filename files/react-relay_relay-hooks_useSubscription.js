__d(
  "react-relay/relay-hooks/useSubscription",
  [
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = s.useEffect,
      c = n("relay-runtime").requestSubscription;
    function d(e, t) {
      var r = l(5),
        o = t != null ? t : c,
        a = n("react-relay/relay-hooks/useRelayEnvironment")(),
        i,
        s;
      (r[0] !== o || r[1] !== e || r[2] !== a
        ? ((i = function () {
            var t = o(a, e),
              n = t.dispose;
            return n;
          }),
          (s = [a, e, o]),
          (r[0] = o),
          (r[1] = e),
          (r[2] = a),
          (r[3] = i),
          (r[4] = s))
        : ((i = r[3]), (s = r[4])),
        u(i, s));
    }
    a.exports = d;
  },
  null,
);
