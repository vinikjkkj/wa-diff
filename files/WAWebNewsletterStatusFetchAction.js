__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageDelete",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterGetStatusesJob",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterStatusProcessingUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebStatusCollection",
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
    async function m(e) {
      var t = d.get(e);
      if (t != null) return t;
      var n = p(e);
      d.set(e, n);
      try {
        return await n;
      } finally {
        d.delete(e);
      }
    }
    async function p(t) {
      var n,
        a = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
          r("WAWebNewsletterMetadataCollection") == null ||
            (n = r("WAWebNewsletterMetadataCollection").get(t)) == null
            ? void 0
            : n.membershipType,
        );
      try {
        var i = await o("WAWebNewsletterGetStatusesJob").getNewsletterStatuses(
            t,
            a,
            {},
          ),
          l = i.from,
          u = i.msgs,
          d = i.reactionCounts,
          m = i.revokedServerIds,
          p = i.viewCounts;
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][status] fetched ",
                " statuses for ",
                "",
              ])),
            String(u.length),
            t,
          ),
          await _(l, m != null ? m : []),
          u.length === 0)
        )
          return h(l, t);
        await f({
          from: l,
          msgs: u,
          viewCounts: p,
          reactionCounts: d,
          isFullFetch: !0,
        });
        var g = o("WAWebNewsletterStatusProcessingUtils").computeMaxServerId(u);
        return (
          g > 0 &&
            o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(
              t,
              g,
            ),
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
    }
    async function _(e, t) {
      if (t.length !== 0) {
        var n = o("WAWebStatusCollection").StatusCollection.get(e);
        if (n != null) {
          var r = new Set(t),
            a = n.msgs.filter(function (e) {
              return e.serverId != null && r.has(e.serverId);
            });
          a.length !== 0 &&
            (n.revokeMsgs(
              a.map(function (e) {
                return e.id.toString();
              }),
            ),
            await o("WAWebDBMessageDelete").removeStatusMessage(a));
        }
      }
    }
    async function f(e) {
      var t = e.from,
        n = e.isFullFetch,
        r = e.msgs,
        a = e.reactionCounts,
        i = e.viewCounts;
      await o(
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
          ? (await o(
              "WAWebNewsletterBackendAddOnsUtils",
            ).persistNewsletterStatusInteractions({
              ids: l,
              reactionIdsToRemove: c,
              reactions: d,
              timestamp: Date.now(),
              viewCounts: i,
            }),
            o("WAWebNewsletterStatusProcessingUtils").updateStatusViewCounts(
              t,
              r,
              i,
            ),
            await o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
              ids: l,
              reactionIdsToRemove: c,
              reactions: d,
            }))
          : d.length > 0 &&
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] reactions w/o view counts, skip persist",
                  ])),
              )
              .sendLogs("newsletter-status-reactions-no-viewcounts"),
        n)
      ) {
        var m = o("WAWebStatusCollection").StatusCollection.get(t);
        m != null && (await g(m));
      }
      o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
    }
    async function g(e) {
      var t = [];
      e.msgs.forEach(function (e) {
        return t.push(e.id.toString());
      });
      var n = await o(
        "WAWebNewsletterUpdateMsgsRecordsJob",
      ).getNewsletterMsgAckValues(t);
      e.msgs.forEach(function (e, t) {
        var r = n[t];
        r != null && r >= o("WAWebAck").ACK.READ && e.set({ ack: r });
      });
    }
    function h(e, t) {
      var n,
        a = o("WAWebStatusCollection").StatusCollection.get(e);
      a != null && o("WAWebStatusCollection").StatusCollection.remove(a);
      var i =
          r("WAWebNewsletterMetadataCollection") == null
            ? void 0
            : r("WAWebNewsletterMetadataCollection").get(t),
        l =
          i == null || (n = i.statusMetadata) == null
            ? void 0
            : n.lastStatusServerId;
      return (
        l != null &&
          o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(
            t,
            l,
          ),
        c.NoNewStatuses
      );
    }
    ((l.FetchResult = c), (l.fetchNewsletterStatuses = m));
  },
  98,
);
