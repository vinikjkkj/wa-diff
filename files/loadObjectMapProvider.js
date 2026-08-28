__d(
  "loadObjectMapProvider",
  ["LoadObjectMap", "LoadObjectMapMutationUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        return r("LoadObjectMap").create(
          o("LoadObjectMapMutationUtil").loadAllFn(t, e),
        );
      };
    }
    ((e.keyed = function (e, t) {
      return function (n) {
        return r("LoadObjectMap").createKeyed(
          o("LoadObjectMapMutationUtil").loadAllFnWithSingleKeyLoader(n, e),
          t,
        );
      };
    }),
      (e.withSingleKeyLoader_USE_SPARINGLY = function (e) {
        return function (t) {
          return r("LoadObjectMap").create(
            o("LoadObjectMapMutationUtil").loadAllFnWithSingleKeyLoader(t, e),
          );
        };
      }),
      (l.default = e));
  },
  98,
);
