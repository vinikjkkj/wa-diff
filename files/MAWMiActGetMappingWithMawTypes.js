__d(
  "MAWMiActGetMappingWithMawTypes",
  ["I64", "MAWJids", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var r = (e || (e = o("I64"))).to_string(t.jid),
        a = n ? o("WAJids").toGroupJid(r) : o("MAWJids").toUserJid(r);
      return {
        clientThreadPk: t.clientThreadPk,
        jid: a,
        serverThreadKey: t.serverThreadKey,
      };
    }
    l.default = s;
  },
  98,
);
