__d(
  "MAWBulkMaybeUpsertThreadAndParticipants",
  [
    "MAWCreateUpdateThreadUtils",
    "MAWDbParticipantTxns",
    "MAWDbThread",
    "MAWFolderTypes",
    "MAWInMemoryGroupInfoStore",
    "MAWInMemoryParticipantStore",
    "MAWInMemoryThreadStore",
    "MAWInteractionTracing",
    "MAWMICInteractionTraceId",
    "MAWODSProxy",
    "MawMpsThreadMsgInfo",
    "MaybeCreateOrUpdateThreadResultCache",
    "WAJids",
    "WAOdsEnums",
    "WATimeUtils",
    "WmiMetadataThreadsWriter",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e;
        return r("MAWInteractionTracing").traceAndComplete(
          t.reason === "init_sync"
            ? o("MAWMICInteractionTraceId").getMICInteractionTraceIdMap(
                function (e) {
                  return { group: "thread-mapping", id: e };
                },
              )
            : void 0,
          "MAWBulkMaybeUpsertThreadAndParticipants.bulkMaybeCreateOrUpdateThread",
          {
            annotations: {
              reason: (e = t.reason) != null ? e : "unknown",
              threadCount: t.threads.length,
            },
          },
          async function () {
            var e = t.threads.filter(function (e) {
              return !o(
                "MaybeCreateOrUpdateThreadResultCache",
              ).cache__I_KNOW_WHAT_I_AM_DOING.has(e.chatJid);
            });
            if (e.length > 0) {
              var r = e.map(function (e) {
                  var t = e.chatJid;
                  return t;
                }),
                a = [],
                i = [];
              (r.forEach(function (e) {
                return o("WAJids").switchOnMsgrChatJidType(e, {
                  group: function () {
                    return i.push(e);
                  },
                  user: function () {
                    return a.push(e);
                  },
                });
              }),
                o("MAWInMemoryParticipantStore").seedOneToOneParticipantsStore(
                  a,
                ));
              var l =
                  i.length > 0
                    ? o(
                        "MAWInMemoryParticipantStore",
                      ).hydrateGroupParticipantsFromLSDBWithTimeout(i)
                    : null,
                u = await o("MawMpsThreadMsgInfo").bulkGetThreadMsgInfo(r);
              await l;
              var c = await s(babelHelpers.extends({ threads: e }, t), n, u);
              c.forEach(function (e) {
                e.status === "fulfilled" &&
                  o(
                    "MaybeCreateOrUpdateThreadResultCache",
                  ).cache__I_KNOW_WHAT_I_AM_DOING.set(e.value.chatJid, e);
              });
            }
            return t.threads.map(function (e) {
              var n;
              return (n = o(
                "MaybeCreateOrUpdateThreadResultCache",
              ).cache__I_KNOW_WHAT_I_AM_DOING.get(e.chatJid)) != null
                ? n
                : { jid: e.chatJid, reason: t.reason, status: "rejected" };
            });
          },
        );
      },
      s = async function (t, n, r) {
        var e = t.reason,
          a = t.s2sInstanceKey,
          i = t.threads,
          l = function (r) {
            o("MAWCreateUpdateThreadUtils").maybeSendMICState(
              e,
              r,
              n == null ? void 0 : n.fromClientId,
            );
          };
        S(e, n, i.length);
        var s = Array.from(
            new Map(
              i.map(function (e) {
                return [e.authoritativeThreadKey, e];
              }),
            ).values(),
          ),
          c = new Map(),
          m = s
            .map(function (e) {
              var t = e.chatJid,
                n = e.instanceKey;
              return (n != null && c.set(t, n), n);
            })
            .filter(Boolean);
        o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoints(
          "bulk_get_or_create_thread_start",
          m,
          void 0,
          a,
        );
        var p = (
          await d(R(s), {
            logState: l,
            markFullyInitialized: !0,
            threadMsgInfo: r,
          })
        ).map(function (e) {
          var t = e.adminMsgParams,
            n = e.created,
            r = e.thread,
            i = c.get(r.jid);
          return (
            o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint(
              "bulk_get_or_create_thread_end",
              i,
              void 0,
              a,
            ),
            { adminMsgParams: t, created: n, instanceKey: i, thread: r }
          );
        });
        l("threadMapping4BulkGetDone");
        var _ = p.map(function (e) {
            var t = e.adminMsgParams,
              n = e.created,
              r = e.instanceKey,
              i = e.thread;
            return o("WAJids").switchOnMsgrChatJidType(i.jid, {
              group: function (o) {
                return f(o, r, a).then(function (e) {
                  return C(i, e, n, t, o);
                });
              },
              user: function (o) {
                return g(o, r, a).then(function (e) {
                  return y(i, e, n, t);
                });
              },
            });
          }),
          h = await Promise.all(
            _.map(function (e, t) {
              return u(s[t], e);
            }),
          );
        return (v(l), h);
      };
    async function u(e, t) {
      try {
        return { status: "fulfilled", value: await t };
      } catch (t) {
        return { jid: e.chatJid, reason: t, status: "rejected" };
      }
    }
    async function c(e, t) {
      var n = await d([e], { threadMsgInfo: t });
      return r("nullthrows")(
        n[0],
        "getOrCreateThreadNonTransaction missing result",
      );
    }
    async function d(e, t) {
      var n = t === void 0 ? {} : t,
        a = n.logState,
        i = n.markFullyInitialized,
        l = n.threadMsgInfo,
        s = await o(
          "MAWInMemoryThreadStore",
        ).initializeInMemoryThreadsIfMissingNonTransaction(e.map(p), {
          markFullyInitialized: i,
          threadMsgInfo: l,
        }),
        u = new Set(
          s.map(function (e) {
            return e.jid;
          }),
        );
      a == null || a("threadMapping2FetchedThreads");
      var c = o("MAWInMemoryThreadStore").getNonTxReadonlyInMemoryThreadStore(),
        d = [],
        m = e.map(function (e) {
          var t,
            n,
            o = r("nullthrows")(
              c.get(e.jid),
              "bulkGetOrCreateThreadNonTransaction: thread missing after initialization",
            );
          if (u.has(o.jid))
            return { adminMsgParams: null, created: !0, thread: o };
          var a = _(
            o,
            e,
            (t =
              l == null || (n = l.get(o.jid)) == null
                ? void 0
                : n.newestMsgTs) != null
              ? t
              : null,
          );
          return (d.push(a), { adminMsgParams: null, created: !1, thread: a });
        });
      return (
        d.length > 0 &&
          (o("MAWInMemoryThreadStore")
            .getNonTxReadwriteInMemoryThreadStore()
            .bulkPut(d),
          o("WmiMetadataThreadsWriter").bulkStoreThreadPartialsOnDisk(d)),
        a == null || a("threadMapping3ThreadsUpdated"),
        m
      );
    }
    function m(e, t) {
      if (e != null && t != null) {
        var n = o("WATimeUtils").fromMillisTime(e),
          r = o("WATimeUtils").fromMillisTime(t);
        return o("WATimeUtils").castToMillisTime(Math.max(n, r));
      }
      return e != null ? e : t;
    }
    function p(e) {
      var t,
        n = e.authoritativeThreadKey,
        r = e.clientThreadKey,
        a = e.createTs,
        i = e.deduplicationKey,
        l = e.folder,
        s = e.jid,
        u = e.lastActivityTimestamp,
        c = o("WATimeUtils").millisTime(),
        d = (t = u != null ? u : a) != null ? t : c,
        m = {
          authoritativeThreadKey: n != null ? n : void 0,
          deduplicationKey: i,
          folder: l != null ? l : o("MAWFolderTypes").FOLDER_ID.INBOX,
          jid: s,
          lastReadMsg: null,
          lastReadMsgReceiptSent: null,
          newestMsgTs: d,
          oldestMsg: null,
          optimisticThreadKey: r != null ? r : void 0,
          threadOrder: o("MAWDbThread").craftThreadOrder(d, s),
        };
      return m;
    }
    function _(e, t, n) {
      var r = t.authoritativeThreadKey,
        a = t.clientThreadKey,
        i = t.deduplicationKey,
        l = t.folder,
        s = t.lastActivityTimestamp,
        u = m(n, s),
        c =
          u != null && (e.newestMsgTs == null || u > e.newestMsgTs)
            ? o("MAWDbThread").craftThreadOrder(u, e.jid)
            : e.threadOrder,
        d = {
          authoritativeThreadKey: r != null ? r : e.authoritativeThreadKey,
          cannotReplyReason:
            l != null || a != null ? null : e.cannotReplyReason,
          deduplicationKey: l != null || a != null ? i : e.deduplicationKey,
          folder: l != null ? l : e.folder,
          newestMsgTs: u,
          optimisticThreadKey: a != null ? a : e.optimisticThreadKey,
          threadOrder: c,
        };
      return babelHelpers.extends({}, e, d);
    }
    function f(e, t, n) {
      o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint(
        "get_participants_for_group_start",
        t,
        void 0,
        n,
      );
      var r = o("MAWInMemoryParticipantStore")
        .getCommittedInMemoryParticipantsStore()
        .getAll()
        .filter(function (t) {
          return t.threadJid === e;
        });
      return (
        o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint(
          "get_participants_for_group_end",
          t,
          { int: { participantsLoaded: r.length } },
          n,
        ),
        Promise.resolve(r)
      );
    }
    function g(e, t, n) {
      o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint(
        "upsert_participants_in_1_to_1_start",
        t,
        void 0,
        n,
      );
      var r = o(
        "MAWDbParticipantTxns",
      ).bulkRemoveIncorrectAndInsertMissingParticipantsInOneToOneThread(e, !1);
      return (
        o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint(
          "upsert_participants_in_1_to_1_end",
          t,
          { int: { participantsLoaded: r.length } },
          n,
        ),
        Promise.resolve(r)
      );
    }
    function h(e, t, n, r) {
      return {
        adminMsgParams: r,
        chatJid: e.jid,
        clientThreadKey: e.optimisticThreadKey,
        folder: e.folder,
        isCreated: n,
        participants: t.map(function (e) {
          var t = e.type,
            n = e.userJid;
          return { type: t, userJid: n };
        }),
      };
    }
    function y(e, t, n, r) {
      return babelHelpers.extends({}, h(e, t, n, r), {
        shouldQueryForGroup: !1,
      });
    }
    function C(e, t, n, r, o) {
      return babelHelpers.extends({}, h(e, t, n, r), {
        shouldQueryForGroup:
          n ||
          t.length === 0 ||
          t.some(function (e) {
            return e.addressable !== !0;
          }) ||
          b(o),
      });
    }
    function b(e) {
      return o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e) == null;
    }
    function v(e) {
      e("threadMapping5LoadedParticipantsAndMsg");
    }
    function S(e, t, n) {
      o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.MAW_THREAD_MAPPING,
        key: "bulk_create_thread_backend." + (e != null ? e : "unknown"),
      });
      var r = function (r, a) {
        o("MAWCreateUpdateThreadUtils").maybeSendMICPoint(
          e,
          r,
          t == null ? void 0 : t.fromClientId,
          a,
        );
      };
      r("bulk_create_thread_start", {
        int: { thread_mapping_unique_threads: n },
      });
    }
    function R(e) {
      return e.map(function (e) {
        return {
          authoritativeThreadKey: e.authoritativeThreadKey,
          jid: e.chatJid,
          lastActivityTimestamp: o("WATimeUtils").castToMillisTime(
            e.lastActivityTimestampMs,
          ),
        };
      });
    }
    ((l.bulkMaybeCreateOrUpdateThread = e),
      (l.getOrCreateThreadNonTransaction = c),
      (l.getOutputForGroupThread = C),
      (l.isGroupInfoMissingInMemory = b));
  },
  98,
);
