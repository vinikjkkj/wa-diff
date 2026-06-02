__d(
  "WAWebClearCredentials",
  [
    "WALogger",
    "WAWebCryptoEncKeyHelper",
    "WAWebCryptoEncryptionSaltHelper",
    "WAWebLocalStorageClearOnLogout",
    "WAWebSignalStorage",
    "WAWebUserPrefsClearLocalState",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p() {
      var t = !1;
      try {
        o("WAWebUserPrefsGeneral").setBrowserId();
      } catch (n) {
        ((t = !0),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:clearState error",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .tags("logout"));
      }
      try {
        o("WAWebUserPrefsMeUser").setUnknownId();
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "ws2:setUnknownId error",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("logout");
      }
      try {
        o("WAWebUserPrefsMeUser").setMe();
      } catch (e) {
        ((t = !0),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:setMe error",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("logout"));
      }
      try {
        await o("WAWebUserPrefsMultiDevice").clearRegistrationInfo();
      } catch (e) {
        ((t = !0),
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:clearRegistrationInfo error",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("logout"));
      }
      try {
        await o("WAWebSignalStorage").destroy();
      } catch (e) {
        ((t = !0),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:destroySignal error",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("logout"));
      }
      try {
        (await o("WAWebCryptoEncKeyHelper").deleteEncKeysAndCache(),
          await o("WAWebCryptoEncryptionSaltHelper").deleteSalt());
      } catch (e) {
        t = !0;
      }
      o("WAWebLocalStorageClearOnLogout").clearLocalStorageKeysOnLogout();
      try {
        await o("WAWebUserPrefsClearLocalState").clearAllLocalState();
      } catch (e) {
        ((t = !0),
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:clearAllLocalState error",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("logout"));
      }
      return t;
    }
    l.default = p;
  },
  98,
);
