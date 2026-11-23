__d(
  "MAWWarmInMemoryParticipantStore",
  [
    "FBLogger",
    "MAWGetLatestChatJids",
    "MAWInMemoryParticipantStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30;
    async function s() {
      try {
        var t = await o("MAWGetLatestChatJids").getLatestChatJids(e);
        if (t.length === 0) return;
        await o("MAWInMemoryParticipantStore").hydrateParticipantsStoreFromLSDB(
          t,
        );
      } catch (e) {
        r("FBLogger")("wmi")
          .catching(r("getErrorSafe")(e))
          .warn(
            "Failed to warm in-memory participants store from recent threads",
          );
      }
    }
    l.warmInMemoryParticipantStoreFromRecentThreads = s;
  },
  98,
);
