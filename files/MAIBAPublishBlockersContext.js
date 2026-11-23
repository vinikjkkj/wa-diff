__d(
  "MAIBAPublishBlockersContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useId,
      p = s.createContext(null);
    function _(e, t) {
      var n = m(),
        r = c(p),
        o = r == null ? void 0 : r.registerPublishBlocker;
      d(
        function () {
          if (!(!e || o == null)) return o(n, t);
        },
        [n, e, t, o],
      );
    }
    ((l.MAIBAPublishBlockersContext = p), (l.useMAIBAPublishBlocker = _));
  },
  98,
);
