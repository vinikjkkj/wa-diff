__d(
  "WAWebMLDecompressor",
  ["WAResultOrError", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "TAR_BROTLI" || e === "TAR_LZMA2";
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t === "NONE"
            ? o("WAResultOrError").makeResult(e)
            : o("WAResultOrError").makeError(
                "Unsupported compression type: " + t,
              );
        })),
        u.apply(this, arguments)
      );
    }
    ((l.requiresDecompression = e), (l.decompressModel = s));
  },
  98,
);
