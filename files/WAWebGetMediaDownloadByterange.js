__d(
  "WAWebGetMediaDownloadByterange",
  [
    "WAAlignChunkLengthsToMultipleOfAesBlockSize",
    "WAWebCryptoDecryptPartialMedia",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.partialVideoOpts,
        n = e.progressiveJpegOpts,
        a = e.scanCount;
      if (n && a != null) {
        var i = o("WAAlignChunkLengthsToMultipleOfAesBlockSize")
            .alignChunkLengthsToMultipleOfAesBlockSize(n.scanLengths)
            .slice(0, a),
          l = r("sumBy")(i, function (e) {
            return e;
          });
        return l === 0 ? null : { start: 0, end: l - 1 };
      }
      if (t) {
        var s = t.secondsToDownload,
          u = t.video,
          c = u.duration,
          d = u.size,
          m = (d * s) / c,
          p = 128 * 1024,
          _ = Math.max(m, p),
          f = Math.ceil(_ / o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE);
        return {
          start: 0,
          end: f * o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE - 1,
        };
      }
      return null;
    }
    l.default = e;
  },
  98,
);
