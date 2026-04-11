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
      return te(e).toUTCString();
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
      return e == null ? e : e > C ? I(e) : k(e);
    }
    function $() {
      return oe() - S * 1e3;
    }
    function P(e) {
      return e;
    }
    function N(e) {
      return e;
    }
    function M(e) {
      return e * 1e3;
    }
    function w(e, t) {
      return A(V(), e, t);
    }
    function A(e, t, n) {
      var r = Math.max(t + n - e, 0);
      return Math.min(1e3 * r, ~(1 << 31));
    }
    function F(e, t) {
      var n = t != null ? t : V();
      return k(Math.ceil(n + Math.max(e, 0)));
    }
    function O(e, t) {
      var n = t != null ? t : V();
      return k(Math.ceil(n - Math.max(e, 0)));
    }
    var B = Math.pow(2, 48);
    function W(e) {
      return e >= B ? $() + 6e4 : e;
    }
    function q(e) {
      var t = Math.max(e - V(), 0);
      return Math.min(1e3 * t, ~(1 << 31));
    }
    function U(t) {
      var r = q(t);
      return new (e || (e = n("Promise")))(function (e) {
        return void setTimeout(e, r);
      });
    }
    function V() {
      return k(Date.now() / 1e3 - S);
    }
    function H() {
      return k(Date.now() / 1e3);
    }
    function G() {
      return k(new Date().setHours(0, 0, 0, 0) / 1e3 - S);
    }
    function z() {
      return Date.now() - S * 1e3;
    }
    function j(e) {
      return Math.max(e - V(), 0);
    }
    function K(e) {
      return j(e) > 0;
    }
    function Q() {
      return performance.now();
    }
    function X(e) {
      return Math.floor(performance.now() - e);
    }
    function Y(e, t) {
      return e < t ? e : t;
    }
    var J = (function () {
      function e() {
        var e = Q();
        ((this.$1 = e), (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.reset = function () {
          this.$2 = Q();
        }),
        (t.elapsed = function () {
          return X(this.$2);
        }),
        (t.cumulative = function () {
          return X(this.$1);
        }),
        e
      );
    })();
    function Z(e, t, n) {
      return Math.abs(e - t) <= n;
    }
    function ee(e, t) {
      return Z(V(), e, t);
    }
    function te(e) {
      return new Date(e * 1e3);
    }
    function ne(e, t) {
      if (Math.abs(e - t) > d) return !1;
      var n = v.time === e ? v.day : te(e + S).getDay(),
        r = v.time === t ? v.day : te(t + S).getDay();
      return ((v.time = t), (v.day = r), n === r);
    }
    function re(e) {
      var t = Number.parseInt(e, 16);
      return Number.isFinite(t) ? new Date(k(t) * 1e3) : null;
    }
    function oe() {
      return Date.now();
    }
    function ae(e) {
      var t = new Date(e);
      return isNaN(t) ? null : I(t.getTime());
    }
    function ie(e, t) {
      var n = Math.abs(e - t);
      return Math.ceil(n / g);
    }
    function le(e) {
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
      (l.castMillisTimeToUnixTime = x),
      (l.millisTime = $),
      (l.castToMillisTime = P),
      (l.fromMillisTime = N),
      (l.castUnixTimeToMillisTime = M),
      (l.timeoutFor = w),
      (l.timeoutForAt = A),
      (l.futureUnixTime = F),
      (l.pastUnixTime = O),
      (l.miAdjustTimestamp = W),
      (l.cappedMillisecondsUntil = q),
      (l.delayUntil = U),
      (l.unixTime = V),
      (l.unixTimeWithoutClockSkewCorrection = H),
      (l.midnight = G),
      (l.unixTimeMs = z),
      (l.secondsUntil = j),
      (l.isInFuture = K),
      (l.monotonicTime = Q),
      (l.monotonicTimeSince = X),
      (l.oldest = Y),
      (l.MonotonicTimer = J),
      (l.happenedWithinAt = Z),
      (l.happenedWithin = ee),
      (l.toDate = te),
      (l.sameDay = ne),
      (l.convertHexToDate = re),
      (l.performanceAbsoluteNow = oe),
      (l.convertISO8601DateFormatToUnixTime = ae),
      (l.daysDiff = ie),
      (l.weekOfYear = le));
  },
  98,
);
