__d(
  "WAWebInitBotGatingHelpers",
  [
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebCanonicalHatchAgentStatusGetQuery",
    "WAWebCanonicalHatchIdentityGetQuery",
    "WAWebCanonicalHatchLinkedStatusGetQuery",
    "WAWebHatchAgentStatusManager",
    "WAWebHatchLinkedStatusManager",
    "WAWebInitializeBots",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      (o("WAWebAIHatchIdentityStore").registerIdentityFetcher(
        o("WAWebCanonicalHatchIdentityGetQuery").fetchHatchIdentityGet,
      ),
        r("WAWebHatchAgentStatusManager").registerFetcher(
          o("WAWebCanonicalHatchAgentStatusGetQuery").fetchHatchAgentStatus,
        ),
        r("WAWebHatchLinkedStatusManager").registerFetcher(
          o("WAWebCanonicalHatchLinkedStatusGetQuery").fetchHatchLinkedStatus,
        ));
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
      (o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(function () {
        o("WAWebInitializeBots").initializeBots();
      }),
        o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(function () {
          o("WAWebInitializeBots").initializeBots();
        }));
    }
    l.initBotGatingHelpers = u;
  },
  98,
);
