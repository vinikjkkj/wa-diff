__d(
  "WebAssemblyMemorySingleton",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 65536,
      l = 5701632,
      s = 45 * e,
      u = l + s,
      c = null,
      d = 0,
      m = 0;
    function p() {
      return (
        c == null &&
          ((c = new WebAssembly.Memory({
            initial: u / e,
            maximum: 2147483648 / e,
          })),
          (d = u)),
        c
      );
    }
    function _() {
      if (c != null) {
        var e = c.buffer.byteLength;
        e !== d && (m++, (d = e));
      }
      return { memory_reallocation_count: m, memory_size_kb: d / 1024 };
    }
    var f = { INITIAL_MEMORY_ALLOCATED_IN_BYTES: u, get: p, getMetrics: _ };
    i.WebAssemblyMemorySingleton = f;
  },
  66,
);
