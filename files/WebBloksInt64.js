__d(
  "WebBloksInt64",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      ((e.fromInt = function (n) {
        if (-128 <= n && n < 128) {
          var t = e.$3[n];
          if (t) return t;
        }
        var r = new e(n | 0, n < 0 ? -1 : 0);
        return (-128 <= n && n < 128 && (e.$3[n] = r), r);
      }),
        (e.fromNumber = function (n) {
          return Number.isNaN(n) || !Number.isFinite(n)
            ? e.ZERO
            : n <= -e.$4
              ? e.MIN_VALUE
              : n + 1 >= e.$4
                ? e.MAX_VALUE
                : n < 0
                  ? e.fromNumber(-n).negate()
                  : new e((n % e.$5) | 0, (n / e.$5) | 0);
        }),
        (e.fromBits = function (n, r) {
          return new e(n, r);
        }),
        (e.fromString = function (n, r) {
          if (n.length === 0)
            throw new (o("WebBloksErrors").WebBloksError)(
              "number format error: empty string",
            );
          var t = r || 10;
          if (t < 2 || 36 < t)
            throw new (o("WebBloksErrors").WebBloksError)(
              "radix out of range: " + t,
            );
          if (n.charAt(0) == "-")
            return e.fromString(n.substring(1), t).negate();
          if (n.indexOf("-") >= 0)
            throw new (o("WebBloksErrors").WebBloksError)(
              'number format error: interior "-" character: ' + n,
            );
          for (
            var a = e.fromNumber(Math.pow(t, 8)), i = e.ZERO, l = 0;
            l < n.length;
            l += 8
          ) {
            var s = Math.min(8, n.length - l),
              u = parseInt(n.substring(l, l + s), t);
            if (s < 8) {
              var c = e.fromNumber(Math.pow(t, s));
              i = i.multiply(c).add(e.fromNumber(u));
            } else ((i = i.multiply(a)), (i = i.add(e.fromNumber(u))));
          }
          return i;
        }));
      var t = e.prototype;
      return (
        (t.toInt = function () {
          return this.$1;
        }),
        (t.toNumber = function () {
          return this.$2 * e.$5 + this.getLowBitsUnsigned();
        }),
        (t.toString = function (n) {
          var t = n || 10;
          if (t < 2 || 36 < t)
            throw new (o("WebBloksErrors").WebBloksError)(
              "radix out of range: " + t,
            );
          if (this.isZero()) return "0";
          if (this.isNegative())
            if (this.equals(e.MIN_VALUE)) {
              var r = e.fromNumber(t),
                a = this.div(r),
                i = a.multiply(r).subtract(this);
              return a.toString(t) + i.toInt().toString(t);
            } else return "-" + this.negate().toString(t);
          for (var l = e.fromNumber(Math.pow(t, 6)), s = this, u = ""; ; ) {
            var c = s.div(l),
              d = s.subtract(c.multiply(l)).toInt(),
              m = d.toString(t);
            if (((s = c), s.isZero())) return m + u;
            for (; m.length < 6; ) m = "0" + m;
            u = "" + m + u;
          }
        }),
        (t.getLowBitsUnsigned = function () {
          return this.$1 >= 0 ? this.$1 : e.$5 + this.$1;
        }),
        (t.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.equals(e.MIN_VALUE)
              ? 64
              : this.negate().getNumBitsAbs();
          for (
            var t = this.$2 != 0 ? this.$2 : this.$1, n = 31;
            n > 0 && (t & (1 << n)) == 0;
            n--
          );
          return this.$2 != 0 ? n + 33 : n + 1;
        }),
        (t.isZero = function () {
          return this.$2 == 0 && this.$1 == 0;
        }),
        (t.isNegative = function () {
          return this.$2 < 0;
        }),
        (t.isOdd = function () {
          return (this.$1 & 1) == 1;
        }),
        (t.equals = function (t) {
          return this.$2 == t.$2 && this.$1 == t.$1;
        }),
        (t.lessThan = function (t) {
          return this.compare(t) < 0;
        }),
        (t.greaterThan = function (t) {
          return this.compare(t) > 0;
        }),
        (t.greaterThanOrEqual = function (t) {
          return this.compare(t) >= 0;
        }),
        (t.compare = function (t) {
          if (this.equals(t)) return 0;
          var e = this.isNegative(),
            n = t.isNegative();
          return e && !n
            ? -1
            : !e && n
              ? 1
              : this.subtract(t).isNegative()
                ? -1
                : 1;
        }),
        (t.negate = function () {
          return this.equals(e.MIN_VALUE) ? e.MIN_VALUE : this.not().add(e.ONE);
        }),
        (t.add = function (n) {
          var t = this.$2 >>> 16,
            r = this.$2 & 65535,
            o = this.$1 >>> 16,
            a = this.$1 & 65535,
            i = n.$2 >>> 16,
            l = n.$2 & 65535,
            s = n.$1 >>> 16,
            u = n.$1 & 65535,
            c = 0,
            d = 0,
            m = 0,
            p = 0;
          return (
            (p += a + u),
            (m += p >>> 16),
            (p &= 65535),
            (m += o + s),
            (d += m >>> 16),
            (m &= 65535),
            (d += r + l),
            (c += d >>> 16),
            (d &= 65535),
            (c += t + i),
            (c &= 65535),
            e.fromBits((m << 16) | p, (c << 16) | d)
          );
        }),
        (t.subtract = function (t) {
          return this.add(t.negate());
        }),
        (t.multiply = function (n) {
          if (this.isZero()) return e.ZERO;
          if (n.isZero()) return e.ZERO;
          if (this.equals(e.MIN_VALUE)) return n.isOdd() ? e.MIN_VALUE : e.ZERO;
          if (n.equals(e.MIN_VALUE)) return this.isOdd() ? e.MIN_VALUE : e.ZERO;
          if (this.isNegative())
            return n.isNegative()
              ? this.negate().multiply(n.negate())
              : this.negate().multiply(n).negate();
          if (n.isNegative()) return this.multiply(n.negate()).negate();
          if (this.lessThan(e.$8) && n.lessThan(e.$8))
            return e.fromNumber(this.toNumber() * n.toNumber());
          var t = this.$2 >>> 16,
            r = this.$2 & 65535,
            o = this.$1 >>> 16,
            a = this.$1 & 65535,
            i = n.$2 >>> 16,
            l = n.$2 & 65535,
            s = n.$1 >>> 16,
            u = n.$1 & 65535,
            c = 0,
            d = 0,
            m = 0,
            p = 0;
          return (
            (p += a * u),
            (m += p >>> 16),
            (p &= 65535),
            (m += o * u),
            (d += m >>> 16),
            (m &= 65535),
            (m += a * s),
            (d += m >>> 16),
            (m &= 65535),
            (d += r * u),
            (c += d >>> 16),
            (d &= 65535),
            (d += o * s),
            (c += d >>> 16),
            (d &= 65535),
            (d += a * l),
            (c += d >>> 16),
            (d &= 65535),
            (c += t * u + r * s + o * l + a * i),
            (c &= 65535),
            e.fromBits((m << 16) | p, (c << 16) | d)
          );
        }),
        (t.div = function (n) {
          if (n.isZero())
            throw new (o("WebBloksErrors").WebBloksError)("division by zero");
          if (this.isZero()) return e.ZERO;
          if (this.equals(e.MIN_VALUE)) {
            if (n.equals(e.ONE) || n.equals(e.NEG_ONE)) return e.MIN_VALUE;
            if (n.equals(e.MIN_VALUE)) return e.ONE;
            var t = this.shiftRight(1),
              r = t.div(n).shiftLeft(1);
            if (r.equals(e.ZERO)) return n.isNegative() ? e.ONE : e.NEG_ONE;
            var a = this.subtract(n.multiply(r)),
              i = r.add(a.div(n));
            return i;
          } else if (n.equals(e.MIN_VALUE)) return e.ZERO;
          if (this.isNegative())
            return n.isNegative()
              ? this.negate().div(n.negate())
              : this.negate().div(n).negate();
          if (n.isNegative()) return this.div(n.negate()).negate();
          for (var l = e.ZERO, s = this; s.greaterThanOrEqual(n); ) {
            for (
              var u = Math.max(1, Math.floor(s.toNumber() / n.toNumber())),
                c = Math.ceil(Math.log(u) / Math.LN2),
                d = c <= 48 ? 1 : Math.pow(2, c - 48),
                m = e.fromNumber(u),
                p = m.multiply(n);
              p.isNegative() || p.greaterThan(s);
            )
              ((u -= d), (m = e.fromNumber(u)), (p = m.multiply(n)));
            (m.isZero() && (m = e.ONE), (l = l.add(m)), (s = s.subtract(p)));
          }
          return l;
        }),
        (t.modulo = function (t) {
          return this.subtract(this.div(t).multiply(t));
        }),
        (t.not = function () {
          return e.fromBits(~this.$1, ~this.$2);
        }),
        (t.shiftLeft = function (n) {
          var t = n;
          if (((t &= 63), t == 0)) return this;
          var r = this.$1;
          if (t < 32) {
            var o = this.$2;
            return e.fromBits(r << t, (o << t) | (r >>> (32 - t)));
          } else return e.fromBits(0, r << (t - 32));
        }),
        (t.shiftRight = function (n) {
          var t = n;
          if (((t &= 63), t == 0)) return this;
          var r = this.$2;
          if (t < 32) {
            var o = this.$1;
            return e.fromBits((o >>> t) | (r << (32 - t)), r >> t);
          } else return e.fromBits(r >> (t - 32), r >= 0 ? 0 : -1);
        }),
        e
      );
    })();
    ((e.$3 = {}),
      (e.$6 = 65536),
      (e.$5 = e.$6 * e.$6),
      (e.$7 = e.$5 * e.$5),
      (e.$4 = e.$7 / 2),
      (e.ZERO = e.fromInt(0)),
      (e.ONE = e.fromInt(1)),
      (e.NEG_ONE = e.fromInt(-1)),
      (e.MAX_VALUE = e.fromBits(-1, 2147483647)),
      (e.MIN_VALUE = e.fromBits(0, -2147483648)),
      (e.$8 = e.fromInt(1 << 24)),
      (l.default = e));
  },
  98,
);
