__d(
  "EBGetLabyrinthWaWasm",
  ["WAWasmModuleCache", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("bx").getURL(r("bx")("47418")),
      s = function () {
        return o("WAWasmModuleCache").loadWasmModule(e);
      };
    l.getLabyrinthWaWasm = s;
  },
  98,
);
