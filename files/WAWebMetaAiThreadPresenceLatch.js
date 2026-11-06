__d(
  "WAWebMetaAiThreadPresenceLatch",
  [
    "WALogger",
    "WAWebBotSupportGating",
    "WAWebEventEmitter",
    "WAWebUserPrefsBot",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WAWebEventEmitter"))();
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.some(o("WAWebBotSupportGating").isMetaAiThreadProfile))
            try {
              (yield o("WAWebUserPrefsBot").markHasEverHadMetaAiThread()) &&
                s.trigger("change");
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] Meta AI thread presence latch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("meta-ai-thread-presence-latch-failed");
            }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.metaAiThreadPresenceLatchEmitter = s),
      (l.latchMetaAiThreadPresence = u));
  },
  98,
);
