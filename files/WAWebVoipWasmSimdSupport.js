__d(
  "WAWebVoipWasmSimdSupport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10,
      1, 8, 0, 65, 0, 253, 15, 253, 98, 11,
    ];
    function l() {
      try {
        return (
          typeof WebAssembly == "object" &&
          WebAssembly.validate(new Uint8Array(e))
        );
      } catch (e) {
        return !1;
      }
    }
    i.supportsWasmSimd = l;
  },
  66,
);
