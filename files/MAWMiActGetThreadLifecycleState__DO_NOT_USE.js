__d(
  "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
  [
    "FBLogger",
    "I64",
    "LSAuthorityLevel",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "MAWMiActGetMappingWithMawTypes",
    "MAWMiActMappingTableAPI",
    "MAWMiActThreadLifecycleState__DO_NOT_USE",
    "MAWThreadLoadingState",
    "ReQL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n, a) {
      var i = (e || (e = o("LSIntEnum"))).toNumber(t.authorityLevel);
      if (i === r("LSAuthorityLevel").OPTIMISTIC)
        return n != null
          ? babelHelpers.extends(
              {},
              r("MAWMiActGetMappingWithMawTypes")(
                n,
                o("LSMessagingThreadTypeUtil").isGroup(t.threadType),
              ),
              {
                type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                  .MiActThreadStatesEnum.OPTIMISTIC_THREAD_WITH_ACT,
              },
            )
          : {
              serverThreadKey: t.threadKey,
              thread: t,
              type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.OPTIMISTIC_THREAD_NO_ACT,
            };
      if (i === r("LSAuthorityLevel").CLIENT_PARTIAL)
        return n != null
          ? babelHelpers.extends(
              {},
              r("MAWMiActGetMappingWithMawTypes")(
                n,
                o("LSMessagingThreadTypeUtil").isGroup(t.threadType),
              ),
              {
                type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                  .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD_WITH_ACT,
              },
            )
          : {
              serverThreadKey: t.threadKey,
              type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD,
            };
      if (i === r("LSAuthorityLevel").SERVER_PARTIAL)
        return {
          serverThreadKey: t.threadKey,
          type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
            .MiActThreadStatesEnum.SERVER_PARTIAL_MI_THREAD,
        };
      if (i === r("LSAuthorityLevel").AUTHORITATIVE) {
        if (n == null)
          return {
            serverThreadKey: t.threadKey,
            thread: t,
            type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW,
          };
        var l =
          o("MAWThreadLoadingState").getActState(n) ===
          o("MAWThreadLoadingState").ActState.IN_PROGRESS;
        if (l) {
          var u = r("MAWMiActGetMappingWithMawTypes")(
            n,
            o("LSMessagingThreadTypeUtil").isGroup(t.threadType),
          );
          return {
            jid: u.jid,
            jidInt64: n.jid,
            serverThreadKey: u.serverThreadKey,
            thread: t,
            type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY,
          };
        } else
          return babelHelpers.extends(
            {},
            r("MAWMiActGetMappingWithMawTypes")(
              n,
              o("LSMessagingThreadTypeUtil").isGroup(t.threadType),
            ),
            {
              type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE,
            },
          );
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        "[MiActMapping] Unknown thread lifecycle state for threadKey: %s, authorityLevel: %s, thread action: %s",
        (s || (s = o("I64"))).to_string(t.threadKey),
        i,
        a,
      );
    }
    async function c(e, t, n) {
      var r = await o("MAWMiActMappingTableAPI").getMappingRowForIntJid(e, t);
      if (r == null)
        return {
          jidInt64: t,
          type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
            .MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW,
        };
      var a = await o("ReQL").firstAsync(
        o("ReQL").fromTableAscending(e.threads).getKeyRange(r.serverThreadKey),
      );
      return a == null
        ? {
            jidInt64: t,
            type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.JID_MISSING_MI_THREAD,
          }
        : u(a, r, n);
    }
    async function d(e, t, n) {
      var r,
        a = await Promise.all([
          (r = o("ReQL")).firstAsync(
            r.fromTableAscending(e.threads).getKeyRange(t),
          ),
          r.firstAsync(
            r.fromTableAscending(e.mi_act_mapping_table).getKeyRange(t),
          ),
        ]),
        i = a[0],
        l = a[1];
      return i == null
        ? {
            serverThreadKey: t,
            type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.THREAD_KEY_ONLY,
          }
        : u(i, l, n);
    }
    async function m(e, t, n, r) {
      var a = await c(e, t, r);
      return a.type ===
        o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .JID_MISSING_MAPPING_ROW && n != null
        ? d(
            e,
            (s || (s = o("I64"))).of_string(n),
            "MAWBridgeOccamadilloVerifyThreadExistsHandler",
          )
        : a;
    }
    ((l.getThreadLifecycleStateByJid = c),
      (l.getThreadLifecycleStateByThreadKey = d),
      (l.getThreadLifecycleStateByJidOrThreadKey = m));
  },
  98,
);
