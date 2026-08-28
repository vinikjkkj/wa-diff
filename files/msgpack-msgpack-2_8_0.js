__d(
  "msgpack-msgpack-2.8.0",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getUint64 =
          e.getInt64 =
          e.setInt64 =
          e.setUint64 =
          e.UINT32_MAX =
            void 0),
        (e.UINT32_MAX = 4294967295));
      function t(e, t, n) {
        var r = n / 4294967296,
          o = n;
        (e.setUint32(t, r), e.setUint32(t + 4, o));
      }
      e.setUint64 = t;
      function n(e, t, n) {
        var r = Math.floor(n / 4294967296),
          o = n;
        (e.setUint32(t, r), e.setUint32(t + 4, o));
      }
      e.setInt64 = n;
      function r(e, t) {
        var n = e.getInt32(t),
          r = e.getUint32(t + 4);
        return n * 4294967296 + r;
      }
      e.getInt64 = r;
      function o(e, t) {
        var n = e.getUint32(t),
          r = e.getUint32(t + 4);
        return n * 4294967296 + r;
      }
      e.getUint64 = o;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      var e, t, n;
      (Object.defineProperty(d, "__esModule", { value: !0 }),
        (d.utf8DecodeTD =
          d.TEXT_DECODER_THRESHOLD =
          d.utf8DecodeJs =
          d.utf8EncodeTE =
          d.TEXT_ENCODER_THRESHOLD =
          d.utf8EncodeJs =
          d.utf8Count =
            void 0));
      var r = c(),
        o =
          (typeof process == "undefined" ||
            ((e = process == null ? void 0 : process.env) === null ||
            e === void 0
              ? void 0
              : e.TEXT_ENCODING) !== "never") &&
          typeof TextEncoder != "undefined" &&
          typeof TextDecoder != "undefined";
      function a(e) {
        for (var t = e.length, n = 0, r = 0; r < t; ) {
          var o = e.charCodeAt(r++);
          if ((o & 4294967168) === 0) {
            n++;
            continue;
          } else if ((o & 4294965248) === 0) n += 2;
          else {
            if (o >= 55296 && o <= 56319 && r < t) {
              var a = e.charCodeAt(r);
              (a & 64512) === 56320 &&
                (++r, (o = ((o & 1023) << 10) + (a & 1023) + 65536));
            }
            (o & 4294901760) === 0 ? (n += 3) : (n += 4);
          }
        }
        return n;
      }
      d.utf8Count = a;
      function i(e, t, n) {
        for (var r = e.length, o = n, a = 0; a < r; ) {
          var i = e.charCodeAt(a++);
          if ((i & 4294967168) === 0) {
            t[o++] = i;
            continue;
          } else if ((i & 4294965248) === 0) t[o++] = ((i >> 6) & 31) | 192;
          else {
            if (i >= 55296 && i <= 56319 && a < r) {
              var l = e.charCodeAt(a);
              (l & 64512) === 56320 &&
                (++a, (i = ((i & 1023) << 10) + (l & 1023) + 65536));
            }
            (i & 4294901760) === 0
              ? ((t[o++] = ((i >> 12) & 15) | 224),
                (t[o++] = ((i >> 6) & 63) | 128))
              : ((t[o++] = ((i >> 18) & 7) | 240),
                (t[o++] = ((i >> 12) & 63) | 128),
                (t[o++] = ((i >> 6) & 63) | 128));
          }
          t[o++] = (i & 63) | 128;
        }
      }
      d.utf8EncodeJs = i;
      var l = o ? new TextEncoder() : void 0;
      d.TEXT_ENCODER_THRESHOLD = o
        ? typeof process != "undefined" &&
          ((t = process == null ? void 0 : process.env) === null || t === void 0
            ? void 0
            : t.TEXT_ENCODING) !== "force"
          ? 200
          : 0
        : r.UINT32_MAX;
      function s(e, t, n) {
        t.set(l.encode(e), n);
      }
      function u(e, t, n) {
        l.encodeInto(e, t.subarray(n));
      }
      d.utf8EncodeTE = l != null && l.encodeInto ? u : s;
      var m = 4096;
      function p(e, t, n) {
        for (var r = t, o = r + n, a = [], i = ""; r < o; ) {
          var l = e[r++];
          if ((l & 128) === 0) a.push(l);
          else if ((l & 224) === 192) {
            var s = e[r++] & 63;
            a.push(((l & 31) << 6) | s);
          } else if ((l & 240) === 224) {
            var u = e[r++] & 63,
              c = e[r++] & 63;
            a.push(((l & 31) << 12) | (u << 6) | c);
          } else if ((l & 248) === 240) {
            var d = e[r++] & 63,
              p = e[r++] & 63,
              _ = e[r++] & 63,
              f = ((l & 7) << 18) | (d << 12) | (p << 6) | _;
            (f > 65535 &&
              ((f -= 65536),
              a.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (f & 1023))),
              a.push(f));
          } else a.push(l);
          a.length >= m &&
            ((i += String.fromCharCode.apply(String, a)), (a.length = 0));
        }
        return (a.length > 0 && (i += String.fromCharCode.apply(String, a)), i);
      }
      d.utf8DecodeJs = p;
      var _ = o ? new TextDecoder() : null;
      d.TEXT_DECODER_THRESHOLD = o
        ? typeof process != "undefined" &&
          ((n = process == null ? void 0 : process.env) === null || n === void 0
            ? void 0
            : n.TEXT_DECODER) !== "force"
          ? 200
          : 0
        : r.UINT32_MAX;
      function f(e, t, n) {
        var r = e.subarray(t, t + n);
        return _.decode(r);
      }
      d.utf8DecodeTD = f;
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    var g = {},
      h = { exports: g };
    function y() {
      (Object.defineProperty(g, "__esModule", { value: !0 }),
        (g.ExtData = void 0));
      var e = function (t, n) {
        ((this.type = t), (this.data = n));
      };
      g.ExtData = e;
    }
    var C = !1;
    function b() {
      return (C || ((C = !0), y()), h.exports);
    }
    var v = {},
      S = { exports: v };
    function R() {
      (Object.defineProperty(v, "__esModule", { value: !0 }),
        (v.DecodeError = void 0));
      var e = (function (e) {
        function t(n) {
          var r;
          r = e.call(this, n) || this;
          var o = Object.create(t.prototype);
          return (
            Object.setPrototypeOf(r, o),
            Object.defineProperty(r, "name", {
              configurable: !0,
              enumerable: !1,
              value: t.name,
            }),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
      v.DecodeError = e;
    }
    var L = !1;
    function E() {
      return (L || ((L = !0), R()), S.exports);
    }
    var k = {},
      I = { exports: k };
    function T() {
      (Object.defineProperty(k, "__esModule", { value: !0 }),
        (k.timestampExtension =
          k.decodeTimestampExtension =
          k.decodeTimestampToTimeSpec =
          k.encodeTimestampExtension =
          k.encodeDateToTimeSpec =
          k.encodeTimeSpecToTimestamp =
          k.EXT_TIMESTAMP =
            void 0));
      var e = E(),
        t = c();
      k.EXT_TIMESTAMP = -1;
      var n = 4294967296 - 1,
        r = 17179869184 - 1;
      function o(e) {
        var o = e.sec,
          a = e.nsec;
        if (o >= 0 && a >= 0 && o <= r)
          if (a === 0 && o <= n) {
            var i = new Uint8Array(4),
              l = new DataView(i.buffer);
            return (l.setUint32(0, o), i);
          } else {
            var s = o / 4294967296,
              u = o & 4294967295,
              c = new Uint8Array(8),
              d = new DataView(c.buffer);
            return (d.setUint32(0, (a << 2) | (s & 3)), d.setUint32(4, u), c);
          }
        else {
          var m = new Uint8Array(12),
            p = new DataView(m.buffer);
          return (p.setUint32(0, a), (0, t.setInt64)(p, 4, o), m);
        }
      }
      k.encodeTimeSpecToTimestamp = o;
      function a(e) {
        var t = e.getTime(),
          n = Math.floor(t / 1e3),
          r = (t - n * 1e3) * 1e6,
          o = Math.floor(r / 1e9);
        return { sec: n + o, nsec: r - o * 1e9 };
      }
      k.encodeDateToTimeSpec = a;
      function i(e) {
        if (e instanceof Date) {
          var t = a(e);
          return o(t);
        } else return null;
      }
      k.encodeTimestampExtension = i;
      function l(n) {
        var r = new DataView(n.buffer, n.byteOffset, n.byteLength);
        switch (n.byteLength) {
          case 4: {
            var o = r.getUint32(0),
              a = 0;
            return { sec: o, nsec: a };
          }
          case 8: {
            var i = r.getUint32(0),
              l = r.getUint32(4),
              s = (i & 3) * 4294967296 + l,
              u = i >>> 2;
            return { sec: s, nsec: u };
          }
          case 12: {
            var c = (0, t.getInt64)(r, 4),
              d = r.getUint32(0);
            return { sec: c, nsec: d };
          }
          default:
            throw new e.DecodeError(
              "Unrecognized data size for timestamp (expected 4, 8, or 12): " +
                n.length,
            );
        }
      }
      k.decodeTimestampToTimeSpec = l;
      function s(e) {
        var t = l(e);
        return new Date(t.sec * 1e3 + t.nsec / 1e6);
      }
      ((k.decodeTimestampExtension = s),
        (k.timestampExtension = {
          type: k.EXT_TIMESTAMP,
          encode: i,
          decode: s,
        }));
    }
    var D = !1;
    function x() {
      return (D || ((D = !0), T()), I.exports);
    }
    var $ = {},
      P = { exports: $ };
    function N() {
      (Object.defineProperty($, "__esModule", { value: !0 }),
        ($.ExtensionCodec = void 0));
      var e = b(),
        t = x(),
        n = (function () {
          function n() {
            ((this.builtInEncoders = []),
              (this.builtInDecoders = []),
              (this.encoders = []),
              (this.decoders = []),
              this.register(t.timestampExtension));
          }
          var r = n.prototype;
          return (
            (r.register = function (t) {
              var e = t.type,
                n = t.encode,
                r = t.decode;
              if (e >= 0) ((this.encoders[e] = n), (this.decoders[e] = r));
              else {
                var o = 1 + e;
                ((this.builtInEncoders[o] = n), (this.builtInDecoders[o] = r));
              }
            }),
            (r.tryToEncode = function (n, r) {
              for (var t = 0; t < this.builtInEncoders.length; t++) {
                var o = this.builtInEncoders[t];
                if (o != null) {
                  var a = o(n, r);
                  if (a != null) {
                    var i = -1 - t;
                    return new e.ExtData(i, a);
                  }
                }
              }
              for (var l = 0; l < this.encoders.length; l++) {
                var s = this.encoders[l];
                if (s != null) {
                  var u = s(n, r);
                  if (u != null) {
                    var c = l;
                    return new e.ExtData(c, u);
                  }
                }
              }
              return n instanceof e.ExtData ? n : null;
            }),
            (r.decode = function (n, r, o) {
              var t = r < 0 ? this.builtInDecoders[-1 - r] : this.decoders[r];
              return t ? t(n, r, o) : new e.ExtData(r, n);
            }),
            n
          );
        })();
      (($.ExtensionCodec = n), (n.defaultCodec = new n()));
    }
    var M = !1;
    function w() {
      return (M || ((M = !0), N()), P.exports);
    }
    var A = {},
      F = { exports: A };
    function O() {
      (Object.defineProperty(A, "__esModule", { value: !0 }),
        (A.createDataView = A.ensureUint8Array = void 0));
      function e(e) {
        return e instanceof Uint8Array
          ? e
          : ArrayBuffer.isView(e)
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e instanceof ArrayBuffer
              ? new Uint8Array(e)
              : Uint8Array.from(e);
      }
      A.ensureUint8Array = e;
      function t(t) {
        if (t instanceof ArrayBuffer) return new DataView(t);
        var n = e(t);
        return new DataView(n.buffer, n.byteOffset, n.byteLength);
      }
      A.createDataView = t;
    }
    var B = !1;
    function W() {
      return (B || ((B = !0), O()), F.exports);
    }
    var q = {},
      U = { exports: q };
    function V() {
      (Object.defineProperty(q, "__esModule", { value: !0 }),
        (q.Encoder =
          q.DEFAULT_INITIAL_BUFFER_SIZE =
          q.DEFAULT_MAX_DEPTH =
            void 0));
      var e = f(),
        t = w(),
        n = c(),
        r = W();
      ((q.DEFAULT_MAX_DEPTH = 100), (q.DEFAULT_INITIAL_BUFFER_SIZE = 2048));
      var o = (function () {
        function o(e, n, r, o, a, i, l, s) {
          (e === void 0 && (e = t.ExtensionCodec.defaultCodec),
            n === void 0 && (n = void 0),
            r === void 0 && (r = q.DEFAULT_MAX_DEPTH),
            o === void 0 && (o = q.DEFAULT_INITIAL_BUFFER_SIZE),
            a === void 0 && (a = !1),
            i === void 0 && (i = !1),
            l === void 0 && (l = !1),
            s === void 0 && (s = !1),
            (this.extensionCodec = e),
            (this.context = n),
            (this.maxDepth = r),
            (this.initialBufferSize = o),
            (this.sortKeys = a),
            (this.forceFloat32 = i),
            (this.ignoreUndefined = l),
            (this.forceIntegerToFloat = s),
            (this.pos = 0),
            (this.view = new DataView(new ArrayBuffer(this.initialBufferSize))),
            (this.bytes = new Uint8Array(this.view.buffer)));
        }
        var a = o.prototype;
        return (
          (a.reinitializeState = function () {
            this.pos = 0;
          }),
          (a.encodeSharedRef = function (t) {
            return (
              this.reinitializeState(),
              this.doEncode(t, 1),
              this.bytes.subarray(0, this.pos)
            );
          }),
          (a.encode = function (t) {
            return (
              this.reinitializeState(),
              this.doEncode(t, 1),
              this.bytes.slice(0, this.pos)
            );
          }),
          (a.doEncode = function (t, n) {
            if (n > this.maxDepth)
              throw new Error("Too deep objects in depth " + n);
            t == null
              ? this.encodeNil()
              : typeof t == "boolean"
                ? this.encodeBoolean(t)
                : typeof t == "number"
                  ? this.encodeNumber(t)
                  : typeof t == "string"
                    ? this.encodeString(t)
                    : this.encodeObject(t, n);
          }),
          (a.ensureBufferSizeToWrite = function (t) {
            var e = this.pos + t;
            this.view.byteLength < e && this.resizeBuffer(e * 2);
          }),
          (a.resizeBuffer = function (t) {
            var e = new ArrayBuffer(t),
              n = new Uint8Array(e),
              r = new DataView(e);
            (n.set(this.bytes), (this.view = r), (this.bytes = n));
          }),
          (a.encodeNil = function () {
            this.writeU8(192);
          }),
          (a.encodeBoolean = function (t) {
            t === !1 ? this.writeU8(194) : this.writeU8(195);
          }),
          (a.encodeNumber = function (t) {
            Number.isSafeInteger(t) && !this.forceIntegerToFloat
              ? t >= 0
                ? t < 128
                  ? this.writeU8(t)
                  : t < 256
                    ? (this.writeU8(204), this.writeU8(t))
                    : t < 65536
                      ? (this.writeU8(205), this.writeU16(t))
                      : t < 4294967296
                        ? (this.writeU8(206), this.writeU32(t))
                        : (this.writeU8(207), this.writeU64(t))
                : t >= -32
                  ? this.writeU8(224 | (t + 32))
                  : t >= -128
                    ? (this.writeU8(208), this.writeI8(t))
                    : t >= -32768
                      ? (this.writeU8(209), this.writeI16(t))
                      : t >= -2147483648
                        ? (this.writeU8(210), this.writeI32(t))
                        : (this.writeU8(211), this.writeI64(t))
              : this.forceFloat32
                ? (this.writeU8(202), this.writeF32(t))
                : (this.writeU8(203), this.writeF64(t));
          }),
          (a.writeStringHeader = function (t) {
            if (t < 32) this.writeU8(160 + t);
            else if (t < 256) (this.writeU8(217), this.writeU8(t));
            else if (t < 65536) (this.writeU8(218), this.writeU16(t));
            else if (t < 4294967296) (this.writeU8(219), this.writeU32(t));
            else throw new Error("Too long string: " + t + " bytes in UTF-8");
          }),
          (a.encodeString = function (n) {
            var t = 5,
              r = n.length;
            if (r > e.TEXT_ENCODER_THRESHOLD) {
              var o = (0, e.utf8Count)(n);
              (this.ensureBufferSizeToWrite(t + o),
                this.writeStringHeader(o),
                (0, e.utf8EncodeTE)(n, this.bytes, this.pos),
                (this.pos += o));
            } else {
              var a = (0, e.utf8Count)(n);
              (this.ensureBufferSizeToWrite(t + a),
                this.writeStringHeader(a),
                (0, e.utf8EncodeJs)(n, this.bytes, this.pos),
                (this.pos += a));
            }
          }),
          (a.encodeObject = function (t, n) {
            var e = this.extensionCodec.tryToEncode(t, this.context);
            if (e != null) this.encodeExtension(e);
            else if (Array.isArray(t)) this.encodeArray(t, n);
            else if (ArrayBuffer.isView(t)) this.encodeBinary(t);
            else if (typeof t == "object") this.encodeMap(t, n);
            else
              throw new Error(
                "Unrecognized object: " + Object.prototype.toString.apply(t),
              );
          }),
          (a.encodeBinary = function (t) {
            var e = t.byteLength;
            if (e < 256) (this.writeU8(196), this.writeU8(e));
            else if (e < 65536) (this.writeU8(197), this.writeU16(e));
            else if (e < 4294967296) (this.writeU8(198), this.writeU32(e));
            else throw new Error("Too large binary: " + e);
            var n = (0, r.ensureUint8Array)(t);
            this.writeU8a(n);
          }),
          (a.encodeArray = function (t, n) {
            var e = t.length;
            if (e < 16) this.writeU8(144 + e);
            else if (e < 65536) (this.writeU8(220), this.writeU16(e));
            else if (e < 4294967296) (this.writeU8(221), this.writeU32(e));
            else throw new Error("Too large array: " + e);
            for (var r of t) this.doEncode(r, n + 1);
          }),
          (a.countWithoutUndefined = function (t, n) {
            var e = 0;
            for (var r of n) t[r] !== void 0 && e++;
            return e;
          }),
          (a.encodeMap = function (t, n) {
            var e = Object.keys(t);
            this.sortKeys && e.sort();
            var r = this.ignoreUndefined
              ? this.countWithoutUndefined(t, e)
              : e.length;
            if (r < 16) this.writeU8(128 + r);
            else if (r < 65536) (this.writeU8(222), this.writeU16(r));
            else if (r < 4294967296) (this.writeU8(223), this.writeU32(r));
            else throw new Error("Too large map object: " + r);
            for (var o of e) {
              var a = t[o];
              (this.ignoreUndefined && a === void 0) ||
                (this.encodeString(o), this.doEncode(a, n + 1));
            }
          }),
          (a.encodeExtension = function (t) {
            var e = t.data.length;
            if (e === 1) this.writeU8(212);
            else if (e === 2) this.writeU8(213);
            else if (e === 4) this.writeU8(214);
            else if (e === 8) this.writeU8(215);
            else if (e === 16) this.writeU8(216);
            else if (e < 256) (this.writeU8(199), this.writeU8(e));
            else if (e < 65536) (this.writeU8(200), this.writeU16(e));
            else if (e < 4294967296) (this.writeU8(201), this.writeU32(e));
            else throw new Error("Too large extension object: " + e);
            (this.writeI8(t.type), this.writeU8a(t.data));
          }),
          (a.writeU8 = function (t) {
            (this.ensureBufferSizeToWrite(1),
              this.view.setUint8(this.pos, t),
              this.pos++);
          }),
          (a.writeU8a = function (t) {
            var e = t.length;
            (this.ensureBufferSizeToWrite(e),
              this.bytes.set(t, this.pos),
              (this.pos += e));
          }),
          (a.writeI8 = function (t) {
            (this.ensureBufferSizeToWrite(1),
              this.view.setInt8(this.pos, t),
              this.pos++);
          }),
          (a.writeU16 = function (t) {
            (this.ensureBufferSizeToWrite(2),
              this.view.setUint16(this.pos, t),
              (this.pos += 2));
          }),
          (a.writeI16 = function (t) {
            (this.ensureBufferSizeToWrite(2),
              this.view.setInt16(this.pos, t),
              (this.pos += 2));
          }),
          (a.writeU32 = function (t) {
            (this.ensureBufferSizeToWrite(4),
              this.view.setUint32(this.pos, t),
              (this.pos += 4));
          }),
          (a.writeI32 = function (t) {
            (this.ensureBufferSizeToWrite(4),
              this.view.setInt32(this.pos, t),
              (this.pos += 4));
          }),
          (a.writeF32 = function (t) {
            (this.ensureBufferSizeToWrite(4),
              this.view.setFloat32(this.pos, t),
              (this.pos += 4));
          }),
          (a.writeF64 = function (t) {
            (this.ensureBufferSizeToWrite(8),
              this.view.setFloat64(this.pos, t),
              (this.pos += 8));
          }),
          (a.writeU64 = function (t) {
            (this.ensureBufferSizeToWrite(8),
              (0, n.setUint64)(this.view, this.pos, t),
              (this.pos += 8));
          }),
          (a.writeI64 = function (t) {
            (this.ensureBufferSizeToWrite(8),
              (0, n.setInt64)(this.view, this.pos, t),
              (this.pos += 8));
          }),
          o
        );
      })();
      q.Encoder = o;
    }
    var H = !1;
    function G() {
      return (H || ((H = !0), V()), U.exports);
    }
    var z = {},
      j = { exports: z };
    function K() {
      (Object.defineProperty(z, "__esModule", { value: !0 }),
        (z.encode = void 0));
      var e = G(),
        t = {};
      function n(n, r) {
        r === void 0 && (r = t);
        var o = new e.Encoder(
          r.extensionCodec,
          r.context,
          r.maxDepth,
          r.initialBufferSize,
          r.sortKeys,
          r.forceFloat32,
          r.ignoreUndefined,
          r.forceIntegerToFloat,
        );
        return o.encodeSharedRef(n);
      }
      z.encode = n;
    }
    var Q = !1;
    function X() {
      return (Q || ((Q = !0), K()), j.exports);
    }
    var Y = {},
      J = { exports: Y };
    function Z() {
      (Object.defineProperty(Y, "__esModule", { value: !0 }),
        (Y.prettyByte = void 0));
      function e(e) {
        return (
          (e < 0 ? "-" : "") + "0x" + Math.abs(e).toString(16).padStart(2, "0")
        );
      }
      Y.prettyByte = e;
    }
    var ee = !1;
    function te() {
      return (ee || ((ee = !0), Z()), J.exports);
    }
    var ne = {},
      re = { exports: ne };
    function oe() {
      (Object.defineProperty(ne, "__esModule", { value: !0 }),
        (ne.CachedKeyDecoder = void 0));
      var e = f(),
        t = 16,
        n = 16,
        r = (function () {
          function r(e, r) {
            (e === void 0 && (e = t),
              r === void 0 && (r = n),
              (this.maxKeyLength = e),
              (this.maxLengthPerKey = r),
              (this.hit = 0),
              (this.miss = 0),
              (this.caches = []));
            for (var o = 0; o < this.maxKeyLength; o++) this.caches.push([]);
          }
          var o = r.prototype;
          return (
            (o.canBeCached = function (t) {
              return t > 0 && t <= this.maxKeyLength;
            }),
            (o.find = function (t, n, r) {
              var e = this.caches[r - 1];
              e: for (var o of e) {
                for (var a = o.bytes, i = 0; i < r; i++)
                  if (a[i] !== t[n + i]) continue e;
                return o.str;
              }
              return null;
            }),
            (o.store = function (t, n) {
              var e = this.caches[t.length - 1],
                r = { bytes: t, str: n };
              e.length >= this.maxLengthPerKey
                ? (e[(Math.random() * e.length) | 0] = r)
                : e.push(r);
            }),
            (o.decode = function (n, r, o) {
              var t = this.find(n, r, o);
              if (t != null) return (this.hit++, t);
              this.miss++;
              var a = (0, e.utf8DecodeJs)(n, r, o),
                i = Uint8Array.prototype.slice.call(n, r, r + o);
              return (this.store(i, a), a);
            }),
            r
          );
        })();
      ne.CachedKeyDecoder = r;
    }
    var ae = !1;
    function ie() {
      return (ae || ((ae = !0), oe()), re.exports);
    }
    var le = {},
      se = { exports: le };
    function ue() {
      (Object.defineProperty(le, "__esModule", { value: !0 }),
        (le.Decoder = le.DataViewIndexOutOfBoundsError = void 0));
      var e = te(),
        t = w(),
        r = c(),
        o = f(),
        a = W(),
        i = ie(),
        l = E(),
        s = function (t) {
          var e = typeof t;
          return e === "string" || e === "number";
        },
        u = -1,
        d = new DataView(new ArrayBuffer(0)),
        m = new Uint8Array(d.buffer);
      le.DataViewIndexOutOfBoundsError = (function () {
        try {
          d.getInt8(0);
        } catch (e) {
          return e.constructor;
        }
        throw new Error("never reached");
      })();
      var p = new le.DataViewIndexOutOfBoundsError("Insufficient data"),
        _ = new i.CachedKeyDecoder(),
        g = (function () {
          function i(e, n, o, a, i, l, s, c) {
            (e === void 0 && (e = t.ExtensionCodec.defaultCodec),
              n === void 0 && (n = void 0),
              o === void 0 && (o = r.UINT32_MAX),
              a === void 0 && (a = r.UINT32_MAX),
              i === void 0 && (i = r.UINT32_MAX),
              l === void 0 && (l = r.UINT32_MAX),
              s === void 0 && (s = r.UINT32_MAX),
              c === void 0 && (c = _),
              (this.extensionCodec = e),
              (this.context = n),
              (this.maxStrLength = o),
              (this.maxBinLength = a),
              (this.maxArrayLength = i),
              (this.maxMapLength = l),
              (this.maxExtLength = s),
              (this.keyDecoder = c),
              (this.totalPos = 0),
              (this.pos = 0),
              (this.view = d),
              (this.bytes = m),
              (this.headByte = u),
              (this.stack = []));
          }
          var c = i.prototype;
          return (
            (c.reinitializeState = function () {
              ((this.totalPos = 0),
                (this.headByte = u),
                (this.stack.length = 0));
            }),
            (c.setBuffer = function (t) {
              ((this.bytes = (0, a.ensureUint8Array)(t)),
                (this.view = (0, a.createDataView)(this.bytes)),
                (this.pos = 0));
            }),
            (c.appendBuffer = function (t) {
              if (this.headByte === u && !this.hasRemaining(1))
                this.setBuffer(t);
              else {
                var e = this.bytes.subarray(this.pos),
                  n = (0, a.ensureUint8Array)(t),
                  r = new Uint8Array(e.length + n.length);
                (r.set(e), r.set(n, e.length), this.setBuffer(r));
              }
            }),
            (c.hasRemaining = function (t) {
              return this.view.byteLength - this.pos >= t;
            }),
            (c.createExtraByteError = function (t) {
              var e = this.view,
                n = this.pos;
              return new RangeError(
                "Extra " +
                  (e.byteLength - n) +
                  " of " +
                  e.byteLength +
                  " byte(s) found at buffer[" +
                  t +
                  "]",
              );
            }),
            (c.decode = function (t) {
              (this.reinitializeState(), this.setBuffer(t));
              var e = this.doDecodeSync();
              if (this.hasRemaining(1))
                throw this.createExtraByteError(this.pos);
              return e;
            }),
            (c.decodeMulti = function* (t) {
              for (
                this.reinitializeState(), this.setBuffer(t);
                this.hasRemaining(1);
              )
                yield this.doDecodeSync();
            }),
            (c.decodeAsync = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = !1,
                    r,
                    o = !1,
                    a = !1,
                    i;
                  try {
                    for (
                      var l = babelHelpers.asyncIterator(t), s;
                      (o = !(s = yield l.next()).done);
                      o = !1
                    ) {
                      var u = s.value;
                      {
                        if (n) throw this.createExtraByteError(this.totalPos);
                        this.appendBuffer(u);
                        try {
                          ((r = this.doDecodeSync()), (n = !0));
                        } catch (e) {
                          if (!(e instanceof le.DataViewIndexOutOfBoundsError))
                            throw e;
                        }
                        this.totalPos += this.pos;
                      }
                    }
                  } catch (e) {
                    ((a = !0), (i = e));
                  } finally {
                    try {
                      o && l.return != null && (yield l.return());
                    } finally {
                      if (a) throw i;
                    }
                  }
                  if (n) {
                    if (this.hasRemaining(1))
                      throw this.createExtraByteError(this.totalPos);
                    return r;
                  }
                  var c = this.headByte,
                    d = this.pos,
                    m = this.totalPos;
                  throw new RangeError(
                    "Insufficient data in parsing " +
                      (0, e.prettyByte)(c) +
                      " at " +
                      m +
                      " (" +
                      d +
                      " in the current buffer)",
                  );
                },
              );
              function r(e) {
                return t.apply(this, arguments);
              }
              return r;
            })()),
            (c.decodeArrayStream = function (t) {
              return this.decodeMultiAsync(t, !0);
            }),
            (c.decodeStream = function (t) {
              return this.decodeMultiAsync(t, !1);
            }),
            (c.decodeMultiAsync = (function () {
              var e = babelHelpers.wrapAsyncGenerator(function* (e, t) {
                var n = t,
                  r = -1,
                  o = !1,
                  a = !1,
                  i;
                try {
                  for (
                    var l = babelHelpers.asyncIterator(e), s;
                    (o = !(s = yield babelHelpers.awaitAsyncGenerator(l.next()))
                      .done);
                    o = !1
                  ) {
                    var u = s.value;
                    {
                      if (t && r === 0)
                        throw this.createExtraByteError(this.totalPos);
                      (this.appendBuffer(u),
                        n &&
                          ((r = this.readArraySize()),
                          (n = !1),
                          this.complete()));
                      try {
                        for (; yield this.doDecodeSync(), --r !== 0; );
                      } catch (e) {
                        if (!(e instanceof le.DataViewIndexOutOfBoundsError))
                          throw e;
                      }
                      this.totalPos += this.pos;
                    }
                  }
                } catch (e) {
                  ((a = !0), (i = e));
                } finally {
                  try {
                    o &&
                      l.return != null &&
                      (yield babelHelpers.awaitAsyncGenerator(l.return()));
                  } finally {
                    if (a) throw i;
                  }
                }
              });
              function t(t, n) {
                return e.apply(this, arguments);
              }
              return t;
            })()),
            (c.doDecodeSync = function () {
              e: for (;;) {
                var t = this.readHeadByte(),
                  n = void 0;
                if (t >= 224) n = t - 256;
                else if (t < 192)
                  if (t < 128) n = t;
                  else if (t < 144) {
                    var r = t - 128;
                    if (r !== 0) {
                      (this.pushMapState(r), this.complete());
                      continue e;
                    } else n = {};
                  } else if (t < 160) {
                    var o = t - 144;
                    if (o !== 0) {
                      (this.pushArrayState(o), this.complete());
                      continue e;
                    } else n = [];
                  } else {
                    var a = t - 160;
                    n = this.decodeUtf8String(a, 0);
                  }
                else if (t === 192) n = null;
                else if (t === 194) n = !1;
                else if (t === 195) n = !0;
                else if (t === 202) n = this.readF32();
                else if (t === 203) n = this.readF64();
                else if (t === 204) n = this.readU8();
                else if (t === 205) n = this.readU16();
                else if (t === 206) n = this.readU32();
                else if (t === 207) n = this.readU64();
                else if (t === 208) n = this.readI8();
                else if (t === 209) n = this.readI16();
                else if (t === 210) n = this.readI32();
                else if (t === 211) n = this.readI64();
                else if (t === 217) {
                  var i = this.lookU8();
                  n = this.decodeUtf8String(i, 1);
                } else if (t === 218) {
                  var u = this.lookU16();
                  n = this.decodeUtf8String(u, 2);
                } else if (t === 219) {
                  var c = this.lookU32();
                  n = this.decodeUtf8String(c, 4);
                } else if (t === 220) {
                  var d = this.readU16();
                  if (d !== 0) {
                    (this.pushArrayState(d), this.complete());
                    continue e;
                  } else n = [];
                } else if (t === 221) {
                  var m = this.readU32();
                  if (m !== 0) {
                    (this.pushArrayState(m), this.complete());
                    continue e;
                  } else n = [];
                } else if (t === 222) {
                  var p = this.readU16();
                  if (p !== 0) {
                    (this.pushMapState(p), this.complete());
                    continue e;
                  } else n = {};
                } else if (t === 223) {
                  var _ = this.readU32();
                  if (_ !== 0) {
                    (this.pushMapState(_), this.complete());
                    continue e;
                  } else n = {};
                } else if (t === 196) {
                  var f = this.lookU8();
                  n = this.decodeBinary(f, 1);
                } else if (t === 197) {
                  var g = this.lookU16();
                  n = this.decodeBinary(g, 2);
                } else if (t === 198) {
                  var h = this.lookU32();
                  n = this.decodeBinary(h, 4);
                } else if (t === 212) n = this.decodeExtension(1, 0);
                else if (t === 213) n = this.decodeExtension(2, 0);
                else if (t === 214) n = this.decodeExtension(4, 0);
                else if (t === 215) n = this.decodeExtension(8, 0);
                else if (t === 216) n = this.decodeExtension(16, 0);
                else if (t === 199) {
                  var y = this.lookU8();
                  n = this.decodeExtension(y, 1);
                } else if (t === 200) {
                  var C = this.lookU16();
                  n = this.decodeExtension(C, 2);
                } else if (t === 201) {
                  var b = this.lookU32();
                  n = this.decodeExtension(b, 4);
                } else
                  throw new l.DecodeError(
                    "Unrecognized type byte: " + (0, e.prettyByte)(t),
                  );
                this.complete();
                for (var v = this.stack; v.length > 0; ) {
                  var S = v[v.length - 1];
                  if (S.type === 0)
                    if (
                      ((S.array[S.position] = n),
                      S.position++,
                      S.position === S.size)
                    )
                      (v.pop(), (n = S.array));
                    else continue e;
                  else if (S.type === 1) {
                    if (!s(n))
                      throw new l.DecodeError(
                        "The type of key must be string or number but " +
                          typeof n,
                      );
                    if (n === "__proto__")
                      throw new l.DecodeError(
                        "The key __proto__ is not allowed",
                      );
                    ((S.key = n), (S.type = 2));
                    continue e;
                  } else if (
                    ((S.map[S.key] = n), S.readCount++, S.readCount === S.size)
                  )
                    (v.pop(), (n = S.map));
                  else {
                    ((S.key = null), (S.type = 1));
                    continue e;
                  }
                }
                return n;
              }
            }),
            (c.readHeadByte = function () {
              return (
                this.headByte === u && (this.headByte = this.readU8()),
                this.headByte
              );
            }),
            (c.complete = function () {
              this.headByte = u;
            }),
            (c.readArraySize = function () {
              var t = this.readHeadByte();
              switch (t) {
                case 220:
                  return this.readU16();
                case 221:
                  return this.readU32();
                default: {
                  if (t < 160) return t - 144;
                  throw new l.DecodeError(
                    "Unrecognized array type byte: " + (0, e.prettyByte)(t),
                  );
                }
              }
            }),
            (c.pushMapState = function (t) {
              if (t > this.maxMapLength)
                throw new l.DecodeError(
                  "Max length exceeded: map length (" +
                    t +
                    ") > maxMapLengthLength (" +
                    this.maxMapLength +
                    ")",
                );
              this.stack.push({
                type: 1,
                size: t,
                key: null,
                readCount: 0,
                map: {},
              });
            }),
            (c.pushArrayState = function (t) {
              if (t > this.maxArrayLength)
                throw new l.DecodeError(
                  "Max length exceeded: array length (" +
                    t +
                    ") > maxArrayLength (" +
                    this.maxArrayLength +
                    ")",
                );
              this.stack.push({
                type: 0,
                size: t,
                array: new Array(t),
                position: 0,
              });
            }),
            (c.decodeUtf8String = function (t, n) {
              var e;
              if (t > this.maxStrLength)
                throw new l.DecodeError(
                  "Max length exceeded: UTF-8 byte length (" +
                    t +
                    ") > maxStrLength (" +
                    this.maxStrLength +
                    ")",
                );
              if (this.bytes.byteLength < this.pos + n + t) throw p;
              var r = this.pos + n,
                a;
              return (
                this.stateIsMapKey() &&
                !((e = this.keyDecoder) === null || e === void 0) &&
                e.canBeCached(t)
                  ? (a = this.keyDecoder.decode(this.bytes, r, t))
                  : t > o.TEXT_DECODER_THRESHOLD
                    ? (a = (0, o.utf8DecodeTD)(this.bytes, r, t))
                    : (a = (0, o.utf8DecodeJs)(this.bytes, r, t)),
                (this.pos += n + t),
                a
              );
            }),
            (c.stateIsMapKey = function () {
              if (this.stack.length > 0) {
                var e = this.stack[this.stack.length - 1];
                return e.type === 1;
              }
              return !1;
            }),
            (c.decodeBinary = function (t, n) {
              if (t > this.maxBinLength)
                throw new l.DecodeError(
                  "Max length exceeded: bin length (" +
                    t +
                    ") > maxBinLength (" +
                    this.maxBinLength +
                    ")",
                );
              if (!this.hasRemaining(t + n)) throw p;
              var e = this.pos + n,
                r = this.bytes.subarray(e, e + t);
              return ((this.pos += n + t), r);
            }),
            (c.decodeExtension = function (t, n) {
              if (t > this.maxExtLength)
                throw new l.DecodeError(
                  "Max length exceeded: ext length (" +
                    t +
                    ") > maxExtLength (" +
                    this.maxExtLength +
                    ")",
                );
              var e = this.view.getInt8(this.pos + n),
                r = this.decodeBinary(t, n + 1);
              return this.extensionCodec.decode(r, e, this.context);
            }),
            (c.lookU8 = function () {
              return this.view.getUint8(this.pos);
            }),
            (c.lookU16 = function () {
              return this.view.getUint16(this.pos);
            }),
            (c.lookU32 = function () {
              return this.view.getUint32(this.pos);
            }),
            (c.readU8 = function () {
              var e = this.view.getUint8(this.pos);
              return (this.pos++, e);
            }),
            (c.readI8 = function () {
              var e = this.view.getInt8(this.pos);
              return (this.pos++, e);
            }),
            (c.readU16 = function () {
              var e = this.view.getUint16(this.pos);
              return ((this.pos += 2), e);
            }),
            (c.readI16 = function () {
              var e = this.view.getInt16(this.pos);
              return ((this.pos += 2), e);
            }),
            (c.readU32 = function () {
              var e = this.view.getUint32(this.pos);
              return ((this.pos += 4), e);
            }),
            (c.readI32 = function () {
              var e = this.view.getInt32(this.pos);
              return ((this.pos += 4), e);
            }),
            (c.readU64 = function () {
              var e = (0, r.getUint64)(this.view, this.pos);
              return ((this.pos += 8), e);
            }),
            (c.readI64 = function () {
              var e = (0, r.getInt64)(this.view, this.pos);
              return ((this.pos += 8), e);
            }),
            (c.readF32 = function () {
              var e = this.view.getFloat32(this.pos);
              return ((this.pos += 4), e);
            }),
            (c.readF64 = function () {
              var e = this.view.getFloat64(this.pos);
              return ((this.pos += 8), e);
            }),
            i
          );
        })();
      le.Decoder = g;
    }
    var ce = !1;
    function de() {
      return (ce || ((ce = !0), ue()), se.exports);
    }
    var me = {},
      pe = { exports: me };
    function _e() {
      (Object.defineProperty(me, "__esModule", { value: !0 }),
        (me.decodeMulti = me.decode = me.defaultDecodeOptions = void 0));
      var e = de();
      me.defaultDecodeOptions = {};
      function t(t, n) {
        n === void 0 && (n = me.defaultDecodeOptions);
        var r = new e.Decoder(
          n.extensionCodec,
          n.context,
          n.maxStrLength,
          n.maxBinLength,
          n.maxArrayLength,
          n.maxMapLength,
          n.maxExtLength,
        );
        return r.decode(t);
      }
      me.decode = t;
      function n(t, n) {
        n === void 0 && (n = me.defaultDecodeOptions);
        var r = new e.Decoder(
          n.extensionCodec,
          n.context,
          n.maxStrLength,
          n.maxBinLength,
          n.maxArrayLength,
          n.maxMapLength,
          n.maxExtLength,
        );
        return r.decodeMulti(t);
      }
      me.decodeMulti = n;
    }
    var fe = !1;
    function ge() {
      return (fe || ((fe = !0), _e()), pe.exports);
    }
    var he = {},
      ye = { exports: he };
    function Ce() {
      (Object.defineProperty(he, "__esModule", { value: !0 }),
        (he.ensureAsyncIterable =
          he.asyncIterableFromStream =
          he.isAsyncIterable =
            void 0));
      function e(e) {
        return (
          e[
            typeof Symbol == "function"
              ? Symbol.asyncIterator
              : "@@asyncIterator"
          ] != null
        );
      }
      he.isAsyncIterable = e;
      function t(e) {
        if (e == null)
          throw new Error(
            "Assertion Failure: value must not be null nor undefined",
          );
      }
      function n(e) {
        return r.apply(this, arguments);
      }
      function r() {
        return (
          (r = babelHelpers.wrapAsyncGenerator(function* (e) {
            var n = e.getReader();
            try {
              for (;;) {
                var r = yield babelHelpers.awaitAsyncGenerator(n.read()),
                  o = r.done,
                  a = r.value;
                if (o) return;
                (t(a), yield a);
              }
            } finally {
              n.releaseLock();
            }
          })),
          r.apply(this, arguments)
        );
      }
      he.asyncIterableFromStream = n;
      function o(t) {
        return e(t) ? t : n(t);
      }
      he.ensureAsyncIterable = o;
    }
    var be = !1;
    function ve() {
      return (be || ((be = !0), Ce()), ye.exports);
    }
    var Se = {},
      Re = { exports: Se };
    function Le() {
      (Object.defineProperty(Se, "__esModule", { value: !0 }),
        (Se.decodeStream =
          Se.decodeMultiStream =
          Se.decodeArrayStream =
          Se.decodeAsync =
            void 0));
      var e = de(),
        t = ve(),
        r = ge();
      function o(e, t) {
        return a.apply(this, arguments);
      }
      function a() {
        return (
          (a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, o) {
            o === void 0 && (o = r.defaultDecodeOptions);
            var a = (0, t.ensureAsyncIterable)(n),
              i = new e.Decoder(
                o.extensionCodec,
                o.context,
                o.maxStrLength,
                o.maxBinLength,
                o.maxArrayLength,
                o.maxMapLength,
                o.maxExtLength,
              );
            return i.decodeAsync(a);
          })),
          a.apply(this, arguments)
        );
      }
      Se.decodeAsync = o;
      function i(n, o) {
        o === void 0 && (o = r.defaultDecodeOptions);
        var a = (0, t.ensureAsyncIterable)(n),
          i = new e.Decoder(
            o.extensionCodec,
            o.context,
            o.maxStrLength,
            o.maxBinLength,
            o.maxArrayLength,
            o.maxMapLength,
            o.maxExtLength,
          );
        return i.decodeArrayStream(a);
      }
      Se.decodeArrayStream = i;
      function l(n, o) {
        o === void 0 && (o = r.defaultDecodeOptions);
        var a = (0, t.ensureAsyncIterable)(n),
          i = new e.Decoder(
            o.extensionCodec,
            o.context,
            o.maxStrLength,
            o.maxBinLength,
            o.maxArrayLength,
            o.maxMapLength,
            o.maxExtLength,
          );
        return i.decodeStream(a);
      }
      Se.decodeMultiStream = l;
      function s(e, t) {
        return (t === void 0 && (t = r.defaultDecodeOptions), l(e, t));
      }
      Se.decodeStream = s;
    }
    var Ee = !1;
    function ke() {
      return (Ee || ((Ee = !0), Le()), Re.exports);
    }
    var Ie = {},
      Te = { exports: Ie };
    function De() {
      (Object.defineProperty(Ie, "__esModule", { value: !0 }),
        (Ie.decodeTimestampExtension =
          Ie.encodeTimestampExtension =
          Ie.decodeTimestampToTimeSpec =
          Ie.encodeTimeSpecToTimestamp =
          Ie.encodeDateToTimeSpec =
          Ie.EXT_TIMESTAMP =
          Ie.ExtData =
          Ie.ExtensionCodec =
          Ie.Encoder =
          Ie.DataViewIndexOutOfBoundsError =
          Ie.DecodeError =
          Ie.Decoder =
          Ie.decodeStream =
          Ie.decodeMultiStream =
          Ie.decodeArrayStream =
          Ie.decodeAsync =
          Ie.decodeMulti =
          Ie.decode =
          Ie.encode =
            void 0));
      var e = X();
      Object.defineProperty(Ie, "encode", {
        enumerable: !0,
        get: function () {
          return e.encode;
        },
      });
      var t = ge();
      (Object.defineProperty(Ie, "decode", {
        enumerable: !0,
        get: function () {
          return t.decode;
        },
      }),
        Object.defineProperty(Ie, "decodeMulti", {
          enumerable: !0,
          get: function () {
            return t.decodeMulti;
          },
        }));
      var n = ke();
      (Object.defineProperty(Ie, "decodeAsync", {
        enumerable: !0,
        get: function () {
          return n.decodeAsync;
        },
      }),
        Object.defineProperty(Ie, "decodeArrayStream", {
          enumerable: !0,
          get: function () {
            return n.decodeArrayStream;
          },
        }),
        Object.defineProperty(Ie, "decodeMultiStream", {
          enumerable: !0,
          get: function () {
            return n.decodeMultiStream;
          },
        }),
        Object.defineProperty(Ie, "decodeStream", {
          enumerable: !0,
          get: function () {
            return n.decodeStream;
          },
        }));
      var r = de();
      (Object.defineProperty(Ie, "Decoder", {
        enumerable: !0,
        get: function () {
          return r.Decoder;
        },
      }),
        Object.defineProperty(Ie, "DataViewIndexOutOfBoundsError", {
          enumerable: !0,
          get: function () {
            return r.DataViewIndexOutOfBoundsError;
          },
        }));
      var o = E();
      Object.defineProperty(Ie, "DecodeError", {
        enumerable: !0,
        get: function () {
          return o.DecodeError;
        },
      });
      var a = G();
      Object.defineProperty(Ie, "Encoder", {
        enumerable: !0,
        get: function () {
          return a.Encoder;
        },
      });
      var i = w();
      Object.defineProperty(Ie, "ExtensionCodec", {
        enumerable: !0,
        get: function () {
          return i.ExtensionCodec;
        },
      });
      var l = b();
      Object.defineProperty(Ie, "ExtData", {
        enumerable: !0,
        get: function () {
          return l.ExtData;
        },
      });
      var s = x();
      (Object.defineProperty(Ie, "EXT_TIMESTAMP", {
        enumerable: !0,
        get: function () {
          return s.EXT_TIMESTAMP;
        },
      }),
        Object.defineProperty(Ie, "encodeDateToTimeSpec", {
          enumerable: !0,
          get: function () {
            return s.encodeDateToTimeSpec;
          },
        }),
        Object.defineProperty(Ie, "encodeTimeSpecToTimestamp", {
          enumerable: !0,
          get: function () {
            return s.encodeTimeSpecToTimestamp;
          },
        }),
        Object.defineProperty(Ie, "decodeTimestampToTimeSpec", {
          enumerable: !0,
          get: function () {
            return s.decodeTimestampToTimeSpec;
          },
        }),
        Object.defineProperty(Ie, "encodeTimestampExtension", {
          enumerable: !0,
          get: function () {
            return s.encodeTimestampExtension;
          },
        }),
        Object.defineProperty(Ie, "decodeTimestampExtension", {
          enumerable: !0,
          get: function () {
            return s.decodeTimestampExtension;
          },
        }));
    }
    var xe = !1;
    function $e() {
      return (xe || ((xe = !0), De()), Te.exports);
    }
    function Pe(e) {
      switch (e) {
        case void 0:
          return $e();
      }
    }
    a.exports = Pe;
  },
  null,
);
