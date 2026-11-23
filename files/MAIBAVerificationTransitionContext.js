__d(
  "MAIBAVerificationTransitionContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = c(null);
    function h(e) {
      var t = e.children,
        n = e.enabled,
        r = n === void 0 ? !0 : n,
        o = f(!1),
        a = o[0],
        i = o[1],
        l = _(1),
        u = d(function () {
          return l.current;
        }, []),
        c = d(function (e) {
          l.current = Math.max(l.current, e);
        }, []),
        m = d(function () {
          i(!0);
        }, []),
        h = p(
          function () {
            return {
              getVisibleProgressStepCount: u,
              hasVerificationWidget: a,
              markVerificationWidgetAvailable: m,
              markVisibleProgressStepCount: c,
            };
          },
          [u, a, m, c],
        );
      return s.jsx(g.Provider, { value: r ? h : null, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return m(g);
    }
    ((l.MAIBAVerificationTransitionProvider = h),
      (l.useMAIBAVerificationTransitionContext = y));
  },
  98,
);
