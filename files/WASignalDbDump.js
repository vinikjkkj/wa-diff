__d(
  "WASignalDbDump",
  ["WASignalDB", "WormDump"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = o("WASignalDB").getDb();
      return t.dump({
        contacts: {
          customFields: {
            lastSyncTs: (e = o("WormDump")).wormNonSensitiveField,
          },
          limit: 2e3,
        },
        meta: { customFields: { key: e.wormNonSensitiveField } },
        prekey: {
          customFields: {
            keyId: e.wormNonSensitiveField,
            isDeleted: e.wormNonSensitiveField,
          },
        },
        prekeyGeneration: {
          customFields: {
            createdTs: e.wormNonSensitiveField,
            generationId: e.wormNonSensitiveField,
            startingId: e.wormNonSensitiveField,
            endingId: e.wormNonSensitiveField,
          },
        },
      });
    }
    l.debugGetSignalDbDump = e;
  },
  98,
);
