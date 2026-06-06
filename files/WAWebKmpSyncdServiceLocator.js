__d(
  "WAWebKmpSyncdServiceLocator",
  [
    "WAWebKmpAbProps",
    "WAWebKmpBuildInfo",
    "WAWebKmpCryptoProvider",
    "WAWebKmpDerivedSyncdKeysProvider",
    "WAWebKmpExternalMutationDownloader",
    "WAWebKmpExternalMutationUploader",
    "WAWebKmpHKDF",
    "WAWebKmpIncomingCollectionsJobQueue",
    "WAWebKmpLidMutationHelper",
    "WAWebKmpLog",
    "WAWebKmpMeManager",
    "WAWebKmpMutationProcessorStore",
    "WAWebKmpSyncdIncomingMutationHandler",
    "WAWebKmpSyncdKeyManager",
    "WAWebKmpWamLogger",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      var e = {
        abProps: o("WAWebKmpAbProps").abProps,
        buildInfo: await o("WAWebKmpBuildInfo").getBuildInfo(),
        cryptoProvider: o("WAWebKmpCryptoProvider").cryptoProvider,
        derivedSyncdKeysProvider: o("WAWebKmpDerivedSyncdKeysProvider")
          .derivedSyncdKeysProvider,
        externalMutationDownloader: o("WAWebKmpExternalMutationDownloader")
          .externalMutationDownloader,
        externalMutationUploader: o("WAWebKmpExternalMutationUploader")
          .externalMutationUploader,
        incomingCollectionsJobQueue: o("WAWebKmpIncomingCollectionsJobQueue")
          .incomingCollectionsJobQueue,
        kmpHKDF: o("WAWebKmpHKDF").kmpHKDF,
        lidMutationHelper: o("WAWebKmpLidMutationHelper").lidMutationHelper,
        log: o("WAWebKmpLog").log,
        meManager: o("WAWebKmpMeManager").meManager,
        mutationProcessorStore: o("WAWebKmpMutationProcessorStore")
          .mutationProcessorStore,
        syncdKeyManager: o("WAWebKmpSyncdKeyManager").syncdKeyManager,
        wamLogger: await o("WAWebKmpWamLogger").getWamLogger(),
        incomingMutationHandler: o("WAWebKmpSyncdIncomingMutationHandler")
          .incomingMutationHandler,
      };
      o("wa-kmp-syncd-engine-api").JsKmpSyncdServiceLocator.init(e);
    }
    function u() {
      return o(
        "wa-kmp-syncd-engine-api",
      ).JsKmpSyncdServiceLocator.isInitialized();
    }
    async function c() {
      u() || (await s());
    }
    async function d() {
      return (
        await c(),
        e == null &&
          (e = new (o("wa-kmp-syncd-engine-api").JsOutgoingProcessor)()),
        e
      );
    }
    l.getOutgoingProcessor = d;
  },
  98,
);
