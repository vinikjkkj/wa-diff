__d(
  "WAShiftTimer",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$2 = 0),
          (this.$3 = 0),
          (this.ts = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = void 0),
          (this.$8 = function () {
            var e = t.$7,
              n = t.$1;
            ((t.$3 = 0),
              (t.$2 = 0),
              (t.ts = 0),
              (t.$4 = 0),
              (t.$5 = 0),
              (t.$6 = 0),
              (t.$7 = void 0),
              n(e));
          }),
          (this.onOrBefore = function (e, n) {
            s(e);
            var r = Date.now(),
              o = r + e,
              a = t.$5;
            if (!(a !== 0 && a < o)) {
              var i = t.$6;
              (i !== 0 && o < i) ||
                ((t.$5 = o),
                t.$3 === 0 && (t.$2 === 0 || o < t.ts) && t.$9(o, e, n));
            }
          }),
          (this.forceRunNow = function (e) {
            (t.$2 !== 0 && clearTimeout(t.$2),
              t.$3 !== 0 && cancelAnimationFrame(t.$3),
              (t.$7 = e),
              t.$8());
          }),
          (this.cancel = function () {
            (t.$2 !== 0 && clearTimeout(t.$2),
              t.$3 !== 0 && cancelAnimationFrame(t.$3),
              (t.$2 = 0),
              (t.$3 = 0),
              (t.ts = 0),
              (t.$4 = 0),
              (t.$5 = 0),
              (t.$6 = 0),
              (t.$7 = void 0));
          }),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.onOrBeforeRepaint = function (t) {
          if (this.$3 === 0) {
            var e = Date.now(),
              n = this.$6;
            if (!(n !== 0 && e < n)) {
              var r = this.$5;
              ((r === 0 || e < r) && (this.$5 = e),
                this.$2 !== 0 && (clearTimeout(this.$2), (this.$2 = 0)),
                (!this.ts || this.ts > e) && (this.ts = e),
                (this.$7 = t),
                (this.$3 = requestAnimationFrame(this.$8)));
            }
          }
        }),
        (t.onOrAfter = function (t, n) {
          s(t);
          var e = Date.now(),
            r = e + t,
            o = this.$6;
          if (!(o !== 0 && r < o)) {
            var a = this.$5;
            (a !== 0 && a < r) ||
              ((this.$6 = r),
              (this.$2 === 0 || this.ts < r) && this.$9(r, t, n));
          }
        }),
        (t.debounce = function (t, n) {
          (s(t), this.$10(Date.now(), t, n));
        }),
        (t.debounceAndCap = function (t, n, r) {
          (s(t), s(n));
          var e = Date.now(),
            o = e + n,
            a = this.$6,
            i = this.$5;
          ((a === 0 || a <= o) && (i === 0 || o < i) && (this.$5 = o),
            this.$10(e, t, r));
        }),
        (t.forceRunNowIfScheduled = function () {
          this.$2 !== 0
            ? (clearTimeout(this.$2), this.$8())
            : this.$3 !== 0 && (cancelAnimationFrame(this.$3), this.$8());
        }),
        (t.isScheduled = function () {
          return this.$2 !== 0 || this.$3 !== 0;
        }),
        (t.$10 = function (t, n, r) {
          var e = t + n,
            o = this.$6;
          if (!(o !== 0 && e < o)) {
            var a = this.ts,
              i = this.$5;
            i !== 0 && i < e
              ? a < i && this.$9(i, i - t, r)
              : a < e && this.$9(e, n, r);
          }
        }),
        (t.$9 = function (t, n, r) {
          if (
            (this.$3 !== 0 && (cancelAnimationFrame(this.$3), (this.$3 = 0)),
            (this.$7 = r),
            (this.ts = t),
            this.$2 !== 0)
          ) {
            var e = t - this.$4;
            if (-16 < e && e < 16) return;
            clearTimeout(this.$2);
          }
          ((this.$2 = setTimeout(this.$8, n)), (this.$4 = t));
        }),
        e
      );
    })();
    function s(e) {
      if (!(e >= 0)) throw r("err")("ShiftTimer must be given delayMs >= 0");
    }
    l.ShiftTimer = e;
  },
  98,
);
