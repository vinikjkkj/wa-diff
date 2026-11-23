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
      return u.jsx(r("CometPlaceholder.react"), {
        fallback: null,
        name: i.id,
        children: u.jsx(c, {}),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      var e = r("useCometRouterState")();
      return (
        e != null || s(0, 191183),
        u.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: u.jsx(r("CometPageContent.react"), { routerState: e }),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.buildRootComponent = d),
      (l.isLeanRouterRoot = m));
  },
  98,
);
