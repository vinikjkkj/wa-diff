__d(
  "GetKeyTransparencyWasm",
  ["WAWasmModuleCache", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("bx").getURL(r("bx")("77770")),
      s = function () {
        return o("WAWasmModuleCache").loadWasmModule(e);
      };
    l.getKeyTransparencyWasm = s;
  },
  98,
);
