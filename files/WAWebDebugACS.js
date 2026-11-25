__d(
  "WAWebDebugACS",
  [
    "WAWebACSNetwork",
    "WAWebFetchOHAIKeyConfigJob",
    "WAWebMusicCreationReportingDebug",
    "WAWebOHAIClient",
    "WAWebOHAIKeyConfigProvider",
    "WAWebRedeemACSCredential",
    "WAWebRedeemACSToken",
    "WAWebSNAPLUserPrefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      redeemACSCredential: o("WAWebRedeemACSCredential").redeemACSCredential,
      redeemACSToken: o("WAWebRedeemACSToken").redeemACSToken,
      mexFetchOHAIKeyConfig: o("WAWebFetchOHAIKeyConfigJob")
        .mexFetchOHAIKeyConfig,
      provideOHAIKeyConfig: o("WAWebOHAIKeyConfigProvider")
        .provideOHAIKeyConfig,
      getSNAPLPersistentId: o("WAWebSNAPLUserPrefs").getSNAPLPersistentId,
      fetchOHAI: o("WAWebOHAIClient").fetchOHAI,
      fetchWithACSCredential: o("WAWebACSNetwork").fetchWithACSCredential,
      enableStubbedMusicCreationReporting: o("WAWebMusicCreationReportingDebug")
        .enableStubbedCreationReporting,
    };
    l.default = e;
  },
  98,
);
