__d(
  "WAWebLabyrinthLogout",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "cr:19085",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e4,
      c = r("JSResourceForInteraction")("WAWebLabyrinthDebugStorage").__setRef(
        "WAWebLabyrinthLogout",
      );
    async function d() {
      m();
      try {
        var t = await o("WAPromiseTimeout").promiseTimeout(c.load(), u),
          n = t.destroy;
        await n();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "destroyStorage: loading Labyrinth debug storage failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("labyrinth-debug-storage-load-failed");
      }
    }
    function m() {
      try {
        var e;
        (e = p()) == null || e.stopLabyrinthCompanionOnboarding();
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-companion-onboarding] stop failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("labyrinth-companion-onboarding-stop-failed");
      }
    }
    function p() {
      return n("cr:19085");
    }
    ((l.clearLabyrinthAtLogout = d),
      (l.stopLabyrinthCompanionOnboardingIfEnabled = m));
  },
  98,
);
