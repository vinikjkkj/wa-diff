__d(
  "react-relay/relay-hooks/useSubscribeToInvalidationState",
  [
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useRelayEnvironment",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var r = l(13),
        o = n("react-relay/relay-hooks/useRelayEnvironment")(),
        a = c(null),
        i;
      r[0] !== e
        ? ((i = Array.from(e).sort().join("")), (r[0] = e), (r[1] = i))
        : (i = r[1]);
      var s = i,
        d;
      r[2] !== t || r[3] !== e || r[4] !== a || r[5] !== o
        ? ((d = function () {
            var n = o.getStore(),
              r = n.lookupInvalidationState(e),
              i = n.subscribeToInvalidationState(r, t);
            return (
              (a.current = i),
              function () {
                return i.dispose();
              }
            );
          }),
          (r[2] = t),
          (r[3] = e),
          (r[4] = a),
          (r[5] = o),
          (r[6] = d))
        : (d = r[6]);
      var m;
      (r[7] !== t || r[8] !== o || r[9] !== s
        ? ((m = [s, t, o]), (r[7] = t), (r[8] = o), (r[9] = s), (r[10] = m))
        : (m = r[10]),
        u(d, m));
      var p;
      return (
        r[11] !== a
          ? ((p = {
              dispose: function () {
                a.current != null && a.current.dispose();
              },
            }),
            (r[11] = a),
            (r[12] = p))
          : (p = r[12]),
        p
      );
    }
    a.exports = d;
  },
  null,
);
