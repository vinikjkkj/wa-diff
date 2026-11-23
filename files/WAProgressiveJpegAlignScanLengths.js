__d(
  "WAProgressiveJpegAlignScanLengths",
  ["WAAlignChunkLengthsToMultipleOfAesBlockSize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.scanLengths,
        n = e.totalEncryptedBytes;
      return o("WAAlignChunkLengthsToMultipleOfAesBlockSize")
        .alignChunkLengthsToMultipleOfAesBlockSize(
          t.map(function (e) {
            return e;
          }),
          n,
        )
        .map(function (e) {
          return e;
        });
    }
    function s(e) {
      return e;
    }
    ((l.progressiveJpegAlignChunkLengthsToMultipleOfAesBlockSize = e),
      (l.toProgressiveJpegAlignedScanLength = s));
  },
  98,
);
