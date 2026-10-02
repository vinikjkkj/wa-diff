__d(
  "WAHandleThreadMetadata",
  ["WAGlobals", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            return e.from;
          });
          yield o("WAGlobals")
            .getWaOneQueue()
            .enqueue(
              function (e) {
                var n = e.cryptoManager;
                return n.storage.warmCache(t);
              },
              { operationType: "thread_metadata", flush: !1 },
            );
        })),
        s.apply(this, arguments)
      );
    }
    l.handleThreadMetadata = e;
  },
  98,
);
