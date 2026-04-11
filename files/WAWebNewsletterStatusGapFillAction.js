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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 100,
      p = 100,
      _ = 5;
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
              if (!(m >= n)) return f(t, m, a);
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a;
          if (
            o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
          ) {
            var i =
              t != null
                ? t
                : r("WAWebNewsletterMetadataCollection") == null ||
                    (n = r("WAWebNewsletterMetadataCollection").get(e)) ==
                      null ||
                    (n = n.statusMetadata) == null
                  ? void 0
                  : n.lastStatusServerId;
            if (i != null) {
              var l =
                (a = o(
                  "WAWebNewsletterSyntheticStatusUtils",
                ).getFilledStatusCursor(e)) != null
                  ? a
                  : m - 1;
              if (!(l >= i)) {
                var u = Math.max(i - p, l);
                try {
                  (yield f(e, i + 1, u),
                    o(
                      "WAWebNewsletterStatusProcessingUtils",
                    ).syncFilledStatusCursor(e, i));
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
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
        y.apply(this, arguments)
      );
    }
    var C = new Set();
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                : m - 1;
            if (!(t <= a)) {
              if (t === a + 1) {
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(e, t);
                return;
              }
              if (!C.has(e)) {
                C.add(e);
                try {
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status][gapfill] push gap: ",
                        " incoming=",
                        " cursor=",
                        "",
                      ])),
                    e,
                    String(t),
                    String(a),
                  ),
                    yield h(e, t));
                } finally {
                  C.delete(e);
                }
              }
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                      yield (d || (d = n("Promise"))).allSettled(
                        e.map(function (e) {
                          var t,
                            n = o("WAJids").toNewsletterJid(e.id.toString()),
                            r =
                              (t = e.statusMetadata) == null
                                ? void 0
                                : t.lastStatusServerId;
                          return h(n, r);
                        }),
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                { batchSize: _ },
              ));
          }
        })),
        R.apply(this, arguments)
      );
    }
    ((l.fillNewsletterStatusGap = h),
      (l.fillGapFromIncomingStanza = b),
      (l.fillSubscribedStatusGaps = S));
  },
  98,
);
