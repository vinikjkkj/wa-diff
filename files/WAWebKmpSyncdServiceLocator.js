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
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = {
            abProps: o("WAWebKmpAbProps").abProps,
            buildInfo: yield o("WAWebKmpBuildInfo").getBuildInfo(),
            cryptoProvider: o("WAWebKmpCryptoProvider").cryptoProvider,
            derivedSyncdKeysProvider: o("WAWebKmpDerivedSyncdKeysProvider")
              .derivedSyncdKeysProvider,
            externalMutationDownloader: o("WAWebKmpExternalMutationDownloader")
              .externalMutationDownloader,
            externalMutationUploader: o("WAWebKmpExternalMutationUploader")
              .externalMutationUploader,
            incomingCollectionsJobQueue: o(
              "WAWebKmpIncomingCollectionsJobQueue",
            ).incomingCollectionsJobQueue,
            kmpHKDF: o("WAWebKmpHKDF").kmpHKDF,
            lidMutationHelper: o("WAWebKmpLidMutationHelper").lidMutationHelper,
            log: o("WAWebKmpLog").log,
            meManager: o("WAWebKmpMeManager").meManager,
            mutationProcessorStore: o("WAWebKmpMutationProcessorStore")
              .mutationProcessorStore,
            syncdKeyManager: o("WAWebKmpSyncdKeyManager").syncdKeyManager,
            wamLogger: yield o("WAWebKmpWamLogger").getWamLogger(),
            incomingMutationHandler: o("WAWebKmpSyncdIncomingMutationHandler")
              .incomingMutationHandler,
          };
          o("wa-kmp-syncd-engine-api").JsKmpSyncdServiceLocator.init(e);
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return o(
        "wa-kmp-syncd-engine-api",
      ).JsKmpSyncdServiceLocator.isInitialized();
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          c() || (yield s());
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield d(),
            e == null &&
              (e = new (o("wa-kmp-syncd-engine-api").JsOutgoingProcessor)()),
            e
          );
        })),
        _.apply(this, arguments)
      );
    }
    l.getOutgoingProcessor = p;
  },
  98,
);
