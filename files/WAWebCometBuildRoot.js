__d(
  "WAWebCometBuildRoot",
  [
    "CometAppMainContentAreaRenderer.react",
    "CometAppShell.react",
    "CometAppViewStack.react",
    "CometPageTransitioning.react",
    "CometRelayEnvironmentFactory",
    "CometToasterRoot.react",
    "buildCometRootComponent",
    "buildWAWebCometRouterStateProvider",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = r("buildWAWebCometRouterStateProvider")(
        babelHelpers.extends({}, e, {
          initialLoadTraceId: t,
          initialTimeSpentMetadata: null,
          relayEnvironmentFactory: o("CometRelayEnvironmentFactory")
            .CometRelayEnvironmentFactory,
        }),
      );
      return o("buildCometRootComponent").buildCometRootComponent(
        s.jsx(c, {}),
        {
          initialLoadTraceId: t,
          relayEnvironmentFactory: o("CometRelayEnvironmentFactory")
            .CometRelayEnvironmentFactory,
        },
        {
          CometRouterStateProvider: n,
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
    function c() {
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
    l.buildRootComponent = u;
  },
  98,
);
