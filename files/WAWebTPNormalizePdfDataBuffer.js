__d(
  "WAWebTPNormalizePdfDataBuffer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e instanceof ArrayBuffer
        ? e
        : e != null && ArrayBuffer.isView(e) && e.buffer instanceof ArrayBuffer
          ? e.buffer
          : null;
    }
    i.normalizePdfDataBuffer = e;
  },
  66,
);
