__d(
  "buildCometRootComponent",
  [
    "Actor",
    "CometBackupPlaceholder.react",
    "CometDOMOnlyBoundary.react",
    "CometErrorBoundary.react",
    "CometHeroInteractionWithDiv.react",
    "CometInteractionTracingQPLConfigContext",
    "CometPlatformAppWrapper.react",
    "CurrentUser",
    "ExecutionEnvironment",
    "FBLogger",
    "InitialCookieConsent",
    "RelayEnvironmentFactoryProvider",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(t, n, a) {
      var i = a.TopLevelWrapper,
        l = i === void 0 ? c.Fragment : i,
        u = a.CometRouterStateProvider,
        d = a.OtherRootComponents,
        m = d.CookieConsentDialog,
        p = d.DebugOwlDisplay,
        _ = d.KeyCommandNub,
        f = d.MemoryOverlay,
        g = d.Redblock,
        h = d.UncaughtErrorFallback,
        y = a.UIStateProviders,
        C = n.initialActorID,
        b = C === void 0 ? r("CurrentUser").getID() : C,
        v = n.initialLoadTraceId,
        S = n.relayEnvironmentFactory,
        R = n.interactionQPLEvents,
        L =
          R === void 0
            ? o("CometInteractionTracingQPLConfigContext")
                .defaultInteractionQPLEvents
            : R,
        E = n.disableTimeSpentLogging,
        k = y != null ? y : {},
        I = k.ChameleonThemeProvider,
        T = k.CometThemeInfraThemeProvider,
        D = k.DarkModeStateProvider,
        x = k.DensityModeStateProvider,
        $ = k.KeyboardSettingsStateProvider,
        P = x != null ? x : c.Fragment,
        N = D != null ? D : c.Fragment,
        M = u != null ? u : c.Fragment,
        w = I != null ? I : c.Fragment,
        A = T != null ? T : c.Fragment;
      return (
        (e || (e = r("InitialCookieConsent"))).shouldShowCookieBanner &&
          m == null &&
          (r("justknobx")._("1389")
            ? r("FBLogger")("cookies", "cookie_consent").mustfix(
                "CookieConsentDialog is null but shouldShowCookieBanner is true",
              )
            : r("FBLogger")("cookies", "cookie_consent").warn(
                "CookieConsentDialog is null but shouldShowCookieBanner is true",
              )),
        function () {
          return c.jsx(l, {
            children: c.jsx(
              o("CometInteractionTracingQPLConfigContext")
                .CometInteractionTracingQPLConfigContextProvider,
              {
                dialogTraceQPLEvent: L.dialogTraceQPLEvent,
                popoverTraceQPLEvent: L.popoverTraceQPLEvent,
                children: c.jsx(r("CometPlatformAppWrapper.react"), {
                  KeyboardSettingsStateProvider: $,
                  UncaughtErrorFallback: h,
                  disableTimeSpentLogging: E,
                  children: c.jsx(
                    o("RelayEnvironmentFactoryProvider")
                      .RelayEnvironmentFactoryProvider,
                    {
                      factory: S,
                      children: c.jsx(M, {
                        children: c.jsx(N, {
                          children: c.jsx(w, {
                            children: c.jsx(A, {
                              children: c.jsxs(P, {
                                children: [
                                  c.jsx(r("CometBackupPlaceholder.react"), {
                                    fallback: null,
                                    children: c.jsxs(o("Actor").ActorProvider, {
                                      initialActorID: b,
                                      readonly: !0,
                                      children: [
                                        c.jsxs(
                                          r(
                                            "CometHeroInteractionWithDiv.react",
                                          ),
                                          {
                                            interactionDesc: "initial load",
                                            interactionUUID: v,
                                            children: [
                                              t,
                                              m
                                                ? c.jsx(
                                                    r(
                                                      "CometErrorBoundary.react",
                                                    ),
                                                    { children: c.jsx(m, {}) },
                                                  )
                                                : null,
                                            ],
                                          },
                                        ),
                                        _
                                          ? c.jsx(
                                              r("CometErrorBoundary.react"),
                                              { children: c.jsx(_, {}) },
                                            )
                                          : null,
                                      ],
                                    }),
                                  }),
                                  c.jsxs(r("CometDOMOnlyBoundary.react"), {
                                    children: [
                                      g &&
                                      (s || (s = r("ExecutionEnvironment")))
                                        .canUseDOM
                                        ? c.jsx(r("CometErrorBoundary.react"), {
                                            children: c.jsx(g, {}),
                                          })
                                        : null,
                                      p
                                        ? c.jsx(r("CometErrorBoundary.react"), {
                                            children: c.jsx(p, {}),
                                          })
                                        : null,
                                      f
                                        ? c.jsx(r("CometErrorBoundary.react"), {
                                            children: c.jsx(f, {}),
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    },
                  ),
                }),
              },
            ),
          });
        }
      );
    }
    l.buildCometRootComponent = d;
  },
  98,
);
