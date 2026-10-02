__d(
  "WASendAppdataRetryReceipt",
  ["WAReceiptUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = t.from,
        r = t.retryCount,
        a = t.serverTs,
        i = t.stanzaId;
      return o("WAReceiptUtils").sendRetryReceipt(
        {
          category: "peer_appdata",
          deviceIdentity: null,
          externalId: i,
          from: { deviceJid: e, type: "device" },
          participant: null,
          recipient: null,
          retryCount: r,
          ts: a,
        },
        n,
      );
    };
    l.sendAppdataRetryReceiptProtocol = e;
  },
  98,
);
