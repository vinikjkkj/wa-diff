__d(
  "WASmaxOfflineBatchRPC",
  ["WAComms", "WASmaxOutOfflineBatchRequest"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutOfflineBatchRequest").makeBatchRequest(e);
      await o("WAComms").castSmaxStanza(t);
    }
    l.sendBatchRPC = e;
  },
  98,
);
