__d(
  "WAWebNewsletterStatusGapFillAction",
  [
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
    "WAWebUserPrefsGeneral",
    "WAWebWidFactory",
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
      _ = 5,
      f = 14400 * 1e3;
    async function g(t, n, a) {
      var i;
      if (!(n <= a + 1)) {
        var l = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
            r("WAWebNewsletterMetadataCollection") == null ||
              (i = r("WAWebNewsletterMetadataCollection").get(t)) == null
              ? void 0
              : i.membershipType,
          ),
          s = await o("WAWebNewsletterGetStatusesJob").getNewsletterStatuses(
            t,
            l,
            { beforeServerId: n, count: n - a - 1 },
          ),
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
          (await o(
            "WAWebNewsletterStatusProcessingUtils",
          ).addAndPersistStatusMessages(u, c),
            d.size > 0 &&
              (await o(
                "WAWebNewsletterBackendAddOnsUtils",
              ).persistNewsletterStatusInteractions({
                ids: c.map(function (e) {
                  return e.id;
                }),
                timestamp: Date.now(),
                viewCounts: d,
              }),
              o("WAWebNewsletterStatusProcessingUtils").updateStatusViewCounts(
                u,
                c,
                d,
              )),
            o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(
              u,
            ));
          var m = c.reduce(function (e, t) {
            var n;
            return Math.min(e, (n = t.serverId) != null ? n : 1 / 0);
          }, 1 / 0);
          if (!(m >= n)) return g(t, m, a);
        }
      }
    }
    async function h(e, t, n) {
      var a, i;
      if (
        (n === void 0 && (n = !1),
        !!o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled())
      ) {
        if (n)
          try {
            await o(
              "WAWebSyncNewsletterStatusMetadataAction",
            ).syncNewsletterStatusMetadata(
              e,
              o("WAWebWidFactory").createWid(e),
            );
          } catch (t) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status][gapfill] meta refresh failed ",
                  "",
                ])),
              e,
            );
          }
        var l =
          t != null
            ? t
            : r("WAWebNewsletterMetadataCollection") == null ||
                (a = r("WAWebNewsletterMetadataCollection").get(e)) == null ||
                (a = a.statusMetadata) == null
              ? void 0
              : a.lastStatusServerId;
        if (l != null) {
          var c =
            (i = o("WAWebNewsletterSyntheticStatusUtils").getFilledStatusCursor(
              e,
            )) != null
              ? i
              : p - 1;
          if (!(c >= l))
            try {
              (await g(e, l + 1, c),
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
    var y = new Set();
    async function C(e, t, n) {
      var r;
      if (o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
        o("WAWebNewsletterStatusProcessingUtils").syncStatusMetadata(e, t, n);
        var a =
          (r = o("WAWebNewsletterSyntheticStatusUtils").getFilledStatusCursor(
            e,
          )) != null
            ? r
            : p - 1;
        if (!(t <= a)) {
          if (t === a + 1) {
            o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(
              e,
              t,
            );
            return;
          }
          if (!y.has(e)) {
            y.add(e);
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
                await h(e, t));
            } finally {
              y.delete(e);
            }
          }
        }
      }
    }
    async function b() {
      var e;
      if (o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
        var t = o(
          "WAWebUserPrefsGeneral",
        ).getLastNewsletterStatusBackfillTimestamp();
        if (t != null && Date.now() - t < f) {
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
        var n =
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
              : [],
          a = n.filter(function (e) {
            var t,
              n,
              r =
                (t = e.statusMetadata) == null ? void 0 : t.lastStatusServerId;
            if (r == null) return !1;
            var a = o("WAJids").toNewsletterJid(e.id.toString()),
              i =
                (n = o(
                  "WAWebNewsletterSyntheticStatusUtils",
                ).getFilledStatusCursor(a)) != null
                  ? n
                  : p - 1;
            return i < r;
          });
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter][status][gapfill] bulk fill: ",
              "/",
              " subscribed",
            ])),
          String(a.length),
          String(n.length),
        ),
          await o("WAWebRunInBatches").runInBatches(
            a,
            async function (e) {
              await Promise.allSettled(
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
            { batchSize: _ },
          ),
          o(
            "WAWebUserPrefsGeneral",
          ).setLastNewsletterStatusBackfillTimestamp());
      }
    }
    ((l.fillNewsletterStatusGap = h),
      (l.fillGapFromIncomingStanza = C),
      (l.fillSubscribedStatusGaps = b));
  },
  98,
);
