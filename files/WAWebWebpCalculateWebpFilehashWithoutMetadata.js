__d(
  "WAWebWebpCalculateWebpFilehashWithoutMetadata",
  ["WACryptoSha256", "WAWebWebp"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = new Uint8Array(e),
        r =
          (t = o("WAWebWebp").findWebpChunk(n, o("WAWebWebp").Chunk.EXIF)) !=
          null
            ? t
            : o("WAWebWebp").findWebpChunk(n, o("WAWebWebp").Chunk.XMP);
      if (r == null) return o("WACryptoSha256").sha256Base64(e);
      var a = n.slice(0, r.position),
        i = a.byteLength - o("WAWebWebp").CHUNK_HEADER_SIZE;
      return (
        a.set(o("WAWebWebp").numberToLittleEndian(i), o("WAWebWebp").FOUR),
        o("WACryptoSha256").sha256Base64(a)
      );
    }
    l.default = e;
  },
  98,
);
