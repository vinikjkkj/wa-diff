__d(
  "WAWebNewsletterStatusProcessingUtils",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebJidToWid",
    "WAWebMsgCollection",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStatusReactionTaps",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebStatusCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      (o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
        id: e,
        lastFilledStatusServerId: t,
      }),
        r("WAWebNewsletterMetadataCollection") == null ||
          r("WAWebNewsletterMetadataCollection").add(
            {
              id: o("WAWebJidToWid").newsletterJidToWid(e),
              lastFilledStatusServerId: t,
            },
            { merge: !0 },
          ));
    }
    function s(e, t, n) {
      var a,
        i,
        l,
        s =
          r("WAWebNewsletterMetadataCollection") == null ||
          (a = r("WAWebNewsletterMetadataCollection").get(e)) == null
            ? void 0
            : a.statusMetadata,
        u = (i = s == null ? void 0 : s.lastStatusServerId) != null ? i : 0,
        c = (l = s == null ? void 0 : s.lastStatusSentTime) != null ? l : 0;
      if (!(t <= u && n <= c)) {
        var d = Math.max(t, u),
          m = Math.max(n, c),
          p = { lastStatusServerId: d, lastStatusSentTime: m };
        (o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
          id: e,
          statusMetadata: p,
        }),
          r("WAWebNewsletterMetadataCollection") == null ||
            r("WAWebNewsletterMetadataCollection").add(
              {
                id: o("WAWebJidToWid").newsletterJidToWid(e),
                statusMetadata: p,
              },
              { merge: !0 },
            ));
      }
    }
    function u(e) {
      return e.reduce(function (e, t) {
        var n;
        return Math.max(e, (n = t.serverId) != null ? n : 0);
      }, 0);
    }
    function c(e, t) {
      var n = o("WAWebStatusCollection").StatusCollection.get(e);
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        e,
        t,
        { add: "after", isHistory: !0 },
        "addStatusMessages",
        n == null ? void 0 : n.msgs,
      );
    }
    async function d(e, t) {
      o("WAWebStatusCollection").StatusCollection.add(
        {
          id: e,
          t: t.reduce(function (e, t) {
            var n;
            return Math.max(e, (n = t.t) != null ? n : 0);
          }, 0),
        },
        { merge: !0 },
      );
      var n = o("WAWebStatusCollection").StatusCollection.get(e);
      (n != null && (n.isSyntheticFromMetadata = !1),
        await Promise.all([
          o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(t),
          c(e, t),
        ]));
    }
    function m(e, t, n) {
      var r = o("WAWebStatusCollection").StatusCollection.get(e);
      if (r != null) {
        var a = new Map();
        for (var i of t) {
          var l = n.get(i.id.toString());
          l != null && i.serverId != null && a.set(i.serverId, l);
        }
        r.msgs.forEach(function (e) {
          var t = e.serverId != null ? a.get(e.serverId) : void 0;
          t != null && e.set("viewCount", t);
        });
      }
    }
    function p(e) {
      var t = e.reactionsByServerId,
        n = e.reactionServerTs,
        r = e.requestedAt,
        a = e.statusModel,
        i = e.viewsByServerId,
        l = [],
        s = new Map(),
        u = [],
        c = [];
      for (var d of a.msgs.toArray()) {
        var m = d.serverId;
        if (m != null) {
          var p = i.get(m),
            _ = t == null ? void 0 : t.get(m);
          (p == null && _ == null) ||
            (p != null && (d.set("viewCount", p), s.set(d.id.toString(), p)),
            l.push(d.id),
            !(
              t == null ||
              o(
                "WAWebNewsletterStatusReactionTaps",
              ).wasStatusReactionTappedSince(d.id.toString(), r)
            ) &&
              (_ != null
                ? u.push({
                    parentMsgKey: d.id,
                    emojiCountMap: new Map(_),
                    serverTimestamp: n,
                  })
                : c.push(d.id.toString())));
        }
      }
      return { ids: l, reactionIdsToRemove: c, reactions: u, viewCounts: s };
    }
    async function _(e) {
      var t = e.from,
        n = e.reactionsByServerId,
        r = e.requestedAt,
        a = e.serverTimestamp,
        i = e.viewsByServerId,
        l = o("WAWebStatusCollection").StatusCollection.get(t);
      if (l != null) {
        var s = p({
            reactionServerTs: a != null ? a : o("WATimeUtils").unixTime(),
            reactionsByServerId: n,
            requestedAt: r,
            statusModel: l,
            viewsByServerId: i,
          }),
          u = s.ids,
          c = s.reactionIdsToRemove,
          d = s.reactions,
          m = s.viewCounts;
        u.length !== 0 &&
          (await o(
            "WAWebNewsletterBackendAddOnsUtils",
          ).persistNewsletterStatusInteractions({
            ids: u,
            reactionIdsToRemove: c,
            reactions: d,
            timestamp: Date.now(),
            viewCounts: m,
          }),
          n != null &&
            (await o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
              ids: u,
              reactionIdsToRemove: c,
              reactions: d,
            })));
      }
    }
    function f(e, t, n) {
      var r = [],
        o = [];
      for (var a of e) {
        var i = a.toString(),
          l = t.get(i);
        l != null
          ? r.push({
              parentMsgKey: a,
              emojiCountMap: new Map(l),
              serverTimestamp: n,
            })
          : o.push(i);
      }
      return { reactions: r, reactionIdsToRemove: o };
    }
    function g(e) {
      var t = o("WAWebStatusCollection").StatusCollection.get(e);
      if (t != null) {
        var n = t.msgs.countWhere(function (e) {
          return e.ack == null || e.ack < o("WAWebAck").ACK.READ;
        });
        t.set({ totalCount: t.msgs.length, unreadCount: n });
      }
    }
    ((l.syncFilledStatusCursor = e),
      (l.syncStatusMetadata = s),
      (l.computeMaxServerId = u),
      (l.addAndPersistStatusMessages = d),
      (l.updateStatusViewCounts = m),
      (l.applyAndPersistInteractions = _),
      (l.prepareReactionsForPersist = f),
      (l.updateStatusUnreadCount = g));
  },
  98,
);
