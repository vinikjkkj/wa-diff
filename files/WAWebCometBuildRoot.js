__d(
  "WAWebCometBuildRoot",
  [
    "CometMainRoutes.react",
    "CometPlaceholder.react",
    "CometRelayEnvironmentFactory",
    "JSResourceForInteraction",
    "buildCometRootComponent",
    "buildWAWebCometRouterStateProvider",
    "justknobx",
    "lazyLoadComponent",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResourceForInteraction")("WAWebCometAppShellRoot.react").__setRef(
          "WAWebCometBuildRoot",
        ),
      ),
      c = { contentContainerHidden: { display: "x1s85apg", $$css: !0 } };
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
        r("justknobx")._("7144") ? s.jsx(p, {}) : s.jsx(m, {}),
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
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(u, {}),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(r("CometMainRoutes.react"), {
                contentXStyleProvider: _,
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function _(e) {
      var t = e.isHidden;
      return t ? c.contentContainerHidden : null;
    }
    l.buildRootComponent = d;
  },
  98,
);
