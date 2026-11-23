__d(
  "WAHandleThreadMetadata",
  ["WAGlobals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.map(function (e) {
        return e.from;
      });
      await o("WAGlobals")
        .getWaOneQueue()
        .enqueue(
          function (e) {
            var n = e.cryptoManager;
            return n.storage.warmCache(t);
          },
          { operationType: "thread_metadata", flush: !1 },
        );
    }
    l.handleThreadMetadata = e;
  },
  98,
);
