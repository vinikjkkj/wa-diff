__d(
  "StringEncoding",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = new Uint8Array(e), r = 0, o = []; r < n.length; ) {
        var a = n[r],
          i = void 0;
        if (a >> 7 === 0) i = 1;
        else if (a >> 5 === 6) ((a &= 31), (i = 2));
        else if (a >> 4 === 14) ((a &= 15), (i = 3));
        else if (a >> 3 === 30) ((a &= 7), (i = 4));
        else if (a >> 2 === 62) ((a &= 3), (i = 5));
        else if (a >> 1 === 126) ((a &= 1), (i = 6));
        else {
          var l = new Error(
            "Cannot decode as UTF-8 - unrecognised codepoint header",
          );
          throw (l.stack, l);
        }
        if (r + i > n.length) {
          var s = new Error("Cannot decode as UTF-8 - incomplete codepoint");
          throw (s.stack, s);
        }
        for (var u = 1; u < i; u++) {
          var c = n[r + u];
          if (c >> 6 !== 2) {
            var d = new Error(
              "Cannot decode as UTF-8 - unrecognised codepoint subsequent byte",
            );
            throw (d.stack, d);
          }
          ((c &= 63), (a <<= 6), (a |= c));
        }
        if (a > 1114111) {
          var m = new Error(
            "Cannot decode as UTF-8 - JavaScript doesn't support codepoints over 0x10FFFF",
          );
          throw (m.stack, m);
        }
        if (!a)
          switch (t) {
            case "error": {
              var p = new Error(
                "Cannot decode as UTF-8 - contains a null and we're not allowing them",
              );
              throw (p.stack, p);
            }
            case "ignore":
              continue;
            case "truncate":
              return String.fromCodePoint.apply(String, o);
            case "include":
              break;
          }
        (o.push(a), (r += i));
      }
      return String.fromCodePoint.apply(String, o);
    }
    function l(e) {
      return ((e & 255) << 8) | (e >> 8);
    }
    function s(e, t) {
      if (e.byteLength % 2 !== 0) {
        var n = new Error("Cannot decode as UTF-16 - data length mod 2 != 0");
        throw (n.stack, n);
      }
      var r = new Uint16Array(e),
        o = 0,
        a = [],
        i = !1;
      for (
        r[0] === 65279 ? ++o : r[0] == 65534 && (++o, (i = !0));
        o < r.length;
      ) {
        var s = r[o];
        i && (s = l(s));
        var u = s;
        if (s > 55295 && s < 57344) {
          if ((s & 64512) !== 55296) {
            var c = new Error(
              "Cannot decode as UTF-16 - incorrect signature for high surrogate",
            );
            throw (c.stack, c);
          }
          if (o + 1 >= r.length) {
            var d = new Error("Cannot decode as UTF-16 - incomplete codepoint");
            throw (d.stack, d);
          }
          ++o;
          var m = r[o];
          if ((i && (m = l(m)), (m & 64512) !== 56320)) {
            var p = new Error(
              "Cannot decode as UTF-16 - incorrect signature for low surrogate",
            );
            throw (p.stack, p);
          }
          u = (((s & 1023) << 10) | (m & 1023)) + 65536;
        }
        if (!u)
          switch (t) {
            case "error": {
              var _ = new Error(
                "Cannot decode as UTF-16 - contains a null and we're not allowing them",
              );
              throw (_.stack, _);
            }
            case "ignore":
              continue;
            case "truncate":
              return String.fromCodePoint.apply(String, a);
            case "include":
              break;
          }
        (a.push(u), ++o);
      }
      return String.fromCodePoint.apply(String, a);
    }
    function u(e) {
      return (
        ((e & 255) << 24) |
        ((e & 65280) << 8) |
        ((e & (255 << 16)) >> 8) |
        (e >>> 24)
      );
    }
    function c(e, t) {
      if (e.byteLength % 4 !== 0) {
        var n = new Error("Cannot decode as UTF-32 - data length mod 4 != 0");
        throw (n.stack, n);
      }
      var r = new Uint32Array(e),
        o = 0,
        a = [],
        i = !1;
      for (
        r[0] === 65279 ? ++o : r[0] == 4294836224 && (++o, (i = !0));
        o < r.length;
      ) {
        var l = r[o];
        if ((i && (l = u(l)), l & 2147483648)) {
          var s = new Error("Cannot decode as UTF-32 - invalid codepoint");
          throw (s.stack, s);
        }
        if (l > 1114111) {
          var c = new Error(
            "Cannot decode as UTF-32 - JavaScript doesn't support codepoints over 0x10FFFF",
          );
          throw (c.stack, c);
        }
        if (!l)
          switch (t) {
            case "error": {
              var d = new Error(
                "Cannot decode as UTF-32 - contains a null and we're not allowing them",
              );
              throw (d.stack, d);
            }
            case "ignore":
              continue;
            case "truncate":
              return String.fromCodePoint.apply(String, a);
            case "include":
              break;
          }
        (a.push(l), ++o);
      }
      return String.fromCodePoint.apply(String, a);
    }
    var d = { "utf-8": e, "utf-16": s, "utf-32": c },
      m = (function () {
        function e(e, t) {
          (e != null
            ? (this.$1 = e)
            : (this.$1 = ["utf-8", "utf-16", "utf-32"]),
            t == null ? (this.$2 = "error") : (this.$2 = t));
          for (var n of this.$1) this.$3(n);
        }
        var t = e.prototype;
        return (
          (t.getPrecedence = function () {
            return this.$1;
          }),
          (t.decode = function (t) {
            var e = [];
            for (var n of this.$1) {
              var r = this.$3(n);
              try {
                return r(t, this.$2);
              } catch (t) {
                e.push(t);
              }
            }
            var o = new Error(e.join(", "));
            throw (o.stack, o);
          }),
          (t.$3 = function (t) {
            var e = d[t];
            if (e == null) {
              var n = new Error("Unknown encoding " + t);
              throw (n.stack, n);
            }
            return e;
          }),
          e
        );
      })();
    i.Decoder = m;
  },
  66,
);
