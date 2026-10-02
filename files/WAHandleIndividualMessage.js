__d(
  "WAHandleIndividualMessage",
  ["WAReceiptUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = t.author,
        r = t.chat,
        a = t.deviceIdentity,
        i = t.from,
        l = t.retryCount,
        s = t.serverTs,
        u = t.stanzaId,
        c = e === "@me";
      return o("WAReceiptUtils").sendRetryReceipt(
        {
          category: null,
          externalId: u,
          from: { deviceJid: i, type: "device" },
          participant: null,
          recipient: c ? r : null,
          retryCount: l,
          ts: s,
          deviceIdentity: a,
        },
        n,
      );
    };
    l.sendIndividualMessageRetryReceipt = e;
  },
  98,
);
