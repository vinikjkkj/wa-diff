__d(
  "WAHex",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 16,
      s = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70],
      u = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
    function c(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        t.push(s[r >> 4], s[r & 15]);
      }
      return String.fromCharCode.apply(String, t);
    }
    function d(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        t.push(u[r >> 4], u[r & 15]);
      }
      return String.fromCharCode.apply(String, t);
    }
    function m(e) {
      var t = _(e);
      if (t.length % 2 !== 0)
        throw r("err")(
          'parseHex given hex "' + t + '" which is not a multiple of 8-bits.',
        );
      for (
        var n = new Uint8Array(t.length >> 1), o = 0, a = 0;
        o < t.length;
        o += 2, a++
      )
        n[a] = (p(t, o) << 4) | p(t, o + 1);
      return n.buffer;
    }
    function p(e, t) {
      var n = e.charCodeAt(t);
      return n <= 57 ? n - 48 : n <= 70 ? 10 + n - 65 : 10 + n - 97;
    }
    function _(e) {
      if (/[^0-9a-fA-F]/.test(e))
        throw r("err")('"' + e + '" is not a valid hex');
      return e;
    }
    function f(e) {
      var t = e.buffer;
      return e.byteOffset === 0 && e.length === t.byteLength
        ? t
        : t.slice(e.byteOffset, e.byteOffset + e.length);
    }
    function g(e) {
      for (var t = !0, n = e.length; t && n; ) {
        var r = e[--n];
        t = 32 <= r && r < 127;
      }
      return t ? JSON.stringify(String.fromCharCode.apply(String, e)) : c(e);
    }
    function h(t, n) {
      n === void 0 && (n = !1);
      var r = _(t);
      return (E(r, e), (n ? "-" : "") + "0x" + C(r, e));
    }
    function y(e, t, n) {
      n === void 0 && (n = !1);
      var r = k(e),
        o = k(t);
      return (n ? "-" : "") + "0x" + r + o;
    }
    function C(e, t) {
      for (var n = t - e.length, r = e, o = 0; o < n; o++) r = "0" + r;
      return r;
    }
    function b(e) {
      var t = e < 0,
        n = t ? (-e).toString(16) : e.toString(16);
      return h(n, t);
    }
    function v(e) {
      return e.substring(e.indexOf("0x") + 2);
    }
    function S(e) {
      return e[0] === "-";
    }
    function R(e, t) {
      var n = S(e),
        r = S(t);
      if (n !== r) return !n;
      var o = v(e) > v(t);
      return n ? !o : o;
    }
    function L(e) {
      return S(e) ? e.slice(1) : "-" + e;
    }
    function E(e, t) {
      if (e.length > t)
        throw r("err")('"' + e + '" is longer than ' + t * 4 + " bits.");
    }
    function k(e) {
      if (e > 4294967295 || e < -4294967296)
        throw r("err")("uint32ToLowerCaseHex given number over 32 bits");
      var t = (e >= 0 ? e : 4294967296 + e).toString(16);
      return C(t, 8);
    }
    ((l.NUM_HEX_IN_LONG = e),
      (l.HEX_LOWER = u),
      (l.toHex = c),
      (l.toLowerCaseHex = d),
      (l.parseHex = m),
      (l.hexAt = p),
      (l.hexOrThrow = _),
      (l.bytesToBuffer = f),
      (l.bytesToDebugString = g),
      (l.createHexLong = h),
      (l.createHexLongFrom32Bits = y),
      (l.hexLongFromNumber = b),
      (l.hexLongToHex = v),
      (l.hexLongIsNegative = S),
      (l.isBiggerHexLong = R),
      (l.negateHexLong = L));
  },
  98,
);
