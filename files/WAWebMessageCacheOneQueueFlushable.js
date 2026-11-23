__d(
  "WAWebMessageCacheOneQueueFlushable",
  ["WAWebGetMessageCache", "WAWebSignalProtocolStore"],
  function (t, n, r, o, a, i, l) {
    var e = {
      flush: async function (t, n, r, a) {
        var e = o("WAWebGetMessageCache").getMessageCache();
        (e.createSnapshot(),
          (a === "endOfOQ" ||
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .hasPendingPersistWrites()) &&
            (await e.checkpointQueueWait()));
      },
    };
    l.messageCacheOneQueueFlushable = e;
  },
  98,
);
