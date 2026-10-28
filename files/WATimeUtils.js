__d(
  "WATimeUtils",
  ["Promise", "WAHex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 60,
      u = 5 * s,
      c = 60 * s,
      d = 24 * c,
      m = 7 * d,
      p = 365 * d,
      _ = 60 * 1e3,
      f = c * 1e3,
      g = 24 * f,
      h = 7 * g,
      y = 1 << 31,
      C = ~y,
      b = y + 1,
      v = { time: 0, day: -4 },
      S = 0;
    function R() {
      return S;
    }
    function L(e) {
      S = e;
    }
    function E(e) {
      return ne(e).toUTCString();
    }
    function k(e) {
      var t = e | 0;
      return Math.max(b, Math.min(t, C));
    }
    function I(e) {
      return k(e / 1e3);
    }
    function T(e) {
      return typeof e != "number"
        ? o("WAHex").hexLongIsNegative(e)
          ? b
          : C
        : k(e);
    }
    function D(e) {
      return typeof e != "number"
        ? o("WAHex").hexLongIsNegative(e)
          ? b
          : C
        : e;
    }
    function x(e) {
      if (!/^-?\d+$/.test(e)) return null;
      var t = Number(e);
      return Number.isSafeInteger(t) ? t : null;
    }
    function $(e) {
      return e == null ? e : e > C ? I(e) : k(e);
    }
    function P() {
      return ae() - S * 1e3;
    }
    function N(e) {
      return e;
    }
    function M(e) {
      return e;
    }
    function w(e) {
      return e * 1e3;
    }
    function A(e, t) {
      return F(H(), e, t);
    }
    function F(e, t, n) {
      var r = Math.max(t + n - e, 0);
      return Math.min(1e3 * r, ~(1 << 31));
    }
    function O(e, t) {
      var n = t != null ? t : H();
      return k(Math.ceil(n + Math.max(e, 0)));
    }
    function B(e, t) {
      var n = t != null ? t : H();
      return k(Math.ceil(n - Math.max(e, 0)));
    }
    var W = Math.pow(2, 48);
    function q(e) {
      return e >= W ? P() + 6e4 : e;
    }
    function U(e) {
      var t = Math.max(e - H(), 0);
      return Math.min(1e3 * t, ~(1 << 31));
    }
    function V(t) {
      var r = U(t);
      return new (e || (e = n("Promise")))(function (e) {
        return void setTimeout(e, r);
      });
    }
    function H() {
      return k(Date.now() / 1e3 - S);
    }
    function G() {
      return k(Date.now() / 1e3);
    }
    function z() {
      return k(new Date().setHours(0, 0, 0, 0) / 1e3 - S);
    }
    function j() {
      return Date.now() - S * 1e3;
    }
    function K(e) {
      return Math.max(e - H(), 0);
    }
    function Q(e) {
      return K(e) > 0;
    }
    function X() {
      return performance.now();
    }
    function Y(e) {
      return Math.floor(performance.now() - e);
    }
    function J(e, t) {
      return e < t ? e : t;
    }
    var Z = (function () {
      function e() {
        var e = X();
        ((this.$1 = e), (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.reset = function () {
          this.$2 = X();
        }),
        (t.elapsed = function () {
          return Y(this.$2);
        }),
        (t.cumulative = function () {
          return Y(this.$1);
        }),
        e
      );
    })();
    function ee(e, t, n) {
      return Math.abs(e - t) <= n;
    }
    function te(e, t) {
      return ee(H(), e, t);
    }
    function ne(e) {
      return new Date(e * 1e3);
    }
    function re(e, t) {
      if (Math.abs(e - t) > d) return !1;
      var n = v.time === e ? v.day : ne(e + S).getDay(),
        r = v.time === t ? v.day : ne(t + S).getDay();
      return ((v.time = t), (v.day = r), n === r);
    }
    function oe(e) {
      var t = Number.parseInt(e, 16);
      return Number.isFinite(t) ? new Date(k(t) * 1e3) : null;
    }
    function ae() {
      return Date.now();
    }
    function ie(e) {
      var t = new Date(e);
      return isNaN(t) ? null : I(t.getTime());
    }
    function le(e, t) {
      var n = Math.abs(e - t);
      return Math.ceil(n / g);
    }
    function se(e) {
      var t = 864e5,
        n = new Date(e.getTime()),
        r = n.getUTCDay() || 7;
      n.setUTCDate(n.getUTCDate() + 4 - r);
      var o = new Date(Date.UTC(n.getUTCFullYear(), 0, 1)),
        a = Math.ceil(((n.getTime() - o.getTime()) / t + 1) / 7);
      return a;
    }
    ((l.MINUTE_SECONDS = s),
      (l.FIVE_MINUTES = u),
      (l.HOUR_SECONDS = c),
      (l.DAY_SECONDS = d),
      (l.WEEK_SECONDS = m),
      (l.YEAR_SECONDS = p),
      (l.MINUTE_MILLISECONDS = _),
      (l.HOUR_MILLISECONDS = f),
      (l.DAY_MILLISECONDS = g),
      (l.WEEK_MILLISECONDS = h),
      (l.DEFAULT_UNIXTIME = y),
      (l.MAX_INT = C),
      (l.getClockSkew = R),
      (l.setClockSkew = L),
      (l.toHttpHeaderDate = E),
      (l.castToUnixTime = k),
      (l.castMilliSecondsToUnixTime = I),
      (l.castLongIntToUnixTime = T),
      (l.castLongIntToMillisTime = D),
      (l.decimalStringToMillisTime = x),
      (l.castMillisTimeToUnixTime = $),
      (l.millisTime = P),
      (l.castToMillisTime = N),
      (l.fromMillisTime = M),
      (l.castUnixTimeToMillisTime = w),
      (l.timeoutFor = A),
      (l.timeoutForAt = F),
      (l.futureUnixTime = O),
      (l.pastUnixTime = B),
      (l.miAdjustTimestamp = q),
      (l.cappedMillisecondsUntil = U),
      (l.delayUntil = V),
      (l.unixTime = H),
      (l.unixTimeWithoutClockSkewCorrection = G),
      (l.midnight = z),
      (l.unixTimeMs = j),
      (l.secondsUntil = K),
      (l.isInFuture = Q),
      (l.monotonicTime = X),
      (l.monotonicTimeSince = Y),
      (l.oldest = J),
      (l.MonotonicTimer = Z),
      (l.happenedWithinAt = ee),
      (l.happenedWithin = te),
      (l.toDate = ne),
      (l.sameDay = re),
      (l.convertHexToDate = oe),
      (l.performanceAbsoluteNow = ae),
      (l.convertISO8601DateFormatToUnixTime = ie),
      (l.daysDiff = le),
      (l.weekOfYear = se));
  },
  98,
);
