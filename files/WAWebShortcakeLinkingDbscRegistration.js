__d(
  "WAWebShortcakeLinkingDbscRegistration",
  [
    "WABase64",
    "WACryptoSha256",
    "WALogger",
    "WAWebUserPrefsInfoStore",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebDbscRegisterControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t) {
      return m(t).catch(function (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[shortcake] DBSC registration failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .tags("wa-ice", "wa_app_compromise", "shortcake")
          .sendLogs("dbsc-registration-failed");
      });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield _();
          if (t == null) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[shortcake] DBSC registration: no Noise static key",
                  ])),
              )
              .sendLogs("dbsc-registration-noise-key-missing");
            return;
          }
          var n = yield o("WAWebXControllerFetchUtils").fetchFromXController(
            r("WAXWhatsAppWebDbscRegisterControllerRouteBuilder")
              .buildUri({})
              .toString(),
            {
              method: "POST",
              additionalParams: {
                challenge: new TextDecoder().decode(e),
                companion_noise_key_hash: t,
              },
            },
          );
          if (!n.ok) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[shortcake] DBSC registration HTTP ",
                    "",
                  ])),
                n.status,
              )
              .tags("wa-ice", "wa_app_compromise", "shortcake")
              .sendLogs("dbsc-registration-http-error");
            return;
          }
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[shortcake] DBSC registration requested",
              ])),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
          return e == null
            ? null
            : o("WABase64").encodeB64UrlSafe(
                yield o("WACryptoSha256").sha256(e.staticKeyPair.pubKey),
              );
        })),
        f.apply(this, arguments)
      );
    }
    l.startDbscRegistration = d;
  },
  98,
);
