__d(
  "WAWebMLDecompressionStep",
  ["WAResultOrError", "WAWebMLDecompressor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.name = "Decompression";
      }
      var t = e.prototype;
      return (
        (t.process = async function (t, n) {
          var e = n.compressionType;
          return o("WAWebMLDecompressor").requiresDecompression(e)
            ? await o("WAWebMLDecompressor").decompressModel(t, e)
            : o("WAResultOrError").makeResult(t);
        }),
        e
      );
    })();
    l.DecompressionStep = e;
  },
  98,
);
