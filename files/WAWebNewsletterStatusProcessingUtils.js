__d(
  "WAWebNewsletterStatusProcessingUtils",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
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
    function u(e, t, n) {
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
    function c(e) {
      return e.reduce(function (e, t) {
        var n;
        return Math.max(e, (n = t.serverId) != null ? n : 0);
      }, 0);
    }
    function d(e, t) {
      var n = o("WAWebStatusCollection").StatusCollection.get(e);
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        e,
        t,
        { add: "after", isHistory: !0 },
        "addStatusMessages",
        n == null ? void 0 : n.msgs,
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          o("WAWebStatusCollection").StatusCollection.add(
            {
              id: t,
              t: r.reduce(function (e, t) {
                var n;
                return Math.max(e, (n = t.t) != null ? n : 0);
              }, 0),
            },
            { merge: !0 },
          );
          var a = o("WAWebStatusCollection").StatusCollection.get(t);
          (a != null && (a.isSyntheticFromMetadata = !1),
            yield (e || (e = n("Promise"))).all([
              o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(
                r,
              ),
              d(t, r),
            ]));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
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
    function f(e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.reactionsByServerId,
            r = e.requestedAt,
            a = e.serverTimestamp,
            i = e.viewsByServerId,
            l = o("WAWebStatusCollection").StatusCollection.get(t);
          if (l != null) {
            var s = f({
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
              (yield o(
                "WAWebNewsletterBackendAddOnsUtils",
              ).persistNewsletterStatusInteractions({
                ids: u,
                reactionIdsToRemove: c,
                reactions: d,
                timestamp: Date.now(),
                viewCounts: m,
              }),
              n != null &&
                (yield o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions(
                  { ids: u, reactionIdsToRemove: c, reactions: d },
                )));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
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
    function C(e) {
      var t = o("WAWebStatusCollection").StatusCollection.get(e);
      if (t != null) {
        var n = t.msgs.countWhere(function (e) {
          return e.ack == null || e.ack < o("WAWebAck").ACK.READ;
        });
        t.set({ totalCount: t.msgs.length, unreadCount: n });
      }
    }
    ((l.syncFilledStatusCursor = s),
      (l.syncStatusMetadata = u),
      (l.computeMaxServerId = c),
      (l.addAndPersistStatusMessages = m),
      (l.updateStatusViewCounts = _),
      (l.applyAndPersistInteractions = g),
      (l.prepareReactionsForPersist = y),
      (l.updateStatusUnreadCount = C));
  },
  98,
);
