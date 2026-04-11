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
    "WAWebHatchAgentStatusManager",
    "WAWebInitializeBots",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebAIHatchIdentityStore").registerIdentityFetcher(
            o("WAWebCanonicalHatchIdentityGetQuery").fetchHatchIdentityGet,
          ),
            r("WAWebHatchAgentStatusManager").registerFetcher(
              o("WAWebCanonicalHatchAgentStatusGetQuery").fetchHatchAgentStatus,
            ));
          try {
            var t = yield o("WAWebBackendApi").frontendSendAndReceive(
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
          (o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(
            function () {
              o("WAWebInitializeBots").initializeBots();
            },
          ),
            o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(
              function () {
                o("WAWebInitializeBots").initializeBots();
              },
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.initBotGatingHelpers = u;
  },
  98,
);
