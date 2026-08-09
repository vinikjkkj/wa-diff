__d(
  "MAWThreadLoadingState",
  [
    "I64",
    "LSAuthorityLevel",
    "LSIntEnum",
    "MAWJids",
    "MAWMiActMappingTableAPI",
    "MAWThreadMappingQPL",
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        MISSING: "MISSING",
        OPTIMISTIC: "OPTIMISTIC",
        PARTIAL: "PARTIAL",
        READY: "READY",
      },
      d = { IN_PROGRESS: "IN_PROGRESS", MISSING: "MISSING", READY: "READY" };
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("MAWMiActMappingTableAPI").getMappingRowForChatJid(
            e,
            t,
          );
          if (n == null)
            return {
              mappingState: { actState: d.MISSING, miState: c.MISSING },
              threadKey: null,
            };
          var r = yield o("ReQL").firstAsync(
            o("ReQL")
              .fromTableAscending(e.threads)
              .getKeyRange(n.serverThreadKey),
          );
          return { mappingState: y(r, n), threadKey: n.serverThreadKey };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield m(e, t),
            r = n.mappingState;
          return r;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (u || (u = n("Promise"))).all([
              o("ReQL").firstAsync(
                o("ReQL").fromTableAscending(e.threads).getKeyRange(t),
              ),
              o("MAWMiActMappingTableAPI").getMappingRowForThreadKey(e, t),
            ]),
            a = r[0],
            i = r[1];
          return y(a, i);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return { actState: R(t), miState: L(e) };
    }
    function C(e) {
      return v(e) && S(e);
    }
    function b(e) {
      return e.miState === c.OPTIMISTIC;
    }
    function v(e) {
      return e.miState === c.READY;
    }
    function S(e) {
      return e.actState === d.READY;
    }
    function R(e) {
      return e == null
        ? d.MISSING
        : I(e.clientThreadPk)
          ? d.IN_PROGRESS
          : d.READY;
    }
    function L(t) {
      if (t == null) return c.MISSING;
      var n = (e || (e = o("LSIntEnum"))).toNumber(t.authorityLevel);
      return n === r("LSAuthorityLevel").AUTHORITATIVE
        ? c.READY
        : n === r("LSAuthorityLevel").OPTIMISTIC
          ? c.OPTIMISTIC
          : c.PARTIAL;
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield e.mi_act_mapping_table.put({
            clientThreadPk: (s || (s = o("I64"))).neg(t),
            jid: n,
            serverThreadKey: t,
          });
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return (s || (s = o("I64"))).lt(e, s.zero);
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.jid,
            a = t.threadKey;
          (n === void 0 && (n = null),
            yield x(
              e,
              { intJid: o("MAWJids").convertChatJidToIntJid(r), threadKey: a },
              n,
            ));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.intJid,
            a = t.threadKey;
          (n === void 0 && (n = null),
            n != null &&
              o("MAWThreadMappingQPL").addPoint("insert_mapping_row", n),
            yield e.mi_act_mapping_table.put({
              clientThreadPk: r,
              jid: r,
              serverThreadKey: a,
            }));
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return m(e, t).then(function (e) {
        var t = e.mappingState,
          n = e.threadKey;
        return t.miState === c.MISSING ? null : n;
      });
    }
    ((l.MiState = c),
      (l.ActState = d),
      (l.genLoadingStateFromJid = _),
      (l.genThreadLoadingState = g),
      (l.getThreadLoadingStateForDbRows = y),
      (l.isReady = C),
      (l.isMiOptimistic = b),
      (l.isMiReady = v),
      (l.isActReady = S),
      (l.getActState = R),
      (l.markActThreadLoadingAsInProgress = E),
      (l.markActThreadLoadingAsCompletedForJid = T),
      (l.markActThreadLoadingAsCompleted = x),
      (l.getThreadKeyIfMiThreadNotMissing = P));
  },
  98,
);
