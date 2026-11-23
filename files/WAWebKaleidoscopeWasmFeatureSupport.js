__d(
  "WAWebKaleidoscopeWasmFeatureSupport",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    async function l() {
      return e != null
        ? e
        : typeof WebAssembly != "object"
          ? ((e = !1), e)
          : ((e = (await Promise.all([s(), c(), u()])).every(Boolean)), e);
    }
    async function s() {
      return WebAssembly.validate(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1,
          0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11,
        ]),
      );
    }
    async function u() {
      return WebAssembly.validate(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1,
          5, 0, 208, 112, 26, 11,
        ]),
      );
    }
    async function c() {
      try {
        var e = await WebAssembly.instantiate(
            new Uint8Array([
              0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 126, 1, 126, 3, 2, 1,
              0, 7, 5, 1, 1, 98, 0, 0, 10, 6, 1, 4, 0, 32, 0, 11,
            ]),
          ),
          t = e.instance,
          n = t.exports.b;
        return typeof n == "function" && n(BigInt(0)) === BigInt(0);
      } catch (e) {
        return !1;
      }
    }
    i.checkKaleidoscopeWasmFeatureSupport = l;
  },
  66,
);
