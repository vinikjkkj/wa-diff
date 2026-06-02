__d(
  "WAWebKmpSyncdIncomingMutationHandler",
  ["WAWebKmpBridgeResultWrappers", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      applyDecryptedMutations: function (t, n, r, a, i) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          async function () {
            return new (o(
              "wa-kmp-syncd-engine-api",
            ).ApplyDecryptedMutationsResult)(!0);
          },
        );
      },
    };
    l.incomingMutationHandler = e;
  },
  98,
);
