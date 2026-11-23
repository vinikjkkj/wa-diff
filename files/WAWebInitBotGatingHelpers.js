__d(
  "WAWebInitBotGatingHelpers",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebCanonicalHatchLinkedStatusGetQuery",
    "WAWebHatchBackendGating",
    "WAWebHatchLinkedStatusDebugOverride",
    "WAWebHatchLinkedStatusFetcher",
    "WAWebInitializeBots",
    "WAWebPrefetchHatchLinkedStatusOnLogin",
    "WAWebSubscriptionAgeGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1;
    async function c() {
      (o(
        "WAWebHatchLinkedStatusDebugOverride",
      ).registerHatchLinkedStatusFetcher(
        o("WAWebHatchLinkedStatusFetcher")
          .fetchHatchLinkedStatusAndSaveCvmState,
        o("WAWebCanonicalHatchLinkedStatusGetQuery")
          .isRetryableHatchLinkedStatusError,
      ),
        u ||
          ((u = !0),
          o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(
            function () {
              (o("WAWebInitializeBots").initializeBots(),
                o(
                  "WAWebPrefetchHatchLinkedStatusOnLogin",
                ).maybePrefetchHatchLinkedStatusOnLogin(),
                o(
                  "WAWebSubscriptionAgeGating",
                ).maybeWarmSubscriptionAgeVerdict());
            },
          ),
          o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(
            function () {
              (o("WAWebInitializeBots").initializeBots(),
                o(
                  "WAWebPrefetchHatchLinkedStatusOnLogin",
                ).maybePrefetchHatchLinkedStatusOnLogin(),
                o(
                  "WAWebSubscriptionAgeGating",
                ).maybeWarmSubscriptionAgeVerdict());
            },
          ),
          o("WAWebBackendEventBus").BackendEventBus.onPrimaryFeaturesSynced(
            function (e) {
              e.has(o("WAWebHatchBackendGating").HATCH_PRIMARY_FEATURE) &&
                o(
                  "WAWebPrefetchHatchLinkedStatusOnLogin",
                ).maybePrefetchHatchLinkedStatusOnLogin();
            },
          )),
        o(
          "WAWebPrefetchHatchLinkedStatusOnLogin",
        ).maybePrefetchHatchLinkedStatusOnLogin(),
        o("WAWebSubscriptionAgeGating").maybeWarmSubscriptionAgeVerdict());
      try {
        var t = await o("WAWebBackendApi").frontendSendAndReceive(
          "getLanguage",
          void 0,
        );
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bot] initialized bot gating language cache with: ",
              "",
            ])),
          t,
        ),
          o("WAWebBotBaseGating").setBonsaiUserLanguage(t));
      } catch (e) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[bot] lang cache init failed, features may not work",
            ])),
        );
      }
    }
    l.initBotGatingHelpers = c;
  },
  98,
);
