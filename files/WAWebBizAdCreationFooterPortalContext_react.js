__d(
  "WAWebBizAdCreationFooterPortalContext.react",
  ["CometPlaceholder.react", "ReactDOM", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useEffect,
      p = u.useMemo,
      _ = u.useState,
      f = c({ footerContainer: null, registerContainer: function () {} });
    function g() {
      return d(f);
    }
    function h(e) {
      var t = e.children,
        n = e.containerRef,
        r = _(null),
        o = r[0],
        a = r[1];
      m(
        function () {
          n.current !== o && a(n.current);
        },
        [n, o],
      );
      var i = p(
        function () {
          return { footerContainer: o, registerContainer: a };
        },
        [o],
      );
      return s.jsx(f.Provider, { value: i, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.children,
        n = g(),
        a = n.footerContainer;
      return a == null
        ? null
        : o("ReactDOM").createPortal(
            s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: "FooterPortal",
              children: t,
            }),
            a,
          );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.FooterPortalProvider = h),
      (l.FooterPortal = y));
  },
  98,
);
