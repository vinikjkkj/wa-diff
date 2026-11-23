__d(
  "WAPreloadWamediaUtilsWasm",
  ["WAMediaUtilsWasmUrl", "WAWasmModuleCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      o("WAWasmModuleCache").loadWasmModule(
        o("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl,
      );
    };
    l.preloadWamediaUtilsWasm = e;
  },
  98,
);
