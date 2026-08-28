__d(
  "WebBloksRsaTimelockMontgomeryArithmetic",
  [],
  function (t, n, r, o, a, i) {
    var e = 26,
      l = 67108864;
    function s(e) {
      var t = e % l;
      return t < 0 ? t + l : t;
    }
    function u(e, t) {
      for (var n = e.length - 1; n >= 0; n--)
        if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
      return 0;
    }
    function c(e, t) {
      for (var n = 0, r = 0; r < t.length; r++) {
        var o = e[r] - t[r] - n;
        (o < 0 ? ((o += l), (n = 1)) : (n = 0), (e[r] = o));
      }
    }
    function d(e, t, n) {
      for (var r = t, o = 0; o < e.length; o++) {
        var a = e[o] * 2 + r;
        ((e[o] = s(a)), (r = Math.floor(a / l)));
      }
      (r !== 0 || u(e, n) >= 0) && c(e, n);
    }
    function m(e, t) {
      for (var n = new Array(t).fill(0), r = 0; r < e.length; r++)
        for (var o = parseInt(e[r], 16), a = 0; a < t; a++) {
          var i = n[a] * 16 + o;
          ((n[a] = s(i)), (o = Math.floor(i / l)));
        }
      return n;
    }
    function p(e, t) {
      for (var n = new Array(t.length).fill(0), r = 0; r < e.length; r++)
        for (var o = parseInt(e[r], 16), a = 3; a >= 0; a--) {
          var i = Math.floor(o / Math.pow(2, a)) % 2;
          d(n, i, t);
        }
      return n;
    }
    function _(e) {
      for (var t = l, n = e, r = 0, o = 1; n !== 0; ) {
        var a = Math.floor(t / n),
          i = t - a * n,
          u = r - a * o;
        ((t = n), (n = i), (r = o), (o = u));
      }
      if (t !== 1) {
        var c = new Error("RSA modulus must be odd");
        throw (c.stack, c);
      }
      return s(-r);
    }
    function f(e, t, n, r, o, a) {
      var i = n.length;
      o.fill(0);
      for (var d = 0; d < i; d++) {
        for (var m = 0, p = 0; p < i; p++) {
          var _ = o[p] + e[d] * t[p] + m;
          ((o[p] = s(_)), (m = Math.floor(_ / l)));
        }
        for (var f = i; m !== 0; f++) {
          var g = o[f] + m;
          ((o[f] = s(g)), (m = Math.floor(g / l)));
        }
        var h = s(o[0] * r);
        m = 0;
        for (var y = 0; y < i; y++) {
          var C = o[y] + h * n[y] + m;
          ((o[y] = s(C)), (m = Math.floor(C / l)));
        }
        for (var b = i; m !== 0; b++) {
          var v = o[b] + m;
          ((o[b] = s(v)), (m = Math.floor(v / l)));
        }
        for (var S = 0; S <= i; S++) o[S] = o[S + 1];
        o[i + 1] = 0;
      }
      for (var R = 0; R < i; R++) a[R] = o[R];
      (o[i] !== 0 || u(a, n) >= 0) && c(a, n);
    }
    function g(t, n) {
      for (var r = t.slice(), o = 0; o < n.length * e; o++) d(r, 0, n);
      return r;
    }
    function h(e) {
      for (var t = e.slice(), n = t.length - 1, r = ""; n >= 0; ) {
        for (var o = 0, a = n; a >= 0; a--) {
          var i = o * l + t[a];
          ((t[a] = Math.floor(i / 16)), (o = i % 16));
        }
        for (r = o.toString(16) + r; n >= 0 && t[n] === 0; ) n--;
      }
      return r === "" ? "0" : r;
    }
    var y = (function () {
      function t(t, n) {
        var r = Math.ceil((t.length * 4) / e),
          o = m(t, r),
          a = _(o[0]),
          i = p(n, o);
        ((this.$3 = o),
          (this.$4 = a),
          (this.$2 = g(i, o)),
          (this.$5 = new Array(r).fill(0)),
          (this.$1 = new Array(r + 2).fill(0)),
          (this.$6 = new Array(r).fill(0)),
          (this.$6[0] = 1));
      }
      var n = t.prototype;
      return (
        (n.square = function () {
          f(this.$2, this.$2, this.$3, this.$4, this.$1, this.$5);
          var e = this.$2;
          ((this.$2 = this.$5), (this.$5 = e));
        }),
        (n.toHex = function () {
          return (
            f(this.$2, this.$6, this.$3, this.$4, this.$1, this.$5),
            h(this.$5)
          );
        }),
        t
      );
    })();
    function C(e, t) {
      return new y(e, t);
    }
    i.default = C;
  },
  66,
);
