__d(
  "WAWebMessageCacheOneQueueFlushable",
  [
    "WAWebGetMessageCache",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      flush: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WAWebGetMessageCache").getMessageCache();
            (a.createSnapshot(),
              (r === "endOfOQ" ||
                o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .hasPendingPersistWrites()) &&
                (yield a.checkpointQueueWait()));
          },
        );
        function t(t, n, r, o) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.messageCacheOneQueueFlushable = e;
  },
  98,
);
