__d(
  "MpsMediaPostProcessor",
  [
    "MessageReferencesFromMediaEntry",
    "MpsErrors",
    "MpsMediaEntryCache",
    "MpsReceiverFetchHydration",
    "MpsTypes",
    "WmiMediaService",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t = o("MpsMediaEntryCache").hydrateCache(e.message),
          n = o(
            "MessageReferencesFromMediaEntry",
          ).getMessageReferencesFromMediaEntries(t);
        (o("WmiMediaService").mediaService().storeMessageReferences(n),
          e.insertionSource === o("MpsTypes").InsertionSource.Receive &&
            (o("MpsReceiverFetchHydration").hydrateReceiverFetchInfoFromMessage(
              e.message,
            ),
            o("WmiMediaService")
              .mediaService()
              .enqueueMediaDownload(
                t.map(function (e) {
                  return {
                    e2eePlatform: e.e2eePlatform,
                    plaintextHash: e.plaintextHash,
                  };
                }),
              )));
      } catch (e) {
        return o("MpsErrors").MpsErrors.classify(
          e,
          "media_postprocessor",
          "write_failed",
        );
      }
    }
    function s(t) {
      var n = new Map();
      return (
        t.forEach(function (t) {
          var r = e(t);
          r != null && n.set(t.message.messageId, r);
        }),
        n
      );
    }
    l.postProcessPayloads = s;
  },
  98,
);
