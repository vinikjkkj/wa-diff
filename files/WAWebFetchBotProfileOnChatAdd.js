__d(
  "WAWebFetchBotProfileOnChatAdd",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotProfileFetchPause",
    "WAWebBotStaticProfiles",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "WAWebSyncBotSupportFields",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      if (!(!t.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(t)))
        try {
          var n = await o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .get(t.toString());
          if (
            o("WAWebPersistBotProfiles").isStoredBotProfile(n) ||
            o("WAWebBotProfileFetchPause").isBotProfileFetchPaused(
              n == null ? void 0 : n.fetchPauseUntilMs,
              o("WATimeUtils").unixTimeMs(),
            )
          )
            return;
          await o("WAWebSyncBotSupportFields").syncBotSupportFields(t);
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] fetching a new agent profile on chat add failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bot-chat-add-profile-fetch-failed");
        }
    }
    l.fetchBotProfileOnChatAdd = s;
  },
  98,
);
