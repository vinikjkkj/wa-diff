__d(
  "MAIBASurfaceContext",
  [
    "MAIBASurfaceConfig",
    "MAIBASurfacesUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = {
        autoLoggingTool: null,
        isPageContext: !1,
        shouldUseIGQuery: !1,
        usesFacebookDesignSystem: !1,
        usesInstagramDesignSystem: !1,
      },
      p = s.createContext(m);
    function _(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.autoLoggingTool,
        r = e.children,
        a = e.isPageContext,
        i = a === void 0 ? !1 : a,
        l;
      t[0] !== n
        ? ((l =
            n != null
              ? n
              : o("MAIBASurfacesUtils").getCurrentAutoLoggingTool()),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      t[2] !== u
        ? ((c = o("MAIBASurfaceConfig").getMAIBASurfaceConfig(u)),
          (t[2] = u),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        m = u === "Facebook Ad Center",
        _ = u === "Instagram",
        f;
      t[4] !== d.shouldUseIGGraphQLQuery ||
      t[5] !== i ||
      t[6] !== u ||
      t[7] !== m ||
      t[8] !== _
        ? ((f = {
            autoLoggingTool: u,
            isPageContext: i,
            shouldUseIGQuery: d.shouldUseIGGraphQLQuery,
            usesFacebookDesignSystem: m,
            usesInstagramDesignSystem: _,
          }),
          (t[4] = d.shouldUseIGGraphQLQuery),
          (t[5] = i),
          (t[6] = u),
          (t[7] = m),
          (t[8] = _),
          (t[9] = f))
        : (f = t[9]);
      var g = f,
        h;
      return (
        t[10] !== r || t[11] !== g
          ? ((h = s.jsx(p.Provider, { value: g, children: r })),
            (t[10] = r),
            (t[11] = g),
            (t[12] = h))
          : (h = t[12]),
        h
      );
    }
    function f() {
      return c(p);
    }
    function g(e) {
      var t = f(),
        n = t.autoLoggingTool,
        r = t.usesFacebookDesignSystem,
        o = t.usesInstagramDesignSystem;
      return n === "Organization Manager" && e.orgman !== void 0
        ? e.orgman
        : r && e.facebook !== void 0
          ? e.facebook
          : o && e.instagram !== void 0
            ? e.instagram
            : e.default;
    }
    ((l.MAIBASurfaceContextProvider = _),
      (l.useMAIBASurfaceContext = f),
      (l.useSurfaceAware = g));
  },
  98,
);
