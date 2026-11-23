__d(
  "MAIBAScrollToTopContext",
  ["react", "vulture"],
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
      var t = e.children;
      r("vulture")("DOSfcg_-9HOuq6qaK1Wib00-xek=");
      var n = _(!1),
        o = n[0],
        a = n[1],
        i = _(null),
        l = i[0],
        u = i[1],
        c = d(function (e) {
          a(e);
        }, []),
        m = d(function (e) {
          u(e);
        }, []),
        f = p(
          function () {
            return {
              scrollToTopContent: l,
              setScrollToTopContent: m,
              setShowScrollToTop: c,
              showScrollToTop: o,
            };
          },
          [l, m, c, o],
        );
      return s.jsx(g.Provider, { value: f, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return m(g);
    }
    ((l.MAIBAScrollToTopContextProvider = h),
      (l.useMAIBAScrollToTopContext = y));
  },
  98,
);
