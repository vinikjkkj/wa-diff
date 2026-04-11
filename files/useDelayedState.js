__d(
  "useDelayedState",
  [
    "clearTimeout",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n = m(e),
        a = n[0],
        i = n[1],
        l = d(null),
        s,
        u;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function () {
            return function () {
              return r("clearTimeout")(l.current);
            };
          }),
          (u = []),
          (t[0] = s),
          (t[1] = u))
        : ((s = t[0]), (u = t[1])),
        c(s, u));
      var p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function (t, n, o) {
            var e = n === void 0 ? 0 : n,
              a = o === void 0 ? r("emptyFunction") : o;
            (r("clearTimeout")(l.current),
              (l.current = null),
              e === 0
                ? (i(t), a(t))
                : (l.current = r("setTimeout")(function () {
                    (i(t), a(t), (l.current = null));
                  }, e)));
          }),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      return (
        t[3] !== a ? ((f = [a, _]), (t[3] = a), (t[4] = f)) : (f = t[4]),
        f
      );
    }
    l.default = p;
  },
  98,
);
