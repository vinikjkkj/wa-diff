__d(
  "WAWebFetchBotProfileOnChatAdd",
  [
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebSchemaBotProfile",
    "WAWebSyncBotSupportFields",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !(!t.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(t))
          )
            try {
              if (
                (yield o("WAWebSchemaBotProfile")
                  .getBotProfileTable()
                  .get(t.toString())) != null
              )
                return;
              yield o("WAWebSyncBotSupportFields").syncBotSupportFields(t);
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
        })),
        u.apply(this, arguments)
      );
    }
    l.fetchBotProfileOnChatAdd = s;
  },
  98,
);
