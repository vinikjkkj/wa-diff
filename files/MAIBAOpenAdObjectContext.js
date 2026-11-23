__d(
  "MAIBAOpenAdObjectContext",
  ["FBLogger", "getErrorSafe", "promiseDone", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useRef,
      f = c(null);
    function g(e) {
      var t = e.adObjectID,
        n = m(f),
        o = _(!1),
        a = n == null ? void 0 : n.loadAdObjectOpenSpec;
      p(
        function () {
          t != null &&
            a != null &&
            r("promiseDone")(
              Promise.resolve().then(function () {
                return a(t);
              }),
              null,
              function () {},
            );
        },
        [t, a],
      );
      var i = d(
        function () {
          if (!(t == null || n == null || o.current)) {
            o.current = !0;
            var e = (async function () {
              await n.openAdObject(t);
            })().finally(function () {
              o.current = !1;
            });
            r("promiseDone")(e, null, function (e) {
              r("FBLogger")("maiba")
                .catching(r("getErrorSafe")(e))
                .warn("Failed to open an ad object");
            });
          }
        },
        [t, n],
      );
      return n == null ? null : i;
    }
    ((l.MAIBAOpenAdObjectContext = f), (l.useMAIBAOpenAdObject = g));
  },
  98,
);
