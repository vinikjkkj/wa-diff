__d(
  "MpsCacheServicesPostProcessors",
  ["MpsWorkerCacheServices", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return (
        o("MpsWorkerCacheServices")
          .getMpsWorkerCacheServices()
          .calculateDelta(t),
        (e || (e = n("Promise"))).resolve(new Map())
      );
    }
    var u = { name: "MpsCacheServicesPostProcessor", process: s };
    l.MpsCacheServicesPostProcessor = u;
  },
  98,
);
