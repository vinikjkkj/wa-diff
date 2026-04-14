__d(
  "useWAWebAsyncSaving",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e) {
      var t = d(!1),
        n = t[0],
        r = t[1],
        o = d(null),
        a = o[0],
        i = o[1],
        l = d(null),
        s = l[0],
        m = l[1],
        p = c(null);
      return (
        u(
          function () {
            if (s == null) {
              if (a == null) {
                r(!1);
                return;
              }
              ((p.current = new AbortController()),
                m(
                  e(a).finally(function () {
                    var e;
                    ((e = p.current) != null && e.signal.aborted) || m(null);
                  }),
                ),
                i(null),
                r(!0));
            }
          },
          [a, e, s],
        ),
        u(function () {
          return function () {
            var e;
            return (e = p.current) == null ? void 0 : e.abort();
          };
        }, []),
        [
          n,
          function (e) {
            return i(e);
          },
        ]
      );
    }
    l.default = m;
  },
  98,
);
