__d(
  "MAWMiActMappingTableAPI",
  [
    "I64",
    "LSMessagingThreadTypeUtil",
    "MAWJids",
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return t == null
        ? (s || (s = n("Promise"))).resolve(null)
        : o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(t),
          );
    }
    function c(e, t, n) {
      return u(e, t).then(function (e) {
        var t = e == null ? void 0 : e.jid;
        return t == null
          ? null
          : o("MAWJids").convertIntJidToChatJid(
              t,
              o("LSMessagingThreadTypeUtil").isGroup(n),
            );
      });
    }
    function d(e, t) {
      return p(e, t).then(function (e) {
        return e == null ? void 0 : e.serverThreadKey;
      });
    }
    function m(e, t) {
      return t == null
        ? (s || (s = n("Promise"))).resolve(null)
        : o("ReQL").firstAsync(
            o("ReQL")
              .fromTableAscending(e.mi_act_mapping_table.index("jid"))
              .getKeyRange(t),
          );
    }
    function p(e, t) {
      return m(e, o("MAWJids").convertChatJidToIntJid(t));
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.intJid,
            r = t.threadKey,
            o = yield u(e, r);
          return o != null ? o : m(e, n);
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      return (e || (e = o("I64"))).le(t, e.zero);
    }
    function h(e, t) {
      return e.tables.mi_act_mapping_table.subscribe(function (e, n) {
        var r = e[0],
          o = e[1],
          a = e[2],
          i = n.operation;
        i === "delete" && !g(o) && t(o, r);
      });
    }
    ((l.getMappingRowForThreadKey = u),
      (l.getChatJidForThreadKey = c),
      (l.getThreadKeyForChatJid = d),
      (l.getMappingRowForIntJid = m),
      (l.getMappingRowForChatJid = p),
      (l.getMappingRowForThreadKeyOrJid = _),
      (l.subscribeToMappingDeletion = h));
  },
  98,
);
