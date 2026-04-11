__d(
  "punycode-2.1.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      var e = 2147483647,
        t = 36,
        n = 1,
        r = 26,
        o = 38,
        a = 700,
        i = 72,
        s = 128,
        u = "-",
        c = /^xn--/,
        d = /[^\0-\x7E]/,
        m = /[\x2E\u3002\uFF0E\uFF61]/g,
        p = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        _ = t - n,
        f = Math.floor,
        g = String.fromCharCode;
      function h(e) {
        throw new RangeError(p[e]);
      }
      function y(e, t) {
        for (var n = [], r = e.length; r--; ) n[r] = t(e[r]);
        return n;
      }
      function C(e, t) {
        var n = e.split("@"),
          r = "";
        (n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
          (e = e.replace(m, ".")));
        var o = e.split("."),
          a = y(o, t).join(".");
        return r + a;
      }
      function b(e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
          var o = e.charCodeAt(n++);
          if (o >= 55296 && o <= 56319 && n < r) {
            var a = e.charCodeAt(n++);
            (a & 64512) == 56320
              ? t.push(((o & 1023) << 10) + (a & 1023) + 65536)
              : (t.push(o), n--);
          } else t.push(o);
        }
        return t;
      }
      var v = function (t) {
          return String.fromCodePoint.apply(String, t);
        },
        S = function (n) {
          return n - 48 < 10
            ? n - 22
            : n - 65 < 26
              ? n - 65
              : n - 97 < 26
                ? n - 97
                : t;
        },
        R = function (t, n) {
          return t + 22 + 75 * (t < 26) - ((n != 0) << 5);
        },
        L = function (n, i, l) {
          var e = 0;
          for (
            n = l ? f(n / a) : n >> 1, n += f(n / i);
            n > (_ * r) >> 1;
            e += t
          )
            n = f(n / _);
          return f(e + ((_ + 1) * n) / (n + o));
        },
        E = function (a) {
          var o = [],
            l = a.length,
            c = 0,
            d = s,
            m = i,
            p = a.lastIndexOf(u);
          p < 0 && (p = 0);
          for (var _ = 0; _ < p; ++_)
            (a.charCodeAt(_) >= 128 && h("not-basic"), o.push(a.charCodeAt(_)));
          for (var g = p > 0 ? p + 1 : 0; g < l; ) {
            for (var y = c, C = 1, b = t; ; b += t) {
              g >= l && h("invalid-input");
              var v = S(a.charCodeAt(g++));
              ((v >= t || v > f((e - c) / C)) && h("overflow"), (c += v * C));
              var R = b <= m ? n : b >= m + r ? r : b - m;
              if (v < R) break;
              var E = t - R;
              (C > f(e / E) && h("overflow"), (C *= E));
            }
            var k = o.length + 1;
            ((m = L(c - y, k, y == 0)),
              f(c / k) > e - d && h("overflow"),
              (d += f(c / k)),
              (c %= k),
              o.splice(c++, 0, d));
          }
          return String.fromCodePoint.apply(String, o);
        },
        k = function (a) {
          var o = [];
          a = b(a);
          var l = a.length,
            c = s,
            d = 0,
            m = i;
          for (var p of a) p < 128 && o.push(g(p));
          var _ = o.length,
            y = _;
          for (_ && o.push(u); y < l; ) {
            var C = e;
            for (var v of a) v >= c && v < C && (C = v);
            var S = y + 1;
            (C - c > f((e - d) / S) && h("overflow"),
              (d += (C - c) * S),
              (c = C));
            for (var E of a)
              if ((E < c && ++d > e && h("overflow"), E == c)) {
                for (var k = d, I = t; ; I += t) {
                  var T = I <= m ? n : I >= m + r ? r : I - m;
                  if (k < T) break;
                  var D = k - T,
                    x = t - T;
                  (o.push(g(R(T + (D % x), 0))), (k = f(D / x)));
                }
                (o.push(g(R(k, 0))), (m = L(d, S, y == _)), (d = 0), ++y);
              }
            (++d, ++c);
          }
          return o.join("");
        },
        I = function (t) {
          return C(t, function (e) {
            return c.test(e) ? E(e.slice(4).toLowerCase()) : e;
          });
        },
        T = function (t) {
          return C(t, function (e) {
            return d.test(e) ? "xn--" + k(e) : e;
          });
        },
        D = {
          version: "2.1.0",
          ucs2: { decode: b, encode: v },
          decode: E,
          encode: k,
          toASCII: T,
          toUnicode: I,
        };
      l.exports = D;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
