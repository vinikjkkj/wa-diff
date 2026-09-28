__d(
  "WAWebMaybeSyncBotSupportFields",
  [
    "WALogger",
    "WAWebBotGroupGatingUtils",
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
        i = a.tombstoneOnMissing,
        l = i === void 0 ? !0 : i,
        s = a.ttlMs;
      if (!(!t.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(t))) {
        var c = o("WAWebBotProfileCollection").BotProfileCollection.get(t),
          d =
            c == null
              ? null
              : {
                  isDeleted: c.isDeleted,
                  product: c.product,
                  lastFetchedTimeMs: c.lastFetchedTimeMs,
                };
        o("WAWebBotProfileFreshness").isBotProfileStale(d, Date.now(), s) &&
          (u.has(t) ||
            (u.add(t),
            o("WAWebSyncBotSupportFields")
              .syncBotSupportFields(t, l)
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
    function d(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.ttlMs;
      o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() &&
        e.forEach(function (e) {
          c(e, { ttlMs: r, tombstoneOnMissing: !1 });
        });
    }
    ((l.CHAT_OPEN_REFRESH_TTL_MS = s),
      (l.maybeSyncBotSupportFields = c),
      (l.maybeSyncGroupBotSupportFields = d));
  },
  98,
);
