__d(
  "WAWebHandleAckPeerSimpleReceipt",
  ["WAWebApiPeerMessageStore"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await o("WAWebApiPeerMessageStore").deletePeerMessage(e.stanzaId);
    }
    l.handleAckPeerSimpleReceipt = e;
  },
  98,
);
