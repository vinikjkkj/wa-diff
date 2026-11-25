__d(
  "EBMinosCheckWasmFeatureSupport",
  ["err", "gkx", "wasm-feature-detect"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    async function s() {
      if (e != null) return e;
      var t = await o("wasm-feature-detect").bulkMemory(),
        n = await o("wasm-feature-detect").bigInt(),
        r = await o("wasm-feature-detect").referenceTypes();
      return ((e = t && n && r), e);
    }
    function u() {
      if (e == null) throw r("err")("WASM feature support not checked");
      return e;
    }
    async function c() {
      var e = await s();
      if (!e) return !1;
      var t = r("gkx")("20879") || r("gkx")("17219");
      return t;
    }
    async function d() {
      var e = await s();
      if (!e) return !1;
      var t = r("gkx")("20879");
      return t;
    }
    async function m() {
      var e = await s();
      return !!e;
    }
    ((l.checkWasmFeatureSupport = s),
      (l.getWasmFeatureSupport = u),
      (l.checkWasmAndMinosRolloutKeyCreateGK = c),
      (l.checkWasmFeatureSupportAndGK = d),
      (l.checkWasmFeatureSupportAndEBInitJK = m));
  },
  98,
);
