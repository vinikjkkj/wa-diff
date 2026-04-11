__d(
  "jsbi",
  [],
  function (t, n, r, o, a, i) {
    (function (e, t) {
      typeof i == "object" && typeof a != "undefined"
        ? (a.exports = t())
        : typeof define == "function" && define.amd
          ? define(t)
          : (e.JSBI = t());
    })(this, function () {
      "use strict";
      function e(t) {
        return (
          (e =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          e(t)
        );
      }
      function t(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        for (var n, r = 0; r < t.length; r++)
          ((n = t[r]),
            (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n));
      }
      function r(e, t, r) {
        return (t && n(e.prototype, t), r && n(e, r), e);
      }
      function o(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && i(e, t));
      }
      function a(e) {
        return (
          (a = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          a(e)
        );
      }
      function i(e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            function (e, t) {
              return ((e.__proto__ = t), e);
            }),
          i(e, t)
        );
      }
      function l() {
        if (
          typeof Reflect == "undefined" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function s() {
        return (
          (s = l()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = Function.bind.apply(e, r),
                  a = new o();
                return (n && i(a, n.prototype), a);
              }),
          s.apply(null, arguments)
        );
      }
      function u(e) {
        return Function.toString.call(e).indexOf("[native code]") !== -1;
      }
      function c(e) {
        var t = typeof Map == "function" ? new Map() : void 0;
        return (
          (c = function (e) {
            function n() {
              return s(e, arguments, a(this).constructor);
            }
            if (e === null || !u(e)) return e;
            if (typeof e != "function")
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (typeof t != "undefined") {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              i(n, e)
            );
          }),
          c(e)
        );
      }
      function d(e) {
        if (e === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function m(e, t) {
        return t && (typeof t == "object" || typeof t == "function") ? t : d(e);
      }
      var p = (function (n) {
        var i = Math.abs,
          l = Math.max,
          s = Math.imul,
          u = Math.clz32;
        function c(e, n) {
          var r;
          if ((t(this, c), e > c.__kMaxLength))
            throw new RangeError("Maximum BigInt size exceeded");
          return ((r = m(this, a(c).call(this, e))), (r.sign = n), r);
        }
        return (
          o(c, n),
          r(
            c,
            [
              {
                key: "toDebugString",
                value: function () {
                  var e = ["BigInt["],
                    t = !0,
                    n = !1,
                    r = void 0;
                  try {
                    for (
                      var o, a, i = this[Symbol.iterator]();
                      !(t = (o = i.next()).done);
                      t = !0
                    )
                      ((a = o.value),
                        e.push((a && (a >>> 0).toString(16)) + ", "));
                  } catch (e) {
                    ((n = !0), (r = e));
                  } finally {
                    try {
                      t || i.return == null || i.return();
                    } finally {
                      if (n) throw r;
                    }
                  }
                  return (e.push("]"), e.join(""));
                },
              },
              {
                key: "toString",
                value: function () {
                  var e =
                    0 < arguments.length && arguments[0] !== void 0
                      ? arguments[0]
                      : 10;
                  if (2 > e || 36 < e)
                    throw new RangeError(
                      "toString() radix argument must be between 2 and 36",
                    );
                  return this.length === 0
                    ? "0"
                    : (e & (e - 1)) == 0
                      ? c.__toStringBasePowerOfTwo(this, e)
                      : c.__toStringGeneric(this, e, !1);
                },
              },
              {
                key: "__copy",
                value: function () {
                  for (
                    var e = new c(this.length, this.sign), t = 0;
                    t < this.length;
                    t++
                  )
                    e[t] = this[t];
                  return e;
                },
              },
              {
                key: "__trim",
                value: function () {
                  for (var e = this.length, t = this[e - 1]; t === 0; )
                    (e--, (t = this[e - 1]), this.pop());
                  return (e === 0 && (this.sign = !1), this);
                },
              },
              {
                key: "__initializeDigits",
                value: function () {
                  for (var e = 0; e < this.length; e++) this[e] = 0;
                },
              },
              {
                key: "__clzmsd",
                value: function () {
                  return u(this[this.length - 1]);
                },
              },
              {
                key: "__inplaceMultiplyAdd",
                value: function (e, t, n) {
                  n > this.length && (n = this.length);
                  for (
                    var r = 65535 & e,
                      o = e >>> 16,
                      a = 0,
                      i = 65535 & t,
                      l = t >>> 16,
                      u = 0;
                    u < n;
                    u++
                  ) {
                    var c = this.__digit(u),
                      d = 65535 & c,
                      m = c >>> 16,
                      p = s(d, r),
                      _ = s(d, o),
                      f = s(m, r),
                      g = s(m, o),
                      h = i + (65535 & p),
                      y =
                        l +
                        a +
                        (h >>> 16) +
                        (p >>> 16) +
                        (65535 & _) +
                        (65535 & f);
                    ((i = (_ >>> 16) + (f >>> 16) + (65535 & g) + (y >>> 16)),
                      (a = i >>> 16),
                      (i &= 65535),
                      (l = g >>> 16),
                      this.__setDigit(u, (65535 & h) | (y << 16)));
                  }
                  if (a !== 0 || i !== 0 || l !== 0)
                    throw new Error("implementation bug");
                },
              },
              {
                key: "__inplaceAdd",
                value: function (e, t, n) {
                  for (var r, o = 0, a = 0; a < n; a++)
                    ((r = this.__halfDigit(t + a) + e.__halfDigit(a) + o),
                      (o = r >>> 16),
                      this.__setHalfDigit(t + a, r));
                  return o;
                },
              },
              {
                key: "__inplaceSub",
                value: function (e, t, n) {
                  var r = 0;
                  if (1 & t) {
                    t >>= 1;
                    for (
                      var o = this.__digit(t), a = 65535 & o, i = 0;
                      i < (n - 1) >>> 1;
                      i++
                    ) {
                      var l = e.__digit(i),
                        s = (o >>> 16) - (65535 & l) - r;
                      ((r = 1 & (s >>> 16)),
                        this.__setDigit(t + i, (s << 16) | (65535 & a)),
                        (o = this.__digit(t + i + 1)),
                        (a = (65535 & o) - (l >>> 16) - r),
                        (r = 1 & (a >>> 16)));
                    }
                    var u = e.__digit(i),
                      c = (o >>> 16) - (65535 & u) - r;
                    if (
                      ((r = 1 & (c >>> 16)),
                      this.__setDigit(t + i, (c << 16) | (65535 & a)),
                      t + i + 1 >= this.length)
                    )
                      throw new RangeError("out of bounds");
                    (1 & n) == 0 &&
                      ((o = this.__digit(t + i + 1)),
                      (a = (65535 & o) - (u >>> 16) - r),
                      (r = 1 & (a >>> 16)),
                      this.__setDigit(
                        t + e.length,
                        (4294901760 & o) | (65535 & a),
                      ));
                  } else {
                    t >>= 1;
                    for (var d = 0; d < e.length - 1; d++) {
                      var m = this.__digit(t + d),
                        p = e.__digit(d),
                        _ = (65535 & m) - (65535 & p) - r;
                      r = 1 & (_ >>> 16);
                      var f = (m >>> 16) - (p >>> 16) - r;
                      ((r = 1 & (f >>> 16)),
                        this.__setDigit(t + d, (f << 16) | (65535 & _)));
                    }
                    var g = this.__digit(t + d),
                      h = e.__digit(d),
                      y = (65535 & g) - (65535 & h) - r;
                    r = 1 & (y >>> 16);
                    var C = 0;
                    ((1 & n) == 0 &&
                      ((C = (g >>> 16) - (h >>> 16) - r), (r = 1 & (C >>> 16))),
                      this.__setDigit(t + d, (C << 16) | (65535 & y)));
                  }
                  return r;
                },
              },
              {
                key: "__inplaceRightShift",
                value: function (e) {
                  if (e !== 0) {
                    for (
                      var t,
                        n = this.__digit(0) >>> e,
                        r = this.length - 1,
                        o = 0;
                      o < r;
                      o++
                    )
                      ((t = this.__digit(o + 1)),
                        this.__setDigit(o, (t << (32 - e)) | n),
                        (n = t >>> e));
                    this.__setDigit(r, n);
                  }
                },
              },
              {
                key: "__digit",
                value: function (e) {
                  return this[e];
                },
              },
              {
                key: "__unsignedDigit",
                value: function (e) {
                  return this[e] >>> 0;
                },
              },
              {
                key: "__setDigit",
                value: function (e, t) {
                  this[e] = 0 | t;
                },
              },
              {
                key: "__setDigitGrow",
                value: function (e, t) {
                  this[e] = 0 | t;
                },
              },
              {
                key: "__halfDigitLength",
                value: function () {
                  var e = this.length;
                  return 65535 >= this.__unsignedDigit(e - 1)
                    ? 2 * e - 1
                    : 2 * e;
                },
              },
              {
                key: "__halfDigit",
                value: function (e) {
                  return 65535 & (this[e >>> 1] >>> ((1 & e) << 4));
                },
              },
              {
                key: "__setHalfDigit",
                value: function (e, t) {
                  var n = e >>> 1,
                    r = this.__digit(n),
                    o =
                      1 & e
                        ? (65535 & r) | (t << 16)
                        : (4294901760 & r) | (65535 & t);
                  this.__setDigit(n, o);
                },
              },
            ],
            [
              {
                key: "BigInt",
                value: function (t) {
                  var n = Math.floor,
                    r = Number.isFinite;
                  if (typeof t == "number") {
                    if (t === 0) return c.__zero();
                    if ((0 | t) === t)
                      return 0 > t ? c.__oneDigit(-t, !0) : c.__oneDigit(t, !1);
                    if (!r(t) || n(t) !== t)
                      throw new RangeError(
                        "The number " +
                          t +
                          " cannot be converted to BigInt because it is not an integer",
                      );
                    return c.__fromDouble(t);
                  }
                  if (typeof t == "string") {
                    var o = c.__fromString(t);
                    if (o === null)
                      throw new SyntaxError(
                        "Cannot convert " + t + " to a BigInt",
                      );
                    return o;
                  }
                  if (typeof t == "boolean")
                    return t === !0 ? c.__oneDigit(1, !1) : c.__zero();
                  if (e(t) === "object") {
                    if (t.constructor === c) return t;
                    var a = c.__toPrimitive(t);
                    return c.BigInt(a);
                  }
                  throw new TypeError("Cannot convert " + t + " to a BigInt");
                },
              },
              {
                key: "toNumber",
                value: function (e) {
                  var t = e.length;
                  if (t === 0) return 0;
                  if (t === 1) {
                    var n = e.__unsignedDigit(0);
                    return e.sign ? -n : n;
                  }
                  var r = e.__digit(t - 1),
                    o = u(r),
                    a = 32 * t - o;
                  if (1024 < a) return e.sign ? -1 / 0 : 1 / 0;
                  var i = a - 1,
                    l = r,
                    s = t - 1,
                    d = o + 1,
                    m = d === 32 ? 0 : l << d;
                  m >>>= 12;
                  var p = d - 12,
                    _ = 12 <= d ? 0 : l << (20 + d),
                    f = 20 + d;
                  (0 < p &&
                    0 < s &&
                    (s--,
                    (l = e.__digit(s)),
                    (m |= l >>> (32 - p)),
                    (_ = l << p),
                    (f = p)),
                    0 < f &&
                      0 < s &&
                      (s--,
                      (l = e.__digit(s)),
                      (_ |= l >>> (32 - f)),
                      (f -= 32)));
                  var g = c.__decideRounding(e, f, s, l);
                  if (
                    (g === 1 || (g === 0 && (1 & _) == 1)) &&
                    ((_ = (_ + 1) >>> 0),
                    _ === 0 && (m++, m >>> 20 != 0 && ((m = 0), i++, 1023 < i)))
                  )
                    return e.sign ? -1 / 0 : 1 / 0;
                  var h = e.sign ? -2147483648 : 0;
                  return (
                    (i = (i + 1023) << 20),
                    (c.__kBitConversionInts[1] = h | i | m),
                    (c.__kBitConversionInts[0] = _),
                    c.__kBitConversionDouble[0]
                  );
                },
              },
              {
                key: "unaryMinus",
                value: function (e) {
                  if (e.length === 0) return e;
                  var t = e.__copy();
                  return ((t.sign = !e.sign), t);
                },
              },
              {
                key: "bitwiseNot",
                value: function (e) {
                  return e.sign
                    ? c.__absoluteSubOne(e).__trim()
                    : c.__absoluteAddOne(e, !0);
                },
              },
              {
                key: "exponentiate",
                value: function (e, t) {
                  if (t.sign) throw new RangeError("Exponent must be positive");
                  if (t.length === 0) return c.__oneDigit(1, !1);
                  if (e.length === 0) return e;
                  if (e.length === 1 && e.__digit(0) === 1)
                    return e.sign && (1 & t.__digit(0)) == 0
                      ? c.unaryMinus(e)
                      : e;
                  if (1 < t.length) throw new RangeError("BigInt too big");
                  var n = t.__unsignedDigit(0);
                  if (n === 1) return e;
                  if (n >= c.__kMaxLengthBits)
                    throw new RangeError("BigInt too big");
                  if (e.length === 1 && e.__digit(0) === 2) {
                    var r = 1 + (n >>> 5),
                      o = e.sign && (1 & n) != 0,
                      a = new c(r, o);
                    a.__initializeDigits();
                    var i = 1 << (31 & n);
                    return (a.__setDigit(r - 1, i), a);
                  }
                  var l = null,
                    s = e;
                  for ((1 & n) != 0 && (l = e), n >>= 1; n !== 0; n >>= 1)
                    ((s = c.multiply(s, s)),
                      (1 & n) != 0 &&
                        (l === null ? (l = s) : (l = c.multiply(l, s))));
                  return l;
                },
              },
              {
                key: "multiply",
                value: function (e, t) {
                  if (e.length === 0) return e;
                  if (t.length === 0) return t;
                  var n = e.length + t.length;
                  32 <= e.__clzmsd() + t.__clzmsd() && n--;
                  var r = new c(n, e.sign !== t.sign);
                  r.__initializeDigits();
                  for (var o = 0; o < e.length; o++)
                    c.__multiplyAccumulate(t, e.__digit(o), r, o);
                  return r.__trim();
                },
              },
              {
                key: "divide",
                value: function (e, t) {
                  if (t.length === 0) throw new RangeError("Division by zero");
                  if (0 > c.__absoluteCompare(e, t)) return c.__zero();
                  var n,
                    r = e.sign !== t.sign,
                    o = t.__unsignedDigit(0);
                  if (t.length === 1 && 65535 >= o) {
                    if (o === 1) return r === e.sign ? e : c.unaryMinus(e);
                    n = c.__absoluteDivSmall(e, o, null);
                  } else n = c.__absoluteDivLarge(e, t, !0, !1);
                  return ((n.sign = r), n.__trim());
                },
              },
              {
                key: "remainder",
                value: function (t, n) {
                  if (n.length === 0) throw new RangeError("Division by zero");
                  if (0 > c.__absoluteCompare(t, n)) return t;
                  var e = n.__unsignedDigit(0);
                  if (n.length === 1 && 65535 >= e) {
                    if (e === 1) return c.__zero();
                    var r = c.__absoluteModSmall(t, e);
                    return r === 0 ? c.__zero() : c.__oneDigit(r, t.sign);
                  }
                  var o = c.__absoluteDivLarge(t, n, !1, !0);
                  return ((o.sign = t.sign), o.__trim());
                },
              },
              {
                key: "add",
                value: function (e, t) {
                  var n = e.sign;
                  return n === t.sign
                    ? c.__absoluteAdd(e, t, n)
                    : 0 <= c.__absoluteCompare(e, t)
                      ? c.__absoluteSub(e, t, n)
                      : c.__absoluteSub(t, e, !n);
                },
              },
              {
                key: "subtract",
                value: function (e, t) {
                  var n = e.sign;
                  return n === t.sign
                    ? 0 <= c.__absoluteCompare(e, t)
                      ? c.__absoluteSub(e, t, n)
                      : c.__absoluteSub(t, e, !n)
                    : c.__absoluteAdd(e, t, n);
                },
              },
              {
                key: "leftShift",
                value: function (e, t) {
                  return t.length === 0 || e.length === 0
                    ? e
                    : t.sign
                      ? c.__rightShiftByAbsolute(e, t)
                      : c.__leftShiftByAbsolute(e, t);
                },
              },
              {
                key: "signedRightShift",
                value: function (e, t) {
                  return t.length === 0 || e.length === 0
                    ? e
                    : t.sign
                      ? c.__leftShiftByAbsolute(e, t)
                      : c.__rightShiftByAbsolute(e, t);
                },
              },
              {
                key: "unsignedRightShift",
                value: function () {
                  throw new TypeError(
                    "BigInts have no unsigned right shift; use >> instead",
                  );
                },
              },
              {
                key: "lessThan",
                value: function (e, t) {
                  return 0 > c.__compareToBigInt(e, t);
                },
              },
              {
                key: "lessThanOrEqual",
                value: function (e, t) {
                  return 0 >= c.__compareToBigInt(e, t);
                },
              },
              {
                key: "greaterThan",
                value: function (e, t) {
                  return 0 < c.__compareToBigInt(e, t);
                },
              },
              {
                key: "greaterThanOrEqual",
                value: function (e, t) {
                  return 0 <= c.__compareToBigInt(e, t);
                },
              },
              {
                key: "equal",
                value: function (e, t) {
                  if (e.sign !== t.sign || e.length !== t.length) return !1;
                  for (var n = 0; n < e.length; n++)
                    if (e.__digit(n) !== t.__digit(n)) return !1;
                  return !0;
                },
              },
              {
                key: "notEqual",
                value: function (e, t) {
                  return !c.equal(e, t);
                },
              },
              {
                key: "bitwiseAnd",
                value: function (e, t) {
                  if (!e.sign && !t.sign) return c.__absoluteAnd(e, t).__trim();
                  if (e.sign && t.sign) {
                    var n = l(e.length, t.length) + 1,
                      r = c.__absoluteSubOne(e, n),
                      o = c.__absoluteSubOne(t);
                    return (
                      (r = c.__absoluteOr(r, o, r)),
                      c.__absoluteAddOne(r, !0, r).__trim()
                    );
                  }
                  if (e.sign) {
                    var a = [t, e];
                    ((e = a[0]), (t = a[1]));
                  }
                  return c.__absoluteAndNot(e, c.__absoluteSubOne(t)).__trim();
                },
              },
              {
                key: "bitwiseXor",
                value: function (e, t) {
                  if (!e.sign && !t.sign) return c.__absoluteXor(e, t).__trim();
                  if (e.sign && t.sign) {
                    var n = l(e.length, t.length),
                      r = c.__absoluteSubOne(e, n),
                      o = c.__absoluteSubOne(t);
                    return c.__absoluteXor(r, o, r).__trim();
                  }
                  var a = l(e.length, t.length) + 1;
                  if (e.sign) {
                    var i = [t, e];
                    ((e = i[0]), (t = i[1]));
                  }
                  var s = c.__absoluteSubOne(t, a);
                  return (
                    (s = c.__absoluteXor(s, e, s)),
                    c.__absoluteAddOne(s, !0, s).__trim()
                  );
                },
              },
              {
                key: "bitwiseOr",
                value: function (e, t) {
                  var n = l(e.length, t.length);
                  if (!e.sign && !t.sign) return c.__absoluteOr(e, t).__trim();
                  if (e.sign && t.sign) {
                    var r = c.__absoluteSubOne(e, n),
                      o = c.__absoluteSubOne(t);
                    return (
                      (r = c.__absoluteAnd(r, o, r)),
                      c.__absoluteAddOne(r, !0, r).__trim()
                    );
                  }
                  if (e.sign) {
                    var a = [t, e];
                    ((e = a[0]), (t = a[1]));
                  }
                  var i = c.__absoluteSubOne(t, n);
                  return (
                    (i = c.__absoluteAndNot(i, e, i)),
                    c.__absoluteAddOne(i, !0, i).__trim()
                  );
                },
              },
              {
                key: "asIntN",
                value: function (e, t) {
                  if (t.length === 0) return t;
                  if (e === 0) return c.__zero();
                  if (e >= c.__kMaxLengthBits) return t;
                  var n = (e + 31) >>> 5;
                  if (t.length < n) return t;
                  var r = t.__unsignedDigit(n - 1),
                    o = 1 << (31 & (e - 1));
                  if (t.length === n && r < o) return t;
                  if ((r & o) !== o) return c.__truncateToNBits(e, t);
                  if (!t.sign)
                    return c.__truncateAndSubFromPowerOfTwo(e, t, !0);
                  if ((r & (o - 1)) == 0) {
                    for (var a = n - 2; 0 <= a; a--)
                      if (t.__digit(a) !== 0)
                        return c.__truncateAndSubFromPowerOfTwo(e, t, !1);
                    return t.length === n && r === o
                      ? t
                      : c.__truncateToNBits(e, t);
                  }
                  return c.__truncateAndSubFromPowerOfTwo(e, t, !1);
                },
              },
              {
                key: "asUintN",
                value: function (e, t) {
                  if (t.length === 0) return t;
                  if (e === 0) return c.__zero();
                  if (t.sign) {
                    if (e > c.__kMaxLengthBits)
                      throw new RangeError("BigInt too big");
                    return c.__truncateAndSubFromPowerOfTwo(e, t, !1);
                  }
                  if (e >= c.__kMaxLengthBits) return t;
                  var n = (e + 31) >>> 5;
                  if (t.length < n) return t;
                  var r = 31 & e;
                  if (t.length == n) {
                    if (r == 0) return t;
                    var o = t.__digit(n - 1);
                    if (!(o >>> r)) return t;
                  }
                  return c.__truncateToNBits(e, t);
                },
              },
              {
                key: "ADD",
                value: function (e, t) {
                  if (
                    ((e = c.__toPrimitive(e)),
                    (t = c.__toPrimitive(t)),
                    typeof e == "string")
                  )
                    return (typeof t != "string" && (t = t.toString()), e + t);
                  if (typeof t == "string") return e.toString() + t;
                  if (
                    ((e = c.__toNumeric(e)),
                    (t = c.__toNumeric(t)),
                    c.__isBigInt(e) && c.__isBigInt(t))
                  )
                    return c.add(e, t);
                  if (typeof e == "number" && typeof t == "number")
                    return e + t;
                  throw new TypeError(
                    "Cannot mix BigInt and other types, use explicit conversions",
                  );
                },
              },
              {
                key: "LT",
                value: function (e, t) {
                  return c.__compare(e, t, 0);
                },
              },
              {
                key: "LE",
                value: function (e, t) {
                  return c.__compare(e, t, 1);
                },
              },
              {
                key: "GT",
                value: function (e, t) {
                  return c.__compare(e, t, 2);
                },
              },
              {
                key: "GE",
                value: function (e, t) {
                  return c.__compare(e, t, 3);
                },
              },
              {
                key: "EQ",
                value: function (t, n) {
                  for (;;) {
                    if (c.__isBigInt(t))
                      return c.__isBigInt(n) ? c.equal(t, n) : c.EQ(n, t);
                    if (typeof t == "number") {
                      if (c.__isBigInt(n)) return c.__equalToNumber(n, t);
                      if (e(n) !== "object") return t == n;
                      n = c.__toPrimitive(n);
                    } else if (typeof t == "string") {
                      if (c.__isBigInt(n))
                        return (
                          (t = c.__fromString(t)),
                          t !== null && c.equal(t, n)
                        );
                      if (e(n) !== "object") return t == n;
                      n = c.__toPrimitive(n);
                    } else if (typeof t == "boolean") {
                      if (c.__isBigInt(n)) return c.__equalToNumber(n, +t);
                      if (e(n) !== "object") return t == n;
                      n = c.__toPrimitive(n);
                    } else if (e(t) === "symbol") {
                      if (c.__isBigInt(n)) return !1;
                      if (e(n) !== "object") return t == n;
                      n = c.__toPrimitive(n);
                    } else if (e(t) === "object") {
                      if (e(n) === "object" && n.constructor !== c)
                        return t == n;
                      t = c.__toPrimitive(t);
                    } else return t == n;
                  }
                },
              },
              {
                key: "NE",
                value: function (e, t) {
                  return !c.EQ(e, t);
                },
              },
              {
                key: "__zero",
                value: function () {
                  return new c(0, !1);
                },
              },
              {
                key: "__oneDigit",
                value: function (e, t) {
                  var n = new c(1, t);
                  return (n.__setDigit(0, e), n);
                },
              },
              {
                key: "__decideRounding",
                value: function (e, t, n, r) {
                  if (0 < t) return -1;
                  var o;
                  if (0 > t) o = -t - 1;
                  else {
                    if (n === 0) return -1;
                    (n--, (r = e.__digit(n)), (o = 31));
                  }
                  var a = 1 << o;
                  if ((r & a) == 0) return -1;
                  if (((a -= 1), (r & a) != 0)) return 1;
                  for (; 0 < n; ) if ((n--, e.__digit(n) !== 0)) return 1;
                  return 0;
                },
              },
              {
                key: "__fromDouble",
                value: function (e) {
                  c.__kBitConversionDouble[0] = e;
                  var t,
                    n = 2047 & (c.__kBitConversionInts[1] >>> 20),
                    r = n - 1023,
                    o = (r >>> 5) + 1,
                    a = new c(o, 0 > e),
                    i = (1048575 & c.__kBitConversionInts[1]) | 1048576,
                    l = c.__kBitConversionInts[0],
                    s = 20,
                    u = 31 & r,
                    d = 0;
                  if (u < s) {
                    var m = s - u;
                    ((d = m + 32),
                      (t = i >>> m),
                      (i = (i << (32 - m)) | (l >>> m)),
                      (l <<= 32 - m));
                  } else if (u === s) ((d = 32), (t = i), (i = l));
                  else {
                    var p = u - s;
                    ((d = 32 - p),
                      (t = (i << p) | (l >>> (32 - p))),
                      (i = l << p));
                  }
                  a.__setDigit(o - 1, t);
                  for (var _ = o - 2; 0 <= _; _--)
                    (0 < d ? ((d -= 32), (t = i), (i = l)) : (t = 0),
                      a.__setDigit(_, t));
                  return a.__trim();
                },
              },
              {
                key: "__isWhitespace",
                value: function (e) {
                  return (
                    (13 >= e && 9 <= e) ||
                    (159 >= e
                      ? e == 32
                      : 131071 >= e
                        ? e == 160 || e == 5760
                        : 196607 >= e
                          ? ((e &= 131071),
                            10 >= e ||
                              e == 40 ||
                              e == 41 ||
                              e == 47 ||
                              e == 95 ||
                              e == 4096)
                          : e == 65279)
                  );
                },
              },
              {
                key: "__fromString",
                value: function (e) {
                  var t =
                      1 < arguments.length && arguments[1] !== void 0
                        ? arguments[1]
                        : 0,
                    n = 0,
                    r = e.length,
                    o = 0;
                  if (o === r) return c.__zero();
                  for (var a = e.charCodeAt(o); c.__isWhitespace(a); ) {
                    if (++o === r) return c.__zero();
                    a = e.charCodeAt(o);
                  }
                  if (a === 43) {
                    if (++o === r) return null;
                    ((a = e.charCodeAt(o)), (n = 1));
                  } else if (a === 45) {
                    if (++o === r) return null;
                    ((a = e.charCodeAt(o)), (n = -1));
                  }
                  if (t === 0) {
                    if (((t = 10), a === 48)) {
                      if (++o === r) return c.__zero();
                      if (((a = e.charCodeAt(o)), a === 88 || a === 120)) {
                        if (((t = 16), ++o === r)) return null;
                        a = e.charCodeAt(o);
                      } else if (a === 79 || a === 111) {
                        if (((t = 8), ++o === r)) return null;
                        a = e.charCodeAt(o);
                      } else if (a === 66 || a === 98) {
                        if (((t = 2), ++o === r)) return null;
                        a = e.charCodeAt(o);
                      }
                    }
                  } else if (t === 16 && a === 48) {
                    if (++o === r) return c.__zero();
                    if (((a = e.charCodeAt(o)), a === 88 || a === 120)) {
                      if (++o === r) return null;
                      a = e.charCodeAt(o);
                    }
                  }
                  for (; a === 48; ) {
                    if (++o === r) return c.__zero();
                    a = e.charCodeAt(o);
                  }
                  var i = r - o,
                    l = c.__kMaxBitsPerChar[t],
                    s = c.__kBitsPerCharTableMultiplier - 1;
                  if (i > 1073741824 / l) return null;
                  var u = (l * i + s) >>> c.__kBitsPerCharTableShift,
                    d = new c((u + 31) >>> 5, !1),
                    m = 10 > t ? t : 10,
                    p = 10 < t ? t - 10 : 0;
                  if ((t & (t - 1)) == 0) {
                    l >>= c.__kBitsPerCharTableShift;
                    var _ = [],
                      f = [],
                      g = !1;
                    do {
                      for (var h, y = 0, C = 0; ; ) {
                        if (((h = void 0), (a - 48) >>> 0 < m)) h = a - 48;
                        else if (((32 | a) - 97) >>> 0 < p) h = (32 | a) - 87;
                        else {
                          g = !0;
                          break;
                        }
                        if (((C += l), (y = (y << l) | h), ++o === r)) {
                          g = !0;
                          break;
                        }
                        if (((a = e.charCodeAt(o)), 32 < C + l)) break;
                      }
                      (_.push(y), f.push(C));
                    } while (!g);
                    c.__fillFromParts(d, _, f);
                  } else {
                    d.__initializeDigits();
                    var b = !1,
                      v = 0;
                    do {
                      for (var S, R = 0, L = 1; ; ) {
                        if (((S = void 0), (a - 48) >>> 0 < m)) S = a - 48;
                        else if (((32 | a) - 97) >>> 0 < p) S = (32 | a) - 87;
                        else {
                          b = !0;
                          break;
                        }
                        var E = L * t;
                        if (4294967295 < E) break;
                        if (((L = E), (R = R * t + S), v++, ++o === r)) {
                          b = !0;
                          break;
                        }
                        a = e.charCodeAt(o);
                      }
                      s = 32 * c.__kBitsPerCharTableMultiplier - 1;
                      var k = (l * v + s) >>> (c.__kBitsPerCharTableShift + 5);
                      d.__inplaceMultiplyAdd(L, R, k);
                    } while (!b);
                  }
                  if (o !== r) {
                    if (!c.__isWhitespace(a)) return null;
                    for (o++; o < r; o++)
                      if (((a = e.charCodeAt(o)), !c.__isWhitespace(a)))
                        return null;
                  }
                  return n !== 0 && t !== 10
                    ? null
                    : ((d.sign = n === -1), d.__trim());
                },
              },
              {
                key: "__fillFromParts",
                value: function (e, t, n) {
                  for (var r = 0, o = 0, a = 0, i = t.length - 1; 0 <= i; i--) {
                    var l = t[i],
                      s = n[i];
                    ((o |= l << a),
                      (a += s),
                      a === 32
                        ? (e.__setDigit(r++, o), (a = 0), (o = 0))
                        : 32 < a &&
                          (e.__setDigit(r++, o),
                          (a -= 32),
                          (o = l >>> (s - a))));
                  }
                  if (o !== 0) {
                    if (r >= e.length) throw new Error("implementation bug");
                    e.__setDigit(r++, o);
                  }
                  for (; r < e.length; r++) e.__setDigit(r, 0);
                },
              },
              {
                key: "__toStringBasePowerOfTwo",
                value: function (e, t) {
                  var n = e.length,
                    r = t - 1;
                  ((r = (85 & (r >>> 1)) + (85 & r)),
                    (r = (51 & (r >>> 2)) + (51 & r)),
                    (r = (15 & (r >>> 4)) + (15 & r)));
                  var o = r,
                    a = t - 1,
                    i = e.__digit(n - 1),
                    l = u(i),
                    s = 0 | ((32 * n - l + o - 1) / o);
                  if ((e.sign && s++, 268435456 < s))
                    throw new Error("string too long");
                  for (
                    var d = Array(s), m = s - 1, p = 0, _ = 0, f = 0;
                    f < n - 1;
                    f++
                  ) {
                    var g = e.__digit(f),
                      h = (p | (g << _)) & a;
                    d[m--] = c.__kConversionChars[h];
                    var y = o - _;
                    for (p = g >>> y, _ = 32 - y; _ >= o; )
                      ((d[m--] = c.__kConversionChars[p & a]),
                        (p >>>= o),
                        (_ -= o));
                  }
                  var C = (p | (i << _)) & a;
                  for (
                    d[m--] = c.__kConversionChars[C], p = i >>> (o - _);
                    p !== 0;
                  )
                    ((d[m--] = c.__kConversionChars[p & a]), (p >>>= o));
                  if ((e.sign && (d[m--] = "-"), m !== -1))
                    throw new Error("implementation bug");
                  return d.join("");
                },
              },
              {
                key: "__toStringGeneric",
                value: function (e, t, n) {
                  var r = e.length;
                  if (r === 0) return "";
                  if (r === 1) {
                    var o = e.__unsignedDigit(0).toString(t);
                    return (n === !1 && e.sign && (o = "-" + o), o);
                  }
                  var a = 32 * r - u(e.__digit(r - 1)),
                    i = c.__kMaxBitsPerChar[t],
                    l = i - 1,
                    s = a * c.__kBitsPerCharTableMultiplier;
                  ((s += l - 1), (s = 0 | (s / l)));
                  var d,
                    m,
                    p = (s + 1) >> 1,
                    _ = c.exponentiate(
                      c.__oneDigit(t, !1),
                      c.__oneDigit(p, !1),
                    ),
                    f = _.__unsignedDigit(0);
                  if (_.length === 1 && 65535 >= f) {
                    ((d = new c(e.length, !1)), d.__initializeDigits());
                    for (var g, h = 0, y = 2 * e.length - 1; 0 <= y; y--)
                      ((g = (h << 16) | e.__halfDigit(y)),
                        d.__setHalfDigit(y, 0 | (g / f)),
                        (h = 0 | (g % f)));
                    m = h.toString(t);
                  } else {
                    var C = c.__absoluteDivLarge(e, _, !0, !0);
                    d = C.quotient;
                    var b = C.remainder.__trim();
                    m = c.__toStringGeneric(b, t, !0);
                  }
                  d.__trim();
                  for (var v = c.__toStringGeneric(d, t, !0); m.length < p; )
                    m = "0" + m;
                  return (n === !1 && e.sign && (v = "-" + v), v + m);
                },
              },
              {
                key: "__unequalSign",
                value: function (e) {
                  return e ? -1 : 1;
                },
              },
              {
                key: "__absoluteGreater",
                value: function (e) {
                  return e ? -1 : 1;
                },
              },
              {
                key: "__absoluteLess",
                value: function (e) {
                  return e ? 1 : -1;
                },
              },
              {
                key: "__compareToBigInt",
                value: function (e, t) {
                  var n = e.sign;
                  if (n !== t.sign) return c.__unequalSign(n);
                  var r = c.__absoluteCompare(e, t);
                  return 0 < r
                    ? c.__absoluteGreater(n)
                    : 0 > r
                      ? c.__absoluteLess(n)
                      : 0;
                },
              },
              {
                key: "__compareToNumber",
                value: function (e, t) {
                  if (!0 | t) {
                    var n = e.sign,
                      r = 0 > t;
                    if (n !== r) return c.__unequalSign(n);
                    if (e.length === 0) {
                      if (r) throw new Error("implementation bug");
                      return t === 0 ? 0 : -1;
                    }
                    if (1 < e.length) return c.__absoluteGreater(n);
                    var o = i(t),
                      a = e.__unsignedDigit(0);
                    return a > o
                      ? c.__absoluteGreater(n)
                      : a < o
                        ? c.__absoluteLess(n)
                        : 0;
                  }
                  return c.__compareToDouble(e, t);
                },
              },
              {
                key: "__compareToDouble",
                value: function (e, t) {
                  if (t !== t) return t;
                  if (t === 1 / 0) return -1;
                  if (t === -1 / 0) return 1;
                  var n = e.sign;
                  if (n !== 0 > t) return c.__unequalSign(n);
                  if (t === 0)
                    throw new Error(
                      "implementation bug: should be handled elsewhere",
                    );
                  if (e.length === 0) return -1;
                  c.__kBitConversionDouble[0] = t;
                  var r = 2047 & (c.__kBitConversionInts[1] >>> 20);
                  if (r == 2047)
                    throw new Error("implementation bug: handled elsewhere");
                  var o = r - 1023;
                  if (0 > o) return c.__absoluteGreater(n);
                  var a = e.length,
                    i = e.__digit(a - 1),
                    l = u(i),
                    s = 32 * a - l,
                    d = o + 1;
                  if (s < d) return c.__absoluteLess(n);
                  if (s > d) return c.__absoluteGreater(n);
                  var m = 1048576 | (1048575 & c.__kBitConversionInts[1]),
                    p = c.__kBitConversionInts[0],
                    _ = 20,
                    f = 31 - l;
                  if (f !== (s - 1) % 31) throw new Error("implementation bug");
                  var g,
                    h = 0;
                  if (f < _) {
                    var y = _ - f;
                    ((h = y + 32),
                      (g = m >>> y),
                      (m = (m << (32 - y)) | (p >>> y)),
                      (p <<= 32 - y));
                  } else if (f === _) ((h = 32), (g = m), (m = p));
                  else {
                    var C = f - _;
                    ((h = 32 - C),
                      (g = (m << C) | (p >>> (32 - C))),
                      (m = p << C));
                  }
                  if (((i >>>= 0), (g >>>= 0), i > g))
                    return c.__absoluteGreater(n);
                  if (i < g) return c.__absoluteLess(n);
                  for (var b = a - 2; 0 <= b; b--) {
                    0 < h
                      ? ((h -= 32), (g = m >>> 0), (m = p), (p = 0))
                      : (g = 0);
                    var v = e.__unsignedDigit(b);
                    if (v > g) return c.__absoluteGreater(n);
                    if (v < g) return c.__absoluteLess(n);
                  }
                  if (m !== 0 || p !== 0) {
                    if (h === 0) throw new Error("implementation bug");
                    return c.__absoluteLess(n);
                  }
                  return 0;
                },
              },
              {
                key: "__equalToNumber",
                value: function (e, t) {
                  return t | (t === 0)
                    ? t === 0
                      ? e.length === 0
                      : e.length === 1 &&
                        e.sign === 0 > t &&
                        e.__unsignedDigit(0) === i(t)
                    : c.__compareToDouble(e, t) === 0;
                },
              },
              {
                key: "__comparisonResultToBool",
                value: function (e, t) {
                  switch (t) {
                    case 0:
                      return 0 > e;
                    case 1:
                      return 0 >= e;
                    case 2:
                      return 0 < e;
                    case 3:
                      return 0 <= e;
                  }
                  throw new Error("unreachable");
                },
              },
              {
                key: "__compare",
                value: function (e, t, n) {
                  if (
                    ((e = c.__toPrimitive(e)),
                    (t = c.__toPrimitive(t)),
                    typeof e == "string" && typeof t == "string")
                  )
                    switch (n) {
                      case 0:
                        return e < t;
                      case 1:
                        return e <= t;
                      case 2:
                        return e > t;
                      case 3:
                        return e >= t;
                    }
                  if (c.__isBigInt(e) && typeof t == "string")
                    return (
                      (t = c.__fromString(t)),
                      t !== null &&
                        c.__comparisonResultToBool(c.__compareToBigInt(e, t), n)
                    );
                  if (typeof e == "string" && c.__isBigInt(t))
                    return (
                      (e = c.__fromString(e)),
                      e !== null &&
                        c.__comparisonResultToBool(c.__compareToBigInt(e, t), n)
                    );
                  if (
                    ((e = c.__toNumeric(e)),
                    (t = c.__toNumeric(t)),
                    c.__isBigInt(e))
                  ) {
                    if (c.__isBigInt(t))
                      return c.__comparisonResultToBool(
                        c.__compareToBigInt(e, t),
                        n,
                      );
                    if (typeof t != "number")
                      throw new Error("implementation bug");
                    return c.__comparisonResultToBool(
                      c.__compareToNumber(e, t),
                      n,
                    );
                  }
                  if (typeof e != "number")
                    throw new Error("implementation bug");
                  if (c.__isBigInt(t))
                    return c.__comparisonResultToBool(
                      c.__compareToNumber(t, e),
                      2 ^ n,
                    );
                  if (typeof t != "number")
                    throw new Error("implementation bug");
                  return n === 0
                    ? e < t
                    : n === 1
                      ? e <= t
                      : n === 2
                        ? e > t
                        : n === 3
                          ? e >= t
                          : void 0;
                },
              },
              {
                key: "__absoluteAdd",
                value: function (e, t, n) {
                  if (e.length < t.length) return c.__absoluteAdd(t, e, n);
                  if (e.length === 0) return e;
                  if (t.length === 0) return e.sign === n ? e : c.unaryMinus(e);
                  var r = e.length;
                  (e.__clzmsd() === 0 ||
                    (t.length === e.length && t.__clzmsd() === 0)) &&
                    r++;
                  for (var o = new c(r, n), a = 0, i = 0; i < t.length; i++) {
                    var l = t.__digit(i),
                      s = e.__digit(i),
                      u = (65535 & s) + (65535 & l) + a,
                      d = (s >>> 16) + (l >>> 16) + (u >>> 16);
                    ((a = d >>> 16), o.__setDigit(i, (65535 & u) | (d << 16)));
                  }
                  for (; i < e.length; i++) {
                    var m = e.__digit(i),
                      p = (65535 & m) + a,
                      _ = (m >>> 16) + (p >>> 16);
                    ((a = _ >>> 16), o.__setDigit(i, (65535 & p) | (_ << 16)));
                  }
                  return (i < o.length && o.__setDigit(i, a), o.__trim());
                },
              },
              {
                key: "__absoluteSub",
                value: function (e, t, n) {
                  if (e.length === 0) return e;
                  if (t.length === 0) return e.sign === n ? e : c.unaryMinus(e);
                  for (
                    var r = new c(e.length, n), o = 0, a = 0;
                    a < t.length;
                    a++
                  ) {
                    var i = e.__digit(a),
                      l = t.__digit(a),
                      s = (65535 & i) - (65535 & l) - o;
                    o = 1 & (s >>> 16);
                    var u = (i >>> 16) - (l >>> 16) - o;
                    ((o = 1 & (u >>> 16)),
                      r.__setDigit(a, (65535 & s) | (u << 16)));
                  }
                  for (; a < e.length; a++) {
                    var d = e.__digit(a),
                      m = (65535 & d) - o;
                    o = 1 & (m >>> 16);
                    var p = (d >>> 16) - o;
                    ((o = 1 & (p >>> 16)),
                      r.__setDigit(a, (65535 & m) | (p << 16)));
                  }
                  return r.__trim();
                },
              },
              {
                key: "__absoluteAddOne",
                value: function (e, t) {
                  var n =
                      2 < arguments.length && arguments[2] !== void 0
                        ? arguments[2]
                        : null,
                    r = e.length;
                  n === null ? (n = new c(r, t)) : (n.sign = t);
                  for (var o = !0, a = 0; a < r; a++) {
                    var i = e.__digit(a),
                      l = i === -1;
                    (o && (i = 0 | (i + 1)), (o = l), n.__setDigit(a, i));
                  }
                  return (o && n.__setDigitGrow(r, 1), n);
                },
              },
              {
                key: "__absoluteSubOne",
                value: function (e, t) {
                  var n = e.length;
                  t = t || n;
                  for (var r = new c(t, !1), o = !0, a = 0; a < n; a++) {
                    var i = e.__digit(a),
                      l = i === 0;
                    (o && (i = 0 | (i - 1)), (o = l), r.__setDigit(a, i));
                  }
                  for (var s = n; s < t; s++) r.__setDigit(s, 0);
                  return r;
                },
              },
              {
                key: "__absoluteAnd",
                value: function (e, t) {
                  var n =
                      2 < arguments.length && arguments[2] !== void 0
                        ? arguments[2]
                        : null,
                    r = e.length,
                    o = t.length,
                    a = o;
                  if (r < o) {
                    a = r;
                    var i = e,
                      l = r;
                    ((e = t), (r = o), (t = i), (o = l));
                  }
                  var s = a;
                  n === null ? (n = new c(s, !1)) : (s = n.length);
                  for (var u = 0; u < a; u++)
                    n.__setDigit(u, e.__digit(u) & t.__digit(u));
                  for (; u < s; u++) n.__setDigit(u, 0);
                  return n;
                },
              },
              {
                key: "__absoluteAndNot",
                value: function (e, t) {
                  var n =
                      2 < arguments.length && arguments[2] !== void 0
                        ? arguments[2]
                        : null,
                    r = e.length,
                    o = t.length,
                    a = o;
                  r < o && (a = r);
                  var i = r;
                  n === null ? (n = new c(i, !1)) : (i = n.length);
                  for (var l = 0; l < a; l++)
                    n.__setDigit(l, e.__digit(l) & ~t.__digit(l));
                  for (; l < r; l++) n.__setDigit(l, e.__digit(l));
                  for (; l < i; l++) n.__setDigit(l, 0);
                  return n;
                },
              },
              {
                key: "__absoluteOr",
                value: function (e, t) {
                  var n =
                      2 < arguments.length && arguments[2] !== void 0
                        ? arguments[2]
                        : null,
                    r = e.length,
                    o = t.length,
                    a = o;
                  if (r < o) {
                    a = r;
                    var i = e,
                      l = r;
                    ((e = t), (r = o), (t = i), (o = l));
                  }
                  var s = r;
                  n === null ? (n = new c(s, !1)) : (s = n.length);
                  for (var u = 0; u < a; u++)
                    n.__setDigit(u, e.__digit(u) | t.__digit(u));
                  for (; u < r; u++) n.__setDigit(u, e.__digit(u));
                  for (; u < s; u++) n.__setDigit(u, 0);
                  return n;
                },
              },
              {
                key: "__absoluteXor",
                value: function (e, t) {
                  var n =
                      2 < arguments.length && arguments[2] !== void 0
                        ? arguments[2]
                        : null,
                    r = e.length,
                    o = t.length,
                    a = o;
                  if (r < o) {
                    a = r;
                    var i = e,
                      l = r;
                    ((e = t), (r = o), (t = i), (o = l));
                  }
                  var s = r;
                  n === null ? (n = new c(s, !1)) : (s = n.length);
                  for (var u = 0; u < a; u++)
                    n.__setDigit(u, e.__digit(u) ^ t.__digit(u));
                  for (; u < r; u++) n.__setDigit(u, e.__digit(u));
                  for (; u < s; u++) n.__setDigit(u, 0);
                  return n;
                },
              },
              {
                key: "__absoluteCompare",
                value: function (e, t) {
                  var n = e.length - t.length;
                  if (n != 0) return n;
                  for (
                    var r = e.length - 1;
                    0 <= r && e.__digit(r) === t.__digit(r);
                  )
                    r--;
                  return 0 > r
                    ? 0
                    : e.__unsignedDigit(r) > t.__unsignedDigit(r)
                      ? 1
                      : -1;
                },
              },
              {
                key: "__multiplyAccumulate",
                value: function (e, t, n, r) {
                  if (t !== 0) {
                    for (
                      var o = 65535 & t,
                        a = t >>> 16,
                        i = 0,
                        l = 0,
                        u = 0,
                        c = 0;
                      c < e.length;
                      c++, r++
                    ) {
                      var d = n.__digit(r),
                        m = 65535 & d,
                        p = d >>> 16,
                        _ = e.__digit(c),
                        f = 65535 & _,
                        g = _ >>> 16,
                        h = s(f, o),
                        y = s(f, a),
                        C = s(g, o),
                        b = s(g, a);
                      ((m += l + (65535 & h)),
                        (p +=
                          u +
                          i +
                          (m >>> 16) +
                          (h >>> 16) +
                          (65535 & y) +
                          (65535 & C)),
                        (i = p >>> 16),
                        (l = (y >>> 16) + (C >>> 16) + (65535 & b) + i),
                        (i = l >>> 16),
                        (l &= 65535),
                        (u = b >>> 16),
                        (d = (65535 & m) | (p << 16)),
                        n.__setDigit(r, d));
                    }
                    for (; i !== 0 || l !== 0 || u !== 0; r++) {
                      var v = n.__digit(r),
                        S = (65535 & v) + l,
                        R = (v >>> 16) + (S >>> 16) + u + i;
                      ((l = 0),
                        (u = 0),
                        (i = R >>> 16),
                        (v = (65535 & S) | (R << 16)),
                        n.__setDigit(r, v));
                    }
                  }
                },
              },
              {
                key: "__internalMultiplyAdd",
                value: function (e, t, n, r, o) {
                  for (var a = n, i = 0, l = 0; l < r; l++) {
                    var u = e.__digit(l),
                      c = s(65535 & u, t),
                      d = (65535 & c) + i + a;
                    a = d >>> 16;
                    var m = s(u >>> 16, t),
                      p = (65535 & m) + (c >>> 16) + a;
                    ((a = p >>> 16),
                      (i = m >>> 16),
                      o.__setDigit(l, (p << 16) | (65535 & d)));
                  }
                  if (o.length > r)
                    for (o.__setDigit(r++, a + i); r < o.length; )
                      o.__setDigit(r++, 0);
                  else if (a + i !== 0) throw new Error("implementation bug");
                },
              },
              {
                key: "__absoluteDivSmall",
                value: function (e, t, n) {
                  n === null && (n = new c(e.length, !1));
                  for (var r = 0, o = 2 * e.length - 1; 0 <= o; o -= 2) {
                    var a = ((r << 16) | e.__halfDigit(o)) >>> 0,
                      i = 0 | (a / t);
                    ((r = 0 | (a % t)),
                      (a = ((r << 16) | e.__halfDigit(o - 1)) >>> 0));
                    var l = 0 | (a / t);
                    ((r = 0 | (a % t)), n.__setDigit(o >>> 1, (i << 16) | l));
                  }
                  return n;
                },
              },
              {
                key: "__absoluteModSmall",
                value: function (e, t) {
                  for (var n, r = 0, o = 2 * e.length - 1; 0 <= o; o--)
                    ((n = ((r << 16) | e.__halfDigit(o)) >>> 0),
                      (r = 0 | (n % t)));
                  return r;
                },
              },
              {
                key: "__absoluteDivLarge",
                value: function (e, t, n, r) {
                  var o = t.__halfDigitLength(),
                    a = t.length,
                    i = e.__halfDigitLength() - o,
                    l = null;
                  n && ((l = new c((i + 2) >>> 1, !1)), l.__initializeDigits());
                  var u = new c((o + 2) >>> 1, !1);
                  u.__initializeDigits();
                  var d = c.__clz16(t.__halfDigit(o - 1));
                  0 < d && (t = c.__specialLeftShift(t, d, 0));
                  for (
                    var m = c.__specialLeftShift(e, d, 1),
                      p = t.__halfDigit(o - 1),
                      _ = 0,
                      f = i;
                    0 <= f;
                    f--
                  ) {
                    var g = 65535,
                      h = m.__halfDigit(f + o);
                    if (h !== p) {
                      var y = ((h << 16) | m.__halfDigit(f + o - 1)) >>> 0;
                      g = 0 | (y / p);
                      for (
                        var C = 0 | (y % p),
                          b = t.__halfDigit(o - 2),
                          v = m.__halfDigit(f + o - 2);
                        s(g, b) >>> 0 > ((C << 16) | v) >>> 0 &&
                        (g--, (C += p), !(65535 < C));
                      );
                    }
                    c.__internalMultiplyAdd(t, g, 0, a, u);
                    var S = m.__inplaceSub(u, f, o + 1);
                    (S !== 0 &&
                      ((S = m.__inplaceAdd(t, f, o)),
                      m.__setHalfDigit(f + o, m.__halfDigit(f + o) + S),
                      g--),
                      n &&
                        (1 & f ? (_ = g << 16) : l.__setDigit(f >>> 1, _ | g)));
                  }
                  return r
                    ? (m.__inplaceRightShift(d),
                      n ? { quotient: l, remainder: m } : m)
                    : n
                      ? l
                      : void 0;
                },
              },
              {
                key: "__clz16",
                value: function (e) {
                  return u(e) - 16;
                },
              },
              {
                key: "__specialLeftShift",
                value: function (e, t, n) {
                  var r = e.length,
                    o = new c(r + n, !1);
                  if (t === 0) {
                    for (var a = 0; a < r; a++) o.__setDigit(a, e.__digit(a));
                    return (0 < n && o.__setDigit(r, 0), o);
                  }
                  for (var i, l = 0, s = 0; s < r; s++)
                    ((i = e.__digit(s)),
                      o.__setDigit(s, (i << t) | l),
                      (l = i >>> (32 - t)));
                  return (0 < n && o.__setDigit(r, l), o);
                },
              },
              {
                key: "__leftShiftByAbsolute",
                value: function (e, t) {
                  var n = c.__toShiftAmount(t);
                  if (0 > n) throw new RangeError("BigInt too big");
                  var r = n >>> 5,
                    o = 31 & n,
                    a = e.length,
                    i = o !== 0 && e.__digit(a - 1) >>> (32 - o) != 0,
                    l = a + r + (i ? 1 : 0),
                    s = new c(l, e.sign);
                  if (o === 0) {
                    for (var u = 0; u < r; u++) s.__setDigit(u, 0);
                    for (; u < l; u++) s.__setDigit(u, e.__digit(u - r));
                  } else {
                    for (var d = 0, m = 0; m < r; m++) s.__setDigit(m, 0);
                    for (var p, _ = 0; _ < a; _++)
                      ((p = e.__digit(_)),
                        s.__setDigit(_ + r, (p << o) | d),
                        (d = p >>> (32 - o)));
                    if (i) s.__setDigit(a + r, d);
                    else if (d !== 0) throw new Error("implementation bug");
                  }
                  return s.__trim();
                },
              },
              {
                key: "__rightShiftByAbsolute",
                value: function (e, t) {
                  var n = e.length,
                    r = e.sign,
                    o = c.__toShiftAmount(t);
                  if (0 > o) return c.__rightShiftByMaximum(r);
                  var a = o >>> 5,
                    i = 31 & o,
                    l = n - a;
                  if (0 >= l) return c.__rightShiftByMaximum(r);
                  var s = !1;
                  if (r) {
                    if ((e.__digit(a) & ((1 << i) - 1)) != 0) s = !0;
                    else
                      for (var u = 0; u < a; u++)
                        if (e.__digit(u) !== 0) {
                          s = !0;
                          break;
                        }
                  }
                  if (s && i === 0) {
                    var d = e.__digit(n - 1);
                    ~d == 0 && l++;
                  }
                  var m = new c(l, r);
                  if (i === 0)
                    for (var p = a; p < n; p++)
                      m.__setDigit(p - a, e.__digit(p));
                  else {
                    for (
                      var _, f = e.__digit(a) >>> i, g = n - a - 1, h = 0;
                      h < g;
                      h++
                    )
                      ((_ = e.__digit(h + a + 1)),
                        m.__setDigit(h, (_ << (32 - i)) | f),
                        (f = _ >>> i));
                    m.__setDigit(g, f);
                  }
                  return (s && (m = c.__absoluteAddOne(m, !0, m)), m.__trim());
                },
              },
              {
                key: "__rightShiftByMaximum",
                value: function (e) {
                  return e ? c.__oneDigit(1, !0) : c.__zero();
                },
              },
              {
                key: "__toShiftAmount",
                value: function (e) {
                  if (1 < e.length) return -1;
                  var t = e.__unsignedDigit(0);
                  return t > c.__kMaxLengthBits ? -1 : t;
                },
              },
              {
                key: "__toPrimitive",
                value: function (t) {
                  var n =
                    1 < arguments.length && arguments[1] !== void 0
                      ? arguments[1]
                      : "default";
                  if (e(t) !== "object" || t.constructor === c) return t;
                  var r = t[Symbol.toPrimitive];
                  if (r) {
                    var o = r(n);
                    if (e(o) !== "object") return o;
                    throw new TypeError(
                      "Cannot convert object to primitive value",
                    );
                  }
                  var a = t.valueOf;
                  if (a) {
                    var i = a.call(t);
                    if (e(i) !== "object") return i;
                  }
                  var l = t.toString;
                  if (l) {
                    var s = l.call(t);
                    if (e(s) !== "object") return s;
                  }
                  throw new TypeError(
                    "Cannot convert object to primitive value",
                  );
                },
              },
              {
                key: "__toNumeric",
                value: function (e) {
                  return c.__isBigInt(e) ? e : +e;
                },
              },
              {
                key: "__isBigInt",
                value: function (t) {
                  return e(t) === "object" && t.constructor === c;
                },
              },
              {
                key: "__truncateToNBits",
                value: function (e, t) {
                  for (
                    var n = (e + 31) >>> 5,
                      r = new c(n, t.sign),
                      o = n - 1,
                      a = 0;
                    a < o;
                    a++
                  )
                    r.__setDigit(a, t.__digit(a));
                  var i = t.__digit(o);
                  if ((31 & e) != 0) {
                    var l = 32 - (31 & e);
                    i = (i << l) >>> l;
                  }
                  return (r.__setDigit(o, i), r.__trim());
                },
              },
              {
                key: "__truncateAndSubFromPowerOfTwo",
                value: function (e, t, n) {
                  for (
                    var r = Math.min,
                      o = (e + 31) >>> 5,
                      a = new c(o, n),
                      i = 0,
                      l = o - 1,
                      s = 0,
                      u = r(l, t.length);
                    i < u;
                    i++
                  ) {
                    var d = t.__digit(i),
                      m = 0 - (65535 & d) - s;
                    s = 1 & (m >>> 16);
                    var p = 0 - (d >>> 16) - s;
                    ((s = 1 & (p >>> 16)),
                      a.__setDigit(i, (65535 & m) | (p << 16)));
                  }
                  for (; i < l; i++) a.__setDigit(i, 0 | -s);
                  var _,
                    f = l < t.length ? t.__digit(l) : 0,
                    g = 31 & e;
                  if (g === 0) {
                    var h = 0 - (65535 & f) - s;
                    s = 1 & (h >>> 16);
                    var y = 0 - (f >>> 16) - s;
                    _ = (65535 & h) | (y << 16);
                  } else {
                    var C = 32 - g;
                    f = (f << C) >>> C;
                    var b = 1 << (32 - C),
                      v = (65535 & b) - (65535 & f) - s;
                    s = 1 & (v >>> 16);
                    var S = (b >>> 16) - (f >>> 16) - s;
                    ((_ = (65535 & v) | (S << 16)), (_ &= b - 1));
                  }
                  return (a.__setDigit(l, _), a.__trim());
                },
              },
              {
                key: "__digitPow",
                value: function (e, t) {
                  for (var n = 1; 0 < t; )
                    (1 & t && (n *= e), (t >>>= 1), (e *= e));
                  return n;
                },
              },
            ],
          ),
          c
        );
      })(c(Array));
      return (
        (p.__kMaxLength = 33554432),
        (p.__kMaxLengthBits = p.__kMaxLength << 5),
        (p.__kMaxBitsPerChar = [
          0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126,
          128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156,
          158, 159, 160, 162, 163, 165, 166,
        ]),
        (p.__kBitsPerCharTableShift = 5),
        (p.__kBitsPerCharTableMultiplier = 1 << p.__kBitsPerCharTableShift),
        (p.__kConversionChars = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ]),
        (p.__kBitConversionBuffer = new ArrayBuffer(8)),
        (p.__kBitConversionDouble = new Float64Array(p.__kBitConversionBuffer)),
        (p.__kBitConversionInts = new Int32Array(p.__kBitConversionBuffer)),
        p
      );
    });
  },
  null,
);
