__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebAck",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGetStatusesJob",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterStatusProcessingUtils",
    "WAWebNewsletterSyntheticStatusUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebStatusCollection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum").Mirrored([
        "NewStatuses",
        "NoNewStatuses",
        "FetchFailed",
      ]),
      c = new Map();
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = c.get(e);
          if (t != null) return t;
          var n = p(e);
          c.set(e, n);
          try {
            return yield n;
          } finally {
            c.delete(e);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = o("WAWebNewsletterSyntheticStatusUtils").getFilledStatusCursor(
              t,
            ),
            i = o("WAWebStatusCollection").StatusCollection.get(t),
            l =
              i != null && !i.isSyntheticFromMetadata && i.msgs.length > 0
                ? a
                : null,
            c = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
              r("WAWebNewsletterMetadataCollection") == null ||
                (n = r("WAWebNewsletterMetadataCollection").get(t)) == null
                ? void 0
                : n.membershipType,
            );
          try {
            var d = yield o(
                "WAWebNewsletterGetStatusesJob",
              ).getNewsletterStatuses(t, c, { afterServerId: l }),
              m = d.from,
              p = d.msgs,
              _ = d.viewCounts;
            if (
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] fetched ",
                    " statuses for ",
                    "",
                  ])),
                String(p.length),
                t,
              ),
              p.length === 0)
            )
              return C(m, l != null, t);
            var g = l == null;
            yield f(m, p, _, g);
            var h = o(
              "WAWebNewsletterStatusProcessingUtils",
            ).computeMaxServerId(p);
            return (
              h > 0 &&
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(t, h),
              u.NewStatuses
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to fetch statuses for ",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-fetch-failed"),
              u.FetchFailed
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              (yield o(
                "WAWebNewsletterStatusProcessingUtils",
              ).addAndPersistStatusMessages(e, t),
              n.size > 0 &&
                (yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).persistNewsletterViewCounts({
                  ids: t.map(function (e) {
                    return e.id;
                  }),
                  timestamp: Date.now(),
                  viewCounts: n,
                }),
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).updateStatusViewCounts(e, t, n)),
              r)
            ) {
              var a = o("WAWebStatusCollection").StatusCollection.get(e);
              a != null && (yield h(a));
            }
            o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(
              e,
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          e.msgs.forEach(function (e) {
            return t.push(e.id.toString());
          });
          var n = yield o(
            "WAWebNewsletterUpdateMsgsRecordsJob",
          ).getNewsletterMsgAckValues(t);
          e.msgs.forEach(function (e, t) {
            var r = n[t];
            r != null && r >= o("WAWebAck").ACK.READ && e.set({ ack: r });
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      var a = o("WAWebStatusCollection").StatusCollection.get(e);
      if (!t) {
        var i;
        a != null && o("WAWebStatusCollection").StatusCollection.remove(a);
        var l =
            r("WAWebNewsletterMetadataCollection") == null
              ? void 0
              : r("WAWebNewsletterMetadataCollection").get(n),
          s =
            l == null || (i = l.statusMetadata) == null
              ? void 0
              : i.lastStatusServerId;
        return (
          s != null &&
            o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(
              n,
              s,
            ),
          u.NoNewStatuses
        );
      }
      return a != null && !a.isSyntheticFromMetadata && a.totalCount > 0
        ? u.NewStatuses
        : u.NoNewStatuses;
    }
    ((l.FetchResult = u), (l.fetchNewsletterStatuses = d));
  },
  98,
);
