__d(
  "HttpRequestBinaryEncode",
  ["QuicIntCodec", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new URL(e.url);
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
        l = n.encode(t.method),
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
    function u(e, t, n, r) {
      var a = 0,
        i = [],
        l = new Map(e.headers);
      if (
        (n && !l.has("Host") && l.set("Host", new URL(e.url).host), r != null)
      ) {
        for (var s of l.keys()) s.toLowerCase() === "user-agent" && l.delete(s);
        l.set("User-Agent", r);
      }
      for (var u of l) {
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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = new TextEncoder(),
            a = 0,
            i = [];
          (i.push(0), a++);
          var l = s(e, r),
            c = l.length,
            d = l.steps;
          ((a += c), i.push.apply(i, d));
          var m = u(e, r, t, n),
            p = m.length,
            _ = m.steps;
          ((a += o("QuicIntCodec").getByteLength(p) + p), i.push.apply(i, _));
          var f = new Uint8Array(yield e.arrayBuffer()),
            g = f.byteLength;
          return (
            (a += o("QuicIntCodec").getByteLength(g) + g),
            i.push(f),
            i.push(0),
            a++,
            { length: a, steps: i }
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (t === void 0 && (t = !1), n === void 0 && (n = null));
          var r = yield c(e, t, n),
            a = r.length,
            i = r.steps,
            l = new Uint8Array(a),
            s = 0;
          for (var u of i)
            typeof u == "number"
              ? (s = o("QuicIntCodec").encodeWithExistingBuffer(u, l, s))
              : ((s = o("QuicIntCodec").encodeWithExistingBuffer(
                  u.length,
                  l,
                  s,
                )),
                l.set(u, s),
                (s += u.length));
          return l;
        })),
        p.apply(this, arguments)
      );
    }
    l.binaryEncodeRequest = m;
  },
  98,
);
