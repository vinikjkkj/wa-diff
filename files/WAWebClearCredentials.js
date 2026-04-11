__d(
  "WAWebClearCredentials",
  [
    "WALogger",
    "WAWebCryptoEncKeyHelper",
    "WAWebCryptoEncryptionSaltHelper",
    "WAWebSignalStorage",
    "WAWebUserPrefsClearLocalState",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            yield o("WAWebUserPrefsMultiDevice").clearRegistrationInfo();
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
            yield o("WAWebSignalStorage").destroy();
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
            (yield o("WAWebCryptoEncKeyHelper").deleteEncKeysAndCache(),
              yield o("WAWebCryptoEncryptionSaltHelper").deleteSalt());
          } catch (e) {
            t = !0;
          }
          try {
            yield o("WAWebUserPrefsClearLocalState").clearAllLocalState();
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
        })),
        _.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);
