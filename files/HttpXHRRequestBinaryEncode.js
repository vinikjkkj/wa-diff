__d(
  "HttpXHRRequestBinaryEncode",
  ["QuicIntCodec", "fbjs/lib/invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new URL(e.getURI().toString());
      return {
        host: t.host,
        path: t.pathname + t.search,
        scheme: t.protocol.replace(":", ""),
      };
    }
    function s(t, n) {
      var r,
        a = 0,
        i = [],
        l = n.encode(t.getMethod()),
        s = l.byteLength;
      ((a += (r = o("QuicIntCodec")).getByteLength(s) + s), i.push(l));
      var u = e(t),
        c = u.host,
        d = u.path,
        m = u.scheme,
        p = n.encode(m),
        _ = p.byteLength;
      ((a += r.getByteLength(_) + _), i.push(p));
      var f = n.encode(c),
        g = f.byteLength;
      ((a += r.getByteLength(g) + g), i.push(f));
      var h = n.encode(d),
        y = h.byteLength;
      return (
        (a += r.getByteLength(y) + y),
        i.push(h),
        { length: a, steps: i }
      );
    }
    function u(e, t, n) {
      var a = 0,
        i = [],
        l = e.getAllRequestHeaders();
      l != null || r("fbjs/lib/invariant")(0, 87335);
      var s = new Map(Object.entries(l));
      n && !s.has("Host") && s.set("Host", new URL(e.getURI().toString()).host);
      for (var u of s) {
        var c = u[0],
          d = u[1],
          m = t.encode(c),
          p = m.byteLength;
        ((a += o("QuicIntCodec").getByteLength(p) + p), i.push(m));
        var _ = t.encode(d),
          f = _.byteLength;
        ((a += o("QuicIntCodec").getByteLength(_.byteLength) + f), i.push(_));
      }
      return { length: a, steps: [a].concat(i) };
    }
    function c(e, t) {
      var n = new TextEncoder(),
        a = 0,
        i = [];
      (i.push(0), a++);
      var l = s(e, n),
        c = l.length,
        d = l.steps;
      ((a += c), i.push.apply(i, d));
      var m = u(e, n, t),
        p = m.length,
        _ = m.steps;
      ((a += o("QuicIntCodec").getByteLength(p) + p), i.push.apply(i, _));
      var f = e.getData();
      f != null || r("fbjs/lib/invariant")(0, 21489);
      var g = n.encode(f),
        h = g.byteLength;
      return (
        (a += o("QuicIntCodec").getByteLength(h) + h),
        i.push(g),
        i.push(0),
        a++,
        { length: a, steps: i }
      );
    }
    function d(e, t) {
      t === void 0 && (t = !1);
      var n = c(e, t),
        r = n.length,
        a = n.steps,
        i = new Uint8Array(r),
        l = 0;
      for (var s of a)
        typeof s == "number"
          ? (l = o("QuicIntCodec").encodeWithExistingBuffer(s, i, l))
          : ((l = o("QuicIntCodec").encodeWithExistingBuffer(s.length, i, l)),
            i.set(s, l),
            (l += s.length));
      return i;
    }
    l.binaryEncodeRelayAPIRequest = d;
  },
  98,
);
