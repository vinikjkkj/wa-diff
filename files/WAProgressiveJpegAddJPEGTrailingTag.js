__d(
  "WAProgressiveJpegAddJPEGTrailingTag",
  ["WATypedArraysConcat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Uint8Array([255, 217]);
    function s(t) {
      return o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
        new Uint8Array(t),
        e,
      ]).buffer;
    }
    ((l.JPEG_TRAILING_TAG = e), (l.addJPEGTrailingTag = s));
  },
  98,
);
