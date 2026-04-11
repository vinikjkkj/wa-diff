__d(
  "HttpResponseBinaryDecode",
  ["FBLogger", "QuicIntCodec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = n,
        i = new Headers(),
        l = o("QuicIntCodec").decodeQuicIntWithExistingBuffer(e, a),
        s = l[0],
        u = l[1],
        c = u + s;
      for (a = u; a < c; ) {
        var d = o("QuicIntCodec").decodeQuicIntWithExistingBuffer(e, a),
          m = d[0],
          p = d[1],
          _ = t.decode(e.slice(p, p + m));
        a = p + m;
        var f = o("QuicIntCodec").decodeQuicIntWithExistingBuffer(e, a),
          g = f[0],
          h = f[1],
          y = t.decode(e.slice(h, h + g));
        ((a = h + g), i.append(_, y));
      }
      if (c !== a)
        throw r("FBLogger")("http_binary").mustfixThrow(
          "Decode response with header length mismatch",
        );
      return { headers: i, offset: a };
    }
    function s(t) {
      var n = t[0];
      if (n !== 1)
        throw r("FBLogger")("http_binary").mustfixThrow(
          "Framing indicator must be 1, but got %s instead",
          n,
        );
      var a = 1,
        i = new TextDecoder(),
        l = o("QuicIntCodec").decodeQuicIntWithExistingBuffer(t, a),
        s = l[0],
        u = l[1];
      a = u;
      var c =
        a >= t.byteLength ? { offset: a, headers: new Headers() } : e(t, i, a);
      a = c.offset;
      var d =
          a >= t.byteLength
            ? [0, a]
            : o("QuicIntCodec").decodeQuicIntWithExistingBuffer(t, a),
        m = d[0],
        p = d[1];
      a = p;
      var _ = m < 1 ? void 0 : t.slice(a, a + m);
      return new Response(_, { headers: c.headers, status: s });
    }
    l.binaryDecodeResponse = s;
  },
  98,
);
