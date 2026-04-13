__d(
  "WAWebBizAdCreationFooterPortalContext.react",
  ["CometPlaceholder.react", "ReactDOM", "react", "react-compiler-runtime"],
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
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        r = e.containerRef,
        a = _(null),
        i = a[0],
        l = a[1],
        u,
        c;
      (t[0] !== r || t[1] !== i
        ? ((u = function () {
            r.current !== i && l(r.current);
          }),
          (c = [r, i]),
          (t[0] = r),
          (t[1] = i),
          (t[2] = u),
          (t[3] = c))
        : ((u = t[2]), (c = t[3])),
        m(u, c));
      var d;
      t[4] !== i
        ? ((d = { footerContainer: i, registerContainer: l }),
          (t[4] = i),
          (t[5] = d))
        : (d = t[5]);
      var p = d,
        g;
      return (
        t[6] !== n || t[7] !== p
          ? ((g = s.jsx(f.Provider, { value: p, children: n })),
            (t[6] = n),
            (t[7] = p),
            (t[8] = g))
          : (g = t[8]),
        g
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = g(),
        i = a.footerContainer;
      if (i == null) return null;
      var l;
      t[0] !== n
        ? ((l = s.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: "FooterPortal",
            children: n,
          })),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== i || t[3] !== l
          ? ((u = o("ReactDOM").createPortal(l, i)),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    ((l.FooterPortalProvider = h), (l.FooterPortal = y));
  },
  98,
);
