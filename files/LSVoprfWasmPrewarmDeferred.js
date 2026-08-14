__d(
  "LSVoprfWasmPrewarmDeferred",
  ["WAWasmModuleCache", "asyncToGeneratorRuntime", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("LSVoprfWasm").__setRef(
      "LSVoprfWasmPrewarmDeferred",
    );
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield e.load(),
            n = t.locateFile;
          yield o("WAWasmModuleCache").loadWasmModule(n());
        })),
        u.apply(this, arguments)
      );
    }
    l.prewarmAcsVoprfWasmModule = s;
  },
  98,
);
