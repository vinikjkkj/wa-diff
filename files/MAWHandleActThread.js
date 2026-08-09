__d(
  "MAWHandleActThread",
  [
    "FBLogger",
    "I64",
    "LSFactory",
    "LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure",
    "MAWActThreadMapping",
    "MAWBridgeOccamadilloVerifyThreadExistsHandler",
    "MAWJids",
    "MAWLoadThreadFromMI",
    "MAWThreadLoadingState",
    "MAWThreadMappingQPL",
    "Promise",
    "WAJids",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n) {
      return o("MAWThreadMappingQPL").measurePerformanceForNullableInstanceKey(
        "thread_point_query_sproc",
        n,
        function () {
          return r(
            "LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure",
          )(r("LSFactory")(e), {
            waJid: o("MAWJids").convertChatJidToIntJid(t),
          });
        },
      );
    }
    function c(e, t) {
      var n = t.description,
        o = t.instanceKey,
        a = t.isGroup,
        i = t.threadKey,
        l = a ? 16 : 15;
      return r("MAWLoadThreadFromMI")(e, i, l, o, n).then(function (e) {
        e !== i &&
          r("FBLogger")("messenger_web").warn(
            "[MAWLoadThreadFromMI] Unexpected thread key change when loading from MI",
          );
      });
    }
    function d(t, r) {
      var a = r.description,
        i = r.instanceKey,
        l = r.jid,
        c = r.optimisticThreadKey;
      (i != null &&
        o("MAWThreadMappingQPL").addPoint(
          "handle_act_thread_optimistic_start",
          i,
        ),
        o("MAWActThreadMapping").executePromisesBlockedOnActThreadMapping({
          authoritativeThreadKey: null,
          description: a,
          instanceKey: i,
          jid: l,
          optimisticThreadKey: c,
        }));
      var d = (s || (s = o("I64"))).of_string(c);
      return (e || (e = n("Promise")))
        .all([
          u(t, l, i),
          o("MAWThreadLoadingState").markActThreadLoadingAsCompletedForJid(
            t,
            { jid: l, threadKey: d },
            i,
          ),
          o(
            "MAWBridgeOccamadilloVerifyThreadExistsHandler",
          ).insertEphemeralCache(t, d, l, i),
        ])
        .then(function () {
          if (i != null)
            return (
              o("MAWThreadMappingQPL").addPoint(
                "handle_act_thread_optimistic_end",
                i,
              ),
              o("MAWThreadMappingQPL").end({
                instanceKey: i,
                intJid: o("MAWJids").convertChatJidToIntJid(l),
                tables: t,
                threadKey: d,
              })
            );
        });
    }
    function m(t, r) {
      var a = r.authoritativeThreadKey,
        i = r.description,
        l = r.instanceKey,
        u = r.jid,
        d = r.optimisticThreadKey;
      l != null &&
        o("MAWThreadMappingQPL").addPoint(
          "handle_act_thread_authoritative_start",
          l,
        );
      var m = o("WAJids").switchOnMsgrChatJidType(u, {
        group: function (t) {
          return !0;
        },
        user: function (t) {
          return !1;
        },
      });
      o("MAWActThreadMapping").executePromisesBlockedOnActThreadMapping({
        authoritativeThreadKey: a,
        description: i,
        instanceKey: l,
        jid: u,
        optimisticThreadKey: d,
      });
      var p = (s || (s = o("I64"))).of_string(a);
      return o("MAWThreadLoadingState")
        .genLoadingStateFromJid(t, u)
        .then(function (r) {
          return (e || (e = n("Promise"))).all([
            !o("MAWThreadLoadingState").isMiReady(r) &&
              c(t, {
                description: i,
                instanceKey: l,
                isGroup: m,
                threadKey: p,
              }),
            o(
              "MAWBridgeOccamadilloVerifyThreadExistsHandler",
            ).attachLocalMetadata(t, p, { clientThreadKey: d, isGroup: m }),
            d != null &&
              o(
                "MAWBridgeOccamadilloVerifyThreadExistsHandler",
              ).ensureOptimisticThreadIsHidden(
                t,
                p,
                (s || (s = o("I64"))).of_string(d),
              ),
            o(
              "MAWBridgeOccamadilloVerifyThreadExistsHandler",
            ).insertEphemeralCache(t, p, u, l),
            o("MAWThreadLoadingState").markActThreadLoadingAsCompletedForJid(
              t,
              { jid: u, threadKey: p },
              l,
            ),
          ]);
        })
        .then(function () {
          if (l != null)
            return (
              o("MAWThreadMappingQPL").addPoint(
                "handle_act_thread_authoritative_end",
                l,
              ),
              o("MAWThreadMappingQPL").end({
                instanceKey: l,
                intJid: o("MAWJids").convertChatJidToIntJid(u),
                tables: t,
                threadKey: p,
              })
            );
        });
    }
    ((l.handleActThreadWhenOptimisticInMI = d),
      (l.handleActThreadWhenAuthoritativeInMI = m));
  },
  98,
);
