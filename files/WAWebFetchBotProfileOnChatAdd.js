__d(
  "WAWebFetchBotProfileOnChatAdd",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotProfileFetchPause",
    "WAWebBotProfileFreshness",
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
    async function u(e) {
      if (!e.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(e))
        return "skipped";
      var t = await o("WAWebSchemaBotProfile")
          .getBotProfileTable()
          .get(e.toString()),
        n = o("WATimeUtils").unixTimeMs();
      return o("WAWebBotProfileFetchPause").isBotProfileFetchPaused(
        t == null ? void 0 : t.fetchPauseUntilMs,
        n,
      ) ||
        ((t == null ? void 0 : t.lastFetchedTimeMs) != null &&
          n - t.lastFetchedTimeMs <=
            o("WAWebBotProfileFreshness").BOT_PROFILE_TTL_MS)
        ? "skipped"
        : (await o("WAWebSyncBotSupportFields").syncBotSupportFields(e, {
              tombstoneOnMissing: !1,
            }))
          ? "fetched"
          : "failed";
    }
    ((l.fetchBotProfileOnChatAdd = s), (l.fetchUnresolvedBotProfile = u));
  },
  98,
);
