__d(
  "MAWHandleFbMultiwayNotification",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = function (t) {
        var e = t.domainJid,
          n = t.id,
          r = t.makeAck,
          o = t.multiwayBinaryVersion,
          a = t.multiwayElementValue,
          i = t.multiwayTransactionId,
          l = t.offline,
          u = t.serverTs;
        return s({
          domainJid: e,
          id: n,
          makeAck: r,
          multiwayBinaryVersion: o,
          multiwayElementValue: a,
          multiwayTransactionId: i,
          offline: l,
          serverTs: u,
        });
      };
    function s(t) {
      return (e || (e = n("Promise"))).resolve(t.makeAck());
    }
    i.handleFbMultiwayNotification = l;
  },
  66,
);
