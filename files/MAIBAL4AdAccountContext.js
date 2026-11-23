__d(
  "MAIBAL4AdAccountContext",
  [
    "BSHSharedAdAccountContext",
    "FBLogger",
    "MAIBASurfaceConfig",
    "MAIBASurfaceContext",
    "isMAIBAUnifiedThreadsEnabled",
    "react",
    "useFetchAdAccounts",
    "useMAIBAL4AdAccountContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef;
    function f(e) {
      var t,
        n = e.children,
        a = e.currentAdAccountID,
        i = e.customAnalyticsBusinessID,
        l = e.isUserLoggedInToAdAccount,
        s = e.l4QueryFetchKey,
        c = e.onAdAccountSelected,
        f = e.shouldFallbackToRandomAccount,
        g = f === void 0 ? !1 : f,
        h = o("MAIBASurfaceContext").useMAIBASurfaceContext(),
        y = h.autoLoggingTool,
        C = o("MAIBASurfaceConfig").isMBSSurfaceTool(y),
        b = y === "Facebook Ad Center",
        v = y === "Business Support",
        S = y === "WhatsApp Manager" || y === "WA Manager Marketing Campaign",
        R = y === "DIRECT_SUPPORT",
        L = y === "Monetization Manager",
        E = d(r("BSHSharedAdAccountContext")),
        k =
          v && (t = E == null ? void 0 : E.currentAdAccountID) != null ? t : a,
        I = v || i != null ? !1 : l,
        T = o("useFetchAdAccounts").useInitialAdAccountSelection(
          k,
          I,
          g,
          C,
          b,
          s,
          i,
        ),
        D = T.adAccount,
        x = T.adAccountOptions,
        $ = T.initialFetchedCount;
      !I &&
        $ === 0 &&
        i == null &&
        r("FBLogger")("MAIBA L4 Ad account context").warn(
          "No ad account found",
        );
      var P = _(c);
      m(
        function () {
          P.current = c;
        },
        [c],
      );
      var N = o("useFetchAdAccounts").useCommitAccountPayload(),
        M = E == null ? void 0 : E.onAdAccountSelected,
        w = p(
          function () {
            var e =
                !S &&
                !R &&
                !L &&
                !r("isMAIBAUnifiedThreadsEnabled")() &&
                x == null &&
                (D == null ? void 0 : D.id) == null &&
                !I &&
                $ > 1,
              t =
                !S &&
                !R &&
                !L &&
                (b ||
                  v ||
                  x != null ||
                  (!I && (D == null ? void 0 : D.id) != null)) &&
                $ > 1;
            return {
              adAccountOptions: x,
              onAdAccountSelected: function (t) {
                (N(t), P.current(t.id), M == null || M(t.id));
              },
              selectedAdAccount: D,
              shouldShowL4AccountSelectorPage: e,
              shouldShowL4AccountSwitcher: t,
            };
          },
          [D, x, N, I, $, v, R, b, L, S, M],
        );
      return u.jsx(
        o("useMAIBAL4AdAccountContext").MAIBAL4AdAccountContext.Provider,
        { value: w, children: n },
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.children,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = d(o("useMAIBAL4AdAccountContext").MAIBAL4AdAccountContext);
      return a != null
        ? u.jsx(
            o("useMAIBAL4AdAccountContext").MAIBAL4AdAccountContext.Provider,
            { value: a, children: n },
          )
        : u.jsx(f, babelHelpers.extends({}, r, { children: n }));
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.MAIBAL4AdAccountContextProvider = g),
      (l.useMAIBAL4AdAccountContext = o(
        "useMAIBAL4AdAccountContext",
      ).useMAIBAL4AdAccountContext));
  },
  98,
);
