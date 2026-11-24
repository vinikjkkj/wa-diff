__d(
  "WAWebCometBuildRoot",
  [
    "invariant",
    "Actor",
    "CometHeroInteractionWithDiv.react",
    "CometPageContent.react",
    "CometPlaceholder.react",
    "CometRelayEnvironmentFactory",
    "CometTimeSpentEventListener.react",
    "CurrentUser",
    "JSResourceForInteraction",
    "RelayEnvironmentFactoryProvider",
    "buildCometRootComponent",
    "buildWAWebCometRouterStateProvider",
    "justknobx",
    "lazyLoadComponent",
    "react",
    "shouldUseNonReactTSListeners",
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
      if (m()) {
        var l = function () {
            return u.jsxs(
              o("RelayEnvironmentFactoryProvider")
                .RelayEnvironmentFactoryProvider,
              {
                factory: o("CometRelayEnvironmentFactory")
                  .CometRelayEnvironmentFactory,
                children: [
                  u.jsx(a, {
                    children: u.jsx(o("Actor").ActorProvider, {
                      initialActorID: s,
                      readonly: !0,
                      children: u.jsx(r("CometHeroInteractionWithDiv.react"), {
                        interactionDesc: "initial load",
                        interactionUUID: t,
                        children: u.jsx(_, {}),
                      }),
                    }),
                  }),
                  c && u.jsx(r("CometTimeSpentEventListener.react"), {}),
                ],
              },
            );
          },
          s = r("CurrentUser").getID(),
          c = !n && r("shouldUseNonReactTSListeners") !== !0;
        return ((l.displayName = l.name + " [from " + i.id + "]"), l);
      }
      return o("buildCometRootComponent").buildCometRootComponent(
        u.jsx(p, {}),
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
