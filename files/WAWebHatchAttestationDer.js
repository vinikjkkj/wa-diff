__d(
  "WAWebHatchAttestationDer",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 2,
      u = 3,
      c = 5,
      d = 6,
      m = 10,
      p = 13,
      _ = 16,
      f = 17,
      g = 23,
      h = 24,
      y = 0,
      C = 64,
      b = 32,
      v = 31,
      S = 128,
      R = 256,
      L = 32,
      E = 4,
      k = new Map([
        [e, q],
        [s, V],
        [m, V],
        [u, H],
        [c, U],
        [d, W],
        [p, W],
        [g, G],
        [h, z],
      ]),
      I = /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z$/,
      T = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z$/,
      D = 50,
      x = 24,
      $ = 60,
      P = 60,
      N = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function M(e, t) {
      var n = w(
        e,
        0,
        e.length,
        0,
        (t == null ? void 0 : t.booleansDefaultToFalse) === !0,
      );
      if (n !== e.length) throw r("err")("DER input has trailing bytes");
    }
    function w(t, n, o, a, i) {
      if (a > L) throw r("err")("DER nesting is too deep");
      var l = A(t, n, o);
      if ((l.universal && B(l), l.constructed))
        for (var s = l.start; s < l.end; ) s = w(t, s, l.end, a + 1, i);
      else if (l.universal) {
        var u = t.subarray(l.start, l.end);
        if ((O(l.tag, u), i && l.tag === e && u[0] === 0))
          throw r("err")("DER omits a BOOLEAN equal to its DEFAULT FALSE");
      }
      return l.end;
    }
    function A(e, t, n) {
      var o = t,
        a = X(e, o++, n),
        i = a % (v + 1);
      if (i === v) {
        i = 0;
        var l,
          s = !0;
        do {
          if (((l = X(e, o++, n)), s && l === 128))
            throw r("err")("DER tag number is not minimal");
          if (
            ((s = !1), (i = i * S + (l % S)), i > Number.MAX_SAFE_INTEGER / S)
          )
            throw r("err")("DER tag number is too large");
        } while (l >= S);
        if (i < v) throw r("err")("DER tag number is not minimal");
      }
      var u = F(e, o, n),
        c = u.length,
        d = u.next;
      if (d + c > n) throw r("err")("DER length runs past the input");
      return {
        tag: i,
        universal: Math.floor(a / C) === 0,
        constructed: Math.floor(a / b) % 2 === 1,
        start: d,
        end: d + c,
      };
    }
    function F(e, t, n) {
      var o = X(e, t, n);
      if (o < S) return { length: o, next: t + 1 };
      var a = o % S;
      if (a === 0) throw r("err")("DER forbids indefinite lengths");
      if (a > E) throw r("err")("DER length is too large");
      for (var i = 0, l = 1; l <= a; l++) {
        var s = X(e, t + l, n);
        if (l === 1 && s === 0) throw r("err")("DER length is not minimal");
        i = i * R + s;
      }
      if (i < S) throw r("err")("DER length is not minimal");
      return { length: i, next: t + 1 + a };
    }
    function O(e, t) {
      var n;
      (n = k.get(e)) == null || n(t);
    }
    function B(e) {
      if (e.tag === y) throw r("err")("DER forbids end-of-contents markers");
      var t = e.tag === _ || e.tag === f;
      if (e.constructed !== t)
        throw r("err")(
          t
            ? "DER requires SEQUENCE and SET to be constructed"
            : "DER forbids constructed encoding of a primitive type",
        );
    }
    function W(e) {
      var t;
      if (e.length === 0) throw r("err")("DER OBJECT IDENTIFIER is empty");
      if (((t = e[e.length - 1]) != null ? t : 0) >= S)
        throw r("err")("DER OBJECT IDENTIFIER is truncated");
      var n = !0;
      for (var o of e) {
        if (n && o === S)
          throw r("err")("DER OBJECT IDENTIFIER is not minimal");
        n = o < S;
      }
    }
    function q(e) {
      if (e.length !== 1 || (e[0] !== 0 && e[0] !== 255))
        throw r("err")("DER BOOLEAN must be 0x00 or 0xFF");
    }
    function U(e) {
      if (e.length !== 0) throw r("err")("DER NULL must be empty");
    }
    function V(e) {
      var t, n;
      if (e.length === 0) throw r("err")("DER INTEGER is empty");
      var o = (t = e[0]) != null ? t : 0,
        a = (n = e[1]) != null ? n : 0;
      if (e.length > 1 && ((o === 0 && a < S) || (o === 255 && a >= S)))
        throw r("err")("DER INTEGER is not minimal");
    }
    function H(e) {
      var t,
        n = e[0];
      if (n == null || n > 7)
        throw r("err")("DER BIT STRING has an invalid unused-bit count");
      if (e.length === 1 && n !== 0)
        throw r("err")("DER BIT STRING has unused bits but no content");
      var o = (t = e[e.length - 1]) != null ? t : 0;
      if (e.length > 1 && o % Math.pow(2, n) !== 0)
        throw r("err")("DER BIT STRING unused bits are not zero");
    }
    function G(e) {
      var t = j(e, I),
        n = t[0] < D ? 2e3 + t[0] : 1900 + t[0];
      K(n, t);
    }
    function z(e) {
      var t = j(e, T);
      K(t[0], t);
    }
    function j(e, t) {
      var n = "";
      for (var o of e) n += String.fromCharCode(o);
      var a = t.exec(n);
      if (a == null)
        throw r("err")("DER time is not YYMMDDHHMMSSZ or YYYYMMDDHHMMSSZ");
      return a.slice(1).map(Number);
    }
    function K(e, t) {
      var n,
        o = t[1],
        a = t[2],
        i = t[3],
        l = t[4],
        s = t[5],
        u = o === 2 && Q(e) ? 1 : 0;
      if (
        o < 1 ||
        o > N.length ||
        a < 1 ||
        a > ((n = N[o - 1]) != null ? n : 0) + u ||
        i >= x ||
        l >= $ ||
        s >= P
      )
        throw r("err")("DER time is not a valid date and time");
    }
    function Q(e) {
      return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
    }
    function X(e, t, n) {
      var o;
      if (t >= n) throw r("err")("DER input is truncated");
      return (o = e[t]) != null ? o : 0;
    }
    l.assertDistinguishedEncoding = M;
  },
  98,
);
