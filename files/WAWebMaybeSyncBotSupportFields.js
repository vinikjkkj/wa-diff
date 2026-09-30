__d(
  "WAWebMaybeSyncBotSupportFields",
  [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotProfileFreshness",
    "WAWebBotStaticProfiles",
    "WAWebGroupQueryGroupJob",
    "WAWebSyncBotSupportFields",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6e4,
      c = 100,
      d = new Set(),
      m = new Set();
    function p(t, n) {
      var a = n === void 0 ? {} : n,
        i = a.tombstoneOnMissing,
        l = i === void 0 ? !0 : i,
        s = a.ttlMs;
      if (!(!t.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(t))) {
        var u = o("WAWebBotProfileCollection").BotProfileCollection.get(t),
          c =
            u == null
              ? null
              : {
                  isDeleted: u.isDeleted,
                  groupTosRequirements: u.groupTosRequirements,
                  product: u.product,
                  lastFetchedTimeMs: u.lastFetchedTimeMs,
                };
        o("WAWebBotProfileFreshness").isBotProfileStale(c, Date.now(), s) &&
          (d.has(t) ||
            (d.add(t),
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
                d.delete(t);
              })));
      }
    }
    function _(e) {
      e.forEach(function (e) {
        if (!m.has(e)) {
          if (m.size >= c) {
            var t = m.values().next().value;
            t != null && m.delete(t);
          }
          (m.add(e),
            o("WAWebGroupQueryGroupJob")
              .queryGroupJob(e, "out_of_sync_update", {
                updateGroupStateOnError: !1,
              })
              .catch(function (t) {
                (m.delete(e),
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[maybeQueryGroupAgentRosters] query failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("sbp-group-agent-roster-query-error"));
              }));
        }
      });
    }
    function f(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.ttlMs;
      o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() &&
        e.forEach(function (e) {
          p(e, { ttlMs: r, tombstoneOnMissing: !1 });
        });
    }
    ((l.CHAT_OPEN_REFRESH_TTL_MS = u),
      (l.maybeSyncBotSupportFields = p),
      (l.maybeQueryGroupAgentRosters = _),
      (l.maybeSyncGroupBotSupportFields = f));
  },
  98,
);
