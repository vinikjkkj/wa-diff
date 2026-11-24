__d(
  "WAWebMessageCacheOneQueueFlushable",
  ["WAWebGetMessageCache", "WAWebSignalProtocolStore"],
  function (t, n, r, o, a, i, l) {
    var e = {
      flush: async function (t, n, r, a) {
        var e =
          a === "endOfOQ" ||
          o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .hasPendingPersistWrites();
        if (!(a === "offlineBatch" && !e)) {
          var i = o("WAWebGetMessageCache").getMessageCache();
          (i.createSnapshot(), e && (await i.checkpointQueueWait()));
        }
      },
    };
    l.messageCacheOneQueueFlushable = e;
  },
  98,
);
