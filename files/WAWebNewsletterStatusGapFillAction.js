__d(
  "WAWebNewsletterStatusGapFillAction",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetStatusesJob",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterStatusProcessingUtils",
    "WAWebNewsletterSyntheticStatusUtils",
    "WAWebRunInBatches",
    "WAWebStatusCollection",
    "WAWebSyncNewsletterStatusMetadataAction",
    "WAWebUserPrefsGeneral",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 100,
      f = 5,
      g = 14400 * 1e3;
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          if (!(n <= a + 1)) {
            var l = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
                r("WAWebNewsletterMetadataCollection") == null ||
                  (i = r("WAWebNewsletterMetadataCollection").get(t)) == null
                  ? void 0
                  : i.membershipType,
              ),
              s = yield o(
                "WAWebNewsletterGetStatusesJob",
              ).getNewsletterStatuses(t, l, {
                beforeServerId: n,
                count: n - a - 1,
              }),
              u = s.from,
              c = s.msgs,
              d = s.viewCounts;
            if (
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status][gapfill] fetched ",
                    " before ",
                    " for ",
                    "",
                  ])),
                String(c.length),
                String(n),
                t,
              ),
              c.length !== 0)
            ) {
              (yield o(
                "WAWebNewsletterStatusProcessingUtils",
              ).addAndPersistStatusMessages(u, c),
                d.size > 0 &&
                  (yield o(
                    "WAWebNewsletterBackendAddOnsUtils",
                  ).persistNewsletterStatusInteractions({
                    ids: c.map(function (e) {
                      return e.id;
                    }),
                    timestamp: Date.now(),
                    viewCounts: d,
                  }),
                  o(
                    "WAWebNewsletterStatusProcessingUtils",
                  ).updateStatusViewCounts(u, c, d)),
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).updateStatusUnreadCount(u));
              var m = c.reduce(function (e, t) {
                var n;
                return Math.min(e, (n = t.serverId) != null ? n : 1 / 0);
              }, 1 / 0);
              if (!(m >= n)) return h(t, m, a);
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a, i;
          if (
            (n === void 0 && (n = !1),
            !!o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterStatusReceiverEnabled())
          ) {
            if (n)
              try {
                yield o(
                  "WAWebSyncNewsletterStatusMetadataAction",
                ).syncNewsletterStatusMetadata(
                  e,
                  o("WAWebWidFactory").createWid(e),
                  !1,
                );
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status][gapfill] meta refresh failed ",
                        "",
                      ])),
                    e,
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("newsletter", "status")
                  .sendLogs("newsletter-status-gapfill-meta-refresh-failed");
              }
            var l =
              t != null
                ? t
                : r("WAWebNewsletterMetadataCollection") == null ||
                    (a = r("WAWebNewsletterMetadataCollection").get(e)) ==
                      null ||
                    (a = a.statusMetadata) == null
                  ? void 0
                  : a.lastStatusServerId;
            if (l != null) {
              var c =
                (i = o(
                  "WAWebNewsletterSyntheticStatusUtils",
                ).getFilledStatusCursor(e)) != null
                  ? i
                  : _ - 1;
              if (!(c >= l))
                try {
                  (yield h(e, l + 1, c),
                    o(
                      "WAWebNewsletterStatusProcessingUtils",
                    ).syncFilledStatusCursor(e, l));
                  var d = o("WAWebStatusCollection").StatusCollection.get(
                    o("WAWebWidFactory").createWid(e),
                  );
                  (d == null ? void 0 : d.isSyntheticFromMetadata) === !0 &&
                    o("WAWebStatusCollection").StatusCollection.remove(d);
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter][status][gapfill] backward fill failed for ",
                          "",
                        ])),
                      e,
                    )
                    .catching(r("getErrorSafe")(t))
                    .tags("newsletter", "status")
                    .sendLogs("newsletter-status-gapfill-failed");
                }
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    var v = new Set();
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
          ) {
            o("WAWebNewsletterStatusProcessingUtils").syncStatusMetadata(
              e,
              t,
              n,
            );
            var a =
              (r = o(
                "WAWebNewsletterSyntheticStatusUtils",
              ).getFilledStatusCursor(e)) != null
                ? r
                : _ - 1;
            if (!(t <= a)) {
              if (t === a + 1) {
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(e, t);
                return;
              }
              if (!v.has(e)) {
                v.add(e);
                try {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status][gapfill] push gap: ",
                        " incoming=",
                        " cursor=",
                        "",
                      ])),
                    e,
                    String(t),
                    String(a),
                  ),
                    yield C(e, t));
                } finally {
                  v.delete(e);
                }
              }
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (
            o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
          ) {
            var t = o(
              "WAWebUserPrefsGeneral",
            ).getLastNewsletterStatusBackfillTimestamp();
            if (t != null && Date.now() - t < g) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status][gapfill] bulk throttled ",
                    "ms ago",
                  ])),
                String(Date.now() - t),
              );
              return;
            }
            var a =
                (e =
                  r("WAWebNewsletterMetadataCollection") == null
                    ? void 0
                    : r("WAWebNewsletterMetadataCollection").filter(
                        function (e) {
                          var t;
                          return (
                            e.isSubscribedOrOwned &&
                            !o(
                              "WAWebNewsletterSyntheticStatusUtils",
                            ).isNewsletterStatusExpired(
                              (t = e.statusMetadata) == null
                                ? void 0
                                : t.lastStatusSentTime,
                            )
                          );
                        },
                      )) != null
                  ? e
                  : [],
              i = a.filter(function (e) {
                var t,
                  n,
                  r =
                    (t = e.statusMetadata) == null
                      ? void 0
                      : t.lastStatusServerId;
                if (r == null) return !1;
                var a = o("WAJids").toNewsletterJid(e.id.toString()),
                  i =
                    (n = o(
                      "WAWebNewsletterSyntheticStatusUtils",
                    ).getFilledStatusCursor(a)) != null
                      ? n
                      : _ - 1;
                return i < r;
              });
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status][gapfill] bulk fill: ",
                  "/",
                  " subscribed",
                ])),
              String(i.length),
              String(a.length),
            ),
              yield o("WAWebRunInBatches").runInBatches(
                i,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      yield (p || (p = n("Promise"))).allSettled(
                        e.map(function (e) {
                          var t,
                            n = o("WAJids").toNewsletterJid(e.id.toString()),
                            r =
                              (t = e.statusMetadata) == null
                                ? void 0
                                : t.lastStatusServerId;
                          return C(n, r);
                        }),
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                { batchSize: f },
              ),
              o(
                "WAWebUserPrefsGeneral",
              ).setLastNewsletterStatusBackfillTimestamp());
          }
        })),
        E.apply(this, arguments)
      );
    }
    ((l.fillNewsletterStatusGap = C),
      (l.fillGapFromIncomingStanza = S),
      (l.fillSubscribedStatusGaps = L));
  },
  98,
);
