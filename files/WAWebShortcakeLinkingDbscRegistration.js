__d(
  "WAWebShortcakeLinkingDbscRegistration",
  [
    "WABase64",
    "WACryptoSha256",
    "WAExponentialBackoff",
    "WALogger",
    "WAWebUserPrefsInfoStore",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebDbscRegisterControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "Secure-Session-Registration",
      _ = 200,
      f = 400,
      g = 2;
    function h(t) {
      return y(t).catch(function (t) {
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield v();
          if (t == null) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[shortcake] DBSC registration: no Noise static key",
                  ])),
              )
              .sendLogs("dbsc-registration-noise-key-missing");
            return;
          }
          var n = new TextDecoder().decode(e);
          yield b(n, t);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return o("WAExponentialBackoff").exponentialBackoff(
        {
          minTimeout: _,
          maxTimeout: f,
          retries: g,
          timeoutIncludesTaskDuration: !1,
        },
        (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, a) {
              var i = yield o(
                "WAWebXControllerFetchUtils",
              ).fetchFromXController(
                r("WAXWhatsAppWebDbscRegisterControllerRouteBuilder")
                  .buildUri({})
                  .toString(),
                {
                  method: "POST",
                  additionalParams: {
                    challenge: e,
                    companion_noise_key_hash: t,
                  },
                },
              );
              if (!i.ok) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[shortcake] DBSC registration HTTP ",
                        "",
                      ])),
                    i.status,
                  )
                  .tags("wa-ice", "wa_app_compromise", "shortcake")
                  .sendLogs("dbsc-registration-http-error");
                return;
              }
              if (i.headers.has(p)) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[shortcake] DBSC registration requested after ",
                      " retries",
                    ])),
                  a,
                );
                return;
              }
              if (a >= g) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[shortcake] DBSC registration response header missing after retries",
                      ])),
                  )
                  .tags("wa-ice", "wa_app_compromise", "shortcake")
                  .sendLogs("dbsc-registration-header-missing");
                return;
              }
              return (
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[shortcake] DBSC registration response header missing; retry ",
                      " of ",
                      "",
                    ])),
                  a + 1,
                  g,
                ),
                n(r("err")("DBSC registration response header missing"))
              );
            },
          );
          return function (e, t) {
            return a.apply(this, arguments);
          };
        })(),
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
          return e == null
            ? null
            : o("WABase64").encodeB64UrlSafe(
                yield o("WACryptoSha256").sha256(e.staticKeyPair.pubKey),
              );
        })),
        S.apply(this, arguments)
      );
    }
    l.startDbscRegistration = h;
  },
  98,
);
