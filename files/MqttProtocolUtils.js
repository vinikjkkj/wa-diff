__d(
  "MqttProtocolUtils",
  ["MqttEnv"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null) return t;
      var n = new Uint8Array(e.length + t.length);
      return (n.set(e), n.set(t, e.length), n);
    }
    function s(e, t) {
      var n = t,
        r = 0,
        o = 1,
        a;
      do {
        if (n === e.length) return null;
        ((a = e[n++]), (r += (a & 127) * o), (o *= 128));
      } while ((a & 128) !== 0);
      return { offset: n, value: r };
    }
    function u(e) {
      for (var t = e, n = new Array(1), r = 0; r < 4; r++) {
        var o = t % 128;
        if (((t >>= 7), t > 0)) n[r] = o | 128;
        else {
          n[r] = o;
          break;
        }
      }
      return n;
    }
    function c(e, t, n) {
      var r = n;
      return ((t[r++] = e >> 8), (t[r++] = e % 256), r);
    }
    function d(e, t) {
      return 256 * e[t] + e[t + 1];
    }
    function m(e) {
      for (var t = 0, n = 0, r = e.length; n < r; n++) {
        var o = e.charCodeAt(n);
        o < 128
          ? (t += 1)
          : o < 2048
            ? (t += 2)
            : o >= 55296 && o <= 56319
              ? ((t += 4), n++)
              : (t += 3);
      }
      return t;
    }
    function p(e, t, n, r) {
      var o = c(t, n, r);
      return (_(e, n, o), o + t);
    }
    function _(e, t, n) {
      for (var r = n, o = 0, a = e.length; o < a; o++) {
        var i = e.charCodeAt(o);
        i < 128
          ? (t[r++] = i)
          : i < 2048
            ? ((t[r++] = 192 | (i >> 6)), (t[r++] = 128 | (i & 63)))
            : i < 55296 || i >= 57344
              ? ((t[r++] = 224 | (i >> 12)),
                (t[r++] = 128 | ((i >> 6) & 63)),
                (t[r++] = 128 | (i & 63)))
              : ((i =
                  65536 + (((i & 1023) << 10) | (e.charCodeAt(++o) & 1023))),
                (t[r++] = 240 | (i >> 18)),
                (t[r++] = 128 | ((i >> 12) & 63)),
                (t[r++] = 128 | ((i >> 6) & 63)),
                (t[r++] = 128 | (i & 63)));
      }
    }
    function f(e, t, n) {
      for (var r = [], o = t, a = 0; o < t + n; ) {
        var i = e[o++];
        if (i < 128) r[a++] = String.fromCharCode(i);
        else if (i > 191 && i < 224) {
          var l = e[o++];
          r[a++] = String.fromCharCode(((i & 31) << 6) | (l & 63));
        } else if (i > 239 && i < 365) {
          var s = e[o++],
            u = e[o++],
            c = e[o++],
            d =
              (((i & 7) << 18) |
                ((s & 63) << 12) |
                ((u & 63) << 6) |
                (c & 63)) -
              65536;
          ((r[a++] = String.fromCharCode(55296 + (d >> 10))),
            (r[a++] = String.fromCharCode(56320 + (d & 1023))));
        } else {
          var m = e[o++],
            p = e[o++];
          r[a++] = String.fromCharCode(
            ((i & 15) << 12) | ((m & 63) << 6) | (p & 63),
          );
        }
      }
      return r.join("");
    }
    var g = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$5 = n),
          (this.$6 = r),
          (this.$4 = !1));
      }
      var t = e.prototype;
      return (
        (t.$7 = function () {
          var e = this;
          this.$4
            ? ((this.$4 = !1),
              this.$5(),
              (this.$3 = o("MqttEnv").Env.setTimeout(function () {
                e.$7();
              }, this.$2() * 1e3)))
            : this.$6();
        }),
        (t.reset = function () {
          var e = this;
          ((this.$4 = !0),
            this.$3 &&
              (o("MqttEnv").Env.clearTimeout(this.$3), (this.$3 = null)));
          var t = this.$1() * 1e3;
          t > 0 &&
            (this.$3 = o("MqttEnv").Env.setTimeout(function () {
              e.$7();
            }, t));
        }),
        (t.cancel = function () {
          this.$3 && (o("MqttEnv").Env.clearTimeout(this.$3), (this.$3 = null));
        }),
        e
      );
    })();
    ((l.UTF8Length = m),
      (l.convertStringToUTF8 = _),
      (l.concatBuffers = e),
      (l.decodeMultiByteInt = s),
      (l.convertUTF8ToString = f),
      (l.encodeMultiByteInt = u),
      (l.writeUInt16BE = c),
      (l.readUInt16BE = d),
      (l.writeString = p),
      (l.Pinger = g));
  },
  98,
);
