__d(
  "EBGetMinosWasm",
  ["WAWasmModuleCache", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("bx").getURL(r("bx")("31853")),
      s = function () {
        return o("WAWasmModuleCache").loadWasmModule(e);
      };
    l.getMinosWasm = s;
  },
  98,
);
