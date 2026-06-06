__d(
  "WAWebMLDecompressor",
  ["WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "TAR_BROTLI" || e === "TAR_LZMA2";
    }
    async function s(e, t) {
      return t === "NONE"
        ? o("WAResultOrError").makeResult(e)
        : o("WAResultOrError").makeError("Unsupported compression type: " + t);
    }
    ((l.requiresDecompression = e), (l.decompressModel = s));
  },
  98,
);
