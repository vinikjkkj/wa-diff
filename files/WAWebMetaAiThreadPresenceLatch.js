__d(
  "WAWebMetaAiThreadPresenceLatch",
  [
    "WALogger",
    "WAWebBotSupportGating",
    "WAWebEventEmitter",
    "WAWebUserPrefsBot",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WAWebEventEmitter"))();
    async function u(t) {
      if (t.some(o("WAWebBotSupportGating").isMetaAiThreadProfile))
        try {
          (await o("WAWebUserPrefsBot").markHasEverHadMetaAiThread()) &&
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
    }
    ((l.metaAiThreadPresenceLatchEmitter = s),
      (l.latchMetaAiThreadPresence = u));
  },
  98,
);
