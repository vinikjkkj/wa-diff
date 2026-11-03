__d(
  "LSVoprfWasmPrewarmDeferred",
  ["WAWasmModuleCache", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("LSVoprfWasm").__setRef(
      "LSVoprfWasmPrewarmDeferred",
    );
    async function s() {
      var t = await e.load(),
        n = t.locateFile;
      await o("WAWasmModuleCache").loadWasmModule(n());
    }
    l.prewarmAcsVoprfWasmModule = s;
  },
  98,
);
