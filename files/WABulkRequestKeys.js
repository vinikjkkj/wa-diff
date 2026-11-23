__d(
  "WABulkRequestKeys",
  ["WACryptoLibraryConfig", "WAFetchPreKeyBundlesProtocol", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = o("WACryptoLibraryConfig").getCryptoLibraryConfig()
          .isPq1on1MessageEnabled,
        n = await o("WAFetchPreKeyBundlesProtocol").fetchPreKeyBundlesProtocol(
          e,
          t,
        );
      return n.success
        ? o("WAResultOrError").makeResult(n.value)
        : o("WAResultOrError").makeError("errRequestKeysParsingFailed");
    }
    l.bulkRequestKeys = e;
  },
  98,
);
