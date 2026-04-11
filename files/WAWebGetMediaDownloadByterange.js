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
      if (n && a != null)
        return {
          start: 0,
          end: r("sumBy")(
            o("WAAlignChunkLengthsToMultipleOfAesBlockSize")
              .alignChunkLengthsToMultipleOfAesBlockSize(n.scanLengths)
              .slice(0, a),
            function (e) {
              return e;
            },
          ),
        };
      if (t) {
        var i = t.secondsToDownload,
          l = t.video,
          s = l.duration,
          u = l.size,
          c = (u * i) / s,
          d = 128 * 1024,
          m = Math.max(c, d),
          p = Math.ceil(m / o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE);
        return {
          start: 0,
          end: p * o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE - 1,
        };
      }
      return null;
    }
    l.default = e;
  },
  98,
);
