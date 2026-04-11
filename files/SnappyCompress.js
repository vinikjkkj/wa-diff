__d(
  "SnappyCompress",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return (
        typeof process == "object" &&
        typeof process.versions == "object" &&
        typeof process.versions.node != "undefined"
      );
    }
    function l(t) {
      return t instanceof Uint8Array && (!e() || !Buffer.isBuffer(t));
    }
    function s(e) {
      return e instanceof ArrayBuffer;
    }
    function u(t) {
      return e() ? Buffer.isBuffer(t) : !1;
    }
    var c =
      "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    function d(e) {
      if (!l(e) && !s(e) && !u(e)) throw new TypeError(c);
      var t = !1,
        n = !1;
      l(e) ? (t = !0) : s(e) && ((n = !0), (e = new Uint8Array(e)));
      var r = new D(e),
        o = r.readUncompressedLength();
      if (o === -1) throw new Error("Invalid Snappy bitstream");
      var a, i;
      if (t) {
        if (((a = new Uint8Array(o)), !r.uncompressToBuffer(a)))
          throw new Error("Invalid Snappy bitstream");
      } else if (n) {
        if (
          ((a = new ArrayBuffer(o)),
          (i = new Uint8Array(a)),
          !r.uncompressToBuffer(i))
        )
          throw new Error("Invalid Snappy bitstream");
      } else if (((a = Buffer.alloc(o)), !r.uncompressToBuffer(a)))
        throw new Error("Invalid Snappy bitstream");
      return a;
    }
    function m(e) {
      if (!l(e) && !s(e) && !u(e)) throw new TypeError(c);
      var t = !1,
        n = !1;
      l(e) ? (t = !0) : s(e) && ((n = !0), (e = new Uint8Array(e)));
      var r = new E(e),
        o = r.maxCompressedLength(),
        a,
        i,
        d;
      if (
        (t
          ? ((a = new Uint8Array(o)), (d = r.compressToBuffer(a)))
          : n
            ? ((a = new ArrayBuffer(o)),
              (i = new Uint8Array(a)),
              (d = r.compressToBuffer(i)))
            : ((a = Buffer.alloc(o)), (d = r.compressToBuffer(a))),
        !a.slice)
      ) {
        var m = new Uint8Array(Array.prototype.slice.call(a, 0, d));
        if (t) return m;
        if (n) return m.buffer;
        throw new Error("not implemented");
      }
      return a.slice(0, d);
    }
    var p = 16,
      _ = 1 << p,
      f = 14,
      g = new Array(f + 1);
    function h(e, t) {
      return (e * 506832829) >>> t;
    }
    function y(e, t) {
      return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
    }
    function C(e, t, n) {
      return (
        e[t] === e[n] &&
        e[t + 1] === e[n + 1] &&
        e[t + 2] === e[n + 2] &&
        e[t + 3] === e[n + 3]
      );
    }
    function b(e, t, n, r, o) {
      return (
        n <= 60
          ? ((r[o] = (n - 1) << 2), (o += 1))
          : n < 256
            ? ((r[o] = 240), (r[o + 1] = n - 1), (o += 2))
            : ((r[o] = 244),
              (r[o + 1] = (n - 1) & 255),
              (r[o + 2] = (n - 1) >>> 8),
              (o += 3)),
        I(e, t, r, o, n),
        o + n
      );
    }
    function v(e, t, n, r) {
      return r < 12 && n < 2048
        ? ((e[t] = 1 + ((r - 4) << 2) + ((n >>> 8) << 5)),
          (e[t + 1] = n & 255),
          t + 2)
        : ((e[t] = 2 + ((r - 1) << 2)),
          (e[t + 1] = n & 255),
          (e[t + 2] = n >>> 8),
          t + 3);
    }
    function S(e, t, n, r) {
      for (; r >= 68; ) ((t = v(e, t, n, 64)), (r -= 64));
      return (r > 64 && ((t = v(e, t, n, 60)), (r -= 60)), v(e, t, n, r));
    }
    function R(e, t, n, r, o) {
      for (var a = 1; 1 << a <= n && a <= f; ) a += 1;
      a -= 1;
      var i = 32 - a;
      typeof g[a] == "undefined" && (g[a] = new Uint16Array(1 << a));
      var l = g[a],
        s;
      for (s = 0; s < l.length; s++) l[s] = 0;
      var u = t + n,
        c,
        d = t,
        m = t,
        p,
        _,
        v,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $ = !0,
        P = 15;
      if (n >= P)
        for (c = u - P, t += 1, _ = h(y(e, t), i); $; ) {
          ((L = 32), (v = t));
          do {
            if (
              ((t = v), (p = _), (E = L >>> 5), (L += 1), (v = t + E), t > c)
            ) {
              $ = !1;
              break;
            }
            ((_ = h(y(e, v), i)), (R = d + l[p]), (l[p] = t - d));
          } while (!C(e, t, R));
          if (!$) break;
          o = b(e, m, t - m, r, o);
          do {
            for (k = t, I = 4; t + I < u && e[t + I] === e[R + I]; ) I += 1;
            if (((t += I), (T = k - R), (o = S(r, o, T, I)), (m = t), t >= c)) {
              $ = !1;
              break;
            }
            ((D = h(y(e, t - 1), i)),
              (l[D] = t - 1 - d),
              (x = h(y(e, t), i)),
              (R = d + l[x]),
              (l[x] = t - d));
          } while (C(e, t, R));
          if (!$) break;
          ((t += 1), (_ = h(y(e, t), i)));
        }
      return (m < u && (o = b(e, m, u - m, r, o)), o);
    }
    function L(e, t, n) {
      do ((t[n] = e & 127), (e = e >>> 7), e > 0 && (t[n] += 128), (n += 1));
      while (e > 0);
      return n;
    }
    function E(e) {
      this.array = e;
    }
    ((E.prototype.maxCompressedLength = function () {
      var e = this.array.length;
      return 32 + e + Math.floor(e / 6);
    }),
      (E.prototype.compressToBuffer = function (e) {
        var t = this.array,
          n = t.length,
          r = 0,
          o = 0,
          a;
        for (o = L(n, e, o); r < n; )
          ((a = Math.min(n - r, _)), (o = R(t, r, a, e, o)), (r += a));
        return o;
      }));
    var k = [0, 255, 65535, 16777215, 4294967295];
    function I(e, t, n, r, o) {
      var a;
      for (a = 0; a < o; a++) n[r + a] = e[t + a];
    }
    function T(e, t, n, r) {
      var o;
      for (o = 0; o < r; o++) e[t + o] = e[t - n + o];
    }
    function D(e) {
      ((this.array = e), (this.pos = 0));
    }
    ((D.prototype.readUncompressedLength = function () {
      for (var e = 0, t = 0, n, r; t < 32 && this.pos < this.array.length; ) {
        if (
          ((n = this.array[this.pos]),
          (this.pos += 1),
          (r = n & 127),
          (r << t) >>> t !== r)
        )
          return -1;
        if (((e |= r << t), n < 128)) return e;
        t += 7;
      }
      return -1;
    }),
      (D.prototype.uncompressToBuffer = function (e) {
        for (
          var t = this.array, n = t.length, r = this.pos, o = 0, a, i, l, s;
          r < t.length;
        )
          if (((a = t[r]), (r += 1), (a & 3) === 0)) {
            if (((i = (a >>> 2) + 1), i > 60)) {
              if (r + 3 >= n) return !1;
              ((l = i - 60),
                (i =
                  t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24)),
                (i = (i & k[l]) + 1),
                (r += l));
            }
            if (r + i > n) return !1;
            (I(t, r, e, o, i), (r += i), (o += i));
          } else {
            switch (a & 3) {
              case 1:
                ((i = ((a >>> 2) & 7) + 4),
                  (s = t[r] + ((a >>> 5) << 8)),
                  (r += 1));
                break;
              case 2:
                if (r + 1 >= n) return !1;
                ((i = (a >>> 2) + 1), (s = t[r] + (t[r + 1] << 8)), (r += 2));
                break;
              case 3:
                if (r + 3 >= n) return !1;
                ((i = (a >>> 2) + 1),
                  (s =
                    t[r] +
                    (t[r + 1] << 8) +
                    (t[r + 2] << 16) +
                    (t[r + 3] << 24)),
                  (r += 4));
                break;
              default:
                break;
            }
            if (s === 0 || s > o) return !1;
            (T(e, o, s, i), (o += i));
          }
        return !0;
      }),
      (a.exports.uncompress = d),
      (a.exports.compress = m));
  },
  null,
);
