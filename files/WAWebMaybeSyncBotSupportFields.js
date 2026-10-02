__d(
  "WAWebMaybeSyncBotSupportFields",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotProfileFetchPause",
    "WAWebBotProfileFreshness",
    "WAWebBotStaticProfiles",
    "WAWebGroupQueryGroupJob",
    "WAWebPersistBotProfiles",
    "WAWebSyncBotSupportFields",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 6e4,
      d = 100,
      m = new Set(),
      p = new Set(),
      _ = new Map();
    function f(t, n) {
      var a = n === void 0 ? {} : n,
        i = a.sourceGroupWid,
        l = a.tombstoneOnMissing,
        s = l === void 0 ? !0 : l,
        u = a.ttlMs;
      if (!(!t.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(t))) {
        var c = o("WAWebBotProfileCollection").BotProfileCollection.get(t),
          d =
            c == null
              ? null
              : {
                  isDeleted: c.isDeleted,
                  groupTosRequirements: c.groupTosRequirements,
                  product: c.product,
                  lastFetchedTimeMs: c.lastFetchedTimeMs,
                };
        o("WAWebBotProfileFreshness").isBotProfileStale(
          d,
          o("WATimeUtils").unixTimeMs(),
          u,
        ) &&
          (m.has(t) ||
            (m.add(t),
            o("WAWebSyncBotSupportFields")
              .syncBotSupportFields(
                t,
                s,
                i == null ? null : o("WAWebWidToJid").widToGroupJid(i),
              )
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
                m.delete(t);
              })));
      }
    }
    function g(e) {
      e.forEach(function (e) {
        var t,
          n = e.groupWid,
          r = e.missingAgentWids;
        if (r.length === 0) {
          _.delete(n);
          return;
        }
        if (!p.has(n)) {
          var o = (t = _.get(n)) != null ? t : new Set(),
            a = r.filter(function (e) {
              return !o.has(e);
            });
          a.length !== 0 &&
            (a.forEach(function (e) {
              return o.add(e);
            }),
            h(n, o),
            y(n, function () {
              a.forEach(function (e) {
                return o.delete(e);
              });
            }));
        }
      });
    }
    function h(e, t) {
      if ((_.delete(e), _.set(e, t), _.size > d)) {
        var n = _.keys().next().value;
        n != null && _.delete(n);
      }
    }
    function y(e, t) {
      (p.add(e),
        o("WAWebGroupQueryGroupJob")
          .queryGroupJob(e, "out_of_sync_update", {
            preserveLocalMembership: !0,
            updateGroupStateOnError: !1,
          })
          .then(function (e) {
            e.status !== "success" && t();
          })
          .catch(function (e) {
            (t(),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[maybeQueryGroupAgentRosters] query failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sbp-group-agent-roster-query-error"));
          })
          .finally(function () {
            p.delete(e);
          }));
    }
    function C(e, t) {
      var n = t === void 0 ? {} : t,
        a = n.endFetchPause,
        i = a === void 0 ? !1 : a,
        l = n.sourceGroupWid,
        s = n.ttlMs;
      if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
        var c = o("WATimeUtils").unixTimeMs();
        e.forEach(function (e) {
          var t = o("WAWebBotProfileCollection").BotProfileCollection.get(e),
            n = t == null ? void 0 : t.fetchPauseUntilMs,
            a = n != null,
            d = o("WAWebBotProfileFetchPause").isBotProfileFetchPaused(n, c);
          (d && !i) ||
            (d &&
              t != null &&
              (t.set({ fetchPauseUntilMs: null }),
              o("WAWebPersistBotProfiles")
                .mergeBotSupportFields(e, { fetchPauseUntilMs: null })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[maybeSyncGroupBotSupportFields] failed to end fetch pause",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("sbp-end-fetch-pause-error");
                })),
            f(e, { sourceGroupWid: l, ttlMs: a ? 0 : s }));
        });
      }
    }
    ((l.CHAT_OPEN_REFRESH_TTL_MS = c),
      (l.maybeSyncBotSupportFields = f),
      (l.maybeQueryGroupAgentRosters = g),
      (l.maybeSyncGroupBotSupportFields = C));
  },
  98,
);
