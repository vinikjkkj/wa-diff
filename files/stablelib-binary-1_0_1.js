__d(
  "stablelib-binary-1.0.1",
  ["stablelib-int-1.0.1"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("stablelib-int-1.0.1")),
      s = {},
      u = { exports: s };
    function c() {
      Object.defineProperty(s, "__esModule", { value: !0 });
      var e = l();
      function t(e, t) {
        return (
          t === void 0 && (t = 0),
          (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16
        );
      }
      s.readInt16BE = t;
      function n(e, t) {
        return (t === void 0 && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0);
      }
      s.readUint16BE = n;
      function r(e, t) {
        return (
          t === void 0 && (t = 0),
          (((e[t + 1] << 8) | e[t]) << 16) >> 16
        );
      }
      s.readInt16LE = r;
      function o(e, t) {
        return (t === void 0 && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0);
      }
      s.readUint16LE = o;
      function a(e, t, n) {
        return (
          t === void 0 && (t = new Uint8Array(2)),
          n === void 0 && (n = 0),
          (t[n + 0] = e >>> 8),
          (t[n + 1] = e >>> 0),
          t
        );
      }
      ((s.writeUint16BE = a), (s.writeInt16BE = a));
      function i(e, t, n) {
        return (
          t === void 0 && (t = new Uint8Array(2)),
          n === void 0 && (n = 0),
          (t[n + 0] = e >>> 0),
          (t[n + 1] = e >>> 8),
          t
        );
      }
      ((s.writeUint16LE = i), (s.writeInt16LE = i));
      function u(e, t) {
        return (
          t === void 0 && (t = 0),
          (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
        );
      }
      s.readInt32BE = u;
      function c(e, t) {
        return (
          t === void 0 && (t = 0),
          ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        );
      }
      s.readUint32BE = c;
      function d(e, t) {
        return (
          t === void 0 && (t = 0),
          (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
        );
      }
      s.readInt32LE = d;
      function m(e, t) {
        return (
          t === void 0 && (t = 0),
          ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
        );
      }
      s.readUint32LE = m;
      function p(e, t, n) {
        return (
          t === void 0 && (t = new Uint8Array(4)),
          n === void 0 && (n = 0),
          (t[n + 0] = e >>> 24),
          (t[n + 1] = e >>> 16),
          (t[n + 2] = e >>> 8),
          (t[n + 3] = e >>> 0),
          t
        );
      }
      ((s.writeUint32BE = p), (s.writeInt32BE = p));
      function _(e, t, n) {
        return (
          t === void 0 && (t = new Uint8Array(4)),
          n === void 0 && (n = 0),
          (t[n + 0] = e >>> 0),
          (t[n + 1] = e >>> 8),
          (t[n + 2] = e >>> 16),
          (t[n + 3] = e >>> 24),
          t
        );
      }
      ((s.writeUint32LE = _), (s.writeInt32LE = _));
      function f(e, t) {
        t === void 0 && (t = 0);
        var n = u(e, t),
          r = u(e, t + 4);
        return n * 4294967296 + r - (r >> 31) * 4294967296;
      }
      s.readInt64BE = f;
      function g(e, t) {
        t === void 0 && (t = 0);
        var n = c(e, t),
          r = c(e, t + 4);
        return n * 4294967296 + r;
      }
      s.readUint64BE = g;
      function h(e, t) {
        t === void 0 && (t = 0);
        var n = d(e, t),
          r = d(e, t + 4);
        return r * 4294967296 + n - (n >> 31) * 4294967296;
      }
      s.readInt64LE = h;
      function y(e, t) {
        t === void 0 && (t = 0);
        var n = m(e, t),
          r = m(e, t + 4);
        return r * 4294967296 + n;
      }
      s.readUint64LE = y;
      function C(e, t, n) {
        return (
          t === void 0 && (t = new Uint8Array(8)),
          n === void 0 && (n = 0),
          p((e / 4294967296) >>> 0, t, n),
          p(e >>> 0, t, n + 4),
          t
        );
      }
      ((s.writeUint64BE = C), (s.writeInt64BE = C));
      function b(e, t, n) {
        return (
          t === void 0 && (t = new Uint8Array(8)),
          n === void 0 && (n = 0),
          _(e >>> 0, t, n),
          _((e / 4294967296) >>> 0, t, n + 4),
          t
        );
      }
      ((s.writeUint64LE = b), (s.writeInt64LE = b));
      function v(e, t, n) {
        if ((n === void 0 && (n = 0), e % 8 !== 0))
          throw new Error("readUintBE supports only bitLengths divisible by 8");
        if (e / 8 > t.length - n)
          throw new Error(
            "readUintBE: array is too short for the given bitLength",
          );
        for (var r = 0, o = 1, a = e / 8 + n - 1; a >= n; a--)
          ((r += t[a] * o), (o *= 256));
        return r;
      }
      s.readUintBE = v;
      function S(e, t, n) {
        if ((n === void 0 && (n = 0), e % 8 !== 0))
          throw new Error("readUintLE supports only bitLengths divisible by 8");
        if (e / 8 > t.length - n)
          throw new Error(
            "readUintLE: array is too short for the given bitLength",
          );
        for (var r = 0, o = 1, a = n; a < n + e / 8; a++)
          ((r += t[a] * o), (o *= 256));
        return r;
      }
      s.readUintLE = S;
      function R(t, n, r, o) {
        if (
          (r === void 0 && (r = new Uint8Array(t / 8)),
          o === void 0 && (o = 0),
          t % 8 !== 0)
        )
          throw new Error(
            "writeUintBE supports only bitLengths divisible by 8",
          );
        if (!e.isSafeInteger(n))
          throw new Error("writeUintBE value must be an integer");
        for (var a = 1, i = t / 8 + o - 1; i >= o; i--)
          ((r[i] = (n / a) & 255), (a *= 256));
        return r;
      }
      s.writeUintBE = R;
      function L(t, n, r, o) {
        if (
          (r === void 0 && (r = new Uint8Array(t / 8)),
          o === void 0 && (o = 0),
          t % 8 !== 0)
        )
          throw new Error(
            "writeUintLE supports only bitLengths divisible by 8",
          );
        if (!e.isSafeInteger(n))
          throw new Error("writeUintLE value must be an integer");
        for (var a = 1, i = o; i < o + t / 8; i++)
          ((r[i] = (n / a) & 255), (a *= 256));
        return r;
      }
      s.writeUintLE = L;
      function E(e, t) {
        t === void 0 && (t = 0);
        var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
        return n.getFloat32(t);
      }
      s.readFloat32BE = E;
      function k(e, t) {
        t === void 0 && (t = 0);
        var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
        return n.getFloat32(t, !0);
      }
      s.readFloat32LE = k;
      function I(e, t) {
        t === void 0 && (t = 0);
        var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
        return n.getFloat64(t);
      }
      s.readFloat64BE = I;
      function T(e, t) {
        t === void 0 && (t = 0);
        var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
        return n.getFloat64(t, !0);
      }
      s.readFloat64LE = T;
      function D(e, t, n) {
        (t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0));
        var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(n, e), t);
      }
      s.writeFloat32BE = D;
      function x(e, t, n) {
        (t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0));
        var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(n, e, !0), t);
      }
      s.writeFloat32LE = x;
      function $(e, t, n) {
        (t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0));
        var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(n, e), t);
      }
      s.writeFloat64BE = $;
      function P(e, t, n) {
        (t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0));
        var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(n, e, !0), t);
      }
      s.writeFloat64LE = P;
    }
    var d = !1;
    function m() {
      return (d || ((d = !0), c()), u.exports);
    }
    function p(e) {
      switch (e) {
        case void 0:
          return m();
      }
    }
    a.exports = p;
  },
  null,
);
