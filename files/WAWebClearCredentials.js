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
    "WAWebWamLabelSyncTrackingReporter",
    "asyncToGeneratorRuntime",
    "cr:18917",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t =
            n("cr:18917") == null
              ? void 0
              : n("cr:18917").endCanonicalAuthSession();
          t != null && (yield t);
          var a = !1;
          try {
            o("WAWebUserPrefsGeneral").setBrowserId();
          } catch (t) {
            ((a = !0),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "ws2:clearState error",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
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
            o("WAWebUserPrefsMeUser").setMePn();
          } catch (e) {
            ((a = !0),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "ws2:setMePn error",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("logout"));
          }
          try {
            yield o("WAWebUserPrefsMultiDevice").clearRegistrationInfo();
          } catch (e) {
            ((a = !0),
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
            ((a = !0),
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
            a = !0;
          }
          try {
            o(
              "WAWebWamLabelSyncTrackingReporter",
            ).resetLabelSyncTrackingState();
          } catch (e) {
            ((a = !0),
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "ws2:resetLabelSyncTrackingState error",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("logout"));
          }
          o("WAWebLocalStorageClearOnLogout").clearLocalStorageKeysOnLogout();
          try {
            yield o("WAWebUserPrefsClearLocalState").clearAllLocalState();
          } catch (e) {
            ((a = !0),
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "ws2:clearAllLocalState error",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("logout"));
          }
          return a;
        })),
        f.apply(this, arguments)
      );
    }
    l.default = _;
  },
  98,
);
