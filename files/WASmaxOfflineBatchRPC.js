__d(
  "WASmaxOfflineBatchRPC",
  ["WAComms", "WASmaxOutOfflineBatchRequest", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WASmaxOutOfflineBatchRequest").makeBatchRequest(e);
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    l.sendBatchRPC = e;
  },
  98,
);
