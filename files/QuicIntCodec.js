__d(
  "QuicIntCodec",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 63,
      s = 255,
      u = 64,
      c = 128,
      d = 192,
      m = 64,
      p = 16384,
      _ = 1073741824,
      f = 2147483647;
    function g(e) {
      if (e < m) return 1;
      if (e < p) return 2;
      if (e < _) return 4;
      if (e > f)
        throw r("FBLogger")("quic_codec").mustfixThrow(
          "Number too large to encode",
        );
      return 8;
    }
    function h(t, n) {
      var o = t[n],
        a = o >> 6,
        i = 1 << a;
      if (
        ((o &= e),
        i === 8 && (o > 0 || t[n + 1] > 0 || t[n + 2] > 0 || t[n + 3] > 0))
      )
        throw r("FBLogger")("quic_codec").mustfixThrow(
          "Number is too large to decode",
        );
      for (var l = 1; l < i; l++) o = (o << 8) | t[n + l];
      return [o, n + i];
    }
    function y(t, n, r) {
      for (var o = t, a = g(o), i = a - 1; i > 0; i--)
        ((n[r + i] = o & s), (o >>= 8));
      var l = a === 8 ? d : a === 4 ? c : a === 2 ? u : 0;
      return ((n[r] = l | (o & e)), r + a);
    }
    function C(e) {
      var t = h(e, 0),
        n = t[0],
        r = t[1];
      return n;
    }
    function b(e) {
      var t = g(e),
        n = new Uint8Array(t);
      return (y(e, n, 0), n);
    }
    ((l.getByteLength = g),
      (l.decodeQuicIntWithExistingBuffer = h),
      (l.encodeWithExistingBuffer = y),
      (l.decode = C),
      (l.encode = b));
  },
  98,
);
