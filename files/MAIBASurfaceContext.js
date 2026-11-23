__d(
  "MAIBASurfaceContext",
  ["MAIBASurfaceConfig", "MAIBASurfacesUtils", "react"],
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
        isUIPolishEnabled: !1,
        shouldUseIGQuery: !1,
        staleResponseTimeoutMs: null,
        usesFacebookDesignSystem: !1,
        usesInstagramDesignSystem: !1,
      },
      p = s.createContext(m);
    function _(e) {
      var t = e.autoLoggingTool,
        n = e.children,
        r = e.isPageContext,
        a = r === void 0 ? !1 : r,
        i = e.isUIPolishEnabled,
        l = i === void 0 ? !1 : i,
        u = e.staleResponseTimeoutMs,
        c = u === void 0 ? null : u,
        m = d(
          function () {
            var e =
                t != null
                  ? t
                  : o("MAIBASurfacesUtils").getCurrentAutoLoggingTool(),
              n = o("MAIBASurfaceConfig").getMAIBASurfaceConfig(e);
            return {
              autoLoggingTool: e,
              isPageContext: a,
              isUIPolishEnabled: l,
              shouldUseIGQuery: n.shouldUseIGGraphQLQuery,
              staleResponseTimeoutMs: c,
              usesFacebookDesignSystem: e === "Facebook Ad Center",
              usesInstagramDesignSystem: e === "Instagram",
            };
          },
          [t, a, l, c],
        );
      return s.jsx(p.Provider, { value: m, children: n });
    }
    _.displayName = _.name + " [from " + i.id + "]";
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
