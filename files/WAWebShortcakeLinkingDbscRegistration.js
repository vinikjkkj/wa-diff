__d(
  "WAWebShortcakeLinkingDbscRegistration",
  [
    "WALogger",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebDbscRegisterControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      d(t).catch(function (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[shortcake] DBSC registration failed: ",
              "",
            ])),
          r("getErrorSafe")(t).message,
        );
      });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebXControllerFetchUtils").fetchFromXController(
            r("WAXWhatsAppWebDbscRegisterControllerRouteBuilder").getPath(),
            {
              method: "POST",
              additionalParams: { challenge: new TextDecoder().decode(e) },
            },
          );
          if (!t.ok) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[shortcake] DBSC registration HTTP ",
                  "",
                ])),
              t.status,
            );
            return;
          }
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[shortcake] DBSC registration requested",
              ])),
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.startDbscRegistration = c;
  },
  98,
);
