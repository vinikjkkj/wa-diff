__d(
  "WASmaxOfflineBatchRPC",
  ["WAComms", "WASmaxJsx", "WAWap", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = u(e);
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = e.offlineBatchCount,
        n = o("WASmaxJsx").smax(
          "ib",
          null,
          o("WASmaxJsx").smax("offline_batch", { count: o("WAWap").INT(t) }),
        );
      return n;
    }
    ((l.sendBatchRPC = e), (l.makeBatchRequest = u));
  },
  98,
);
