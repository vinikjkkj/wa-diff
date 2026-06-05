__d(
  "WAWebDebugACS",
  [
    "WAWebACSNetwork",
    "WAWebFetchOHAIKeyConfigJob",
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
    };
    l.default = e;
  },
  98,
);
