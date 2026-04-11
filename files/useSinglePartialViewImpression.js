__d(
  "useSinglePartialViewImpression",
  ["react", "react-compiler-runtime", "usePartialViewImpression"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onImpressionEnd,
        a = e.onImpressionStart,
        i = c(!1),
        l = c(!1),
        s;
      t[0] !== n
        ? ((s = function (t) {
            l.current || (n == null || n(t), (l.current = !0));
          }),
          (t[0] = n),
          (t[1] = s))
        : (s = t[1]);
      var u = s,
        d;
      t[2] !== a
        ? ((d = function (t) {
            i.current || (a == null || a(t), (i.current = !0));
          }),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      return (
        t[4] !== u || t[5] !== m
          ? ((p = { onImpressionEnd: u, onImpressionStart: m }),
            (t[4] = u),
            (t[5] = m),
            (t[6] = p))
          : (p = t[6]),
        r("usePartialViewImpression")(p)
      );
    }
    l.default = d;
  },
  98,
);
