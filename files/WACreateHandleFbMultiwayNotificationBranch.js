__d(
  "WACreateHandleFbMultiwayNotificationBranch",
  ["WAResultOrError", "WASmaxMultiwaydMultiwayNotificationRPC", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (n) {
        var t = o(
            "WASmaxMultiwaydMultiwayNotificationRPC",
          ).receiveMultiwayNotificationRPC(n),
          r = t.makeMultiwayNotificationResponseAck,
          a = t.parsedRequest,
          i = a.from,
          l = a.id,
          s = a.multiwayBinaryVersion,
          u = a.multiwayElementValue,
          c = a.multiwayTransactionId,
          d = a.offline,
          m = a.t;
        return e({
          domainJid: i,
          multiwayTransactionId: c,
          multiwayBinaryVersion: s,
          multiwayElementValue: u,
          offline: d,
          serverTs: o("WATimeUtils").castToUnixTime(m),
          id: l,
          makeAck: r,
        }).then(o("WAResultOrError").makeResult);
      };
    }
    l.createHandleFbMultiwayNotification = e;
  },
  98,
);
