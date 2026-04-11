__d(
  "react-relay/relay-hooks/useIsOperationNodeActive",
  [
    "invariant",
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("react-compiler-runtime").c,
      u = e || (e = n("react")),
      c = n("relay-runtime").__internal.getObservableForActiveRequest,
      d = n("relay-runtime").getSelector,
      m = u.useEffect,
      p = u.useState,
      _ = u.useMemo;
    function f(e, t) {
      var r = s(10),
        o = n("react-relay/relay-hooks/useRelayEnvironment")(),
        a,
        i;
      r[0] !== o || r[1] !== e || r[2] !== t
        ? ((a = function () {
            var n = d(e, t);
            return n == null
              ? null
              : (n.kind === "SingularReaderSelector" || l(0, 21191),
                c(o, n.owner));
          }),
          (i = [o, e, t]),
          (r[0] = o),
          (r[1] = e),
          (r[2] = t),
          (r[3] = a),
          (r[4] = i))
        : ((a = r[3]), (i = r[4]));
      var u = _(a, i),
        f = p(u != null),
        g = f[0],
        h = f[1],
        y;
      r[5] !== u || r[6] !== h
        ? ((y = function () {
            var e;
            if ((h(u != null), u != null)) {
              var t = function () {
                h(!1);
              };
              e = u.subscribe({ complete: t, error: t });
            }
            return function () {
              e && e.unsubscribe();
            };
          }),
          (r[5] = u),
          (r[6] = h),
          (r[7] = y))
        : (y = r[7]);
      var C;
      return (
        r[8] !== u ? ((C = [u]), (r[8] = u), (r[9] = C)) : (C = r[9]),
        m(y, C),
        g
      );
    }
    a.exports = f;
  },
  null,
);
