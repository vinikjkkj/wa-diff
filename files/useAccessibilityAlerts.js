__d(
  "useAccessibilityAlerts",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p() {
      var e = d(null),
        t = d(new Map()),
        n = d(0),
        r = m([]),
        o = r[0],
        a = r[1];
      c(function () {
        return function () {
          e.current != null && e.current();
        };
      }, []);
      var i = u(function (e, r) {
          var o = n.current++,
            i = { key: o, message: e, options: r };
          return (
            t.current.set(o, i),
            a(Array.from(t.current.values())),
            function () {
              (t.current.delete(o), a(Array.from(t.current.values())));
            }
          );
        }, []),
        l = u(
          function (t, n) {
            e.current != null && e.current();
            var r = i(t, n);
            return ((e.current = r), r);
          },
          [i],
        );
      return [o, l];
    }
    l.default = p;
  },
  98,
);
