__d(
  "WAWebNewsletterBackendAddOnsUtils",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forwardsCounts,
            a = e.ids,
            i = e.msgs,
            l = e.pollVotes,
            s = e.questionResponsesCounts,
            u = e.reactionIdsToRemove,
            c = e.reactions,
            d = e.timestamp,
            m = e.viewCounts;
          if (
            (c.length > 0 &&
              (yield o(
                "WAWebdbCRUDOperationsNewsletterReaction",
              ).createOrUpdateNewsletterReactions(
                r("compactMap")(
                  c,
                  o("WAWebNewsletterReactionUtils").mapReactionDataToDbRecord,
                ),
              )),
            u.length > 0 &&
              (yield o(
                "WAWebdbCRUDOperationsNewsletterReaction",
              ).bulkRemoveNewsletterReactionsForParentMsg(u)),
            l.length > 0 &&
              (yield o(
                "WAWebCRUDOperationsNewsletterPollsVotes",
              ).bulkCreateOrUpdateVotes(
                l.map(
                  o("WAWebNewsletterPollsUtils").mapNewsletterVoteToDbRecord,
                ),
              )),
            i.length > 0)
          ) {
            var p = new Map(
                i.map(function (e) {
                  return [e.id.toString(), e];
                }),
              ),
              _ = [],
              f = [],
              g = [],
              h = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet(
                  i.map(function (e) {
                    return e.id.toString();
                  }),
                );
            (h.forEach(function (e) {
              if (e != null) {
                var t = p.get(e.id);
                t != null &&
                (t == null ? void 0 : t.kind) ===
                  o("WAWebMsgType").MsgKind.RevokedMessage &&
                e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED
                  ? (f.push(t), g.push(e))
                  : (t == null ? void 0 : t.t) != null &&
                    t.t > e.t &&
                    _.push(t);
              }
            }),
              yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
                _.map(
                  o("WAWebNewsletterMsgEditUtils")
                    .mapMsgToEditProtocolMsgLegacy,
                ),
              ),
              yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkRemove(
                  g.map(function (e) {
                    var t = e.id;
                    return t.toString();
                  }),
                ),
              yield o("WAWebStoreMsgs").storeMsgs(f));
          }
          a.length > 0 &&
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        r = yield n
                          .bulkGet(
                            a.map(function (e) {
                              return e.toString();
                            }),
                          )
                          .then(function (e) {
                            return e.filter(Boolean);
                          }),
                        o = r.map(function (e) {
                          var n,
                            r,
                            o,
                            a = e.forwardsCount,
                            i = e.id,
                            l = e.questionResponsesCount,
                            u = e.viewCount;
                          return {
                            id: i,
                            lastUpdateFromServerTs: d,
                            viewCount:
                              (n = m == null ? void 0 : m.get(i)) != null
                                ? n
                                : u,
                            questionResponsesCount:
                              (r = s == null ? void 0 : s.get(i)) != null
                                ? r
                                : l,
                            forwardsCount:
                              (o = t == null ? void 0 : t.get(i)) != null
                                ? o
                                : a,
                          };
                        });
                      return n.bulkCreateOrMerge(o);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ids,
            n = e.timestamp,
            r = e.viewCounts;
          t.length === 0 ||
            r.size === 0 ||
            (yield s({
              ids: t,
              msgs: [],
              reactions: [],
              reactionIdsToRemove: [],
              pollVotes: [],
              timestamp: n,
              viewCounts: r,
              questionResponsesCounts: new Map(),
              forwardsCounts: new Map(),
            }));
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, r, a) {
      return t.reduce(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield e,
                i = yield o("WAWebNewsletterMapMsgAndAddOns").mapMsgAndAddOns(
                  t,
                  r,
                  a,
                );
              if (i == null) return n;
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
                  n.ids.push(s),
                u != null && n.msgs.push(u),
                p != null && s != null && n.viewCounts.set(s.toString(), p),
                d != null &&
                  s != null &&
                  n.questionResponsesCounts.set(s.toString(), d),
                l != null && s != null && n.forwardsCounts.set(s.toString(), l),
                m == null
                  ? s != null && n.reactionIdsToRemove.push(s.toString())
                  : n.reactions.push(m),
                c != null && n.pollVotes.push(c),
                n
              );
            },
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        (e || (e = n("Promise"))).resolve({
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
    ((l.updateAddOnDbRecords = s),
      (l.persistNewsletterViewCounts = c),
      (l.getMsgsAndAddOnsFromUpdates = m));
  },
  98,
);
