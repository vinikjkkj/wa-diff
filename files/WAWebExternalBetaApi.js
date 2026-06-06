__d(
  "WAWebExternalBetaApi",
  [
    "WAComms",
    "WALogger",
    "WAWebAbPropsSyncJob",
    "WAWebBackendApi",
    "WAWebStartBackend",
    "WAWebUserPrefsGeneral",
    "WAWebWamUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      var t = await o(
        "WAWebUserPrefsGeneral",
      ).getWhatsAppWebExternalBetaJoinedIdb();
      t !== e &&
        (await Promise.all([
          o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaDirtyBitIdb(!0),
          o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaJoinedIdb(e),
        ]),
        o("WAWebWamUtils").refreshBetaWamGlobals(),
        await c(),
        o("WAWebBackendApi").frontendFireAndForget(
          "changeOptInStatusForExternalWebBeta",
          {},
        ));
    }
    async function c() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "WAWebExternalBetaApi: Restarting backend",
          ])),
      ),
        o("WAComms").stopComms(),
        await o("WAWebStartBackend").startWebComms(),
        await o("WAComms").startHandlingRequests(),
        (await o(
          "WAWebUserPrefsGeneral",
        ).getWhatsAppWebExternalBetaDirtyBitIdb()) &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebExternalBetaApi] syncing AB Props post opt-in change",
              ])),
          ),
          await o("WAWebAbPropsSyncJob").syncABPropsTask(),
          await o(
            "WAWebUserPrefsGeneral",
          ).setWhatsAppWebExternalBetaDirtyBitIdb(!1)));
    }
    l.changeOptInStatusForExternalWebBeta = u;
  },
  98,
);
