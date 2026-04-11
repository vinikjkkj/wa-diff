__d(
  "WAWebKaleidoscopeWasmFeatureSupport",
  ["asyncToGeneratorRuntime", "wasm-feature-detect"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (e != null) return e;
          var t = yield o("wasm-feature-detect").bulkMemory(),
            n = yield o("wasm-feature-detect").bigInt(),
            r = yield o("wasm-feature-detect").referenceTypes();
          return ((e = t && n && r), e);
        })),
        u.apply(this, arguments)
      );
    }
    l.checkKaleidoscopeWasmFeatureSupport = s;
  },
  98,
);
