__d(
  "WebStorageEstimator",
  ["FBLogger", "Promise", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (
        navigator.storage != null &&
        typeof navigator.storage.estimate == "function"
      )
        try {
          return navigator.storage.estimate();
        } catch (t) {
          return (
            r("FBLogger")("comet_infra")
              .catching(r("getErrorSafe")(t))
              .mustfix("Error while trying to estimate storage"),
            (e || (e = n("Promise"))).resolve(null)
          );
        }
      return (
        r("FBLogger")("comet_infra").info(
          "Storage Estimation API is not available",
        ),
        (e || (e = n("Promise"))).resolve(null)
      );
    }
    l.estimateStorage = s;
  },
  98,
);
