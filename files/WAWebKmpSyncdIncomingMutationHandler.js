__d(
  "WAWebKmpSyncdIncomingMutationHandler",
  [
    "WAWebKmpBridgeResultWrappers",
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      applyDecryptedMutations: function (t, r, a, i, l) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return new (o(
              "wa-kmp-syncd-engine-api",
            ).ApplyDecryptedMutationsResult)(!0);
          }),
        );
      },
    };
    l.incomingMutationHandler = e;
  },
  98,
);
