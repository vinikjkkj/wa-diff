__d(
  "x25519FromNacl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e,
          n = new Float64Array(16);
        if (t) for (e = 0; e < t.length; e++) n[e] = t[e];
        return n;
      },
      l = new Uint8Array(32);
    l[0] = 9;
    var s = e(),
      u = e([1]),
      c = e([56129, 1]),
      d = e([
        30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
        36039, 65139, 11119, 27886, 20995,
      ]),
      m = e([
        61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
        6542, 64743, 22239, 55772, 9222,
      ]),
      p = e([
        54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
        57905, 49316, 21502, 52590, 14035, 8553,
      ]),
      _ = e([
        26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
        26214, 26214, 26214, 26214, 26214, 26214,
      ]),
      f = e([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
    function g(e, t) {
      var n;
      for (n = 0; n < 16; n++) e[n] = t[n] | 0;
    }
    function h(e) {
      var t, n;
      for (n = 0; n < 16; n++)
        ((e[n] += 65536),
          (t = Math.floor(e[n] / 65536)),
          (e[(n + 1) * (n < 15 ? 1 : 0)] +=
            t - 1 + 37 * (t - 1) * (n === 15 ? 1 : 0)),
          (e[n] -= t * 65536));
    }
    function y(e, t, n) {
      for (var r, o = ~(n - 1), a = 0; a < 16; a++)
        ((r = o & (e[a] ^ t[a])), (e[a] ^= r), (t[a] ^= r));
    }
    function C(t, n) {
      var r,
        o,
        a,
        i = e(),
        l = e();
      for (r = 0; r < 16; r++) l[r] = n[r];
      for (h(l), h(l), h(l), o = 0; o < 2; o++) {
        for (i[0] = l[0] - 65517, r = 1; r < 15; r++)
          ((i[r] = l[r] - 65535 - ((i[r - 1] >> 16) & 1)), (i[r - 1] &= 65535));
        ((i[15] = l[15] - 32767 - ((i[14] >> 16) & 1)),
          (a = (i[15] >> 16) & 1),
          (i[14] &= 65535),
          y(l, i, 1 - a));
      }
      for (r = 0; r < 16; r++)
        ((t[2 * r] = l[r] & 255), (t[2 * r + 1] = l[r] >> 8));
    }
    function b(e, t) {
      var n;
      for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
      e[15] &= 32767;
    }
    function v(e, t, n) {
      var r;
      for (r = 0; r < 16; r++) e[r] = (t[r] + n[r]) | 0;
    }
    function S(e, t, n) {
      var r;
      for (r = 0; r < 16; r++) e[r] = (t[r] - n[r]) | 0;
    }
    function R(e, t, n) {
      var r,
        o,
        a = new Float64Array(31);
      for (r = 0; r < 31; r++) a[r] = 0;
      for (r = 0; r < 16; r++) for (o = 0; o < 16; o++) a[r + o] += t[r] * n[o];
      for (r = 0; r < 15; r++) a[r] += 38 * a[r + 16];
      for (r = 0; r < 16; r++) e[r] = a[r];
      (h(e), h(e));
    }
    function L(e, t) {
      R(e, t, t);
    }
    function E(t, n) {
      var r = e(),
        o;
      for (o = 0; o < 16; o++) r[o] = n[o];
      for (o = 253; o >= 0; o--) (L(r, r), o !== 2 && o !== 4 && R(r, r, n));
      for (o = 0; o < 16; o++) t[o] = r[o];
    }
    function k(t, n, r) {
      var o = new Uint8Array(32),
        a = new Float64Array(80),
        i,
        l,
        s = e(),
        u = e(),
        d = e(),
        m = e(),
        p = e(),
        _ = e();
      for (l = 0; l < 31; l++) o[l] = n[l];
      for (o[31] = (n[31] & 127) | 64, o[0] &= 248, b(a, r), l = 0; l < 16; l++)
        ((u[l] = a[l]), (m[l] = s[l] = d[l] = 0));
      for (s[0] = m[0] = 1, l = 254; l >= 0; --l)
        ((i = (o[l >>> 3] >>> (l & 7)) & 1),
          y(s, u, i),
          y(d, m, i),
          v(p, s, d),
          S(s, s, d),
          v(d, u, m),
          S(u, u, m),
          L(m, p),
          L(_, s),
          R(s, d, s),
          R(d, u, p),
          v(p, s, d),
          S(s, s, d),
          L(u, s),
          S(d, m, _),
          R(s, d, c),
          v(s, s, m),
          R(d, d, s),
          R(s, m, _),
          R(m, u, a),
          L(u, p),
          y(s, u, i),
          y(d, m, i));
      for (l = 0; l < 16; l++)
        ((a[l + 16] = s[l]),
          (a[l + 32] = d[l]),
          (a[l + 48] = u[l]),
          (a[l + 64] = m[l]));
      var f = a.subarray(32),
        g = a.subarray(16);
      return (E(f, f), R(g, g, f), C(t, g), 0);
    }
    function I(e, t) {
      return k(e, t, l);
    }
    function T(e, t, n) {
      return (n(t, 32), I(e, t));
    }
    function D(t, n) {
      var r = e(),
        o = e(),
        a = e(),
        i = e(),
        l = e(),
        s = e(),
        u = e(),
        c = e(),
        d = e();
      (S(r, t[1], t[0]),
        S(d, n[1], n[0]),
        R(r, r, d),
        v(o, t[0], t[1]),
        v(d, n[0], n[1]),
        R(o, o, d),
        R(a, t[3], n[3]),
        R(a, a, m),
        R(i, t[2], n[2]),
        v(i, i, i),
        S(l, o, r),
        S(s, i, a),
        v(u, i, a),
        v(c, o, r),
        R(t[0], l, s),
        R(t[1], c, u),
        R(t[2], u, s),
        R(t[3], l, c));
    }
    function x(e, t, n) {
      var r;
      for (r = 0; r < 4; r++) y(e[r], t[r], n);
    }
    var $ = 32,
      P = 32,
      N = 32,
      M = 32;
    function w() {
      for (var e = 0; e < arguments.length; e++)
        if (!(arguments[e] instanceof Uint8Array))
          throw new TypeError("unexpected type, use Uint8Array");
    }
    function A(e) {
      for (var t = 0; t < e.length; t++) e[t] = 0;
    }
    var F = (function () {
      function e() {
        this.randombytesFn = function () {
          throw new Error("no CSPRNG");
        };
        var e =
          typeof self != "undefined" ? self.crypto || self.msCrypto : null;
        if (e && e.getRandomValues) {
          var t = 65536;
          this.randombytesFn = function (n, r) {
            var o,
              a = new Uint8Array(r);
            for (o = 0; o < r; o += t)
              e.getRandomValues(a.subarray(o, o + Math.min(r - o, t)));
            for (o = 0; o < r; o++) n[o] = a[o];
            A(a);
          };
        } else
          e != null &&
            e.randomBytes != null &&
            (this.randombytesFn = function (t, n) {
              var r,
                o = e.randomBytes(n);
              for (r = 0; r < n; r++) t[r] = o[r];
              A(o);
            });
      }
      var t = e.prototype;
      return (
        (t.scalarMult = function (t, n) {
          if ((w(t, n), t.length !== P)) throw new Error("bad n size");
          if (n.length !== $) throw new Error("bad p size");
          var e = new Uint8Array($);
          return (k(e, t, n), e);
        }),
        (t.scalarMultBase = function (t) {
          if ((w(t), t.length !== P)) throw new Error("bad n size");
          var e = new Uint8Array($);
          return (I(e, t), e);
        }),
        (t.boxKeyPair = function () {
          var e = new Uint8Array(N),
            t = new Uint8Array(M);
          return (T(e, t, this.randombytesFn), { publicKey: e, secretKey: t });
        }),
        (t.boxKeyPairFromSecretKey = function (t) {
          if ((w(t), t.length !== M)) throw new Error("bad secret key size");
          var e = new Uint8Array(N);
          return (I(e, t), { publicKey: e, secretKey: new Uint8Array(t) });
        }),
        (t.setPRNG = function (t) {
          this.randombytesFn = t;
        }),
        e
      );
    })();
    i.default = F;
  },
  66,
);
