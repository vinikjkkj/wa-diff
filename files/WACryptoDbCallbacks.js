__d(
  "WACryptoDbCallbacks",
  [
    "WABulkSaveSignalDataApi",
    "WADeletePreKeyGenerationsApi",
    "WAGetLastPreKeyGenerationIdApi",
    "WAGetPreKeyGenerationsTimestampsApi",
    "WALoadIdentitiesApi",
    "WALoadLastSyncTsApi",
    "WALoadLatestSignedPreKeyApi",
    "WALoadOneTimePreKeyApi",
    "WALoadPreKeysApi",
    "WALoadSenderKeySessionApi",
    "WALoadSignedPreKeyApi",
    "WASaveOneTimePreKeyApi",
    "WASavePreKeysGenerationApi",
    "WASaveSignedPreKeyIfNewApi",
    "WASessionApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return {
        bulkLoadIdentities: o("WALoadIdentitiesApi").bulkLoadIdentities,
        bulkSaveSignalData: o("WABulkSaveSignalDataApi").bulkSaveSignalData,
        deletePreKeyGenerations: o("WADeletePreKeyGenerationsApi")
          .deletePreKeyGenerations,
        getLastPreKeyGenerationId: o("WAGetLastPreKeyGenerationIdApi")
          .getLastPreKeyGenerationId,
        getPreKeyGenerationsTimestamps: o("WAGetPreKeyGenerationsTimestampsApi")
          .getPreKeyGenerationsTimestamps,
        loadIdentities: o("WALoadIdentitiesApi").loadIdentities,
        loadLastSyncTs: o("WALoadLastSyncTsApi").loadLastSyncTs,
        loadLatestSignedPreKey: o("WALoadLatestSignedPreKeyApi")
          .loadLatestSignedPreKey,
        loadOneTimePreKey: o("WALoadOneTimePreKeyApi").loadOneTimePreKey,
        loadPreKeys: o("WALoadPreKeysApi").loadPreKeys,
        loadSenderKeySession: o("WALoadSenderKeySessionApi")
          .loadSenderKeySession,
        loadSession: o("WASessionApi").loadSession,
        loadSessions: o("WASessionApi").bulkLoadSession,
        loadSignedPreKey: o("WALoadSignedPreKeyApi").loadSignedPreKey,
        saveOneTimePreKey: o("WASaveOneTimePreKeyApi").saveOneTimePreKey,
        savePreKeysGeneration: o("WASavePreKeysGenerationApi")
          .savePreKeysGeneration,
        saveSignedPreKeyIfNew: o("WASaveSignedPreKeyIfNewApi")
          .saveSignedPreKeyIfNew,
      };
    };
    l.getCryptoDbCallbacks = e;
  },
  98,
);
