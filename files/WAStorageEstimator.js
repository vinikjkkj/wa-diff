__d(
  "WAStorageEstimator",
  ["Promise", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return navigator.storage != null &&
        typeof navigator.storage.estimate == "function"
        ? navigator.storage
            .estimate()
            .then(function (e) {
              return o("WAResultOrError").makeResult(e);
            })
            .catch(function (e) {
              return o("WAResultOrError").makeError({
                type: "runtime-error",
                runtimeError: e,
              });
            })
        : (e || (e = n("Promise"))).resolve(
            o("WAResultOrError").makeError({ type: "not-support" }),
          );
    }
    l.estimateStorage = s;
  },
  98,
);
