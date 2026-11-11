__d(
  "WAWebMediaBoundedUnzip",
  [
    "Promise",
    "WABlobToArrayBuffer",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime",
    "err",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        maxInputBytes: 2097152,
        maxEntryBytes: 1048576,
        maxOutputBytes: 10485760,
        maxEntries: 10,
      },
      u = {
        maxInputBytes: 64 * 1024 * 1024,
        maxEntryBytes: 1024 * 1024,
        maxOutputBytes: 61 * 1024 * 1024,
        maxEntries: 128,
      },
      c = 1024,
      d = 8,
      m = 4294967295;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (t.size > a.maxInputBytes)
            throw r("err")("ZIP input exceeds size limit");
          var i = new Uint8Array(
              yield o("WABlobToArrayBuffer").blobToArrayBuffer(t),
            ),
            l = h(i, a),
            s = new Map(),
            u = 0,
            m = self.performance.now();
          function p(t) {
            if (t === l.length) return (e || (e = n("Promise"))).resolve();
            var _ = l[t],
              g = 0,
              h = [];
            function y(e) {
              if (((g += e.length), (u += e.length), g > a.maxEntryBytes))
                throw r("err")("ZIP entry exceeds size limit");
              if (u > a.maxOutputBytes)
                throw r("err")("ZIP output exceeds size limit");
              h.push(e);
            }
            var C = f(_.compression, _.size, y);
            function b(e) {
              return S.apply(this, arguments);
            }
            function S() {
              return (
                (S = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    for (var n = e, a = _.start + _.size; n < a; ) {
                      var l = Math.min(n + c, a),
                        u = i.subarray(n, l);
                      if (
                        (C(u, l === a),
                        (n = l),
                        self.performance.now() - m >= d)
                      )
                        return o("WAPromiseDelays")
                          .delayMs(0)
                          .then(function () {
                            return ((m = self.performance.now()), b(n));
                          });
                    }
                    if (g !== _.originalSize)
                      throw r("err")("ZIP entry sizes do not match");
                    return (s.set(_.name, v(h, g)), (h.length = 0), p(t + 1));
                  },
                )),
                S.apply(this, arguments)
              );
            }
            return b(_.start);
          }
          return (yield p(0), Object.fromEntries(s));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      if (e === 0)
        return function (e) {
          return n(e);
        };
      if (t < 5)
        return function (e) {
          return n(o("fflate").inflateSync(e));
        };
      var r = new (o("fflate").Inflate)(n);
      return function (e, t) {
        return r.push(e, t);
      };
    }
    function g(e, t) {
      for (
        var n = t - 22, o = Math.max(0, n - 65535);
        n >= o &&
        (e.getUint32(n, !0) !== 101010256 ||
          n + 22 + e.getUint16(n + 20, !0) !== t);
      )
        n--;
      if (n < o) throw r("err")("Invalid ZIP directory");
      return n;
    }
    function h(e, t) {
      var n = new DataView(e.buffer, e.byteOffset, e.byteLength),
        a = g(n, e.length),
        i = n.getUint16(a + 10, !0),
        l = n.getUint32(a + 12, !0),
        s = n.getUint32(a + 16, !0);
      if (
        n.getUint16(a + 4, !0) !== 0 ||
        n.getUint16(a + 6, !0) !== 0 ||
        n.getUint16(a + 8, !0) !== i ||
        i === 65535 ||
        l === m ||
        s === m ||
        s + l !== a
      )
        throw r("err")("Unsupported or invalid ZIP directory");
      if (i > t.maxEntries) throw r("err")("ZIP exceeds entry count limit");
      for (var u = [], c = new Set(), d = s, p = 0, _ = 0; _ < i; _++) {
        var f = y(n, d, a, s),
          h = f.compression,
          b = f.flags,
          v = f.localOffset,
          S = f.nameLength,
          R = f.nextOffset,
          L = f.originalSize,
          E = f.size;
        if (L > t.maxEntryBytes) throw r("err")("ZIP entry exceeds size limit");
        if (((p += L), p > t.maxOutputBytes))
          throw r("err")("ZIP output exceeds size limit");
        var k = e.subarray(d + 46, d + 46 + S),
          I = o("fflate").strFromU8(k, b < 2048);
        if (c.has(I)) throw r("err")("ZIP contains duplicate entry names");
        c.add(I);
        var T = C(e, n, d, s),
          D = T.end,
          x = T.start;
        (u.push({
          name: I,
          compression: h,
          size: E,
          originalSize: L,
          start: x,
          end: D,
          localOffset: v,
        }),
          (d = R));
      }
      if (d !== a) throw r("err")("Invalid ZIP directory size");
      for (
        var $ = [].concat(u).sort(function (e, t) {
            return e.localOffset - t.localOffset;
          }),
          P = 1;
        P < $.length;
        P++
      )
        if ($[P].localOffset < $[P - 1].end)
          throw r("err")("ZIP entries overlap");
      return u;
    }
    function y(e, t, n, o) {
      if (t + 46 > n || e.getUint32(t, !0) !== 33639248)
        throw r("err")("Invalid ZIP entry");
      var a = e.getUint16(t + 8, !0),
        i = e.getUint16(t + 10, !0),
        l = e.getUint32(t + 20, !0),
        s = e.getUint32(t + 24, !0),
        u = e.getUint16(t + 28, !0),
        c = t + 46 + u + e.getUint16(t + 30, !0) + e.getUint16(t + 32, !0),
        d = e.getUint32(t + 42, !0);
      if (a % 2 !== 0 || a % 2048 > 14 || a >= 4096)
        throw r("err")("Unsupported ZIP flags");
      if (
        c > n ||
        e.getUint16(t + 34, !0) !== 0 ||
        (i !== 0 && i !== 8) ||
        l === m ||
        s === m ||
        d + 30 > o
      )
        throw r("err")("Unsupported or invalid ZIP entry");
      return {
        flags: a,
        compression: i,
        size: l,
        originalSize: s,
        nameLength: u,
        nextOffset: c,
        localOffset: d,
      };
    }
    function C(e, t, n, o) {
      var a = t.getUint16(n + 8, !0),
        i = t.getUint16(n + 10, !0),
        l = t.getUint32(n + 20, !0),
        s = t.getUint32(n + 24, !0),
        u = t.getUint16(n + 28, !0),
        c = t.getUint32(n + 42, !0),
        d = t.getUint16(c + 6, !0),
        p = Math.floor(d / 8) % 2 === 1,
        _ = Math.floor(a / 8) % 2 === 1;
      if (
        t.getUint32(c, !0) !== 67324752 ||
        d - Number(p) * 8 !== a - Number(_) * 8 ||
        t.getUint16(c + 8, !0) !== i ||
        t.getUint16(c + 26, !0) !== u ||
        t.getUint32(c + 18, !0) === m ||
        t.getUint32(c + 22, !0) === m
      )
        throw r("err")("Invalid ZIP local header");
      var f = c + 30 + u + t.getUint16(c + 28, !0),
        g = f + l;
      if (g > o) throw r("err")("Invalid ZIP entry range");
      for (var h = 0; h < u; h++)
        if (e[c + 30 + h] !== e[n + 46 + h])
          throw r("err")("ZIP entry names do not match");
      if (p) g = b(t, g, o, n);
      else if (t.getUint32(c + 18, !0) !== l || t.getUint32(c + 22, !0) !== s)
        throw r("err")("ZIP entry sizes do not match");
      if (i === 0 && l !== s) throw r("err")("ZIP entry sizes do not match");
      return { start: f, end: g };
    }
    function b(e, t, n, o) {
      if (t + 12 > n) throw r("err")("Invalid ZIP data descriptor");
      var a = t;
      if (
        (e.getUint32(a, !0) === 134695760 && (a += 4),
        a + 12 > n ||
          e.getUint32(a, !0) !== e.getUint32(o + 16, !0) ||
          e.getUint32(a + 4, !0) !== e.getUint32(o + 20, !0) ||
          e.getUint32(a + 8, !0) !== e.getUint32(o + 24, !0))
      )
        throw r("err")("Invalid ZIP data descriptor");
      return a + 12;
    }
    function v(e, t) {
      var n = new Uint8Array(t),
        r = 0;
      for (var o of e) (n.set(o, r), (r += o.length));
      return n;
    }
    ((l.LOTTIE_ZIP_LIMITS = s),
      (l.STICKER_PACK_ZIP_LIMITS = u),
      (l.unzipBlobWithLimits = p));
  },
  98,
);
