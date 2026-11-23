__d(
  "WAWebMediaBoundedUnzip",
  ["WABlobToArrayBuffer", "WAPromiseDelays", "err", "fflate"],
  function (t, n, r, o, a, i, l) {
    var e = {
        maxInputBytes: 2097152,
        maxEntryBytes: 1048576,
        maxOutputBytes: 10485760,
        maxEntries: 10,
      },
      s = {
        maxInputBytes: 64 * 1024 * 1024,
        maxEntryBytes: 1024 * 1024,
        maxOutputBytes: 61 * 1024 * 1024,
        maxEntries: 128,
      },
      u = 1024,
      c = 8,
      d = 4294967295;
    async function m(e, t) {
      if (e.size > t.maxInputBytes)
        throw r("err")("ZIP input exceeds size limit");
      var n = new Uint8Array(
          await o("WABlobToArrayBuffer").blobToArrayBuffer(e),
        ),
        a = f(n, t),
        i = new Map(),
        l = 0,
        s = self.performance.now();
      function d(e) {
        if (e === a.length) return Promise.resolve();
        var m = a[e],
          _ = 0,
          f = [];
        function g(e) {
          if (((_ += e.length), (l += e.length), _ > t.maxEntryBytes))
            throw r("err")("ZIP entry exceeds size limit");
          if (l > t.maxOutputBytes)
            throw r("err")("ZIP output exceeds size limit");
          f.push(e);
        }
        var h = p(m.compression, m.size, g);
        async function y(t) {
          for (var a = t, l = m.start + m.size; a < l; ) {
            var p = Math.min(a + u, l),
              g = n.subarray(a, p);
            if ((h(g, p === l), (a = p), self.performance.now() - s >= c))
              return o("WAPromiseDelays")
                .delayMs(0)
                .then(function () {
                  return ((s = self.performance.now()), y(a));
                });
          }
          if (_ !== m.originalSize)
            throw r("err")("ZIP entry sizes do not match");
          return (i.set(m.name, C(f, _)), (f.length = 0), d(e + 1));
        }
        return y(m.start);
      }
      return (await d(0), Object.fromEntries(i));
    }
    function p(e, t, n) {
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
    function _(e, t) {
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
    function f(e, t) {
      var n = new DataView(e.buffer, e.byteOffset, e.byteLength),
        a = _(n, e.length),
        i = n.getUint16(a + 10, !0),
        l = n.getUint32(a + 12, !0),
        s = n.getUint32(a + 16, !0);
      if (
        n.getUint16(a + 4, !0) !== 0 ||
        n.getUint16(a + 6, !0) !== 0 ||
        n.getUint16(a + 8, !0) !== i ||
        i === 65535 ||
        l === d ||
        s === d ||
        s + l !== a
      )
        throw r("err")("Unsupported or invalid ZIP directory");
      if (i > t.maxEntries) throw r("err")("ZIP exceeds entry count limit");
      for (var u = [], c = new Set(), m = s, p = 0, f = 0; f < i; f++) {
        var y = g(n, m, a, s),
          C = y.compression,
          b = y.flags,
          v = y.localOffset,
          S = y.nameLength,
          R = y.nextOffset,
          L = y.originalSize,
          E = y.size;
        if (L > t.maxEntryBytes) throw r("err")("ZIP entry exceeds size limit");
        if (((p += L), p > t.maxOutputBytes))
          throw r("err")("ZIP output exceeds size limit");
        var k = e.subarray(m + 46, m + 46 + S),
          I = o("fflate").strFromU8(k, b < 2048);
        if (c.has(I)) throw r("err")("ZIP contains duplicate entry names");
        c.add(I);
        var T = h(e, n, m, s),
          D = T.end,
          x = T.start;
        (u.push({
          name: I,
          compression: C,
          size: E,
          originalSize: L,
          start: x,
          end: D,
          localOffset: v,
        }),
          (m = R));
      }
      if (m !== a) throw r("err")("Invalid ZIP directory size");
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
    function g(e, t, n, o) {
      if (t + 46 > n || e.getUint32(t, !0) !== 33639248)
        throw r("err")("Invalid ZIP entry");
      var a = e.getUint16(t + 8, !0),
        i = e.getUint16(t + 10, !0),
        l = e.getUint32(t + 20, !0),
        s = e.getUint32(t + 24, !0),
        u = e.getUint16(t + 28, !0),
        c = t + 46 + u + e.getUint16(t + 30, !0) + e.getUint16(t + 32, !0),
        m = e.getUint32(t + 42, !0);
      if (a % 2 !== 0 || a % 2048 > 14 || a >= 4096)
        throw r("err")("Unsupported ZIP flags");
      if (
        c > n ||
        e.getUint16(t + 34, !0) !== 0 ||
        (i !== 0 && i !== 8) ||
        l === d ||
        s === d ||
        m + 30 > o
      )
        throw r("err")("Unsupported or invalid ZIP entry");
      return {
        flags: a,
        compression: i,
        size: l,
        originalSize: s,
        nameLength: u,
        nextOffset: c,
        localOffset: m,
      };
    }
    function h(e, t, n, o) {
      var a = t.getUint16(n + 8, !0),
        i = t.getUint16(n + 10, !0),
        l = t.getUint32(n + 20, !0),
        s = t.getUint32(n + 24, !0),
        u = t.getUint16(n + 28, !0),
        c = t.getUint32(n + 42, !0),
        m = t.getUint16(c + 6, !0),
        p = Math.floor(m / 8) % 2 === 1,
        _ = Math.floor(a / 8) % 2 === 1;
      if (
        t.getUint32(c, !0) !== 67324752 ||
        m - Number(p) * 8 !== a - Number(_) * 8 ||
        t.getUint16(c + 8, !0) !== i ||
        t.getUint16(c + 26, !0) !== u ||
        t.getUint32(c + 18, !0) === d ||
        t.getUint32(c + 22, !0) === d
      )
        throw r("err")("Invalid ZIP local header");
      var f = c + 30 + u + t.getUint16(c + 28, !0),
        g = f + l;
      if (g > o) throw r("err")("Invalid ZIP entry range");
      for (var h = 0; h < u; h++)
        if (e[c + 30 + h] !== e[n + 46 + h])
          throw r("err")("ZIP entry names do not match");
      if (p) g = y(t, g, o, n);
      else if (t.getUint32(c + 18, !0) !== l || t.getUint32(c + 22, !0) !== s)
        throw r("err")("ZIP entry sizes do not match");
      if (i === 0 && l !== s) throw r("err")("ZIP entry sizes do not match");
      return { start: f, end: g };
    }
    function y(e, t, n, o) {
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
    function C(e, t) {
      var n = new Uint8Array(t),
        r = 0;
      for (var o of e) (n.set(o, r), (r += o.length));
      return n;
    }
    ((l.LOTTIE_ZIP_LIMITS = e),
      (l.STICKER_PACK_ZIP_LIMITS = s),
      (l.unzipBlobWithLimits = m));
  },
  98,
);
