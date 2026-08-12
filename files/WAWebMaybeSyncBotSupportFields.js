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
    var e,
      s = 6e4,
      u = new Set();
    function c(t, n) {
      var a = n === void 0 ? {} : n,
        i = a.ttlMs;
      if (
        !(
          !o("WAWebBotBaseGating").isStandardBotProfileEnabled() ||
          !t.isFbidBot() ||
          o("WAWebBotStaticProfiles").isStaticProfile(t)
        )
      ) {
        var l = o("WAWebBotProfileCollection").BotProfileCollection.get(t),
          s =
            l == null
              ? null
              : {
                  isDeleted: l.isDeleted,
                  product: l.product,
                  lastFetchedTimeMs: l.lastFetchedTimeMs,
                };
        o("WAWebBotProfileFreshness").isBotProfileStale(s, Date.now(), i) &&
          (u.has(t) ||
            (u.add(t),
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
              })
              .finally(function () {
                u.delete(t);
              })));
      }
    }
    ((l.CHAT_OPEN_REFRESH_TTL_MS = s), (l.maybeSyncBotSupportFields = c));
  },
  98,
);
