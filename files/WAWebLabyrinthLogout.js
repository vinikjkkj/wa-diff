__d(
  "WAWebLabyrinthLogout",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "asyncToGeneratorRuntime",
    "cr:18988",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e4,
      c = r("JSResourceForInteraction")("WAWebLabyrinthDebugStorage").__setRef(
        "WAWebLabyrinthLogout",
      );
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          p();
          try {
            var e = yield o("WAPromiseTimeout").promiseTimeout(c.load(), u),
              t = e.destroy;
            yield t();
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "destroyStorage: loading Labyrinth debug storage failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("labyrinth-debug-storage-load-failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      try {
        var t;
        (t = _()) == null || t.stopLabyrinthCompanionOnboarding();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-companion-onboarding] stop failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("labyrinth-companion-onboarding-stop-failed");
      }
    }
    function _() {
      return n("cr:18988");
    }
    ((l.clearLabyrinthAtLogout = d),
      (l.stopLabyrinthCompanionOnboardingIfEnabled = p));
  },
  98,
);
