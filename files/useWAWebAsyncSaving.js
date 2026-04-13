__d(
  "useWAWebAsyncSaving",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = d(!1),
        r = n[0],
        a = n[1],
        i = d(null),
        l = i[0],
        s = i[1],
        m = d(null),
        p = m[0],
        _ = m[1],
        f = c(null),
        g,
        h;
      (t[0] !== l || t[1] !== e || t[2] !== p
        ? ((g = function () {
            if (p == null) {
              if (l == null) {
                a(!1);
                return;
              }
              ((f.current = new AbortController()),
                _(
                  e(l).finally(function () {
                    var e;
                    ((e = f.current) != null && e.signal.aborted) || _(null);
                  }),
                ),
                s(null),
                a(!0));
            }
          }),
          (h = [l, e, p]),
          (t[0] = l),
          (t[1] = e),
          (t[2] = p),
          (t[3] = g),
          (t[4] = h))
        : ((g = t[3]), (h = t[4])),
        u(g, h));
      var y, C;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            return function () {
              var e;
              return (e = f.current) == null ? void 0 : e.abort();
            };
          }),
          (C = []),
          (t[5] = y),
          (t[6] = C))
        : ((y = t[5]), (C = t[6])),
        u(y, C));
      var b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            return s(t);
          }),
          (t[7] = b))
        : (b = t[7]);
      var v;
      return (
        t[8] !== r ? ((v = [r, b]), (t[8] = r), (t[9] = v)) : (v = t[9]),
        v
      );
    }
    l.default = m;
  },
  98,
);
