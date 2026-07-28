__d(
  "WAWebInitBotGatingHelpers",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebCanonicalHatchLinkedStatusGetQuery",
    "WAWebHatchLinkedStatusManager",
    "WAWebInitializeBots",
    "WAWebPrefetchHatchLinkedStatusOnLogin",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("WAWebHatchLinkedStatusManager").registerFetcher(
            o("WAWebCanonicalHatchLinkedStatusGetQuery").fetchHatchLinkedStatus,
          ),
            o(
              "WAWebPrefetchHatchLinkedStatusOnLogin",
            ).maybePrefetchHatchLinkedStatusOnLogin());
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
          u ||
            ((u = !0),
            o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(
              function () {
                (o("WAWebInitializeBots").initializeBots(),
                  o(
                    "WAWebPrefetchHatchLinkedStatusOnLogin",
                  ).maybePrefetchHatchLinkedStatusOnLogin());
              },
            ),
            o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(
              function () {
                (o("WAWebInitializeBots").initializeBots(),
                  o(
                    "WAWebPrefetchHatchLinkedStatusOnLogin",
                  ).maybePrefetchHatchLinkedStatusOnLogin());
              },
            ));
        })),
        d.apply(this, arguments)
      );
    }
    l.initBotGatingHelpers = c;
  },
  98,
);
