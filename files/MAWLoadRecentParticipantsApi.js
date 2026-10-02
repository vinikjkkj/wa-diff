__d(
  "MAWLoadRecentParticipantsApi",
  ["MAWInMemoryThreadStore", "Promise", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (r, a) {
        var t = [];
        return (
          o("MAWInMemoryThreadStore")
            .getNonTxReadonlyInMemoryThreadStore()
            .getAll()
            .filter(function (e) {
              return o("WAJids").interpretAsGroupJid(e.jid) == null;
            })
            .sort(function (e, t) {
              return t.threadOrder.localeCompare(e.threadOrder);
            })
            .slice(0, r)
            .forEach(function (e) {
              var n = o("WAJids").interpretAsUserJid(e.jid);
              n != null && n !== a && t.push(n);
            }),
          (e || (e = n("Promise"))).resolve(new Set(t))
        );
      };
    l.loadRecentParticipants = s;
  },
  98,
);
