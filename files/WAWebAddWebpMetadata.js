__d(
  "WAWebAddWebpMetadata",
  ["WATypedArraysConcat", "WAWebWebp", "WAWebWebpMetadata", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new Uint8Array(e);
      if (!o("WAWebWebp").isExtendedFile(n)) throw r("err")("Not extended");
      var a = o("WAWebWebpMetadata").toRawWebpMetadata(t),
        i = u(a),
        l = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [n, i]);
      l.set(o("WAWebWebp").numberToLittleEndian(l.byteLength - 8), 4);
      var s = l.buffer;
      return s;
    }
    function s(e, t) {
      return o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
        o("WAWebWebp").stringToUint8(e),
        o("WAWebWebp").numberToLittleEndian(t),
      ]);
    }
    function u(e) {
      var t = new TextEncoder(),
        n = JSON.stringify(e),
        r = t.encode(n),
        a = c(r),
        i = [s(o("WAWebWebp").Chunk.EXIF, a.byteLength), a];
      r.byteLength % 2 !== 0 && i.push(new Uint8Array([0]));
      var l = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, i);
      return l;
    }
    function c(e) {
      var t,
        n = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
          (t = o("WAWebWebp")).stringToUint8("II"),
          new Uint8Array([42, 0]),
          t.numberToLittleEndian(8),
          new Uint8Array([1, 0]),
          t.stringToUint8("AW"),
          new Uint8Array([7, 0]),
          t.numberToLittleEndian(e.byteLength),
          t.numberToLittleEndian(22),
          e,
        ]);
      return n;
    }
    l.addWebpMetadata = e;
  },
  98,
);
