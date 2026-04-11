__d(
  "WAWebHandleAckPeerSimpleReceipt",
  ["WAWebApiPeerMessageStore", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebApiPeerMessageStore").deletePeerMessage(e.stanzaId);
        })),
        s.apply(this, arguments)
      );
    }
    l.handleAckPeerSimpleReceipt = e;
  },
  98,
);
