__d(
  "asn1js-2.1.1",
  ["pvutils-1.0.17"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("pvutils-1.0.17")),
      s = {},
      u = { exports: s };
    function c() {
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.fromBER = pe),
        (s.compareSchema = _e),
        (s.verifySchema = fe),
        (s.fromJSON = ge),
        (s.RawData =
          s.Repeated =
          s.Any =
          s.Choice =
          s.TIME =
          s.Duration =
          s.DateTime =
          s.TimeOfDay =
          s.DATE =
          s.GeneralizedTime =
          s.UTCTime =
          s.CharacterString =
          s.GeneralString =
          s.VisibleString =
          s.GraphicString =
          s.IA5String =
          s.VideotexString =
          s.TeletexString =
          s.PrintableString =
          s.NumericString =
          s.UniversalString =
          s.BmpString =
          s.RelativeObjectIdentifier =
          s.Utf8String =
          s.ObjectIdentifier =
          s.Enumerated =
          s.Integer =
          s.BitString =
          s.OctetString =
          s.Null =
          s.Set =
          s.Sequence =
          s.Boolean =
          s.EndOfContent =
          s.Constructed =
          s.Primitive =
          s.BaseBlock =
          s.ValueBlock =
          s.HexBlock =
            void 0));
      var e = l();
      function t(e, t) {
        var r;
        if (
          typeof Symbol == "undefined" ||
          e[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] ==
            null
        ) {
          if (
            Array.isArray(e) ||
            (r = n(e)) ||
            (t && e && typeof e.length == "number")
          ) {
            r && (e = r);
            var o = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return o >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[o++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i = !0,
          l = !1,
          s;
        return {
          s: function () {
            r =
              e[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"]();
          },
          n: function () {
            var e = r.next();
            return ((i = e.done), e);
          },
          e: function (t) {
            ((l = !0), (s = t));
          },
          f: function () {
            try {
              !i && r.return != null && r.return();
            } finally {
              if (l) throw s;
            }
          },
        };
      }
      function n(e, t) {
        if (e) {
          if (typeof e == "string") return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (n === "Object" && e.constructor && (n = e.constructor.name),
            n === "Map" || n === "Set")
          )
            return Array.from(e);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return r(e, t);
        }
      }
      function r(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var o = [new Uint8Array([1])],
        a = "0123456789",
        i = (function () {
          function t(t) {
            (t === void 0 && (t = {}),
              (this.blockLength = (0, e.getParametersValue)(
                t,
                "blockLength",
                0,
              )),
              (this.error = (0, e.getParametersValue)(t, "error", "")),
              (this.warnings = (0, e.getParametersValue)(t, "warnings", [])),
              "valueBeforeDecode" in t
                ? (this.valueBeforeDecode = t.valueBeforeDecode.slice(0))
                : (this.valueBeforeDecode = new ArrayBuffer(0)));
          }
          t.blockName = function () {
            return "baseBlock";
          };
          var n = t.prototype;
          return (
            (n.toJSON = function () {
              return {
                blockName: this.constructor.blockName(),
                blockLength: this.blockLength,
                error: this.error,
                warnings: this.warnings,
                valueBeforeDecode: (0, e.bufferToHexCodes)(
                  this.valueBeforeDecode,
                  0,
                  this.valueBeforeDecode.byteLength,
                ),
              };
            }),
            t
          );
        })(),
        u = function (n) {
          return (function (t) {
            function n(n) {
              var r;
              return (
                n === void 0 && (n = {}),
                (r = t.call(this, n) || this),
                (r.isHexOnly = (0, e.getParametersValue)(n, "isHexOnly", !1)),
                "valueHex" in n
                  ? (r.valueHex = n.valueHex.slice(0))
                  : (r.valueHex = new ArrayBuffer(0)),
                r
              );
            }
            (babelHelpers.inheritsLoose(n, t),
              (n.blockName = function () {
                return "hexBlock";
              }));
            var r = n.prototype;
            return (
              (r.fromBER = function (n, r, o) {
                if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
                var t = new Uint8Array(n, r, o);
                return t.length === 0
                  ? (this.warnings.push("Zero buffer length"), r)
                  : ((this.valueHex = n.slice(r, r + o)),
                    (this.blockLength = o),
                    r + o);
              }),
              (r.toBER = function (t) {
                return (
                  t === void 0 && (t = !1),
                  this.isHexOnly !== !0
                    ? ((this.error = 'Flag "isHexOnly" is not set, abort'),
                      new ArrayBuffer(0))
                    : t === !0
                      ? new ArrayBuffer(this.valueHex.byteLength)
                      : this.valueHex.slice(0)
                );
              }),
              (r.toJSON = function () {
                var n = {};
                try {
                  n = t.prototype.toJSON.call(this);
                } catch (e) {}
                return (
                  (n.blockName = this.constructor.blockName()),
                  (n.isHexOnly = this.isHexOnly),
                  (n.valueHex = (0, e.bufferToHexCodes)(
                    this.valueHex,
                    0,
                    this.valueHex.byteLength,
                  )),
                  n
                );
              }),
              n
            );
          })(n);
        };
      s.HexBlock = u;
      var c = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this) || this),
              "idBlock" in n
                ? ((r.isHexOnly = (0, e.getParametersValue)(
                    n.idBlock,
                    "isHexOnly",
                    !1,
                  )),
                  (r.valueHex = (0, e.getParametersValue)(
                    n.idBlock,
                    "valueHex",
                    new ArrayBuffer(0),
                  )),
                  (r.tagClass = (0, e.getParametersValue)(
                    n.idBlock,
                    "tagClass",
                    -1,
                  )),
                  (r.tagNumber = (0, e.getParametersValue)(
                    n.idBlock,
                    "tagNumber",
                    -1,
                  )),
                  (r.isConstructed = (0, e.getParametersValue)(
                    n.idBlock,
                    "isConstructed",
                    !1,
                  )))
                : ((r.tagClass = -1),
                  (r.tagNumber = -1),
                  (r.isConstructed = !1)),
              r
            );
          }
          (babelHelpers.inheritsLoose(n, t),
            (n.blockName = function () {
              return "identificationBlock";
            }));
          var r = n.prototype;
          return (
            (r.toBER = function (n) {
              n === void 0 && (n = !1);
              var t = 0,
                r,
                o;
              switch (this.tagClass) {
                case 1:
                  t |= 0;
                  break;
                case 2:
                  t |= 64;
                  break;
                case 3:
                  t |= 128;
                  break;
                case 4:
                  t |= 192;
                  break;
                default:
                  return (
                    (this.error = "Unknown tag class"),
                    new ArrayBuffer(0)
                  );
              }
              if (
                (this.isConstructed && (t |= 32),
                this.tagNumber < 31 && !this.isHexOnly)
              ) {
                if (((r = new ArrayBuffer(1)), (o = new Uint8Array(r)), !n)) {
                  var a = this.tagNumber;
                  ((a &= 31), (t |= a), (o[0] = t));
                }
                return r;
              }
              if (this.isHexOnly === !1) {
                var i = (0, e.utilToBase)(this.tagNumber, 7),
                  l = new Uint8Array(i),
                  s = i.byteLength;
                if (
                  ((r = new ArrayBuffer(s + 1)),
                  (o = new Uint8Array(r)),
                  (o[0] = t | 31),
                  !n)
                ) {
                  for (var u = 0; u < s - 1; u++) o[u + 1] = l[u] | 128;
                  o[s] = l[s - 1];
                }
                return r;
              }
              if (
                ((r = new ArrayBuffer(this.valueHex.byteLength + 1)),
                (o = new Uint8Array(r)),
                (o[0] = t | 31),
                n === !1)
              ) {
                for (
                  var c = new Uint8Array(this.valueHex), d = 0;
                  d < c.length - 1;
                  d++
                )
                  o[d + 1] = c[d] | 128;
                o[this.valueHex.byteLength] = c[c.length - 1];
              }
              return r;
            }),
            (r.fromBER = function (n, r, o) {
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var t = new Uint8Array(n, r, o);
              if (t.length === 0)
                return ((this.error = "Zero buffer length"), -1);
              var a = t[0] & 192;
              switch (a) {
                case 0:
                  this.tagClass = 1;
                  break;
                case 64:
                  this.tagClass = 2;
                  break;
                case 128:
                  this.tagClass = 3;
                  break;
                case 192:
                  this.tagClass = 4;
                  break;
                default:
                  return ((this.error = "Unknown tag class"), -1);
              }
              ((this.isConstructed = (t[0] & 32) === 32),
                (this.isHexOnly = !1));
              var i = t[0] & 31;
              if (i !== 31) ((this.tagNumber = i), (this.blockLength = 1));
              else {
                var l = 1;
                this.valueHex = new ArrayBuffer(255);
                for (
                  var s = 255, u = new Uint8Array(this.valueHex);
                  t[l] & 128;
                ) {
                  if (((u[l - 1] = t[l] & 127), l++, l >= t.length))
                    return (
                      (this.error =
                        "End of input reached before message was fully decoded"),
                      -1
                    );
                  if (l === s) {
                    s += 255;
                    for (
                      var c = new ArrayBuffer(s), d = new Uint8Array(c), m = 0;
                      m < u.length;
                      m++
                    )
                      d[m] = u[m];
                    ((this.valueHex = new ArrayBuffer(s)),
                      (u = new Uint8Array(this.valueHex)));
                  }
                }
                ((this.blockLength = l + 1), (u[l - 1] = t[l] & 127));
                for (
                  var p = new ArrayBuffer(l), _ = new Uint8Array(p), f = 0;
                  f < l;
                  f++
                )
                  _[f] = u[f];
                ((this.valueHex = new ArrayBuffer(l)),
                  (u = new Uint8Array(this.valueHex)),
                  u.set(_),
                  this.blockLength <= 9
                    ? (this.tagNumber = (0, e.utilFromBase)(u, 7))
                    : ((this.isHexOnly = !0),
                      this.warnings.push(
                        "Tag too long, represented as hex-coded",
                      )));
              }
              if (this.tagClass === 1 && this.isConstructed)
                switch (this.tagNumber) {
                  case 1:
                  case 2:
                  case 5:
                  case 6:
                  case 9:
                  case 13:
                  case 14:
                  case 23:
                  case 24:
                  case 31:
                  case 32:
                  case 33:
                  case 34:
                    return (
                      (this.error =
                        "Constructed encoding used for primitive type"),
                      -1
                    );
                  default:
                }
              return r + this.blockLength;
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              return (
                (e.blockName = this.constructor.blockName()),
                (e.tagClass = this.tagClass),
                (e.tagNumber = this.tagNumber),
                (e.isConstructed = this.isConstructed),
                e
              );
            }),
            n
          );
        })(u(i)),
        d = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this) || this),
              "lenBlock" in n
                ? ((r.isIndefiniteForm = (0, e.getParametersValue)(
                    n.lenBlock,
                    "isIndefiniteForm",
                    !1,
                  )),
                  (r.longFormUsed = (0, e.getParametersValue)(
                    n.lenBlock,
                    "longFormUsed",
                    !1,
                  )),
                  (r.length = (0, e.getParametersValue)(
                    n.lenBlock,
                    "length",
                    0,
                  )))
                : ((r.isIndefiniteForm = !1),
                  (r.longFormUsed = !1),
                  (r.length = 0)),
              r
            );
          }
          (babelHelpers.inheritsLoose(n, t),
            (n.blockName = function () {
              return "lengthBlock";
            }));
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var t = new Uint8Array(n, r, o);
              if (t.length === 0)
                return ((this.error = "Zero buffer length"), -1);
              if (t[0] === 255)
                return (
                  (this.error = "Length block 0xFF is reserved by standard"),
                  -1
                );
              if (
                ((this.isIndefiniteForm = t[0] === 128),
                this.isIndefiniteForm === !0)
              )
                return ((this.blockLength = 1), r + this.blockLength);
              if (
                ((this.longFormUsed = !!(t[0] & 128)), this.longFormUsed === !1)
              )
                return (
                  (this.length = t[0]),
                  (this.blockLength = 1),
                  r + this.blockLength
                );
              var a = t[0] & 127;
              if (a > 8) return ((this.error = "Too big integer"), -1);
              if (a + 1 > t.length)
                return (
                  (this.error =
                    "End of input reached before message was fully decoded"),
                  -1
                );
              for (var i = new Uint8Array(a), l = 0; l < a; l++)
                i[l] = t[l + 1];
              return (
                i[a - 1] === 0 &&
                  this.warnings.push("Needlessly long encoded length"),
                (this.length = (0, e.utilFromBase)(i, 8)),
                this.longFormUsed &&
                  this.length <= 127 &&
                  this.warnings.push("Unnecessary usage of long length form"),
                (this.blockLength = a + 1),
                r + this.blockLength
              );
            }),
            (r.toBER = function (n) {
              n === void 0 && (n = !1);
              var t, r;
              if (
                (this.length > 127 && (this.longFormUsed = !0),
                this.isIndefiniteForm)
              )
                return (
                  (t = new ArrayBuffer(1)),
                  n === !1 && ((r = new Uint8Array(t)), (r[0] = 128)),
                  t
                );
              if (this.longFormUsed === !0) {
                var o = (0, e.utilToBase)(this.length, 8);
                if (o.byteLength > 127)
                  return ((this.error = "Too big length"), new ArrayBuffer(0));
                if (((t = new ArrayBuffer(o.byteLength + 1)), n === !0))
                  return t;
                var a = new Uint8Array(o);
                ((r = new Uint8Array(t)), (r[0] = o.byteLength | 128));
                for (var i = 0; i < o.byteLength; i++) r[i + 1] = a[i];
                return t;
              }
              return (
                (t = new ArrayBuffer(1)),
                n === !1 && ((r = new Uint8Array(t)), (r[0] = this.length)),
                t
              );
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              return (
                (e.blockName = this.constructor.blockName()),
                (e.isIndefiniteForm = this.isIndefiniteForm),
                (e.longFormUsed = this.longFormUsed),
                (e.length = this.length),
                e
              );
            }),
            n
          );
        })(i),
        m = (function (e) {
          function t(t) {
            return (t === void 0 && (t = {}), e.call(this, t) || this);
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "valueBlock";
            }));
          var n = t.prototype;
          return (
            (n.fromBER = function (t, n, r) {
              throw TypeError(
                'User need to make a specific function in a class which extends "ValueBlock"',
              );
            }),
            (n.toBER = function (t) {
              throw (
                t === void 0 && (t = !1),
                TypeError(
                  'User need to make a specific function in a class which extends "ValueBlock"',
                )
              );
            }),
            t
          );
        })(i);
      s.ValueBlock = m;
      var p = (function (t) {
        function n(e, n) {
          var r;
          return (
            e === void 0 && (e = {}),
            n === void 0 && (n = m),
            (r = t.call(this, e) || this),
            "name" in e && (r.name = e.name),
            "optional" in e && (r.optional = e.optional),
            "primitiveSchema" in e && (r.primitiveSchema = e.primitiveSchema),
            (r.idBlock = new c(e)),
            (r.lenBlock = new d(e)),
            (r.valueBlock = new n(e)),
            r
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.blockName = function () {
            return "BaseBlock";
          }));
        var r = n.prototype;
        return (
          (r.fromBER = function (t, n, r) {
            var e = this.valueBlock.fromBER(
              t,
              n,
              this.lenBlock.isIndefiniteForm === !0 ? r : this.lenBlock.length,
            );
            return e === -1
              ? ((this.error = this.valueBlock.error), e)
              : (this.idBlock.error.length === 0 &&
                  (this.blockLength += this.idBlock.blockLength),
                this.lenBlock.error.length === 0 &&
                  (this.blockLength += this.lenBlock.blockLength),
                this.valueBlock.error.length === 0 &&
                  (this.blockLength += this.valueBlock.blockLength),
                e);
          }),
          (r.toBER = function (n) {
            n === void 0 && (n = !1);
            var t,
              r = this.idBlock.toBER(n),
              o = this.valueBlock.toBER(!0);
            this.lenBlock.length = o.byteLength;
            var a = this.lenBlock.toBER(n);
            t = (0, e.utilConcatBuf)(r, a);
            var i;
            if (
              (n === !1
                ? (i = this.valueBlock.toBER(n))
                : (i = new ArrayBuffer(this.lenBlock.length)),
              (t = (0, e.utilConcatBuf)(t, i)),
              this.lenBlock.isIndefiniteForm === !0)
            ) {
              var l = new ArrayBuffer(2);
              if (n === !1) {
                var s = new Uint8Array(l);
                ((s[0] = 0), (s[1] = 0));
              }
              t = (0, e.utilConcatBuf)(t, l);
            }
            return t;
          }),
          (r.toJSON = function () {
            var e = {};
            try {
              e = t.prototype.toJSON.call(this);
            } catch (e) {}
            return (
              (e.idBlock = this.idBlock.toJSON()),
              (e.lenBlock = this.lenBlock.toJSON()),
              (e.valueBlock = this.valueBlock.toJSON()),
              "name" in this && (e.name = this.name),
              "optional" in this && (e.optional = this.optional),
              "primitiveSchema" in this &&
                (e.primitiveSchema = this.primitiveSchema.toJSON()),
              e
            );
          }),
          (r.toString = function () {
            return (
              this.constructor.blockName() +
              " : " +
              (0, e.bufferToHexCodes)(this.valueBlock.valueHex)
            );
          }),
          n
        );
      })(i);
      s.BaseBlock = p;
      var _ = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              "valueHex" in n
                ? (r.valueHex = n.valueHex.slice(0))
                : (r.valueHex = new ArrayBuffer(0)),
              (r.isHexOnly = (0, e.getParametersValue)(n, "isHexOnly", !0)),
              r
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var t = new Uint8Array(n, r, o);
              if (t.length === 0)
                return (this.warnings.push("Zero buffer length"), r);
              this.valueHex = new ArrayBuffer(t.length);
              for (
                var a = new Uint8Array(this.valueHex), i = 0;
                i < t.length;
                i++
              )
                a[i] = t[i];
              return ((this.blockLength = o), r + o);
            }),
            (r.toBER = function (t) {
              return (t === void 0 && (t = !1), this.valueHex.slice(0));
            }),
            (n.blockName = function () {
              return "PrimitiveValueBlock";
            }),
            (r.toJSON = function () {
              var n = {};
              try {
                n = t.prototype.toJSON.call(this);
              } catch (e) {}
              return (
                (n.valueHex = (0, e.bufferToHexCodes)(
                  this.valueHex,
                  0,
                  this.valueHex.byteLength,
                )),
                (n.isHexOnly = this.isHexOnly),
                n
              );
            }),
            n
          );
        })(m),
        f = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, _) || this),
              (n.idBlock.isConstructed = !1),
              n
            );
          }
          return (
            babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "PRIMITIVE";
            }),
            t
          );
        })(p);
      s.Primitive = f;
      var g = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              (r.value = (0, e.getParametersValue)(n, "value", [])),
              (r.isIndefiniteForm = (0, e.getParametersValue)(
                n,
                "isIndefiniteForm",
                !1,
              )),
              r
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              var t = r,
                a = o;
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var i = new Uint8Array(n, r, o);
              if (i.length === 0)
                return (this.warnings.push("Zero buffer length"), r);
              function l(e, t) {
                return e === !0 ? 1 : t;
              }
              for (var s = r; l(this.isIndefiniteForm, o) > 0; ) {
                var u = me(n, s, o);
                if (u.offset === -1)
                  return (
                    (this.error = u.result.error),
                    this.warnings.concat(u.result.warnings),
                    -1
                  );
                if (
                  ((s = u.offset),
                  (this.blockLength += u.result.blockLength),
                  (o -= u.result.blockLength),
                  this.value.push(u.result),
                  this.isIndefiniteForm === !0 &&
                    u.result.constructor.blockName() === C.blockName())
                )
                  break;
              }
              return (
                this.isIndefiniteForm === !0 &&
                  (this.value[this.value.length - 1].constructor.blockName() ===
                  C.blockName()
                    ? this.value.pop()
                    : this.warnings.push("No EndOfContent block encoded")),
                (this.valueBeforeDecode = n.slice(t, t + a)),
                s
              );
            }),
            (r.toBER = function (n) {
              n === void 0 && (n = !1);
              for (
                var t = new ArrayBuffer(0), r = 0;
                r < this.value.length;
                r++
              ) {
                var o = this.value[r].toBER(n);
                t = (0, e.utilConcatBuf)(t, o);
              }
              return t;
            }),
            (n.blockName = function () {
              return "ConstructedValueBlock";
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              ((e.isIndefiniteForm = this.isIndefiniteForm), (e.value = []));
              for (var n = 0; n < this.value.length; n++)
                e.value.push(this.value[n].toJSON());
              return e;
            }),
            n
          );
        })(m),
        h = (function (e) {
          function n(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, g) || this),
              (n.idBlock.isConstructed = !0),
              n
            );
          }
          (babelHelpers.inheritsLoose(n, e),
            (n.blockName = function () {
              return "CONSTRUCTED";
            }));
          var r = n.prototype;
          return (
            (r.fromBER = function (t, n, r) {
              this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
              var e = this.valueBlock.fromBER(
                t,
                n,
                this.lenBlock.isIndefiniteForm === !0
                  ? r
                  : this.lenBlock.length,
              );
              return e === -1
                ? ((this.error = this.valueBlock.error), e)
                : (this.idBlock.error.length === 0 &&
                    (this.blockLength += this.idBlock.blockLength),
                  this.lenBlock.error.length === 0 &&
                    (this.blockLength += this.lenBlock.blockLength),
                  this.valueBlock.error.length === 0 &&
                    (this.blockLength += this.valueBlock.blockLength),
                  e);
            }),
            (r.toString = function () {
              var e = [],
                n = t(this.valueBlock.value),
                r;
              try {
                for (n.s(); !(r = n.n()).done; ) {
                  var o = r.value;
                  e.push(
                    o
                      .toString()
                      .split("\n")
                      .map(function (e) {
                        return "  " + e;
                      })
                      .join("\n"),
                  );
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
              var a =
                this.idBlock.tagClass === 3
                  ? "[" + this.idBlock.tagNumber + "]"
                  : this.constructor.blockName();
              return e.length ? a + " :\n" + e.join("\n") : a + " :";
            }),
            n
          );
        })(p);
      s.Constructed = h;
      var y = (function (e) {
          function t(t) {
            return (t === void 0 && (t = {}), e.call(this, t) || this);
          }
          babelHelpers.inheritsLoose(t, e);
          var n = t.prototype;
          return (
            (n.fromBER = function (t, n, r) {
              return n;
            }),
            (n.toBER = function (t) {
              return (t === void 0 && (t = !1), new ArrayBuffer(0));
            }),
            (t.blockName = function () {
              return "EndOfContentValueBlock";
            }),
            t
          );
        })(m),
        C = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, y) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 0),
              n
            );
          }
          return (
            babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "EndOfContent";
            }),
            t
          );
        })(p);
      s.EndOfContent = C;
      var b = (function (t) {
          function n(n) {
            var r;
            if (
              (n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              (r.value = (0, e.getParametersValue)(n, "value", !1)),
              (r.isHexOnly = (0, e.getParametersValue)(n, "isHexOnly", !1)),
              "valueHex" in n)
            )
              r.valueHex = n.valueHex.slice(0);
            else if (((r.valueHex = new ArrayBuffer(1)), r.value === !0)) {
              var o = new Uint8Array(r.valueHex);
              o[0] = 255;
            }
            return r;
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var t = new Uint8Array(n, r, o);
              (o > 1 &&
                this.warnings.push(
                  "Boolean value encoded in more then 1 octet",
                ),
                (this.isHexOnly = !0),
                (this.valueHex = new ArrayBuffer(t.length)));
              for (
                var a = new Uint8Array(this.valueHex), i = 0;
                i < t.length;
                i++
              )
                a[i] = t[i];
              return (
                e.utilDecodeTC.call(this) !== 0
                  ? (this.value = !0)
                  : (this.value = !1),
                (this.blockLength = o),
                r + o
              );
            }),
            (r.toBER = function (t) {
              return (t === void 0 && (t = !1), this.valueHex);
            }),
            (n.blockName = function () {
              return "BooleanValueBlock";
            }),
            (r.toJSON = function () {
              var n = {};
              try {
                n = t.prototype.toJSON.call(this);
              } catch (e) {}
              return (
                (n.value = this.value),
                (n.isHexOnly = this.isHexOnly),
                (n.valueHex = (0, e.bufferToHexCodes)(
                  this.valueHex,
                  0,
                  this.valueHex.byteLength,
                )),
                n
              );
            }),
            n
          );
        })(m),
        v = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, b) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 1),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "BOOLEAN";
            }));
          var n = t.prototype;
          return (
            (n.toString = function () {
              return (
                this.constructor.blockName() + " : " + this.valueBlock.value
              );
            }),
            t
          );
        })(p);
      s.Boolean = v;
      var S = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 16),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "SEQUENCE";
          }),
          t
        );
      })(h);
      s.Sequence = S;
      var R = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 17),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "SET";
          }),
          t
        );
      })(h);
      s.Set = R;
      var L = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t, i) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 5),
            n
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "NULL";
          }));
        var n = t.prototype;
        return (
          (n.fromBER = function (t, n, r) {
            return (
              this.lenBlock.length > 0 &&
                this.warnings.push(
                  "Non-zero length of value block for Null type",
                ),
              this.idBlock.error.length === 0 &&
                (this.blockLength += this.idBlock.blockLength),
              this.lenBlock.error.length === 0 &&
                (this.blockLength += this.lenBlock.blockLength),
              (this.blockLength += r),
              n + r > t.byteLength
                ? ((this.error =
                    "End of input reached before message was fully decoded (inconsistent offset and length values)"),
                  -1)
                : n + r
            );
          }),
          (n.toBER = function (t) {
            t === void 0 && (t = !1);
            var e = new ArrayBuffer(2);
            if (t === !0) return e;
            var n = new Uint8Array(e);
            return ((n[0] = 5), (n[1] = 0), e);
          }),
          (n.toString = function () {
            return "" + this.constructor.blockName();
          }),
          t
        );
      })(p);
      s.Null = L;
      var E = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              (r.isConstructed = (0, e.getParametersValue)(
                n,
                "isConstructed",
                !1,
              )),
              r
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              var e = 0;
              if (this.isConstructed === !0) {
                if (
                  ((this.isHexOnly = !1),
                  (e = g.prototype.fromBER.call(this, n, r, o)),
                  e === -1)
                )
                  return e;
                for (var a = 0; a < this.value.length; a++) {
                  var i = this.value[a].constructor.blockName();
                  if (i === C.blockName()) {
                    if (this.isIndefiniteForm === !0) break;
                    return (
                      (this.error =
                        "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only"),
                      -1
                    );
                  }
                  if (i !== k.blockName())
                    return (
                      (this.error =
                        "OCTET STRING may consists of OCTET STRINGs only"),
                      -1
                    );
                }
              } else
                ((this.isHexOnly = !0),
                  (e = t.prototype.fromBER.call(this, n, r, o)),
                  (this.blockLength = o));
              return e;
            }),
            (r.toBER = function (t) {
              if ((t === void 0 && (t = !1), this.isConstructed === !0))
                return g.prototype.toBER.call(this, t);
              var e = new ArrayBuffer(this.valueHex.byteLength);
              return (
                t === !0 ||
                  this.valueHex.byteLength === 0 ||
                  (e = this.valueHex.slice(0)),
                e
              );
            }),
            (n.blockName = function () {
              return "OctetStringValueBlock";
            }),
            (r.toJSON = function () {
              var n = {};
              try {
                n = t.prototype.toJSON.call(this);
              } catch (e) {}
              return (
                (n.isConstructed = this.isConstructed),
                (n.isHexOnly = this.isHexOnly),
                (n.valueHex = (0, e.bufferToHexCodes)(
                  this.valueHex,
                  0,
                  this.valueHex.byteLength,
                )),
                n
              );
            }),
            n
          );
        })(u(g)),
        k = (function (t) {
          function n(e) {
            var n;
            return (
              e === void 0 && (e = {}),
              (n = t.call(this, e, E) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 4),
              n
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              if (
                ((this.valueBlock.isConstructed = this.idBlock.isConstructed),
                (this.valueBlock.isIndefiniteForm =
                  this.lenBlock.isIndefiniteForm),
                o === 0)
              )
                return (
                  this.idBlock.error.length === 0 &&
                    (this.blockLength += this.idBlock.blockLength),
                  this.lenBlock.error.length === 0 &&
                    (this.blockLength += this.lenBlock.blockLength),
                  r
                );
              if (!this.valueBlock.isConstructed) {
                var e = n.slice(r, r + o);
                try {
                  var a = pe(e);
                  a.offset !== -1 &&
                    a.offset === o &&
                    (this.valueBlock.value = [a.result]);
                } catch (e) {}
              }
              return t.prototype.fromBER.call(this, n, r, o);
            }),
            (n.blockName = function () {
              return "OCTET STRING";
            }),
            (r.isEqual = function (t) {
              return !(
                !(t instanceof n) || JSON.stringify(this) !== JSON.stringify(t)
              );
            }),
            (r.toString = function () {
              return this.valueBlock.isConstructed ||
                (this.valueBlock.value && this.valueBlock.value.length)
                ? h.prototype.toString.call(this)
                : this.constructor.blockName() +
                    " : " +
                    (0, e.bufferToHexCodes)(this.valueBlock.valueHex);
            }),
            n
          );
        })(p);
      s.OctetString = k;
      var I = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              (r.unusedBits = (0, e.getParametersValue)(n, "unusedBits", 0)),
              (r.isConstructed = (0, e.getParametersValue)(
                n,
                "isConstructed",
                !1,
              )),
              (r.blockLength = r.valueHex.byteLength),
              r
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              if (o === 0) return r;
              var t = -1;
              if (this.isConstructed === !0) {
                if (((t = g.prototype.fromBER.call(this, n, r, o)), t === -1))
                  return t;
                for (var a = 0; a < this.value.length; a++) {
                  var i = this.value[a].constructor.blockName();
                  if (i === C.blockName()) {
                    if (this.isIndefiniteForm === !0) break;
                    return (
                      (this.error =
                        "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only"),
                      -1
                    );
                  }
                  if (i !== T.blockName())
                    return (
                      (this.error =
                        "BIT STRING may consists of BIT STRINGs only"),
                      -1
                    );
                  if (
                    this.unusedBits > 0 &&
                    this.value[a].valueBlock.unusedBits > 0
                  )
                    return (
                      (this.error =
                        'Using of "unused bits" inside constructive BIT STRING allowed for least one only'),
                      -1
                    );
                  if (
                    ((this.unusedBits = this.value[a].valueBlock.unusedBits),
                    this.unusedBits > 7)
                  )
                    return (
                      (this.error =
                        "Unused bits for BitString must be in range 0-7"),
                      -1
                    );
                }
                return t;
              }
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var l = new Uint8Array(n, r, o);
              if (((this.unusedBits = l[0]), this.unusedBits > 7))
                return (
                  (this.error =
                    "Unused bits for BitString must be in range 0-7"),
                  -1
                );
              if (!this.unusedBits) {
                var s = n.slice(r + 1, r + o);
                try {
                  var u = pe(s);
                  u.offset !== -1 &&
                    u.offset === o - 1 &&
                    (this.value = [u.result]);
                } catch (e) {}
              }
              this.valueHex = new ArrayBuffer(l.length - 1);
              for (var c = new Uint8Array(this.valueHex), d = 0; d < o - 1; d++)
                c[d] = l[d + 1];
              return ((this.blockLength = l.length), r + o);
            }),
            (r.toBER = function (t) {
              if ((t === void 0 && (t = !1), this.isConstructed === !0))
                return g.prototype.toBER.call(this, t);
              if (t === !0)
                return new ArrayBuffer(this.valueHex.byteLength + 1);
              if (this.valueHex.byteLength === 0) return new ArrayBuffer(0);
              var e = new Uint8Array(this.valueHex),
                n = new ArrayBuffer(this.valueHex.byteLength + 1),
                r = new Uint8Array(n);
              r[0] = this.unusedBits;
              for (var o = 0; o < this.valueHex.byteLength; o++)
                r[o + 1] = e[o];
              return n;
            }),
            (n.blockName = function () {
              return "BitStringValueBlock";
            }),
            (r.toJSON = function () {
              var n = {};
              try {
                n = t.prototype.toJSON.call(this);
              } catch (e) {}
              return (
                (n.unusedBits = this.unusedBits),
                (n.isConstructed = this.isConstructed),
                (n.isHexOnly = this.isHexOnly),
                (n.valueHex = (0, e.bufferToHexCodes)(
                  this.valueHex,
                  0,
                  this.valueHex.byteLength,
                )),
                n
              );
            }),
            n
          );
        })(u(g)),
        T = (function (e) {
          function n(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, I) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 3),
              n
            );
          }
          (babelHelpers.inheritsLoose(n, e),
            (n.blockName = function () {
              return "BIT STRING";
            }));
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              return o === 0
                ? r
                : ((this.valueBlock.isConstructed = this.idBlock.isConstructed),
                  (this.valueBlock.isIndefiniteForm =
                    this.lenBlock.isIndefiniteForm),
                  e.prototype.fromBER.call(this, n, r, o));
            }),
            (r.isEqual = function (t) {
              return !(
                !(t instanceof n) || JSON.stringify(this) !== JSON.stringify(t)
              );
            }),
            (r.toString = function () {
              if (
                this.valueBlock.isConstructed ||
                (this.valueBlock.value && this.valueBlock.value.length)
              )
                return h.prototype.toString.call(this);
              var e = [],
                n = new Uint8Array(this.valueBlock.valueHex),
                r = t(n),
                o;
              try {
                for (r.s(); !(o = r.n()).done; ) {
                  var a = o.value;
                  e.push(a.toString(2).padStart(8, "0"));
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return this.constructor.blockName() + " : " + e.join("");
            }),
            n
          );
        })(p);
      s.BitString = T;
      var D = (function (t) {
          function n(e) {
            var n;
            return (
              e === void 0 && (e = {}),
              (n = t.call(this, e) || this),
              "value" in e && (n.valueDec = e.value),
              n
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromDER = function (t, n, r, o) {
              o === void 0 && (o = 0);
              var e = this.fromBER(t, n, r);
              if (e === -1) return e;
              var a = new Uint8Array(this.$LocalIntegerValueBlock1);
              if (a[0] === 0 && (a[1] & 128) !== 0) {
                var i = new ArrayBuffer(
                    this.$LocalIntegerValueBlock1.byteLength - 1,
                  ),
                  l = new Uint8Array(i);
                (l.set(
                  new Uint8Array(
                    this.$LocalIntegerValueBlock1,
                    1,
                    this.$LocalIntegerValueBlock1.byteLength - 1,
                  ),
                ),
                  (this.$LocalIntegerValueBlock1 = i.slice(0)));
              } else if (
                o !== 0 &&
                this.$LocalIntegerValueBlock1.byteLength < o
              ) {
                o - this.$LocalIntegerValueBlock1.byteLength > 1 &&
                  (o = this.$LocalIntegerValueBlock1.byteLength + 1);
                var s = new ArrayBuffer(o),
                  u = new Uint8Array(s);
                (u.set(a, o - this.$LocalIntegerValueBlock1.byteLength),
                  (this.$LocalIntegerValueBlock1 = s.slice(0)));
              }
              return e;
            }),
            (r.toDER = function (t) {
              t === void 0 && (t = !1);
              var e = new Uint8Array(this.$LocalIntegerValueBlock1);
              switch (!0) {
                case (e[0] & 128) !== 0:
                  {
                    var n = new ArrayBuffer(
                        this.$LocalIntegerValueBlock1.byteLength + 1,
                      ),
                      r = new Uint8Array(n);
                    ((r[0] = 0),
                      r.set(e, 1),
                      (this.$LocalIntegerValueBlock1 = n.slice(0)));
                  }
                  break;
                case e[0] === 0 && (e[1] & 128) === 0:
                  {
                    var o = new ArrayBuffer(
                        this.$LocalIntegerValueBlock1.byteLength - 1,
                      ),
                      a = new Uint8Array(o);
                    (a.set(
                      new Uint8Array(
                        this.$LocalIntegerValueBlock1,
                        1,
                        this.$LocalIntegerValueBlock1.byteLength - 1,
                      ),
                    ),
                      (this.$LocalIntegerValueBlock1 = o.slice(0)));
                  }
                  break;
                default:
              }
              return this.toBER(t);
            }),
            (r.fromBER = function (n, r, o) {
              var e = t.prototype.fromBER.call(this, n, r, o);
              return e === -1 ? e : ((this.blockLength = o), r + o);
            }),
            (r.toBER = function (t) {
              return (t === void 0 && (t = !1), this.valueHex.slice(0));
            }),
            (n.blockName = function () {
              return "IntegerValueBlock";
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              return ((e.valueDec = this.valueDec), e);
            }),
            (r.toString = function () {
              function t(t, n) {
                for (
                  var r = new Uint8Array([0]),
                    o = new Uint8Array(t),
                    a = new Uint8Array(n),
                    i = o.slice(0),
                    l = i.length - 1,
                    s = a.slice(0),
                    u = s.length - 1,
                    c = 0,
                    d = u < l ? l : u,
                    m = 0,
                    p = d;
                  p >= 0;
                  p--, m++
                ) {
                  switch (!0) {
                    case m < s.length:
                      c = i[l - m] + s[u - m] + r[0];
                      break;
                    default:
                      c = i[l - m] + r[0];
                  }
                  switch (((r[0] = c / 10), !0)) {
                    case m >= i.length:
                      i = (0, e.utilConcatView)(new Uint8Array([c % 10]), i);
                      break;
                    default:
                      i[l - m] = c % 10;
                  }
                }
                return (
                  r[0] > 0 && (i = (0, e.utilConcatView)(r, i)),
                  i.slice(0)
                );
              }
              function n(t) {
                if (t >= o.length)
                  for (var n = o.length; n <= t; n++) {
                    for (
                      var r = new Uint8Array([0]),
                        a = o[n - 1].slice(0),
                        i = a.length - 1;
                      i >= 0;
                      i--
                    ) {
                      var l = new Uint8Array([(a[i] << 1) + r[0]]);
                      ((r[0] = l[0] / 10), (a[i] = l[0] % 10));
                    }
                    (r[0] > 0 && (a = (0, e.utilConcatView)(r, a)), o.push(a));
                  }
                return o[t];
              }
              function r(e, t) {
                for (
                  var n = 0,
                    r = new Uint8Array(e),
                    o = new Uint8Array(t),
                    a = r.slice(0),
                    i = a.length - 1,
                    l = o.slice(0),
                    s = l.length - 1,
                    u,
                    c = 0,
                    d = s;
                  d >= 0;
                  d--, c++
                )
                  switch (((u = a[i - c] - l[s - c] - n), !0)) {
                    case u < 0:
                      ((n = 1), (a[i - c] = u + 10));
                      break;
                    default:
                      ((n = 0), (a[i - c] = u));
                  }
                if (n > 0)
                  for (var m = i - s + 1; m >= 0; m--, c++)
                    if (((u = a[i - c] - n), u < 0))
                      ((n = 1), (a[i - c] = u + 10));
                    else {
                      ((n = 0), (a[i - c] = u));
                      break;
                    }
                return a.slice();
              }
              for (
                var i = this.$LocalIntegerValueBlock1.byteLength * 8 - 1,
                  l = new Uint8Array(
                    (this.$LocalIntegerValueBlock1.byteLength * 8) / 3,
                  ),
                  s = 0,
                  u,
                  c = new Uint8Array(this.$LocalIntegerValueBlock1),
                  d = "",
                  m = !1,
                  p = this.$LocalIntegerValueBlock1.byteLength - 1;
                p >= 0;
                p--
              ) {
                u = c[p];
                for (var _ = 0; _ < 8; _++) {
                  if ((u & 1) === 1)
                    switch (s) {
                      case i:
                        ((l = r(n(s), l)), (d = "-"));
                        break;
                      default:
                        l = t(l, n(s));
                    }
                  (s++, (u >>= 1));
                }
              }
              for (var f = 0; f < l.length; f++)
                (l[f] && (m = !0), m && (d += a.charAt(l[f])));
              return (m === !1 && (d += a.charAt(0)), d);
            }),
            babelHelpers.createClass(n, [
              {
                key: "valueHex",
                get: function () {
                  return this.$LocalIntegerValueBlock1;
                },
                set: function (n) {
                  ((this.$LocalIntegerValueBlock1 = n.slice(0)),
                    n.byteLength >= 4
                      ? (this.warnings.push(
                          "Too big Integer for decoding, hex only",
                        ),
                        (this.isHexOnly = !0),
                        (this.$LocalIntegerValueBlock2 = 0))
                      : ((this.isHexOnly = !1),
                        n.byteLength > 0 &&
                          (this.$LocalIntegerValueBlock2 =
                            e.utilDecodeTC.call(this))));
                },
              },
              {
                key: "valueDec",
                get: function () {
                  return this.$LocalIntegerValueBlock2;
                },
                set: function (n) {
                  ((this.$LocalIntegerValueBlock2 = n),
                    (this.isHexOnly = !1),
                    (this.$LocalIntegerValueBlock1 = (0, e.utilEncodeTC)(n)));
                },
              },
            ])
          );
        })(u(m)),
        x = (function (t) {
          function n(e) {
            var n;
            return (
              e === void 0 && (e = {}),
              (n = t.call(this, e, D) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 2),
              n
            );
          }
          (babelHelpers.inheritsLoose(n, t),
            (n.blockName = function () {
              return "INTEGER";
            }));
          var r = n.prototype;
          return (
            (r.isEqual = function (r) {
              return r instanceof n
                ? this.valueBlock.isHexOnly && r.valueBlock.isHexOnly
                  ? (0, e.isEqualBuffer)(
                      this.valueBlock.valueHex,
                      r.valueBlock.valueHex,
                    )
                  : this.valueBlock.isHexOnly === r.valueBlock.isHexOnly
                    ? this.valueBlock.valueDec === r.valueBlock.valueDec
                    : !1
                : r instanceof ArrayBuffer
                  ? (0, e.isEqualBuffer)(this.valueBlock.valueHex, r)
                  : !1;
            }),
            (r.convertToDER = function () {
              var e = new n({ valueHex: this.valueBlock.valueHex });
              return (e.valueBlock.toDER(), e);
            }),
            (r.convertFromDER = function () {
              var e =
                  this.valueBlock.valueHex.byteLength % 2
                    ? this.valueBlock.valueHex.byteLength + 1
                    : this.valueBlock.valueHex.byteLength,
                t = new n({ valueHex: this.valueBlock.valueHex });
              return (
                t.valueBlock.fromDER(
                  t.valueBlock.valueHex,
                  0,
                  t.valueBlock.valueHex.byteLength,
                  e,
                ),
                t
              );
            }),
            (r.toString = function () {
              var t = (0, e.bufferToHexCodes)(this.valueBlock.valueHex),
                n = BigInt("0x" + t);
              return this.constructor.blockName() + " : " + n.toString();
            }),
            n
          );
        })(p);
      s.Integer = x;
      var $ = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 10),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "ENUMERATED";
          }),
          t
        );
      })(x);
      s.Enumerated = $;
      var P = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              (r.valueDec = (0, e.getParametersValue)(n, "valueDec", -1)),
              (r.isFirstSid = (0, e.getParametersValue)(n, "isFirstSid", !1)),
              r
            );
          }
          (babelHelpers.inheritsLoose(n, t),
            (n.blockName = function () {
              return "sidBlock";
            }));
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              if (o === 0) return r;
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var t = new Uint8Array(n, r, o);
              this.valueHex = new ArrayBuffer(o);
              for (
                var a = new Uint8Array(this.valueHex), i = 0;
                i < o &&
                ((a[i] = t[i] & 127), this.blockLength++, (t[i] & 128) !== 0);
                i++
              );
              for (
                var l = new ArrayBuffer(this.blockLength),
                  s = new Uint8Array(l),
                  u = 0;
                u < this.blockLength;
                u++
              )
                s[u] = a[u];
              return (
                (this.valueHex = l.slice(0)),
                (a = new Uint8Array(this.valueHex)),
                (t[this.blockLength - 1] & 128) !== 0
                  ? ((this.error =
                      "End of input reached before message was fully decoded"),
                    -1)
                  : (a[0] === 0 &&
                      this.warnings.push(
                        "Needlessly long format of SID encoding",
                      ),
                    this.blockLength <= 8
                      ? (this.valueDec = (0, e.utilFromBase)(a, 7))
                      : ((this.isHexOnly = !0),
                        this.warnings.push(
                          "Too big SID for decoding, hex only",
                        )),
                    r + this.blockLength)
              );
            }),
            (r.toBER = function (n) {
              n === void 0 && (n = !1);
              var t, r;
              if (this.isHexOnly) {
                if (n === !0) return new ArrayBuffer(this.valueHex.byteLength);
                var o = new Uint8Array(this.valueHex);
                ((t = new ArrayBuffer(this.blockLength)),
                  (r = new Uint8Array(t)));
                for (var a = 0; a < this.blockLength - 1; a++)
                  r[a] = o[a] | 128;
                return ((r[this.blockLength - 1] = o[this.blockLength - 1]), t);
              }
              var i = (0, e.utilToBase)(this.valueDec, 7);
              if (i.byteLength === 0)
                return (
                  (this.error = "Error during encoding SID value"),
                  new ArrayBuffer(0)
                );
              if (((t = new ArrayBuffer(i.byteLength)), n === !1)) {
                var l = new Uint8Array(i);
                r = new Uint8Array(t);
                for (var s = 0; s < i.byteLength - 1; s++) r[s] = l[s] | 128;
                r[i.byteLength - 1] = l[i.byteLength - 1];
              }
              return t;
            }),
            (r.toString = function () {
              var t = "";
              if (this.isHexOnly === !0)
                t = (0, e.bufferToHexCodes)(
                  this.valueHex,
                  0,
                  this.valueHex.byteLength,
                );
              else if (this.isFirstSid) {
                var n = this.valueDec;
                (this.valueDec <= 39
                  ? (t = "0.")
                  : this.valueDec <= 79
                    ? ((t = "1."), (n -= 40))
                    : ((t = "2."), (n -= 80)),
                  (t += n.toString()));
              } else t = this.valueDec.toString();
              return t;
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              return (
                (e.valueDec = this.valueDec),
                (e.isFirstSid = this.isFirstSid),
                e
              );
            }),
            n
          );
        })(u(i)),
        N = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              r.fromString((0, e.getParametersValue)(n, "value", "")),
              r
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (t, n, r) {
              for (var e = n; r > 0; ) {
                var o = new P();
                if (((e = o.fromBER(t, e, r)), e === -1))
                  return ((this.blockLength = 0), (this.error = o.error), e);
                (this.value.length === 0 && (o.isFirstSid = !0),
                  (this.blockLength += o.blockLength),
                  (r -= o.blockLength),
                  this.value.push(o));
              }
              return e;
            }),
            (r.toBER = function (n) {
              n === void 0 && (n = !1);
              for (
                var t = new ArrayBuffer(0), r = 0;
                r < this.value.length;
                r++
              ) {
                var o = this.value[r].toBER(n);
                if (o.byteLength === 0)
                  return (
                    (this.error = this.value[r].error),
                    new ArrayBuffer(0)
                  );
                t = (0, e.utilConcatBuf)(t, o);
              }
              return t;
            }),
            (r.fromString = function (t) {
              this.value = [];
              var e = 0,
                n = 0,
                r = "",
                o = !1;
              do
                if (
                  ((n = t.indexOf(".", e)),
                  n === -1 ? (r = t.substr(e)) : (r = t.substr(e, n - e)),
                  (e = n + 1),
                  o)
                ) {
                  var a = this.value[0],
                    i = 0;
                  switch (a.valueDec) {
                    case 0:
                      break;
                    case 1:
                      i = 40;
                      break;
                    case 2:
                      i = 80;
                      break;
                    default:
                      return ((this.value = []), !1);
                  }
                  var l = parseInt(r, 10);
                  if (isNaN(l)) return !0;
                  ((a.valueDec = l + i), (o = !1));
                } else {
                  var s = new P();
                  if (((s.valueDec = parseInt(r, 10)), isNaN(s.valueDec)))
                    return !0;
                  (this.value.length === 0 && ((s.isFirstSid = !0), (o = !0)),
                    this.value.push(s));
                }
              while (n !== -1);
              return !0;
            }),
            (r.toString = function () {
              for (var e = "", t = !1, n = 0; n < this.value.length; n++) {
                t = this.value[n].isHexOnly;
                var r = this.value[n].toString();
                (n !== 0 && (e = e + "."),
                  t
                    ? ((r = "{" + r + "}"),
                      this.value[n].isFirstSid
                        ? (e = "2.{" + r + " - 80}")
                        : (e += r))
                    : (e += r));
              }
              return e;
            }),
            (n.blockName = function () {
              return "ObjectIdentifierValueBlock";
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              ((e.value = this.toString()), (e.sidArray = []));
              for (var n = 0; n < this.value.length; n++)
                e.sidArray.push(this.value[n].toJSON());
              return e;
            }),
            n
          );
        })(m),
        M = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, N) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 6),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "OBJECT IDENTIFIER";
            }));
          var n = t.prototype;
          return (
            (n.toString = function () {
              return (
                this.constructor.blockName() +
                " : " +
                this.valueBlock.toString()
              );
            }),
            t
          );
        })(p);
      s.ObjectIdentifier = M;
      var w = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t) || this),
              (n.isHexOnly = !0),
              (n.value = ""),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "Utf8StringValueBlock";
            }));
          var n = t.prototype;
          return (
            (n.toJSON = function () {
              var t = {};
              try {
                t = e.prototype.toJSON.call(this);
              } catch (e) {}
              return ((t.value = this.value), t);
            }),
            t
          );
        })(u(i)),
        A = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, w) || this),
              "value" in t && n.fromString(t.value),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 12),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "UTF8String";
            }));
          var n = t.prototype;
          return (
            (n.fromBER = function (t, n, r) {
              var e = this.valueBlock.fromBER(
                t,
                n,
                this.lenBlock.isIndefiniteForm === !0
                  ? r
                  : this.lenBlock.length,
              );
              return e === -1
                ? ((this.error = this.valueBlock.error), e)
                : (this.fromBuffer(this.valueBlock.valueHex),
                  this.idBlock.error.length === 0 &&
                    (this.blockLength += this.idBlock.blockLength),
                  this.lenBlock.error.length === 0 &&
                    (this.blockLength += this.lenBlock.blockLength),
                  this.valueBlock.error.length === 0 &&
                    (this.blockLength += this.valueBlock.blockLength),
                  e);
            }),
            (n.fromBuffer = function (t) {
              this.valueBlock.value = String.fromCharCode.apply(
                null,
                new Uint8Array(t),
              );
              try {
                this.valueBlock.value = decodeURIComponent(
                  escape(this.valueBlock.value),
                );
              } catch (e) {
                this.warnings.push(
                  'Error during "decodeURIComponent": ' +
                    e +
                    ", using raw string",
                );
              }
            }),
            (n.fromString = function (t) {
              var e = unescape(encodeURIComponent(t)),
                n = e.length;
              this.valueBlock.valueHex = new ArrayBuffer(n);
              for (
                var r = new Uint8Array(this.valueBlock.valueHex), o = 0;
                o < n;
                o++
              )
                r[o] = e.charCodeAt(o);
              this.valueBlock.value = t;
            }),
            (n.toString = function () {
              return (
                this.constructor.blockName() + " : " + this.valueBlock.value
              );
            }),
            t
          );
        })(p);
      s.Utf8String = A;
      var F = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              (r.valueDec = (0, e.getParametersValue)(n, "valueDec", -1)),
              r
            );
          }
          (babelHelpers.inheritsLoose(n, t),
            (n.blockName = function () {
              return "relativeSidBlock";
            }));
          var r = n.prototype;
          return (
            (r.fromBER = function (n, r, o) {
              if (o === 0) return r;
              if ((0, e.checkBufferParams)(this, n, r, o) === !1) return -1;
              var t = new Uint8Array(n, r, o);
              this.valueHex = new ArrayBuffer(o);
              for (
                var a = new Uint8Array(this.valueHex), i = 0;
                i < o &&
                ((a[i] = t[i] & 127), this.blockLength++, (t[i] & 128) !== 0);
                i++
              );
              for (
                var l = new ArrayBuffer(this.blockLength),
                  s = new Uint8Array(l),
                  u = 0;
                u < this.blockLength;
                u++
              )
                s[u] = a[u];
              return (
                (this.valueHex = l.slice(0)),
                (a = new Uint8Array(this.valueHex)),
                (t[this.blockLength - 1] & 128) !== 0
                  ? ((this.error =
                      "End of input reached before message was fully decoded"),
                    -1)
                  : (a[0] === 0 &&
                      this.warnings.push(
                        "Needlessly long format of SID encoding",
                      ),
                    this.blockLength <= 8
                      ? (this.valueDec = (0, e.utilFromBase)(a, 7))
                      : ((this.isHexOnly = !0),
                        this.warnings.push(
                          "Too big SID for decoding, hex only",
                        )),
                    r + this.blockLength)
              );
            }),
            (r.toBER = function (n) {
              n === void 0 && (n = !1);
              var t, r;
              if (this.isHexOnly) {
                if (n === !0) return new ArrayBuffer(this.valueHex.byteLength);
                var o = new Uint8Array(this.valueHex);
                ((t = new ArrayBuffer(this.blockLength)),
                  (r = new Uint8Array(t)));
                for (var a = 0; a < this.blockLength - 1; a++)
                  r[a] = o[a] | 128;
                return ((r[this.blockLength - 1] = o[this.blockLength - 1]), t);
              }
              var i = (0, e.utilToBase)(this.valueDec, 7);
              if (i.byteLength === 0)
                return (
                  (this.error = "Error during encoding SID value"),
                  new ArrayBuffer(0)
                );
              if (((t = new ArrayBuffer(i.byteLength)), n === !1)) {
                var l = new Uint8Array(i);
                r = new Uint8Array(t);
                for (var s = 0; s < i.byteLength - 1; s++) r[s] = l[s] | 128;
                r[i.byteLength - 1] = l[i.byteLength - 1];
              }
              return t;
            }),
            (r.toString = function () {
              var t = "";
              return (
                this.isHexOnly === !0
                  ? (t = (0, e.bufferToHexCodes)(
                      this.valueHex,
                      0,
                      this.valueHex.byteLength,
                    ))
                  : (t = this.valueDec.toString()),
                t
              );
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              return ((e.valueDec = this.valueDec), e);
            }),
            n
          );
        })(u(i)),
        O = (function (t) {
          function n(n) {
            var r;
            return (
              n === void 0 && (n = {}),
              (r = t.call(this, n) || this),
              r.fromString((0, e.getParametersValue)(n, "value", "")),
              r
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.fromBER = function (t, n, r) {
              for (var e = n; r > 0; ) {
                var o = new F();
                if (((e = o.fromBER(t, e, r)), e === -1))
                  return ((this.blockLength = 0), (this.error = o.error), e);
                ((this.blockLength += o.blockLength),
                  (r -= o.blockLength),
                  this.value.push(o));
              }
              return e;
            }),
            (r.toBER = function (n) {
              n === void 0 && (n = !1);
              for (
                var t = new ArrayBuffer(0), r = 0;
                r < this.value.length;
                r++
              ) {
                var o = this.value[r].toBER(n);
                if (o.byteLength === 0)
                  return (
                    (this.error = this.value[r].error),
                    new ArrayBuffer(0)
                  );
                t = (0, e.utilConcatBuf)(t, o);
              }
              return t;
            }),
            (r.fromString = function (t) {
              this.value = [];
              var e = 0,
                n = 0,
                r = "";
              do {
                ((n = t.indexOf(".", e)),
                  n === -1 ? (r = t.substr(e)) : (r = t.substr(e, n - e)),
                  (e = n + 1));
                var o = new F();
                if (((o.valueDec = parseInt(r, 10)), isNaN(o.valueDec)))
                  return !0;
                this.value.push(o);
              } while (n !== -1);
              return !0;
            }),
            (r.toString = function () {
              for (var e = "", t = !1, n = 0; n < this.value.length; n++) {
                t = this.value[n].isHexOnly;
                var r = this.value[n].toString();
                (n !== 0 && (e = e + "."), t && (r = "{" + r + "}"), (e += r));
              }
              return e;
            }),
            (n.blockName = function () {
              return "RelativeObjectIdentifierValueBlock";
            }),
            (r.toJSON = function () {
              var e = {};
              try {
                e = t.prototype.toJSON.call(this);
              } catch (e) {}
              ((e.value = this.toString()), (e.sidArray = []));
              for (var n = 0; n < this.value.length; n++)
                e.sidArray.push(this.value[n].toJSON());
              return e;
            }),
            n
          );
        })(m),
        B = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, O) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 13),
              n
            );
          }
          return (
            babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "RelativeObjectIdentifier";
            }),
            t
          );
        })(p);
      s.RelativeObjectIdentifier = B;
      var W = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t) || this),
              (n.isHexOnly = !0),
              (n.value = ""),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "BmpStringValueBlock";
            }));
          var n = t.prototype;
          return (
            (n.toJSON = function () {
              var t = {};
              try {
                t = e.prototype.toJSON.call(this);
              } catch (e) {}
              return ((t.value = this.value), t);
            }),
            t
          );
        })(u(i)),
        q = (function (t) {
          function n(e) {
            var n;
            return (
              e === void 0 && (e = {}),
              (n = t.call(this, e, W) || this),
              "value" in e && n.fromString(e.value),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 30),
              n
            );
          }
          (babelHelpers.inheritsLoose(n, t),
            (n.blockName = function () {
              return "BMPString";
            }));
          var r = n.prototype;
          return (
            (r.fromBER = function (t, n, r) {
              var e = this.valueBlock.fromBER(
                t,
                n,
                this.lenBlock.isIndefiniteForm === !0
                  ? r
                  : this.lenBlock.length,
              );
              return e === -1
                ? ((this.error = this.valueBlock.error), e)
                : (this.fromBuffer(this.valueBlock.valueHex),
                  this.idBlock.error.length === 0 &&
                    (this.blockLength += this.idBlock.blockLength),
                  this.lenBlock.error.length === 0 &&
                    (this.blockLength += this.lenBlock.blockLength),
                  this.valueBlock.error.length === 0 &&
                    (this.blockLength += this.valueBlock.blockLength),
                  e);
            }),
            (r.fromBuffer = function (t) {
              for (
                var e = t.slice(0), n = new Uint8Array(e), r = 0;
                r < n.length;
                r += 2
              ) {
                var o = n[r];
                ((n[r] = n[r + 1]), (n[r + 1] = o));
              }
              this.valueBlock.value = String.fromCharCode.apply(
                null,
                new Uint16Array(e),
              );
            }),
            (r.fromString = function (n) {
              var t = n.length;
              this.valueBlock.valueHex = new ArrayBuffer(t * 2);
              for (
                var r = new Uint8Array(this.valueBlock.valueHex), o = 0;
                o < t;
                o++
              ) {
                var a = (0, e.utilToBase)(n.charCodeAt(o), 8),
                  i = new Uint8Array(a);
                if (!(i.length > 2))
                  for (var l = 2 - i.length, s = i.length - 1; s >= 0; s--)
                    r[o * 2 + s + l] = i[s];
              }
              this.valueBlock.value = n;
            }),
            (r.toString = function () {
              return (
                this.constructor.blockName() + " : " + this.valueBlock.value
              );
            }),
            n
          );
        })(p);
      s.BmpString = q;
      var U = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t) || this),
              (n.isHexOnly = !0),
              (n.value = ""),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "UniversalStringValueBlock";
            }));
          var n = t.prototype;
          return (
            (n.toJSON = function () {
              var t = {};
              try {
                t = e.prototype.toJSON.call(this);
              } catch (e) {}
              return ((t.value = this.value), t);
            }),
            t
          );
        })(u(i)),
        V = (function (t) {
          function n(e) {
            var n;
            return (
              e === void 0 && (e = {}),
              (n = t.call(this, e, U) || this),
              "value" in e && n.fromString(e.value),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 28),
              n
            );
          }
          (babelHelpers.inheritsLoose(n, t),
            (n.blockName = function () {
              return "UniversalString";
            }));
          var r = n.prototype;
          return (
            (r.fromBER = function (t, n, r) {
              var e = this.valueBlock.fromBER(
                t,
                n,
                this.lenBlock.isIndefiniteForm === !0
                  ? r
                  : this.lenBlock.length,
              );
              return e === -1
                ? ((this.error = this.valueBlock.error), e)
                : (this.fromBuffer(this.valueBlock.valueHex),
                  this.idBlock.error.length === 0 &&
                    (this.blockLength += this.idBlock.blockLength),
                  this.lenBlock.error.length === 0 &&
                    (this.blockLength += this.lenBlock.blockLength),
                  this.valueBlock.error.length === 0 &&
                    (this.blockLength += this.valueBlock.blockLength),
                  e);
            }),
            (r.fromBuffer = function (t) {
              for (
                var e = t.slice(0), n = new Uint8Array(e), r = 0;
                r < n.length;
                r += 4
              )
                ((n[r] = n[r + 3]),
                  (n[r + 1] = n[r + 2]),
                  (n[r + 2] = 0),
                  (n[r + 3] = 0));
              this.valueBlock.value = String.fromCharCode.apply(
                null,
                new Uint32Array(e),
              );
            }),
            (r.fromString = function (n) {
              var t = n.length;
              this.valueBlock.valueHex = new ArrayBuffer(t * 4);
              for (
                var r = new Uint8Array(this.valueBlock.valueHex), o = 0;
                o < t;
                o++
              ) {
                var a = (0, e.utilToBase)(n.charCodeAt(o), 8),
                  i = new Uint8Array(a);
                if (!(i.length > 4))
                  for (var l = 4 - i.length, s = i.length - 1; s >= 0; s--)
                    r[o * 4 + s + l] = i[s];
              }
              this.valueBlock.value = n;
            }),
            (r.toString = function () {
              return (
                this.constructor.blockName() + " : " + this.valueBlock.value
              );
            }),
            n
          );
        })(p);
      s.UniversalString = V;
      var H = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t) || this),
              (n.value = ""),
              (n.isHexOnly = !0),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "SimpleStringValueBlock";
            }));
          var n = t.prototype;
          return (
            (n.toJSON = function () {
              var t = {};
              try {
                t = e.prototype.toJSON.call(this);
              } catch (e) {}
              return ((t.value = this.value), t);
            }),
            t
          );
        })(u(i)),
        G = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t, H) || this),
              "value" in t && n.fromString(t.value),
              n
            );
          }
          (babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "SIMPLESTRING";
            }));
          var n = t.prototype;
          return (
            (n.fromBER = function (t, n, r) {
              var e = this.valueBlock.fromBER(
                t,
                n,
                this.lenBlock.isIndefiniteForm === !0
                  ? r
                  : this.lenBlock.length,
              );
              return e === -1
                ? ((this.error = this.valueBlock.error), e)
                : (this.fromBuffer(this.valueBlock.valueHex),
                  this.idBlock.error.length === 0 &&
                    (this.blockLength += this.idBlock.blockLength),
                  this.lenBlock.error.length === 0 &&
                    (this.blockLength += this.lenBlock.blockLength),
                  this.valueBlock.error.length === 0 &&
                    (this.blockLength += this.valueBlock.blockLength),
                  e);
            }),
            (n.fromBuffer = function (t) {
              this.valueBlock.value = String.fromCharCode.apply(
                null,
                new Uint8Array(t),
              );
            }),
            (n.fromString = function (t) {
              var e = t.length;
              this.valueBlock.valueHex = new ArrayBuffer(e);
              for (
                var n = new Uint8Array(this.valueBlock.valueHex), r = 0;
                r < e;
                r++
              )
                n[r] = t.charCodeAt(r);
              this.valueBlock.value = t;
            }),
            (n.toString = function () {
              return (
                this.constructor.blockName() + " : " + this.valueBlock.value
              );
            }),
            t
          );
        })(p),
        z = (function (e) {
          function t(t) {
            var n;
            return (
              t === void 0 && (t = {}),
              (n = e.call(this, t) || this),
              (n.idBlock.tagClass = 1),
              (n.idBlock.tagNumber = 18),
              n
            );
          }
          return (
            babelHelpers.inheritsLoose(t, e),
            (t.blockName = function () {
              return "NumericString";
            }),
            t
          );
        })(G);
      s.NumericString = z;
      var j = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 19),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "PrintableString";
          }),
          t
        );
      })(G);
      s.PrintableString = j;
      var K = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 20),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "TeletexString";
          }),
          t
        );
      })(G);
      s.TeletexString = K;
      var Q = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 21),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "VideotexString";
          }),
          t
        );
      })(G);
      s.VideotexString = Q;
      var X = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 22),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "IA5String";
          }),
          t
        );
      })(G);
      s.IA5String = X;
      var Y = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 25),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "GraphicString";
          }),
          t
        );
      })(G);
      s.GraphicString = Y;
      var J = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 26),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "VisibleString";
          }),
          t
        );
      })(G);
      s.VisibleString = J;
      var Z = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 27),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "GeneralString";
          }),
          t
        );
      })(G);
      s.GeneralString = Z;
      var ee = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 29),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "CharacterString";
          }),
          t
        );
      })(G);
      s.CharacterString = ee;
      var te = (function (t) {
        function n(e) {
          var n;
          if (
            (e === void 0 && (e = {}),
            (n = t.call(this, e) || this),
            (n.year = 0),
            (n.month = 0),
            (n.day = 0),
            (n.hour = 0),
            (n.minute = 0),
            (n.second = 0),
            "value" in e)
          ) {
            (n.fromString(e.value),
              (n.valueBlock.valueHex = new ArrayBuffer(e.value.length)));
            for (
              var r = new Uint8Array(n.valueBlock.valueHex), o = 0;
              o < e.value.length;
              o++
            )
              r[o] = e.value.charCodeAt(o);
          }
          return (
            "valueDate" in e &&
              (n.fromDate(e.valueDate), (n.valueBlock.valueHex = n.toBuffer())),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 23),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.fromBER = function (t, n, r) {
            var e = this.valueBlock.fromBER(
              t,
              n,
              this.lenBlock.isIndefiniteForm === !0 ? r : this.lenBlock.length,
            );
            return e === -1
              ? ((this.error = this.valueBlock.error), e)
              : (this.fromBuffer(this.valueBlock.valueHex),
                this.idBlock.error.length === 0 &&
                  (this.blockLength += this.idBlock.blockLength),
                this.lenBlock.error.length === 0 &&
                  (this.blockLength += this.lenBlock.blockLength),
                this.valueBlock.error.length === 0 &&
                  (this.blockLength += this.valueBlock.blockLength),
                e);
          }),
          (r.fromBuffer = function (t) {
            this.fromString(String.fromCharCode.apply(null, new Uint8Array(t)));
          }),
          (r.toBuffer = function () {
            for (
              var e = this.toString(),
                t = new ArrayBuffer(e.length),
                n = new Uint8Array(t),
                r = 0;
              r < e.length;
              r++
            )
              n[r] = e.charCodeAt(r);
            return t;
          }),
          (r.fromDate = function (t) {
            ((this.year = t.getUTCFullYear()),
              (this.month = t.getUTCMonth() + 1),
              (this.day = t.getUTCDate()),
              (this.hour = t.getUTCHours()),
              (this.minute = t.getUTCMinutes()),
              (this.second = t.getUTCSeconds()));
          }),
          (r.toDate = function () {
            return new Date(
              Date.UTC(
                this.year,
                this.month - 1,
                this.day,
                this.hour,
                this.minute,
                this.second,
              ),
            );
          }),
          (r.fromString = function (t) {
            var e = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/gi,
              n = e.exec(t);
            if (n === null) {
              this.error = "Wrong input string for convertion";
              return;
            }
            var r = parseInt(n[1], 10);
            (r >= 50 ? (this.year = 1900 + r) : (this.year = 2e3 + r),
              (this.month = parseInt(n[2], 10)),
              (this.day = parseInt(n[3], 10)),
              (this.hour = parseInt(n[4], 10)),
              (this.minute = parseInt(n[5], 10)),
              (this.second = parseInt(n[6], 10)));
          }),
          (r.toString = function () {
            var t = new Array(7);
            return (
              (t[0] = (0, e.padNumber)(
                this.year < 2e3 ? this.year - 1900 : this.year - 2e3,
                2,
              )),
              (t[1] = (0, e.padNumber)(this.month, 2)),
              (t[2] = (0, e.padNumber)(this.day, 2)),
              (t[3] = (0, e.padNumber)(this.hour, 2)),
              (t[4] = (0, e.padNumber)(this.minute, 2)),
              (t[5] = (0, e.padNumber)(this.second, 2)),
              (t[6] = "Z"),
              t.join("")
            );
          }),
          (n.blockName = function () {
            return "UTCTime";
          }),
          (r.toJSON = function () {
            var e = {};
            try {
              e = t.prototype.toJSON.call(this);
            } catch (e) {}
            return (
              (e.year = this.year),
              (e.month = this.month),
              (e.day = this.day),
              (e.hour = this.hour),
              (e.minute = this.minute),
              (e.second = this.second),
              e
            );
          }),
          n
        );
      })(J);
      s.UTCTime = te;
      var ne = (function (t) {
        function n(e) {
          var n;
          if (
            (e === void 0 && (e = {}),
            (n = t.call(this, e) || this),
            (n.year = 0),
            (n.month = 0),
            (n.day = 0),
            (n.hour = 0),
            (n.minute = 0),
            (n.second = 0),
            (n.millisecond = 0),
            "value" in e)
          ) {
            (n.fromString(e.value),
              (n.valueBlock.valueHex = new ArrayBuffer(e.value.length)));
            for (
              var r = new Uint8Array(n.valueBlock.valueHex), o = 0;
              o < e.value.length;
              o++
            )
              r[o] = e.value.charCodeAt(o);
          }
          return (
            "valueDate" in e &&
              (n.fromDate(e.valueDate), (n.valueBlock.valueHex = n.toBuffer())),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 24),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.fromBER = function (t, n, r) {
            var e = this.valueBlock.fromBER(
              t,
              n,
              this.lenBlock.isIndefiniteForm === !0 ? r : this.lenBlock.length,
            );
            return e === -1
              ? ((this.error = this.valueBlock.error), e)
              : (this.fromBuffer(this.valueBlock.valueHex),
                this.idBlock.error.length === 0 &&
                  (this.blockLength += this.idBlock.blockLength),
                this.lenBlock.error.length === 0 &&
                  (this.blockLength += this.lenBlock.blockLength),
                this.valueBlock.error.length === 0 &&
                  (this.blockLength += this.valueBlock.blockLength),
                e);
          }),
          (r.fromBuffer = function (t) {
            this.fromString(String.fromCharCode.apply(null, new Uint8Array(t)));
          }),
          (r.toBuffer = function () {
            for (
              var e = this.toString(),
                t = new ArrayBuffer(e.length),
                n = new Uint8Array(t),
                r = 0;
              r < e.length;
              r++
            )
              n[r] = e.charCodeAt(r);
            return t;
          }),
          (r.fromDate = function (t) {
            ((this.year = t.getUTCFullYear()),
              (this.month = t.getUTCMonth() + 1),
              (this.day = t.getUTCDate()),
              (this.hour = t.getUTCHours()),
              (this.minute = t.getUTCMinutes()),
              (this.second = t.getUTCSeconds()),
              (this.millisecond = t.getUTCMilliseconds()));
          }),
          (r.toDate = function () {
            return new Date(
              Date.UTC(
                this.year,
                this.month - 1,
                this.day,
                this.hour,
                this.minute,
                this.second,
                this.millisecond,
              ),
            );
          }),
          (r.fromString = function (t) {
            var e = !1,
              n = "",
              r = "",
              o = 0,
              a,
              i = 0,
              l = 0;
            if (t[t.length - 1] === "Z")
              ((n = t.substr(0, t.length - 1)), (e = !0));
            else {
              var s = new Number(t[t.length - 1]);
              if (isNaN(s.valueOf()))
                throw new Error("Wrong input string for convertion");
              n = t;
            }
            if (e) {
              if (n.indexOf("+") !== -1)
                throw new Error("Wrong input string for convertion");
              if (n.indexOf("-") !== -1)
                throw new Error("Wrong input string for convertion");
            } else {
              var u = 1,
                c = n.indexOf("+"),
                d = "";
              if ((c === -1 && ((c = n.indexOf("-")), (u = -1)), c !== -1)) {
                if (
                  ((d = n.substr(c + 1)),
                  (n = n.substr(0, c)),
                  d.length !== 2 && d.length !== 4)
                )
                  throw new Error("Wrong input string for convertion");
                var m = new Number(d.substr(0, 2));
                if (isNaN(m.valueOf()))
                  throw new Error("Wrong input string for convertion");
                if (((i = u * m), d.length === 4)) {
                  if (((m = new Number(d.substr(2, 2))), isNaN(m.valueOf())))
                    throw new Error("Wrong input string for convertion");
                  l = u * m;
                }
              }
            }
            var p = n.indexOf(".");
            if ((p === -1 && (p = n.indexOf(",")), p !== -1)) {
              var _ = new Number("0" + n.substr(p));
              if (isNaN(_.valueOf()))
                throw new Error("Wrong input string for convertion");
              ((o = _.valueOf()), (r = n.substr(0, p)));
            } else r = n;
            switch (!0) {
              case r.length === 8:
                if (((a = /(\d{4})(\d{2})(\d{2})/gi), p !== -1))
                  throw new Error("Wrong input string for convertion");
                break;
              case r.length === 10:
                if (((a = /(\d{4})(\d{2})(\d{2})(\d{2})/gi), p !== -1)) {
                  var f = 60 * o;
                  ((this.minute = Math.floor(f)),
                    (f = 60 * (f - this.minute)),
                    (this.second = Math.floor(f)),
                    (f = 1e3 * (f - this.second)),
                    (this.millisecond = Math.floor(f)));
                }
                break;
              case r.length === 12:
                if (((a = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/gi), p !== -1)) {
                  var g = 60 * o;
                  ((this.second = Math.floor(g)),
                    (g = 1e3 * (g - this.second)),
                    (this.millisecond = Math.floor(g)));
                }
                break;
              case r.length === 14:
                if (
                  ((a = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gi),
                  p !== -1)
                ) {
                  var h = 1e3 * o;
                  this.millisecond = Math.floor(h);
                }
                break;
              default:
                throw new Error("Wrong input string for convertion");
            }
            var y = a.exec(r);
            if (y === null)
              throw new Error("Wrong input string for convertion");
            for (var C = 1; C < y.length; C++)
              switch (C) {
                case 1:
                  this.year = parseInt(y[C], 10);
                  break;
                case 2:
                  this.month = parseInt(y[C], 10);
                  break;
                case 3:
                  this.day = parseInt(y[C], 10);
                  break;
                case 4:
                  this.hour = parseInt(y[C], 10) + i;
                  break;
                case 5:
                  this.minute = parseInt(y[C], 10) + l;
                  break;
                case 6:
                  this.second = parseInt(y[C], 10);
                  break;
                default:
                  throw new Error("Wrong input string for convertion");
              }
            if (e === !1) {
              var b = new Date(
                this.year,
                this.month,
                this.day,
                this.hour,
                this.minute,
                this.second,
                this.millisecond,
              );
              ((this.year = b.getUTCFullYear()),
                (this.month = b.getUTCMonth()),
                (this.day = b.getUTCDay()),
                (this.hour = b.getUTCHours()),
                (this.minute = b.getUTCMinutes()),
                (this.second = b.getUTCSeconds()),
                (this.millisecond = b.getUTCMilliseconds()));
            }
          }),
          (r.toString = function () {
            var t = [];
            return (
              t.push((0, e.padNumber)(this.year, 4)),
              t.push((0, e.padNumber)(this.month, 2)),
              t.push((0, e.padNumber)(this.day, 2)),
              t.push((0, e.padNumber)(this.hour, 2)),
              t.push((0, e.padNumber)(this.minute, 2)),
              t.push((0, e.padNumber)(this.second, 2)),
              this.millisecond !== 0 &&
                (t.push("."), t.push((0, e.padNumber)(this.millisecond, 3))),
              t.push("Z"),
              t.join("")
            );
          }),
          (n.blockName = function () {
            return "GeneralizedTime";
          }),
          (r.toJSON = function () {
            var e = {};
            try {
              e = t.prototype.toJSON.call(this);
            } catch (e) {}
            return (
              (e.year = this.year),
              (e.month = this.month),
              (e.day = this.day),
              (e.hour = this.hour),
              (e.minute = this.minute),
              (e.second = this.second),
              (e.millisecond = this.millisecond),
              e
            );
          }),
          n
        );
      })(J);
      s.GeneralizedTime = ne;
      var re = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 31),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "DATE";
          }),
          t
        );
      })(A);
      s.DATE = re;
      var oe = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 32),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "TimeOfDay";
          }),
          t
        );
      })(A);
      s.TimeOfDay = oe;
      var ae = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 33),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "DateTime";
          }),
          t
        );
      })(A);
      s.DateTime = ae;
      var ie = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 34),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "Duration";
          }),
          t
        );
      })(A);
      s.Duration = ie;
      var le = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = {}),
            (n = e.call(this, t) || this),
            (n.idBlock.tagClass = 1),
            (n.idBlock.tagNumber = 14),
            n
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.blockName = function () {
            return "TIME";
          }),
          t
        );
      })(A);
      s.TIME = le;
      var se = function (n) {
        (n === void 0 && (n = {}),
          (this.value = (0, e.getParametersValue)(n, "value", [])),
          (this.optional = (0, e.getParametersValue)(n, "optional", !1)));
      };
      s.Choice = se;
      var ue = function (n) {
        (n === void 0 && (n = {}),
          (this.name = (0, e.getParametersValue)(n, "name", "")),
          (this.optional = (0, e.getParametersValue)(n, "optional", !1)));
      };
      s.Any = ue;
      var ce = function (n) {
        (n === void 0 && (n = {}),
          (this.name = (0, e.getParametersValue)(n, "name", "")),
          (this.optional = (0, e.getParametersValue)(n, "optional", !1)),
          (this.value = (0, e.getParametersValue)(n, "value", new ue())),
          (this.local = (0, e.getParametersValue)(n, "local", !1)));
      };
      s.Repeated = ce;
      var de = (function () {
        function t(t) {
          (t === void 0 && (t = {}),
            (this.data = (0, e.getParametersValue)(
              t,
              "data",
              new ArrayBuffer(0),
            )));
        }
        var n = t.prototype;
        return (
          (n.fromBER = function (t, n, r) {
            return ((this.data = t.slice(n, r)), n + r);
          }),
          (n.toBER = function (t) {
            return (t === void 0 && (t = !1), this.data);
          }),
          t
        );
      })();
      s.RawData = de;
      function me(t, n, r) {
        var o = n;
        function a(e, t) {
          if (e instanceof t) return e;
          var n = new t();
          return (
            (n.idBlock = e.idBlock),
            (n.lenBlock = e.lenBlock),
            (n.warnings = e.warnings),
            (n.valueBeforeDecode = e.valueBeforeDecode.slice(0)),
            n
          );
        }
        var l = new p({}, Object),
          s = new i();
        if ((0, e.checkBufferParams)(s, t, n, r) === !1)
          return ((l.error = s.error), { offset: -1, result: l });
        var u = new Uint8Array(t, n, r);
        if (u.length === 0)
          return ((l.error = "Zero buffer length"), { offset: -1, result: l });
        var c = l.idBlock.fromBER(t, n, r);
        if ((l.warnings.concat(l.idBlock.warnings), c === -1))
          return ((l.error = l.idBlock.error), { offset: -1, result: l });
        if (
          ((n = c),
          (r -= l.idBlock.blockLength),
          (c = l.lenBlock.fromBER(t, n, r)),
          l.warnings.concat(l.lenBlock.warnings),
          c === -1)
        )
          return ((l.error = l.lenBlock.error), { offset: -1, result: l });
        if (
          ((n = c),
          (r -= l.lenBlock.blockLength),
          l.idBlock.isConstructed === !1 && l.lenBlock.isIndefiniteForm === !0)
        )
          return (
            (l.error =
              "Indefinite length form used for primitive encoding form"),
            { offset: -1, result: l }
          );
        var d = p;
        switch (l.idBlock.tagClass) {
          case 1:
            if (l.idBlock.tagNumber >= 37 && l.idBlock.isHexOnly === !1)
              return (
                (l.error =
                  "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard"),
                { offset: -1, result: l }
              );
            switch (l.idBlock.tagNumber) {
              case 0:
                if (l.idBlock.isConstructed === !0 && l.lenBlock.length > 0)
                  return (
                    (l.error = "Type [UNIVERSAL 0] is reserved"),
                    { offset: -1, result: l }
                  );
                d = C;
                break;
              case 1:
                d = v;
                break;
              case 2:
                d = x;
                break;
              case 3:
                d = T;
                break;
              case 4:
                d = k;
                break;
              case 5:
                d = L;
                break;
              case 6:
                d = M;
                break;
              case 10:
                d = $;
                break;
              case 12:
                d = A;
                break;
              case 13:
                d = B;
                break;
              case 14:
                d = le;
                break;
              case 15:
                return (
                  (l.error = "[UNIVERSAL 15] is reserved by ASN.1 standard"),
                  { offset: -1, result: l }
                );
              case 16:
                d = S;
                break;
              case 17:
                d = R;
                break;
              case 18:
                d = z;
                break;
              case 19:
                d = j;
                break;
              case 20:
                d = K;
                break;
              case 21:
                d = Q;
                break;
              case 22:
                d = X;
                break;
              case 23:
                d = te;
                break;
              case 24:
                d = ne;
                break;
              case 25:
                d = Y;
                break;
              case 26:
                d = J;
                break;
              case 27:
                d = Z;
                break;
              case 28:
                d = V;
                break;
              case 29:
                d = ee;
                break;
              case 30:
                d = q;
                break;
              case 31:
                d = re;
                break;
              case 32:
                d = oe;
                break;
              case 33:
                d = ae;
                break;
              case 34:
                d = ie;
                break;
              default: {
                var m;
                (l.idBlock.isConstructed === !0 ? (m = new h()) : (m = new f()),
                  (m.idBlock = l.idBlock),
                  (m.lenBlock = l.lenBlock),
                  (m.warnings = l.warnings),
                  (l = m));
              }
            }
            break;
          case 2:
          case 3:
          case 4:
          default:
            l.idBlock.isConstructed === !0 ? (d = h) : (d = f);
        }
        return (
          (l = a(l, d)),
          (c = l.fromBER(
            t,
            n,
            l.lenBlock.isIndefiniteForm === !0 ? r : l.lenBlock.length,
          )),
          (l.valueBeforeDecode = t.slice(o, o + l.blockLength)),
          { offset: c, result: l }
        );
      }
      function pe(e) {
        if (e.byteLength === 0) {
          var t = new p({}, Object);
          return (
            (t.error = "Input buffer has zero length"),
            { offset: -1, result: t }
          );
        }
        return me(e, 0, e.byteLength);
      }
      function _e(e, t, n) {
        if (n instanceof se) {
          for (var r = !1, o = 0; o < n.value.length; o++) {
            var a = _e(e, t, n.value[o]);
            if (a.verified === !0) return { verified: !0, result: e };
          }
          var i = {
            verified: !1,
            result: { error: "Wrong values for Choice type" },
          };
          return (
            Object.prototype.hasOwnProperty.call(n, "name") &&
              (i.name = n.name),
            i
          );
        }
        if (n instanceof ue)
          return (
            Object.prototype.hasOwnProperty.call(n, "name") && (e[n.name] = t),
            { verified: !0, result: e }
          );
        if (!(e instanceof Object))
          return { verified: !1, result: { error: "Wrong root object" } };
        if (!(t instanceof Object))
          return { verified: !1, result: { error: "Wrong ASN.1 data" } };
        if (!(n instanceof Object))
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (!("idBlock" in n))
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (!("fromBER" in n.idBlock))
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (!("toBER" in n.idBlock))
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        var l = n.idBlock.toBER(!1);
        if (l.byteLength === 0)
          return {
            verified: !1,
            result: { error: "Error encoding idBlock for ASN.1 schema" },
          };
        var s = n.idBlock.fromBER(l, 0, l.byteLength);
        if (s === -1)
          return {
            verified: !1,
            result: { error: "Error decoding idBlock for ASN.1 schema" },
          };
        if (Object.prototype.hasOwnProperty.call(n.idBlock, "tagClass") === !1)
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (n.idBlock.tagClass !== t.idBlock.tagClass)
          return { verified: !1, result: e };
        if (Object.prototype.hasOwnProperty.call(n.idBlock, "tagNumber") === !1)
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (n.idBlock.tagNumber !== t.idBlock.tagNumber)
          return { verified: !1, result: e };
        if (
          Object.prototype.hasOwnProperty.call(n.idBlock, "isConstructed") ===
          !1
        )
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (n.idBlock.isConstructed !== t.idBlock.isConstructed)
          return { verified: !1, result: e };
        if (!("isHexOnly" in n.idBlock))
          return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (n.idBlock.isHexOnly !== t.idBlock.isHexOnly)
          return { verified: !1, result: e };
        if (n.idBlock.isHexOnly === !0) {
          if (!("valueHex" in n.idBlock))
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
          var u = new Uint8Array(n.idBlock.valueHex),
            c = new Uint8Array(t.idBlock.valueHex);
          if (u.length !== c.length) return { verified: !1, result: e };
          for (var d = 0; d < u.length; d++)
            if (u[d] !== c[1]) return { verified: !1, result: e };
        }
        if (
          (Object.prototype.hasOwnProperty.call(n, "name") &&
            ((n.name = n.name.replace(/^\s+|\s+$/g, "")),
            n.name !== "" && (e[n.name] = t)),
          n.idBlock.isConstructed === !0)
        ) {
          var m = 0,
            p = { verified: !1 },
            _ = n.valueBlock.value.length;
          if (
            (_ > 0 &&
              n.valueBlock.value[0] instanceof ce &&
              (_ = t.valueBlock.value.length),
            _ === 0)
          )
            return { verified: !0, result: e };
          if (
            t.valueBlock.value.length === 0 &&
            n.valueBlock.value.length !== 0
          ) {
            for (var f = !0, g = 0; g < n.valueBlock.value.length; g++)
              f = f && (n.valueBlock.value[g].optional || !1);
            return f === !0
              ? { verified: !0, result: e }
              : (Object.prototype.hasOwnProperty.call(n, "name") &&
                  ((n.name = n.name.replace(/^\s+|\s+$/g, "")),
                  n.name !== "" && delete e[n.name]),
                (e.error = "Inconsistent object length"),
                { verified: !1, result: e });
          }
          for (var h = 0; h < _; h++)
            if (h - m >= t.valueBlock.value.length) {
              if (n.valueBlock.value[h].optional === !1) {
                var y = { verified: !1, result: e };
                return (
                  (e.error =
                    "Inconsistent length between ASN.1 data and schema"),
                  Object.prototype.hasOwnProperty.call(n, "name") &&
                    ((n.name = n.name.replace(/^\s+|\s+$/g, "")),
                    n.name !== "" && (delete e[n.name], (y.name = n.name))),
                  y
                );
              }
            } else if (n.valueBlock.value[0] instanceof ce) {
              if (
                ((p = _e(
                  e,
                  t.valueBlock.value[h],
                  n.valueBlock.value[0].value,
                )),
                p.verified === !1)
              )
                if (n.valueBlock.value[0].optional === !0) m++;
                else
                  return (
                    Object.prototype.hasOwnProperty.call(n, "name") &&
                      ((n.name = n.name.replace(/^\s+|\s+$/g, "")),
                      n.name !== "" && delete e[n.name]),
                    p
                  );
              if (
                "name" in n.valueBlock.value[0] &&
                n.valueBlock.value[0].name.length > 0
              ) {
                var C = {};
                ("local" in n.valueBlock.value[0] &&
                n.valueBlock.value[0].local === !0
                  ? (C = t)
                  : (C = e),
                  typeof C[n.valueBlock.value[0].name] == "undefined" &&
                    (C[n.valueBlock.value[0].name] = []),
                  C[n.valueBlock.value[0].name].push(t.valueBlock.value[h]));
              }
            } else if (
              ((p = _e(e, t.valueBlock.value[h - m], n.valueBlock.value[h])),
              p.verified === !1)
            )
              if (n.valueBlock.value[h].optional === !0) m++;
              else
                return (
                  Object.prototype.hasOwnProperty.call(n, "name") &&
                    ((n.name = n.name.replace(/^\s+|\s+$/g, "")),
                    n.name !== "" && delete e[n.name]),
                  p
                );
          if (p.verified === !1) {
            var b = { verified: !1, result: e };
            return (
              Object.prototype.hasOwnProperty.call(n, "name") &&
                ((n.name = n.name.replace(/^\s+|\s+$/g, "")),
                n.name !== "" && (delete e[n.name], (b.name = n.name))),
              b
            );
          }
          return { verified: !0, result: e };
        }
        if ("primitiveSchema" in n && "valueHex" in t.valueBlock) {
          var v = pe(t.valueBlock.valueHex);
          if (v.offset === -1) {
            var S = { verified: !1, result: v.result };
            return (
              Object.prototype.hasOwnProperty.call(n, "name") &&
                ((n.name = n.name.replace(/^\s+|\s+$/g, "")),
                n.name !== "" && (delete e[n.name], (S.name = n.name))),
              S
            );
          }
          return _e(e, v.result, n.primitiveSchema);
        }
        return { verified: !0, result: e };
      }
      function fe(e, t) {
        if (!(t instanceof Object))
          return { verified: !1, result: { error: "Wrong ASN.1 schema type" } };
        var n = pe(e);
        return n.offset === -1
          ? { verified: !1, result: n.result }
          : _e(n.result, n.result, t);
      }
      function ge(e) {}
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
