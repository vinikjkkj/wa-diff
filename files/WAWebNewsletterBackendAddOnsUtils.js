__d(
  "WAWebNewsletterBackendAddOnsUtils",
  [
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebNewsletterMapMsgAndAddOns",
    "WAWebNewsletterMsgEditUtils",
    "WAWebNewsletterPollsUtils",
    "WAWebNewsletterReactionUtils",
    "WAWebSchemaMessage",
    "WAWebStoreMsgs",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.forwardsCounts,
        n = e.ids,
        a = e.msgs,
        i = e.pollVotes,
        l = e.questionResponsesCounts,
        s = e.reactionIdsToRemove,
        u = e.reactions,
        c = e.timestamp,
        d = e.viewCounts;
      if (
        (u.length > 0 &&
          (await o(
            "WAWebdbCRUDOperationsNewsletterReaction",
          ).createOrUpdateNewsletterReactions(
            r("compactMap")(
              u,
              o("WAWebNewsletterReactionUtils").mapReactionDataToDbRecord,
            ),
          )),
        s.length > 0 &&
          (await o(
            "WAWebdbCRUDOperationsNewsletterReaction",
          ).bulkRemoveNewsletterReactionsForParentMsg(s)),
        i.length > 0 &&
          (await o(
            "WAWebCRUDOperationsNewsletterPollsVotes",
          ).bulkCreateOrUpdateVotes(
            i.map(o("WAWebNewsletterPollsUtils").mapNewsletterVoteToDbRecord),
          )),
        a.length > 0)
      ) {
        var m = new Map(
            a.map(function (e) {
              return [e.id.toString(), e];
            }),
          ),
          p = [],
          _ = [],
          f = [],
          g = await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              a.map(function (e) {
                return e.id.toString();
              }),
            );
        (g.forEach(function (e) {
          if (e != null) {
            var t = m.get(e.id);
            t != null &&
            (t == null ? void 0 : t.kind) ===
              o("WAWebMsgType").MsgKind.RevokedMessage &&
            e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED
              ? (_.push(t), f.push(e))
              : (t == null ? void 0 : t.t) != null && t.t > e.t && p.push(t);
          }
        }),
          await o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
            p.map(
              o("WAWebNewsletterMsgEditUtils").mapMsgToEditProtocolMsgLegacy,
            ),
          ),
          await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkRemove(
              f.map(function (e) {
                var t = e.id;
                return t.toString();
              }),
            ),
          await o("WAWebStoreMsgs").storeMsgs(_));
      }
      n.length > 0 &&
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message"], async function (e) {
            var r = e[0],
              o = await r
                .bulkGet(
                  n.map(function (e) {
                    return e.toString();
                  }),
                )
                .then(function (e) {
                  return e.filter(Boolean);
                }),
              a = o.map(function (e) {
                var n,
                  r,
                  o,
                  a = e.forwardsCount,
                  i = e.id,
                  s = e.questionResponsesCount,
                  u = e.viewCount;
                return {
                  id: i,
                  lastUpdateFromServerTs: c,
                  viewCount:
                    (n = d == null ? void 0 : d.get(i)) != null ? n : u,
                  questionResponsesCount:
                    (r = l == null ? void 0 : l.get(i)) != null ? r : s,
                  forwardsCount:
                    (o = t == null ? void 0 : t.get(i)) != null ? o : a,
                };
              });
            return r.bulkCreateOrMerge(a);
          }));
    }
    async function s(t) {
      var n = t.ids,
        r = t.reactionIdsToRemove,
        o = t.reactions,
        a = t.timestamp,
        i = t.viewCounts;
      n.length !== 0 &&
        (await e({
          ids: n,
          msgs: [],
          reactions: o != null ? o : [],
          reactionIdsToRemove: r != null ? r : [],
          pollVotes: [],
          timestamp: a,
          viewCounts: i,
          questionResponsesCounts: new Map(),
          forwardsCounts: new Map(),
        }));
    }
    function u(e, t, n) {
      return e.reduce(
        async function (e, r) {
          var a = await e,
            i = await o("WAWebNewsletterMapMsgAndAddOns").mapMsgAndAddOns(
              r,
              t,
              n,
            );
          if (i == null) return a;
          var l = i.forwardsCount,
            s = i.id,
            u = i.msgData,
            c = i.pollVoteData,
            d = i.questionResponsesCount,
            m = i.reactionData,
            p = i.viewCount;
          return (
            s != null &&
              (u == null ? void 0 : u.kind) !==
                o("WAWebMsgType").MsgKind.RevokedMessage &&
              a.ids.push(s),
            u != null && a.msgs.push(u),
            p != null && s != null && a.viewCounts.set(s.toString(), p),
            d != null &&
              s != null &&
              a.questionResponsesCounts.set(s.toString(), d),
            l != null && s != null && a.forwardsCounts.set(s.toString(), l),
            m == null
              ? s != null && a.reactionIdsToRemove.push(s.toString())
              : a.reactions.push(m),
            c != null && a.pollVotes.push(c),
            a
          );
        },
        Promise.resolve({
          ids: [],
          reactions: [],
          reactionIdsToRemove: [],
          msgs: [],
          viewCounts: new Map(),
          pollVotes: [],
          questionResponsesCounts: new Map(),
          forwardsCounts: new Map(),
        }),
      );
    }
    ((l.updateAddOnDbRecords = e),
      (l.persistNewsletterStatusInteractions = s),
      (l.getMsgsAndAddOnsFromUpdates = u));
  },
  98,
);
