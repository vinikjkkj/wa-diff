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
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n) {
      var a = (s || (s = o("LSIntEnum"))).toNumber(e.authorityLevel);
      if (a === r("LSAuthorityLevel").OPTIMISTIC)
        return t != null
          ? babelHelpers.extends(
              {},
              r("MAWMiActGetMappingWithMawTypes")(
                t,
                o("LSMessagingThreadTypeUtil").isGroup(e.threadType),
              ),
              {
                type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                  .MiActThreadStatesEnum.OPTIMISTIC_THREAD_WITH_ACT,
              },
            )
          : {
              serverThreadKey: e.threadKey,
              thread: e,
              type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.OPTIMISTIC_THREAD_NO_ACT,
            };
      if (a === r("LSAuthorityLevel").CLIENT_PARTIAL)
        return t != null
          ? babelHelpers.extends(
              {},
              r("MAWMiActGetMappingWithMawTypes")(
                t,
                o("LSMessagingThreadTypeUtil").isGroup(e.threadType),
              ),
              {
                type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                  .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD_WITH_ACT,
              },
            )
          : {
              serverThreadKey: e.threadKey,
              type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD,
            };
      if (a === r("LSAuthorityLevel").SERVER_PARTIAL)
        return {
          serverThreadKey: e.threadKey,
          type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
            .MiActThreadStatesEnum.SERVER_PARTIAL_MI_THREAD,
        };
      if (a === r("LSAuthorityLevel").AUTHORITATIVE) {
        if (t == null)
          return {
            serverThreadKey: e.threadKey,
            thread: e,
            type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW,
          };
        var i =
          o("MAWThreadLoadingState").getActState(t) ===
          o("MAWThreadLoadingState").ActState.IN_PROGRESS;
        if (i) {
          var l = r("MAWMiActGetMappingWithMawTypes")(
            t,
            o("LSMessagingThreadTypeUtil").isGroup(e.threadType),
          );
          return {
            jid: l.jid,
            jidInt64: t.jid,
            serverThreadKey: l.serverThreadKey,
            thread: e,
            type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
              .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY,
          };
        } else
          return babelHelpers.extends(
            {},
            r("MAWMiActGetMappingWithMawTypes")(
              t,
              o("LSMessagingThreadTypeUtil").isGroup(e.threadType),
            ),
            {
              type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE,
            },
          );
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        "[MiActMapping] Unknown thread lifecycle state for threadKey: %s, authorityLevel: %s, thread action: %s",
        (u || (u = o("I64"))).to_string(e.threadKey),
        a,
        n,
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("MAWMiActMappingTableAPI").getMappingRowForIntJid(
            e,
            t,
          );
          if (r == null)
            return {
              jidInt64: t,
              type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW,
            };
          var a = yield o("ReQL").firstAsync(
            o("ReQL")
              .fromTableAscending(e.threads)
              .getKeyRange(r.serverThreadKey),
          );
          return a == null
            ? {
                jidInt64: t,
                type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                  .MiActThreadStatesEnum.JID_MISSING_MI_THREAD,
              }
            : c(a, r, n);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = yield (e || (e = n("Promise"))).all([
              o("ReQL").firstAsync(
                o("ReQL").fromTableAscending(t.threads).getKeyRange(r),
              ),
              o("ReQL").firstAsync(
                o("ReQL")
                  .fromTableAscending(t.mi_act_mapping_table)
                  .getKeyRange(r),
              ),
            ]),
            l = i[0],
            s = i[1];
          return l == null
            ? {
                serverThreadKey: r,
                type: o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                  .MiActThreadStatesEnum.THREAD_KEY_ONLY,
              }
            : c(l, s, a);
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
            var a = yield d(e, t, r);
            return a.type ===
              o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW && n != null
              ? p(
                  e,
                  (u || (u = o("I64"))).of_string(n),
                  "MAWBridgeOccamadilloVerifyThreadExistsHandler",
                )
              : a;
          },
        )),
        g.apply(this, arguments)
      );
    }
    ((l.getThreadLifecycleStateByJid = d),
      (l.getThreadLifecycleStateByThreadKey = p),
      (l.getThreadLifecycleStateByJidOrThreadKey = f));
  },
  98,
);
