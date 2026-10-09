__d(
  "x25519FromNacl",
  ["vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e,
          n = new Float64Array(16);
        if (t) for (e = 0; e < t.length; e++) n[e] = t[e];
        return n;
      },
      s = new Uint8Array(32);
    s[0] = 9;
    var u = e(),
      c = e([1]),
      d = e([56129, 1]),
      m = e([
        30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
        36039, 65139, 11119, 27886, 20995,
      ]),
      p = e([
        61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
        6542, 64743, 22239, 55772, 9222,
      ]),
      _ = e([
        54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
        57905, 49316, 21502, 52590, 14035, 8553,
      ]),
      f = e([
        26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
        26214, 26214, 26214, 26214, 26214, 26214,
      ]),
      g = e([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
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
      r("vulture")("zS_4fj1qPWhWxXCoe2ZkluCcGm4=");
      var o;
      for (o = 0; o < 16; o++) e[o] = (t[o] + n[o]) | 0;
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
      for (var a = 253; a >= 0; a--)
        (L(r, r), a !== 2 && a !== 4 && R(r, r, n));
      for (o = 0; o < 16; o++) t[o] = r[o];
    }
    function k(t, n, r) {
      var o = new Uint8Array(32),
        a = new Float64Array(80),
        i,
        l,
        s = e(),
        u = e(),
        c = e(),
        m = e(),
        p = e(),
        _ = e();
      for (l = 0; l < 31; l++) o[l] = n[l];
      for (o[31] = (n[31] & 127) | 64, o[0] &= 248, b(a, r), l = 0; l < 16; l++)
        ((u[l] = a[l]), (m[l] = s[l] = c[l] = 0));
      for (s[0] = m[0] = 1, l = 254; l >= 0; --l)
        ((i = (o[l >>> 3] >>> (l & 7)) & 1),
          y(s, u, i),
          y(c, m, i),
          v(p, s, c),
          S(s, s, c),
          v(c, u, m),
          S(u, u, m),
          L(m, p),
          L(_, s),
          R(s, c, s),
          R(c, u, p),
          v(p, s, c),
          S(s, s, c),
          L(u, s),
          S(c, m, _),
          R(s, c, d),
          v(s, s, m),
          R(c, c, s),
          R(s, m, _),
          R(m, u, a),
          L(u, p),
          y(s, u, i),
          y(c, m, i));
      for (l = 0; l < 16; l++)
        ((a[l + 16] = s[l]),
          (a[l + 32] = c[l]),
          (a[l + 48] = u[l]),
          (a[l + 64] = m[l]));
      var f = a.subarray(32),
        g = a.subarray(16);
      return (E(f, f), R(g, g, f), C(t, g), 0);
    }
    function I(e, t) {
      return k(e, t, s);
    }
    function T(e, t, n) {
      return (n(t, 32), I(e, t));
    }
    var D = 32,
      x = 32,
      $ = 32,
      P = 32;
    function N() {
      for (var e = 0; e < arguments.length; e++)
        if (
          !(
            (e < 0 || arguments.length <= e ? void 0 : arguments[e]) instanceof
            Uint8Array
          )
        )
          throw new TypeError("unexpected type, use Uint8Array");
    }
    function M(e) {
      for (var t = 0; t < e.length; t++) e[t] = 0;
    }
    var w = (function () {
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
            M(a);
          };
        } else
          e != null &&
            e.randomBytes != null &&
            (this.randombytesFn = function (t, n) {
              var r,
                o = e.randomBytes(n);
              for (r = 0; r < n; r++) t[r] = o[r];
              M(o);
            });
      }
      var t = e.prototype;
      return (
        (t.scalarMult = function (t, n) {
          if ((N(t, n), t.length !== x)) throw new Error("bad n size");
          if (n.length !== D) throw new Error("bad p size");
          var e = new Uint8Array(D);
          return (k(e, t, n), e);
        }),
        (t.scalarMultBase = function (t) {
          if ((N(t), t.length !== x)) throw new Error("bad n size");
          var e = new Uint8Array(D);
          return (I(e, t), e);
        }),
        (t.boxKeyPair = function () {
          var e = new Uint8Array($),
            t = new Uint8Array(P);
          return (T(e, t, this.randombytesFn), { publicKey: e, secretKey: t });
        }),
        (t.boxKeyPairFromSecretKey = function (t) {
          if ((N(t), t.length !== P)) throw new Error("bad secret key size");
          var e = new Uint8Array($);
          return (I(e, t), { publicKey: e, secretKey: new Uint8Array(t) });
        }),
        (t.setPRNG = function (t) {
          this.randombytesFn = t;
        }),
        e
      );
    })();
    l.default = w;
  },
  98,
);
