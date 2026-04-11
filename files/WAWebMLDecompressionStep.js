__d(
  "WAWebMLDecompressionStep",
  ["WAResultOrError", "WAWebMLDecompressor", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.name = "Decompression";
      }
      var t = e.prototype;
      return (
        (t.process = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.compressionType;
              return o("WAWebMLDecompressor").requiresDecompression(n)
                ? yield o("WAWebMLDecompressor").decompressModel(e, n)
                : o("WAResultOrError").makeResult(e);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.DecompressionStep = e;
  },
  98,
);
