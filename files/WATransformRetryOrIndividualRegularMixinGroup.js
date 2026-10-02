__d(
  "WATransformRetryOrIndividualRegularMixinGroup",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        retryCount: e.name === "Retry" ? e.value.encEncRetryMixin.count : 0,
        ciphertext: e.value.encEncTypeIndividualMixin.elementValue,
        encVersion: String(e.value.encEncVersion.value.v),
        encType: e.value.encEncTypeIndividualMixin.type,
      };
    }
    i.transformRetryOrIndividualRegularMixinGroup = e;
  },
  66,
);
