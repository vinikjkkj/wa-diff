__d(
  "WAWebCometBuildRoot",
  [
    "invariant",
    "Actor",
    "CometErrorBoundary.react",
    "CometPageContent.react",
    "CometPlaceholder.react",
    "CometRelayEnvironmentFactory",
    "CometTimeSpentEventListener.react",
    "CurrentUser",
    "RelayEnvironmentFactoryProvider",
    "buildWAWebCometRouterStateProvider",
    "react",
    "shouldUseNonReactTSListeners",
    "useCometRouterState",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var a = r("buildWAWebCometRouterStateProvider")(
          babelHelpers.extends({}, e, {
            disableTimeSpentLogging: n,
            initialLoadTraceId: t,
            initialTimeSpentMetadata: null,
            relayEnvironmentFactory: o("CometRelayEnvironmentFactory")
              .CometRelayEnvironmentFactory,
          }),
        ),
        l = r("CurrentUser").getID(),
        s = !n && r("shouldUseNonReactTSListeners") !== !0;
      function c() {
        return u.jsx(r("CometErrorBoundary.react"), {
          context: { project: "comet_platform_root_boundary" },
          type: "fatal",
          children: u.jsxs(
            o("RelayEnvironmentFactoryProvider")
              .RelayEnvironmentFactoryProvider,
            {
              factory: o("CometRelayEnvironmentFactory")
                .CometRelayEnvironmentFactory,
              children: [
                u.jsx(a, {
                  children: u.jsx(o("Actor").ActorProvider, {
                    initialActorID: l,
                    readonly: !0,
                    children: u.jsx(d, {}),
                  }),
                }),
                s && u.jsx(r("CometTimeSpentEventListener.react"), {}),
              ],
            },
          ),
        });
      }
      return ((c.displayName = c.name + " [from " + i.id + "]"), c);
    }
    function d() {
      var e = r("useCometRouterState")();
      return (
        e != null || s(0, 197734),
        u.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: u.jsx(r("CometPageContent.react"), { routerState: e }),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.buildRootComponent = c));
  },
  98,
);
