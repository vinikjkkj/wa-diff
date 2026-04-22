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
    "WAWebSyncNewsletterStatusMetadataAction",
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
      p = 100,
      _ = 100,
      f = 5;
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          if (!(n <= a)) {
            var l = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
                r("WAWebNewsletterMetadataCollection") == null ||
                  (i = r("WAWebNewsletterMetadataCollection").get(t)) == null
                  ? void 0
                  : i.membershipType,
              ),
              s = yield o(
                "WAWebNewsletterGetStatusesJob",
              ).getNewsletterStatuses(t, l, { beforeServerId: n }),
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
                  ).persistNewsletterViewCounts({
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
              if (!(m >= n)) return g(t, m, a);
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                );
              } catch (t) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status][gapfill] metadata refresh failed for ",
                      ", using cached",
                    ])),
                  e,
                );
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
                  : p - 1;
              if (!(c >= l)) {
                var d = Math.max(l - _, c);
                try {
                  (yield g(e, l + 1, d),
                    o(
                      "WAWebNewsletterStatusProcessingUtils",
                    ).syncFilledStatusCursor(e, l));
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
          }
        })),
        C.apply(this, arguments)
      );
    }
    var b = new Set();
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                : p - 1;
            if (!(t <= a)) {
              if (t === a + 1) {
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(e, t);
                return;
              }
              if (!b.has(e)) {
                b.add(e);
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
                    yield y(e, t));
                } finally {
                  b.delete(e);
                }
              }
            }
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (
            o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
          ) {
            var t =
              (e =
                r("WAWebNewsletterMetadataCollection") == null
                  ? void 0
                  : r("WAWebNewsletterMetadataCollection").filter(function (e) {
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
                    })) != null
                ? e
                : [];
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status][gapfill] bulk backward fill: ",
                  " channels",
                ])),
              String(t.length),
            ),
              yield o("WAWebRunInBatches").runInBatches(
                t,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      yield (m || (m = n("Promise"))).allSettled(
                        e.map(function (e) {
                          var t,
                            n = o("WAJids").toNewsletterJid(e.id.toString()),
                            r =
                              (t = e.statusMetadata) == null
                                ? void 0
                                : t.lastStatusServerId;
                          return y(n, r);
                        }),
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                { batchSize: f },
              ));
          }
        })),
        L.apply(this, arguments)
      );
    }
    ((l.fillNewsletterStatusGap = y),
      (l.fillGapFromIncomingStanza = v),
      (l.fillSubscribedStatusGaps = R));
  },
  98,
);
