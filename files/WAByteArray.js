__d(
  "WAByteArray",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = t, r = new Uint8Array(e), o = e - 1; o >= 0; o--)
        ((r[o] = n & 255), (n >>>= 8));
      return r;
    }
    function l(e) {
      return e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
    }
    function s(e, t) {
      if (!e || !t) return !1;
      var n = new Uint8Array(e),
        r = new Uint8Array(t),
        o = n.length,
        a = r.length;
      if (o !== a) return !1;
      for (var i = 0; i < o; i++) if (n[i] !== r[i]) return !1;
      return !0;
    }
    ((i.intToBytes = e),
      (i.uint8ArrayToBuffer = l),
      (i.compareArrayBuffer = s));
  },
  66,
);
