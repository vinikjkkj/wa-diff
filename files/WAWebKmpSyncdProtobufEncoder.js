__d(
  "WAWebKmpSyncdProtobufEncoder",
  ["WASyncdKmpConversion", "wa-kmp-syncd-engine-crypto-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("WASyncdKmpConversion").toKmpSyncdActionData(e, t);
    }
    var s = new (o(
      "wa-kmp-syncd-engine-crypto-api",
    ).JsKmpSyncdProtobufProviderImpl)({
      encodeMutationDataToSyncdActionData: e,
    });
    l.default = s;
  },
  98,
);
