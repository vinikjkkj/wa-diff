__d(
  "BDCometSignalCollectionTrigger",
  [
    "BDClientSignalCollectionTrigger",
    "BDSignalCollectionData",
    "FBLogger",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("BDClientSignalCollectionTrigger")
        .startSignalCollection(r("BDSignalCollectionData"))
        .catch(function (e) {
          r("FBLogger")("bot_detection")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to start signal collection");
        });
    }
    l.initSignalCollection = e;
  },
  98,
);
