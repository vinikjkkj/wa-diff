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
    function u(e, t, n) {
      var r = 0,
        a = [],
        i = new Map(e.headers);
      n && !i.has("Host") && i.set("Host", new URL(e.url).host);
      for (var l of i) {
        var s = l[0],
          u = l[1],
          c = t.encode(s),
          d = c.byteLength;
        ((r += o("QuicIntCodec").getByteLength(d) + d), a.push(c));
        var m = t.encode(u),
          p = m.byteLength;
        ((r += o("QuicIntCodec").getByteLength(m.byteLength) + p), a.push(m));
      }
      return { length: r, steps: [r].concat(a) };
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new TextEncoder(),
            r = 0,
            a = [];
          (a.push(0), r++);
          var i = s(e, n),
            l = i.length,
            c = i.steps;
          ((r += l), a.push.apply(a, c));
          var d = u(e, n, t),
            m = d.length,
            p = d.steps;
          ((r += o("QuicIntCodec").getByteLength(m) + m), a.push.apply(a, p));
          var _ = new Uint8Array(yield e.arrayBuffer()),
            f = _.byteLength;
          return (
            (r += o("QuicIntCodec").getByteLength(f) + f),
            a.push(_),
            a.push(0),
            r++,
            { length: r, steps: a }
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = yield c(e, t),
            r = n.length,
            a = n.steps,
            i = new Uint8Array(r),
            l = 0;
          for (var s of a)
            typeof s == "number"
              ? (l = o("QuicIntCodec").encodeWithExistingBuffer(s, i, l))
              : ((l = o("QuicIntCodec").encodeWithExistingBuffer(
                  s.length,
                  i,
                  l,
                )),
                i.set(s, l),
                (l += s.length));
          return i;
        })),
        p.apply(this, arguments)
      );
    }
    l.binaryEncodeRequest = m;
  },
  98,
);
