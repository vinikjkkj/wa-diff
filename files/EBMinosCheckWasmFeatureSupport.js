__d(
  "EBMinosCheckWasmFeatureSupport",
  ["asyncToGeneratorRuntime", "err", "gkx", "wasm-feature-detect"],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
    function c() {
      if (e == null) throw r("err")("WASM feature support not checked");
      return e;
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield s();
          if (!e) return !1;
          var t = r("gkx")("20879") || r("gkx")("17219");
          return t;
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield s();
          if (!e) return !1;
          var t = r("gkx")("20879");
          return t;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield s();
          return !!e;
        })),
        g.apply(this, arguments)
      );
    }
    ((l.checkWasmFeatureSupport = s),
      (l.getWasmFeatureSupport = c),
      (l.checkWasmAndMinosRolloutKeyCreateGK = d),
      (l.checkWasmFeatureSupportAndGK = p),
      (l.checkWasmFeatureSupportAndEBInitJK = f));
  },
  98,
);
