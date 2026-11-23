__d(
  "MpsReverbDbDump",
  ["WebReverbDB", "WormDump"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = o("WebReverbDB").getWebReverbDB();
      return t.dump({
        dbMetadata: {
          customFields: {
            mawDBMigrationCurrentMessageId: (e = o("WormDump"))
              .wormNonSensitiveField,
            mawDBMigrationCurrentThread: e.wormNonSensitiveField,
            mawDBMigrationStartMs: e.wormNonSensitiveField,
            mawDBMigrationState: e.wormNonSensitiveField,
            pk: e.wormNonSensitiveField,
          },
        },
        deleted: {
          customFields: {
            deletedMessageId: e.wormNonSensitiveField,
            deletionMessageId: e.wormNonSensitiveField,
            deletionTimestampMs: e.wormNonSensitiveField,
            isLocalOnlyMessage: e.wormNonSensitiveField,
            pk: e.wormNonSensitiveField,
            supplementalKey: e.wormNonSensitiveField,
            threadId: e.wormNonSensitiveField,
            timestampMs: e.wormNonSensitiveField,
            topLevelMessageId: e.wormNonSensitiveField,
          },
          limit: 1e3,
        },
        message: {
          customFields: {
            debugFlags: e.wormNonSensitiveField,
            expiryTimestampMs: e.wormNonSensitiveField,
            isLocalOnlyMessage: e.wormNonSensitiveField,
            isTransportErrorPlaceholder: e.wormNonSensitiveField,
            messageId: e.wormNonSensitiveField,
            pk: e.wormNonSensitiveField,
            senderId: e.wormNonSensitiveField,
            threadId: e.wormNonSensitiveField,
            timestampMs: e.wormNonSensitiveField,
          },
          limit: 2500,
        },
        supplemental: {
          customFields: {
            messageId: e.wormNonSensitiveField,
            pk: e.wormNonSensitiveField,
            supplementalKey: e.wormNonSensitiveField,
            threadId: e.wormNonSensitiveField,
            timestampMs: e.wormNonSensitiveField,
            topLevelMessageId: e.wormNonSensitiveField,
          },
          limit: 1e3,
        },
        tags: {
          customFields: {
            messageId: e.wormNonSensitiveField,
            messagePk: e.wormNonSensitiveField,
            pk: e.wormNonSensitiveField,
            threadId: e.wormNonSensitiveField,
            timestampMs: e.wormNonSensitiveField,
          },
          limit: 1e3,
        },
      });
    }
    l.debugGetReverbDbDump = e;
  },
  98,
);
