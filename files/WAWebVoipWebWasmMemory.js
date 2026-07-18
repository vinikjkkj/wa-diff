__d(
  "WAWebVoipWebWasmMemory",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 65536,
      l = 10 * 1024 * 1024,
      s = 1024 * 1024 * 1024;
    function u(t) {
      return t
        ? new WebAssembly.Memory({ initial: l / e, maximum: s / e, shared: !0 })
        : null;
    }
    i.createVoipWasmMemoryOverride = u;
  },
  66,
);
