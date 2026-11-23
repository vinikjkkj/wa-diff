__d(
  "AdsUEditorItemPaginationContext",
  ["hero-tracing-placeholder", "react", "usePrevious"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState,
      _ = s.createContext(function () {
        return !0;
      });
    function f(e) {
      var t,
        n = e.children,
        a = e.initialStep,
        i = e.resetKey,
        l = e.step,
        u = (t = a != null ? a : l) != null ? t : 1 / 0,
        f = p(u),
        g = f[0],
        h = f[1],
        y = p(!0),
        C = y[0],
        b = y[1],
        v = m(new Set()),
        S = r("usePrevious")(i),
        R = c(
          function (e) {
            var t = S !== i;
            return (
              t && v.current.size > u && v.current.clear(),
              v.current.has(e)
                ? !0
                : v.current.size < (t ? u : g)
                  ? (v.current.add(e), !0)
                  : !1
            );
          },
          [g, S, i, u],
        );
      return (
        d(
          function () {
            var e = window.requestAnimationFrame(function () {
              var e = l != null ? l : 1 / 0;
              i !== S
                ? (g > u ? h(u) : h(u + e), b(!0))
                : v.current.size >= g
                  ? (h(g + e), b(!0))
                  : b(!1);
            });
            return function () {
              window.cancelAnimationFrame(e);
            };
          },
          [g, l, v, i, S, u],
        ),
        s.jsx(_.Provider, {
          value: R,
          children: s.jsx(o("hero-tracing-placeholder").HeroHoldBoundary, {
            description: "AdsUEditorItemPaginationContext",
            hold: C || S !== i,
            name: "AdsUEditorItemPaginationProvider",
            children: n,
          }),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.AdsUEditorItemPaginationProvider = f));
  },
  98,
);
