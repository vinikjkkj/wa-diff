__d(
  "AdsOsmipQPLContextProvider",
  ["HashCode", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState,
      _ = s.createContext({ startChatInstanceKey: null });
    function f() {
      return c(_);
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        r = e.threadGenerationID,
        a = p(null),
        i = a[0],
        l = a[1],
        u,
        c;
      (t[0] !== r
        ? ((u = function () {
            r != null && l(r);
          }),
          (c = [r]),
          (t[0] = r),
          (t[1] = u),
          (t[2] = c))
        : ((u = t[1]), (c = t[2])),
        d(u, c));
      var m;
      t[3] !== i
        ? ((m = i != null ? o("HashCode").hashCode(i) : null),
          (t[3] = i),
          (t[4] = m))
        : (m = t[4]);
      var f;
      t[5] !== m
        ? ((f = { startChatInstanceKey: m }), (t[5] = m), (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      return (
        t[7] !== n || t[8] !== g
          ? ((h = s.jsx(_.Provider, { value: g, children: n })),
            (t[7] = n),
            (t[8] = g),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    ((l.useAdsOsmipQPLContext = f), (l.AdsOsmipQPLContextProvider = g));
  },
  98,
);
