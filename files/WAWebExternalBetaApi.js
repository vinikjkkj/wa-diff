__d(
  "WAWebExternalBetaApi",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WAWebAbPropsSyncJob",
    "WAWebBackendApi",
    "WAWebStartBackend",
    "WAWebUserPrefsGeneral",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebUserPrefsGeneral",
          ).getWhatsAppWebExternalBetaJoinedIdb();
          t !== e &&
            (yield (u || (u = n("Promise"))).all([
              o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaDirtyBitIdb(
                !0,
              ),
              o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaJoinedIdb(e),
            ]),
            o("WAWebWamUtils").refreshBetaWamGlobals(),
            yield m(),
            o("WAWebBackendApi").frontendFireAndForget(
              "changeOptInStatusForExternalWebBeta",
              {},
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebExternalBetaApi: Restarting backend",
              ])),
          ),
            o("WAComms").stopComms(),
            yield o("WAWebStartBackend").startWebComms(),
            yield o("WAComms").startHandlingRequests(),
            (yield o(
              "WAWebUserPrefsGeneral",
            ).getWhatsAppWebExternalBetaDirtyBitIdb()) &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebExternalBetaApi] syncing AB Props post opt-in change",
                  ])),
              ),
              yield o("WAWebAbPropsSyncJob").syncABPropsTask(),
              yield o(
                "WAWebUserPrefsGeneral",
              ).setWhatsAppWebExternalBetaDirtyBitIdb(!1)));
        })),
        p.apply(this, arguments)
      );
    }
    l.changeOptInStatusForExternalWebBeta = c;
  },
  98,
);
