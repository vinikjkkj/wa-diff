__d(
  "MAWMpsReadSideEffects",
  [
    "MessageReferencesFromMediaEntry",
    "MpsErrors",
    "MpsMediaEntryCache",
    "WmiErrorFixesGate",
    "WmiMediaService",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.persistToReverb !== "no-persist" && t.strategy !== "local-only";
      o("WmiErrorFixesGate").wmiMapIsolatedIfFixed(
        e,
        function (e) {
          var t;
          return e == null || (t = e.toplevelProtobuf) == null
            ? void 0
            : t.messageId;
        },
        function (e) {
          if ((e == null ? void 0 : e.toplevelProtobuf) != null) {
            var t = o("MpsMediaEntryCache").hydrateCache(e.toplevelProtobuf);
            if (n) {
              var r = o(
                "MessageReferencesFromMediaEntry",
              ).getMessageReferencesFromMediaEntries(t);
              (o("WmiMediaService").mediaService().storeMessageReferences(r),
                o("WmiMediaService")
                  .mediaService()
                  .enqueueMediaDownload(
                    t.map(function (e) {
                      return {
                        e2eePlatform: e.e2eePlatform,
                        plaintextHash: e.plaintextHash,
                      };
                    }),
                  ));
            }
          }
        },
        function (e, t) {
          return o("MpsErrors").MpsErrors.classify(e, t, "read_failed");
        },
        "read_side_effects",
      );
    }
    l.readSideEffects = e;
  },
  98,
);
