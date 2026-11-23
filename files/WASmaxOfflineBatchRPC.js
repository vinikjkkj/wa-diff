__d(
  "WASmaxOfflineBatchRPC",
  ["WAComms", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
      var t = e.offlineBatchCount,
        n = o("WASmaxJsx").smax(
          "ib",
          null,
          o("WASmaxJsx").smax("offline_batch", { count: o("WAWap").INT(t) }),
        );
      return n;
    }
    ((l.sendBatchRPC = e), (l.makeBatchRequest = s));
  },
  98,
);
