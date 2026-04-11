__d(
  "WABinary",
  ["WAHex", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 65533,
      s = 10,
      u = new Uint8Array(s),
      c = new Uint8Array(0),
      d = (function () {
        function e(t, n) {
          var r = this;
          (t === void 0 && (t = c),
            n === void 0 && (n = !1),
            (this.$1 = new Uint8Array(0)),
            (this.$2 = 0),
            (this.$4 = 0),
            (this.write = function () {
              for (var t = 0; t < arguments.length; t++) {
                var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                typeof n == "string"
                  ? r.writeString(n)
                  : typeof n == "number"
                    ? r.writeUint8(n)
                    : n instanceof e
                      ? r.writeBinary(n)
                      : n instanceof ArrayBuffer
                        ? r.writeBuffer(n)
                        : n instanceof Uint8Array && r.writeByteArray(n);
              }
            }),
            t instanceof ArrayBuffer
              ? ((this.$1 = new Uint8Array(t)),
                (this.$2 = this.$4 = t.byteLength))
              : t instanceof Uint8Array &&
                ((this.$1 = t), (this.$2 = this.$4 = t.length)),
            (this.$5 = 0),
            (this.$6 = this.$3 = 0),
            (this.$7 = null),
            (this.$8 = n),
            (this.$9 = 0),
            (this.$10 = 0));
        }
        var t = e.prototype;
        return (
          (t.size = function () {
            return this.$2 - this.$3;
          }),
          (t.peek = function (t, n) {
            this.$9++;
            var e = this.$3,
              r = this.$5;
            try {
              return t(this, n);
            } finally {
              (this.$9--, (this.$3 = e - (this.$5 - r)));
            }
          }),
          (t.advance = function (t) {
            this.$11(t);
          }),
          (t.readWithViewParser = function (t, n, r, o) {
            return n(this.$12(), this.$11(t), t, r, o);
          }),
          (t.readWithBytesParser = function (t, n, r, o) {
            return n(this.$1, this.$11(t), t, r, o);
          }),
          (t.readUint8 = function () {
            return g(this, 1, y, !1);
          }),
          (t.readInt8 = function () {
            return g(this, 1, y, !0);
          }),
          (t.readUint16 = function (t) {
            return (t === void 0 && (t = this.$8), g(this, 2, C, t));
          }),
          (t.readInt32 = function (t) {
            return (t === void 0 && (t = this.$8), g(this, 4, b, t));
          }),
          (t.readUint32 = function (t) {
            return (t === void 0 && (t = this.$8), g(this, 4, v, t));
          }),
          (t.readInt64 = function (t) {
            return (t === void 0 && (t = this.$8), g(this, 8, S, j, t));
          }),
          (t.readUint64 = function (t) {
            return (t === void 0 && (t = this.$8), g(this, 8, S, K, t));
          }),
          (t.readLong = function (t, n) {
            return (n === void 0 && (n = this.$8), g(this, 8, S, t, n));
          }),
          (t.readFloat32 = function (t) {
            return (t === void 0 && (t = this.$8), g(this, 4, R, t));
          }),
          (t.readFloat64 = function (t) {
            return (t === void 0 && (t = this.$8), g(this, 8, L, t));
          }),
          (t.readVarInt = function (t) {
            var e = this.size(),
              n = h(this, 0, E, e);
            return h(this, n, k, t);
          }),
          (t.readBuffer = function (t) {
            return (
              t === void 0 && (t = this.size()),
              t === 0 ? new ArrayBuffer(0) : h(this, t, I)
            );
          }),
          (t.readByteArrayView = function (t) {
            return (
              t === void 0 && (t = this.size()),
              t === 0 ? new Uint8Array(0) : h(this, t, T)
            );
          }),
          (t.readBinary = function (n, r) {
            if (
              (n === void 0 && (n = this.size()),
              r === void 0 && (r = this.$8),
              n === 0)
            )
              return new e(void 0, r);
            var t = h(this, n, T);
            return new e(t, r);
          }),
          (t.indexOf = function (t) {
            if (t.length === 0) return 0;
            for (
              var e = this.$1, n = this.$2, r = this.$3, o = 0, a = r, i = r;
              i < n;
              i++
            )
              if (e[i] === t[o]) {
                if ((o === 0 && (a = i), o++, o === t.byteLength))
                  return i - r - t.byteLength + 1;
              } else o > 0 && ((o = 0), (i = a));
            return -1;
          }),
          (t.readString = function (t) {
            return h(this, t, D);
          }),
          (t.ensureCapacity = function (t) {
            this.$13(this.$3 + t);
          }),
          (t.ensureAdditionalCapacity = function (t) {
            this.$13(this.$4 + t);
          }),
          (t.writeToView = function (t, n, r, o) {
            var e = this.$14(t);
            return n(this.$12(), e, t, r, o);
          }),
          (t.writeToBytes = function (t, n, r, o) {
            var e = this.$14(t);
            return n(this.$1, e, t, r, o);
          }),
          (t.writeUint8 = function (t) {
            (G(t, 0, 256, "uint8"), $(this, 1, P, t, !1));
          }),
          (t.writeInt8 = function (t) {
            (G(t, -128, 128, "signed int8"), $(this, 1, P, t, !0));
          }),
          (t.writeUint16 = function (t, n) {
            (n === void 0 && (n = this.$8),
              G(t, 0, 65536, "uint16"),
              x(this, 2, N, t, n));
          }),
          (t.writeInt16 = function (t, n) {
            (n === void 0 && (n = this.$8),
              G(t, -32768, 32768, "signed int16"),
              x(this, 2, M, t, n));
          }),
          (t.writeUint32 = function (t, n) {
            (n === void 0 && (n = this.$8),
              G(t, 0, 4294967296, "uint32"),
              x(this, 4, w, t, n));
          }),
          (t.writeInt32 = function (t, n) {
            (n === void 0 && (n = this.$8),
              G(t, -2147483648, 2147483648, "signed int32"),
              x(this, 4, A, t, n));
          }),
          (t.writeUint64 = function (t, n) {
            (n === void 0 && (n = this.$8),
              G(t, 0, 18446744073709552e3, "uint64"),
              x(this, 8, F, t, n));
          }),
          (t.writeInt64 = function (t, n) {
            (n === void 0 && (n = this.$8),
              G(t, -9223372036854776e3, 9223372036854776e3, "signed int64"),
              x(this, 8, F, t, n));
          }),
          (t.writeFloat32 = function (t, n) {
            (n === void 0 && (n = this.$8), x(this, 4, O, t, n));
          }),
          (t.writeFloat64 = function (t, n) {
            (n === void 0 && (n = this.$8), x(this, 8, B, t, n));
          }),
          (t.writeVarInt = function (t) {
            G(
              t,
              -9223372036854776e3,
              9223372036854776e3,
              "varint (signed int64)",
            );
            var e = t < 0,
              n = e ? -t : t,
              r = Math.floor(n / 4294967296),
              o = n - r * 4294967296;
            e && ((r = ~r), o === 0 ? r++ : (o = -o));
            var a = H(r, o);
            $(this, a, W, r, o);
          }),
          (t.writeVarIntFromHexLong = function (t) {
            for (
              var e = o("WAHex").hexLongIsNegative(t),
                n = e ? o("WAHex").negateHexLong(t) : t,
                r = o("WAHex").hexLongToHex(n),
                a = 0,
                i = 0,
                l = 0;
              l < o("WAHex").NUM_HEX_IN_LONG;
              l++
            )
              ((a = (a << 4) | (i >>> 28)),
                (i = (i << 4) | o("WAHex").hexAt(r, l)));
            e && ((a = ~a), i === 0 ? a++ : (i = -i));
            var s = H(a, i);
            $(this, s, W, a, i);
          }),
          (t.writeBinary = function (t) {
            var e = t.peek(function (e) {
              return e.readByteArrayView();
            });
            if (e.length) {
              var n = this.$14(e.length);
              this.$1.set(e, n);
            }
          }),
          (t.writeBuffer = function (t) {
            this.writeByteArray(new Uint8Array(t));
          }),
          (t.writeByteArray = function (t) {
            var e = this.$14(t.length);
            this.$1.set(t, e);
          }),
          (t.writeBufferView = function (t) {
            this.writeByteArray(
              new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
            );
          }),
          (t.writeString = function (t) {
            $(this, _(t), q, t);
          }),
          (t.writeHexLong = function (t, n) {
            (n === void 0 && (n = this.$8), x(this, 8, U, t, n));
          }),
          (t.writeBytes = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            for (var r = 0; r < t.length; r++) G(t[r], 0, 256, "byte");
            $(this, t.length, V, t);
          }),
          (t.writeAtomically = function (t, n) {
            this.$10++;
            var e = this.$4,
              r = this.$5;
            try {
              var o = t(this, n);
              return ((e = this.$4), (r = this.$5), o);
            } finally {
              (this.$10--, (this.$4 = e - (this.$5 - r)));
            }
          }),
          (t.writeWithVarIntLength = function (t, n) {
            var e = this.$4,
              r = this.writeAtomically(t, n),
              o = this.$4;
            this.writeVarInt(o - e);
            for (var a = this.$4 - o, i = this.$1, l = 0; l < a; l++)
              u[l] = i[o + l];
            for (var s = o - 1; s >= e; s--) i[s + a] = i[s];
            for (var c = 0; c < a; c++) i[e + c] = u[c];
            return r;
          }),
          (e.build = function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            for (var o = 0, a = 0; a < n.length; a++) {
              var i = n[a];
              typeof i == "string"
                ? (o += _(i))
                : typeof i == "number"
                  ? o++
                  : i instanceof e
                    ? (o += i.size())
                    : i instanceof ArrayBuffer
                      ? (o += i.byteLength)
                      : i instanceof Uint8Array && (o += i.length);
            }
            var l = new e();
            return (l.ensureCapacity(o), l.write.apply(l, arguments), l);
          }),
          (t.$12 = function () {
            return (
              this.$7 ||
              (this.$7 = new DataView(this.$1.buffer, this.$1.byteOffset))
            );
          }),
          (t.$11 = function (t) {
            if (t < 0)
              throw r("err")(
                "ReadError: given negative number of bytes to read",
              );
            var e = this.$3,
              n = e + t;
            if (n > this.$2)
              throw r("err")(
                e === this.$2
                  ? "ReadError: tried to read from depleted binary"
                  : "ReadError: tried to read beyond end of binary",
              );
            return ((this.$3 = n), this.$9 || (this.$6 = n), e);
          }),
          (t.$13 = function (t) {
            var e = this.$1;
            if (t <= e.length) return t;
            var n = this.$6,
              r = t - n,
              o = Math.max(r, 2 * (e.length - n), 64),
              a = new Uint8Array(o);
            return (
              n
                ? (a.set(e.subarray(n)),
                  (this.$5 += n),
                  (this.$3 -= n),
                  (this.$2 -= n),
                  (this.$4 -= n),
                  (this.$6 = 0))
                : a.set(e),
              (this.$1 = a),
              (this.$7 = null),
              r
            );
          }),
          (t.$14 = function (t) {
            var e = this.$13(this.$4 + t),
              n = this.$4;
            return ((this.$4 = e), this.$10 || (this.$2 = e), n);
          }),
          e
        );
      })(),
      m = "",
      p = 0;
    function _(e) {
      if (e === m) return p;
      for (var t = e.length, n = 0, r = 0; r < t; r++) {
        var o = e.charCodeAt(r);
        if (o < 128) n++;
        else if (o < 2048) n += 2;
        else if (o < 55296 || (57344 <= o && o <= 65535)) n += 3;
        else if (55296 <= o && o < 56320 && r + 1 !== t) {
          var a = e.charCodeAt(r + 1);
          56320 <= a && a < 57344 ? (r++, (n += 4)) : (n += 3);
        } else n += 3;
      }
      return ((m = e), (p = n));
    }
    function f(e, t, n) {
      var r = t >> 21;
      if (e) {
        var o = t & 2097151,
          a = !!(o || n);
        return r === 0 || (r === -1 && a);
      } else return r === 0;
    }
    function g(e, t, n, r, o) {
      return e.readWithViewParser(t, n, r, o);
    }
    function h(e, t, n, r, o) {
      return e.readWithBytesParser(t, n, r, o);
    }
    function y(e, t, n, r) {
      return r ? e.getInt8(t) : e.getUint8(t);
    }
    function C(e, t, n, r) {
      return e.getUint16(t, r);
    }
    function b(e, t, n, r) {
      return e.getInt32(t, r);
    }
    function v(e, t, n, r) {
      return e.getUint32(t, r);
    }
    function S(e, t, n, r, o) {
      var a = e.getInt32(o ? t + 4 : t, o),
        i = e.getInt32(o ? t : t + 4, o);
      return r(a, i);
    }
    function R(e, t, n, r) {
      return e.getFloat32(t, r);
    }
    function L(e, t, n, r) {
      return e.getFloat64(t, r);
    }
    function E(e, t, n, o) {
      for (var a = Math.min(o, s), i = 0, l = 128; i < a && l & 128; )
        l = e[t + i++];
      if (i === s && l > 1)
        throw r("err")("ParseError: varint exceeds 64 bits");
      return l & 128 ? i + 1 : i;
    }
    function k(e, t, n, r) {
      var o = 0,
        a = 0,
        i = n;
      n === s && (i--, (a = e[t + i] & 1));
      for (var l = i - 1; l >= 0; l--)
        ((o = (o << 7) | (a >>> 25)), (a = (a << 7) | (e[t + l] & 127)));
      return r(o, a);
    }
    function I(e, t, n) {
      var r = t + e.byteOffset,
        o = e.buffer;
      return r === 0 && n === o.byteLength ? o : o.slice(r, r + n);
    }
    function T(e, t, n) {
      return e.subarray(t, t + n);
    }
    function D(t, n, r) {
      for (var o = n + r, a = [], i = null, l = n; l < o; l++) {
        a.length > 5e3 &&
          (i || (i = []),
          i.push(String.fromCharCode.apply(String, a)),
          (a = []));
        var s = t[l] | 0;
        if ((s & 128) === 0) a.push(s);
        else if ((s & 224) === 192) {
          var u = Q(t, l + 1, o);
          if (u) {
            l++;
            var c = ((s & 31) << 6) | (u & 63);
            c >= 128 ? a.push(c) : a.push(e);
          } else a.push(e);
        } else if ((s & 240) === 224) {
          var d = Q(t, l + 1, o),
            m = Q(t, l + 2, o);
          if (d && m) {
            l += 2;
            var p = ((s & 15) << 12) | ((d & 63) << 6) | (m & 63);
            p >= 2048 && !(55296 <= p && p < 57344) ? a.push(p) : a.push(e);
          } else (d && l++, a.push(e));
        } else if ((s & 248) === 240) {
          var _ = Q(t, l + 1, o),
            f = Q(t, l + 2, o),
            g = Q(t, l + 3, o);
          if (_ && f && g) {
            l += 3;
            var h =
              ((s & 7) << 18) | ((_ & 63) << 12) | ((f & 63) << 6) | (g & 63);
            if (h >= 65536 && h <= 1114111) {
              var y = h - 65536;
              a.push(55296 | (y >> 10), 56320 | (y & 1023));
            } else a.push(e);
          } else _ && f ? ((l += 2), a.push(e)) : (_ && l++, a.push(e));
        } else a.push(e);
      }
      var C = String.fromCharCode.apply(String, a);
      return i ? (i.push(C), i.join("")) : C;
    }
    function x(e, t, n, r, o) {
      return e.writeToView(t, n, r, o);
    }
    function $(e, t, n, r, o) {
      return e.writeToBytes(t, n, r, o);
    }
    function P(e, t, n, r) {
      e[t] = r;
    }
    function N(e, t, n, r, o) {
      e.setUint16(t, r, o);
    }
    function M(e, t, n, r, o) {
      e.setInt16(t, r, o);
    }
    function w(e, t, n, r, o) {
      e.setUint32(t, r, o);
    }
    function A(e, t, n, r, o) {
      e.setInt32(t, r, o);
    }
    function F(e, t, n, r, o) {
      var a = r < 0,
        i = a ? -r : r,
        l = Math.floor(i / 4294967296),
        s = i - l * 4294967296;
      (a && ((l = ~l), s === 0 ? l++ : (s = -s)),
        e.setUint32(o ? t + 4 : t, l, o),
        e.setUint32(o ? t : t + 4, s, o));
    }
    function O(e, t, n, r, o) {
      e.setFloat32(t, r, o);
    }
    function B(e, t, n, r, o) {
      e.setFloat64(t, r, o);
    }
    function W(e, t, n, r, o) {
      for (var a = r, i = o, l = t + n - 1, s = t; s < l; s++)
        ((e[s] = 128 | (i & 127)), (i = (a << 25) | (i >>> 7)), (a >>>= 7));
      e[l] = i;
    }
    function q(e, t, n, r) {
      for (var o = t, a = r.length, i = 0; i < a; i++) {
        var l = r.charCodeAt(i);
        if (l < 128) e[o++] = l;
        else if (l < 2048)
          ((e[o++] = 192 | (l >> 6)), (e[o++] = 128 | (l & 63)));
        else if (l < 55296 || 57344 <= l)
          ((e[o++] = 224 | (l >> 12)),
            (e[o++] = 128 | ((l >> 6) & 63)),
            (e[o++] = 128 | (l & 63)));
        else if (55296 <= l && l < 56320 && i + 1 !== a) {
          var s = r.charCodeAt(i + 1);
          if (56320 <= s && s < 57344) {
            i++;
            var u = 65536 + (((l & 1023) << 10) | (s & 1023));
            ((e[o++] = 240 | (u >> 18)),
              (e[o++] = 128 | ((u >> 12) & 63)),
              (e[o++] = 128 | ((u >> 6) & 63)),
              (e[o++] = 128 | (u & 63)));
          } else ((e[o++] = 239), (e[o++] = 191), (e[o++] = 189));
        } else ((e[o++] = 239), (e[o++] = 191), (e[o++] = 189));
      }
    }
    function U(e, t, n, r, a) {
      for (
        var i = o("WAHex").hexLongIsNegative(r),
          l = o("WAHex").hexLongToHex(r),
          s = 0,
          u = 0,
          c = 0;
        c < 16;
        c++
      )
        ((s = (s << 4) | (u >>> 28)), (u = (u << 4) | o("WAHex").hexAt(l, c)));
      (i && ((s = ~s), u === 0 ? s++ : (u = -u)),
        e.setUint32(a ? t + 4 : t, s, a),
        e.setUint32(a ? t : t + 4, u, a));
    }
    function V(e, t, n, r) {
      for (var o = 0; o < n; o++) e[t + o] = r[o];
    }
    function H(e, t) {
      var n, r;
      for (e ? ((n = 5), (r = e >>> 3)) : ((n = 1), (r = t >>> 7)); r; )
        (n++, (r >>>= 7));
      return n;
    }
    function G(e, t, n, o) {
      if (
        typeof e != "number" ||
        e !== e ||
        Math.floor(e) !== e ||
        e < t ||
        e >= n
      )
        throw r("err")(
          typeof e == "string"
            ? 'TyperError WriteError: string "' + e + '" is not a valid ' + o
            : "TypeError WriteError: " + String(e) + " is not a valid " + o,
        );
    }
    function z(e, t, n) {
      var o = f(e, t, n),
        a;
      t >= 0 ? (a = t) : (a = e ? t : 4294967296 + t);
      var i = n >= 0 ? n : 4294967296 + n,
        l = a * 4294967296 + i;
      if (!o) throw r("err")("ReadError: integer exceeded 53 bits (" + l + ")");
      return l;
    }
    function j(e, t) {
      return z(!0, e, t);
    }
    function K(e, t) {
      return z(!1, e, t);
    }
    function Q(e, t, n) {
      if (t >= n) return 0;
      var r = e[t] | 0;
      return (r & 192) === 128 ? r : 0;
    }
    ((l.Binary = d),
      (l.numUtf8Bytes = _),
      (l.longFitsInDouble = f),
      (l.parseInt64OrThrow = j),
      (l.parseUint64OrThrow = K));
  },
  98,
);
