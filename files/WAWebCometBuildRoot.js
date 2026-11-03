__d(
  "WAWebCometBuildRoot",
  [
    "CometAppMainContentAreaRenderer.react",
    "CometAppShell.react",
    "CometAppViewStack.react",
    "CometMainRoutes.react",
    "CometPageTransitioning.react",
    "CometPlaceholder.react",
    "CometRelayEnvironmentFactory",
    "CometToasterRoot.react",
    "buildCometRootComponent",
    "buildWAWebCometRouterStateProvider",
    "justknobx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { contentContainerHidden: { display: "x1s85apg", $$css: !0 } };
    function c(e, t, n) {
      var a = r("buildWAWebCometRouterStateProvider")(
        babelHelpers.extends({}, e, {
          disableTimeSpentLogging: n,
          initialLoadTraceId: t,
          initialTimeSpentMetadata: null,
          relayEnvironmentFactory: o("CometRelayEnvironmentFactory")
            .CometRelayEnvironmentFactory,
        }),
      );
      return o("buildCometRootComponent").buildCometRootComponent(
        r("justknobx")._("7144") ? s.jsx(m, {}) : s.jsx(d, {}),
        {
          disableTimeSpentLogging: n,
          initialLoadTraceId: t,
          relayEnvironmentFactory: o("CometRelayEnvironmentFactory")
            .CometRelayEnvironmentFactory,
        },
        {
          CometRouterStateProvider: a,
          OtherRootComponents: {
            CookieConsentDialog: null,
            KeyCommandNub: null,
            Redblock: null,
            UncaughtErrorFallback: null,
          },
          UIStateProviders: null,
        },
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx(r("CometToasterRoot.react"), {})),
          (n = s.jsx(r("CometPageTransitioning.react"), {})),
          (e[0] = t),
          (e[1] = n))
        : ((t = e[0]), (n = e[1]));
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = s.jsxs(r("CometAppShell.react"), {
              toaster: t,
              children: [
                n,
                s.jsx(r("CometAppViewStack.react"), {
                  baseView: s.jsx(r("CometAppMainContentAreaRenderer.react"), {
                    shouldRenderTopNav: !1,
                    disableNegativeMarginBottom: !0,
                  }),
                }),
              ],
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(r("CometMainRoutes.react"), {
                contentXStyleProvider: p,
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p(e) {
      var t = e.isHidden;
      return t ? u.contentContainerHidden : null;
    }
    l.buildRootComponent = c;
  },
  98,
);
