__d(
  "WAPreloadWebpCheckWasm",
  ["WAWasmModuleCache", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("bx").getURL(r("bx")("6946")),
      s = function () {
        o("WAWasmModuleCache").loadWasmModule(e);
      };
    l.preloadWebpCheckWasm = s;
  },
  98,
);
