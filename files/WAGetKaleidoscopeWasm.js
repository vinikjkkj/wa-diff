__d(
  "WAGetKaleidoscopeWasm",
  ["WAWasmModuleCache", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("bx").getURL(r("bx")("33861")),
      s = function () {
        return o("WAWasmModuleCache").loadWasmModule(e);
      };
    l.getKaleidoscopeWasm = s;
  },
  98,
);
