__d(
  "WACrc32",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 3988292384,
      l = 4294967295,
      s;
    function u(e, t) {
      var n = t;
      for (s || (s = c()); e.size(); )
        n = s[(n ^ e.readUint8()) & 255] ^ (n >>> 8);
      return ~n >>> 0;
    }
    function c() {
      for (
        var t = new Uint32Array(256), n = 0, r = 0, o = 0;
        n < 256;
        r = ++n
      ) {
        for (o = 0; o < 8; ++o) r = r & 1 ? (r >>> 1) ^ e : r >>> 1;
        t[n] = r;
      }
      return t;
    }
    function d(e, t) {
      return (t === void 0 && (t = l), e.peek(u, t));
    }
    i.default = d;
  },
  66,
);
