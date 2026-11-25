__d(
  "MAWThreadLoadingState",
  [
    "I64",
    "LSAuthorityLevel",
    "LSIntEnum",
    "MAWJids",
    "MAWMiActMappingTableAPI",
    "MAWThreadMappingQPL",
    "ReQL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        MISSING: "MISSING",
        OPTIMISTIC: "OPTIMISTIC",
        PARTIAL: "PARTIAL",
        READY: "READY",
      },
      c = { IN_PROGRESS: "IN_PROGRESS", MISSING: "MISSING", READY: "READY" };
    async function d(e, t) {
      var n = await o("MAWMiActMappingTableAPI").getMappingRowForChatJid(e, t);
      if (n == null)
        return {
          mappingState: { actState: c.MISSING, miState: u.MISSING },
          threadKey: null,
        };
      var r = await o("ReQL").firstAsync(
        o("ReQL").fromTableAscending(e.threads).getKeyRange(n.serverThreadKey),
      );
      return { mappingState: _(r, n), threadKey: n.serverThreadKey };
    }
    async function m(e, t) {
      var n = await d(e, t),
        r = n.mappingState;
      return r;
    }
    async function p(e, t) {
      var n = await Promise.all([
          o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(e.threads).getKeyRange(t),
          ),
          o("MAWMiActMappingTableAPI").getMappingRowForThreadKey(e, t),
        ]),
        r = n[0],
        a = n[1];
      return _(r, a);
    }
    function _(e, t) {
      return { actState: C(t), miState: b(e) };
    }
    function f(e) {
      return h(e) && y(e);
    }
    function g(e) {
      return e.miState === u.OPTIMISTIC;
    }
    function h(e) {
      return e.miState === u.READY;
    }
    function y(e) {
      return e.actState === c.READY;
    }
    function C(e) {
      return e == null
        ? c.MISSING
        : S(e.clientThreadPk)
          ? c.IN_PROGRESS
          : c.READY;
    }
    function b(t) {
      if (t == null) return u.MISSING;
      var n = (e || (e = o("LSIntEnum"))).toNumber(t.authorityLevel);
      return n === r("LSAuthorityLevel").AUTHORITATIVE
        ? u.READY
        : n === r("LSAuthorityLevel").OPTIMISTIC
          ? u.OPTIMISTIC
          : u.PARTIAL;
    }
    async function v(e, t, n) {
      await e.mi_act_mapping_table.put({
        clientThreadPk: (s || (s = o("I64"))).neg(t),
        jid: n,
        serverThreadKey: t,
      });
    }
    function S(e) {
      return (s || (s = o("I64"))).lt(e, s.zero);
    }
    async function R(e, t, n) {
      var r = t.jid,
        a = t.threadKey;
      (n === void 0 && (n = null),
        await L(
          e,
          { intJid: o("MAWJids").convertChatJidToIntJid(r), threadKey: a },
          n,
        ));
    }
    async function L(e, t, n) {
      var r = t.intJid,
        a = t.threadKey;
      (n === void 0 && (n = null),
        n != null && o("MAWThreadMappingQPL").addPoint("insert_mapping_row", n),
        await e.mi_act_mapping_table.put({
          clientThreadPk: r,
          jid: r,
          serverThreadKey: a,
        }));
    }
    function E(e, t) {
      return d(e, t).then(function (e) {
        var t = e.mappingState,
          n = e.threadKey;
        return t.miState === u.MISSING ? null : n;
      });
    }
    ((l.MiState = u),
      (l.ActState = c),
      (l.genLoadingStateFromJid = m),
      (l.genThreadLoadingState = p),
      (l.getThreadLoadingStateForDbRows = _),
      (l.isReady = f),
      (l.isMiOptimistic = g),
      (l.isMiReady = h),
      (l.isActReady = y),
      (l.getActState = C),
      (l.markActThreadLoadingAsInProgress = v),
      (l.markActThreadLoadingAsCompletedForJid = R),
      (l.markActThreadLoadingAsCompleted = L),
      (l.getThreadKeyIfMiThreadNotMissing = E));
  },
  98,
);
