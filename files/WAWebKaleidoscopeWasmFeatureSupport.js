__d(
  "WAWebKaleidoscopeWasmFeatureSupport",
  ["wasm-feature-detect"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    async function s() {
      if (e != null) return e;
      var t = await o("wasm-feature-detect").bulkMemory(),
        n = await o("wasm-feature-detect").bigInt(),
        r = await o("wasm-feature-detect").referenceTypes();
      return ((e = t && n && r), e);
    }
    l.checkKaleidoscopeWasmFeatureSupport = s;
  },
  98,
);
