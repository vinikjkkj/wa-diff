__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
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
      u,
      c = n("$InternalEnum").Mirrored([
        "NewStatuses",
        "NoNewStatuses",
        "FetchFailed",
      ]),
      d = new Map();
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d.get(e);
          if (t != null) return t;
          var n = _(e);
          d.set(e, n);
          try {
            return yield n;
          } finally {
            d.delete(e);
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = o("WAWebNewsletterSyntheticStatusUtils").getFilledStatusCursor(
              t,
            ),
            i = o("WAWebStatusCollection").StatusCollection.get(t),
            l =
              i != null && !i.isSyntheticFromMetadata && i.msgs.length > 0
                ? a
                : null,
            u = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
              r("WAWebNewsletterMetadataCollection") == null ||
                (n = r("WAWebNewsletterMetadataCollection").get(t)) == null
                ? void 0
                : n.membershipType,
            );
          try {
            var d = yield o(
                "WAWebNewsletterGetStatusesJob",
              ).getNewsletterStatuses(t, u, { afterServerId: l }),
              m = d.from,
              p = d.msgs,
              _ = d.reactionCounts,
              f = d.viewCounts;
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
              return b(m, l != null, t);
            var h = l == null;
            yield g({
              from: m,
              msgs: p,
              viewCounts: f,
              reactionCounts: _,
              isFullFetch: h,
            });
            var y = o(
              "WAWebNewsletterStatusProcessingUtils",
            ).computeMaxServerId(p);
            return (
              y > 0 &&
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(t, y),
              c.NewStatuses
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
              c.FetchFailed
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.isFullFetch,
            r = e.msgs,
            a = e.reactionCounts,
            i = e.viewCounts;
          yield o(
            "WAWebNewsletterStatusProcessingUtils",
          ).addAndPersistStatusMessages(t, r);
          var l = r.map(function (e) {
              return e.id;
            }),
            s = o(
              "WAWebNewsletterStatusProcessingUtils",
            ).prepareReactionsForPersist(l, a, o("WATimeUtils").unixTime()),
            c = s.reactionIdsToRemove,
            d = s.reactions;
          if (
            (i.size > 0
              ? (yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).persistNewsletterStatusInteractions({
                  ids: l,
                  reactionIdsToRemove: c,
                  reactions: d,
                  timestamp: Date.now(),
                  viewCounts: i,
                }),
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).updateStatusViewCounts(t, r, i),
                yield o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
                  ids: l,
                  reactionIdsToRemove: c,
                  reactions: d,
                }))
              : d.length > 0 &&
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] reactions present without view counts \u2014 skipping persist (next admin fetch will resync)",
                      ])),
                  )
                  .sendLogs("newsletter-status-reactions-no-viewcounts"),
            n)
          ) {
            var m = o("WAWebStatusCollection").StatusCollection.get(t);
            m != null && (yield y(m));
          }
          o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
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
          c.NoNewStatuses
        );
      }
      return a != null && !a.isSyntheticFromMetadata && a.totalCount > 0
        ? c.NewStatuses
        : c.NoNewStatuses;
    }
    ((l.FetchResult = c), (l.fetchNewsletterStatuses = m));
  },
  98,
);
