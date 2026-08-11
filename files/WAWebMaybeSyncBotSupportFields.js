__d(
  "WAWebMaybeSyncBotSupportFields",
  [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotProfileCollection",
    "WAWebBotProfileFreshness",
    "WAWebBotStaticProfiles",
    "WAWebSyncBotSupportFields",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (
        !(
          !o("WAWebBotBaseGating").isStandardBotProfileEnabled() ||
          !t.isFbidBot() ||
          o("WAWebBotStaticProfiles").isStaticProfile(t)
        )
      ) {
        var n = o("WAWebBotProfileCollection").BotProfileCollection.get(t),
          a =
            n == null
              ? null
              : {
                  isDeleted: n.isDeleted,
                  product: n.product,
                  lastFetchedTimeMs: n.lastFetchedTimeMs,
                };
        o("WAWebBotProfileFreshness").isBotProfileStale(a, Date.now()) &&
          o("WAWebSyncBotSupportFields")
            .syncBotSupportFields(t)
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[maybeSyncBotSupportFields] sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sbp-maybe-sync-error");
            });
      }
    }
    l.maybeSyncBotSupportFields = s;
  },
  98,
);
