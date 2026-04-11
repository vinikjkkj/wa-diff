__d(
  "WAEncodeProgressiveJpeg",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (n) {
        var t = n.height,
          r = n.input,
          o = n.quality,
          a = n.useHdScanConfig,
          i = n.width,
          l = new Uint8Array(r),
          s = e._malloc(r.byteLength);
        e.HEAPU8.set(l, s);
        var u = e.ccall(
            "encode_progressive_jpeg",
            "number",
            ["number", "number", "number", "number", "number", "boolean"],
            [s, l.byteLength, i, t, o, a],
          ),
          c = e.HEAPU32[u / 4],
          d = e.HEAPU32[u / 4 + 1],
          m = new Uint8Array(e.HEAPU8.subarray(c, c + d));
        return (e._free(s), e._free(c), m);
      };
    }
    i.createEncodeProgressiveJpeg = e;
  },
  66,
);
