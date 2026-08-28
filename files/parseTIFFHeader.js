__d(
  "parseTIFFHeader",
  ["EndianAwareDataReader", "parseIFDTable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = 0);
      var n = new Uint8Array(e, t),
        o = !0;
      if (n[0] === 77 && n[1] === 77) o = !1;
      else if (n[0] !== 73 || n[1] !== 73) return null;
      var a = new (r("EndianAwareDataReader"))(e, o);
      if ((a.seekTo(t + 2), a.readU16() !== 42)) return null;
      var i = a.readU32();
      a.seekRelative(i - 8);
      var l = r("parseIFDTable")(a);
      return [l];
    }
    l.default = e;
  },
  98,
);
