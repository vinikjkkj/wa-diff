__d(
  "WAParseWav",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new DataView(e);
      return e.byteLength < 44 ||
        t.getUint32(0) !== 1380533830 ||
        t.getUint32(8) !== 1463899717
        ? null
        : e;
    }
    function l(e) {
      var t = new DataView(e),
        n = t.getUint16(22, !0),
        r = t.getUint32(24, !0);
      return { numChannels: n, sampleRate: r };
    }
    ((i.validateWav = e), (i.parseWav = l));
  },
  66,
);
