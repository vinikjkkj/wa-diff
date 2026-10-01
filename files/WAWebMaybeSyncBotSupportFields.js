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
      m = new Set(),
      p = new Map();
    function _(t, n) {
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
    function f(e) {
      e.forEach(function (e) {
        var t,
          n = e.groupWid,
          r = e.missingAgentWids;
        if (r.length === 0) {
          p.delete(n);
          return;
        }
        if (!m.has(n)) {
          var o = (t = p.get(n)) != null ? t : new Set(),
            a = r.filter(function (e) {
              return !o.has(e);
            });
          a.length !== 0 &&
            (a.forEach(function (e) {
              return o.add(e);
            }),
            g(n, o),
            h(n, function () {
              a.forEach(function (e) {
                return o.delete(e);
              });
            }));
        }
      });
    }
    function g(e, t) {
      if ((p.delete(e), p.set(e, t), p.size > c)) {
        var n = p.keys().next().value;
        n != null && p.delete(n);
      }
    }
    function h(e, t) {
      (m.add(e),
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
            m.delete(e);
          }));
    }
    function y(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.ttlMs;
      o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() &&
        e.forEach(function (e) {
          _(e, { ttlMs: r, tombstoneOnMissing: !1 });
        });
    }
    ((l.CHAT_OPEN_REFRESH_TTL_MS = u),
      (l.maybeSyncBotSupportFields = _),
      (l.maybeQueryGroupAgentRosters = f),
      (l.maybeSyncGroupBotSupportFields = y));
  },
  98,
);
