__d(
  "MAIBAScrollToTopContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useState,
      f = {
        scrollToTopContent: null,
        setScrollToTopContent: function () {},
        setShowScrollToTop: function () {},
        showScrollToTop: !1,
      },
      g = c(f);
    function h(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        r = _(!1),
        a = r[0],
        i = r[1],
        l = _(null),
        u = l[0],
        c = l[1],
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t) {
            i(t);
          }),
          (t[0] = d))
        : (d = t[0]);
      var m = d,
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function (t) {
            c(t);
          }),
          (t[1] = p))
        : (p = t[1]);
      var f = p,
        h;
      t[2] !== u || t[3] !== a
        ? ((h = {
            scrollToTopContent: u,
            setScrollToTopContent: f,
            setShowScrollToTop: m,
            showScrollToTop: a,
          }),
          (t[2] = u),
          (t[3] = a),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C;
      return (
        t[5] !== n || t[6] !== y
          ? ((C = s.jsx(g.Provider, { value: y, children: n })),
            (t[5] = n),
            (t[6] = y),
            (t[7] = C))
          : (C = t[7]),
        C
      );
    }
    function y() {
      return m(g);
    }
    ((l.MAIBAScrollToTopContextProvider = h),
      (l.useMAIBAScrollToTopContext = y));
  },
  98,
);
