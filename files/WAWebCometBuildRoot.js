__d(
  "WAWebCometBuildRoot",
  [
    "invariant",
    "CometPageContent.react",
    "CometPlaceholder.react",
    "CometRelayEnvironmentFactory",
    "JSResourceForInteraction",
    "buildCometRootComponent",
    "buildWAWebCometRouterStateProvider",
    "justknobx",
    "lazyLoadComponent",
    "react",
    "react-compiler-runtime",
    "useCometRouterState",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("lazyLoadComponent")(
        r("JSResourceForInteraction")("WAWebCometAppShellRoot.react").__setRef(
          "WAWebCometBuildRoot",
        ),
      );
    function d(e, t, n) {
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
        m() ? u.jsx(_, {}) : u.jsx(p, {}),
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
    function m() {
      return r("justknobx")._("7144");
    }
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: u.jsx(c, {}),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useCometRouterState")();
      t != null || s(0, 191183);
      var n;
      return (
        e[0] !== t
          ? ((n = u.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: u.jsx(r("CometPageContent.react"), { routerState: t }),
            })),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    ((l.buildRootComponent = d), (l.isLeanRouterRoot = m));
  },
  98,
);
