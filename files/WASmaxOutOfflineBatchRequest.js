__d(
  "WASmaxOutOfflineBatchRequest",
  ["WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.offlineBatchCount,
        n = o("WASmaxJsx").smax(
          "ib",
          null,
          o("WASmaxJsx").smax("offline_batch", { count: o("WAWap").INT(t) }),
        );
      return n;
    }
    l.makeBatchRequest = e;
  },
  98,
);
