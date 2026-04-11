__d(
  "WAPriorityQueue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$2 = e), (this.$1 = []), this.$3(t));
      }
      var t = e.prototype;
      return (
        (t.size = function () {
          return this.$1.length;
        }),
        (t.$3 = function (t) {
          var e = this;
          t != null &&
            t.length &&
            t.forEach(function (t) {
              e.push(t);
            });
        }),
        (t.$4 = function (t, n) {
          var e = this.$1[n];
          ((this.$1[n] = this.$1[t]), (this.$1[t] = e));
        }),
        (t.$5 = function (t) {
          if ((t === void 0 && (t = 0), t !== 0)) {
            var e = this.$6(t),
              n = e * 2 + 1,
              r = e * 2 + 2,
              o = this.$1.length;
            if (!(t >= o)) {
              var a = this.$7(e),
                i = e;
              if (n < o) {
                var l = this.$7(n);
                a > l && ((i = n), (a = l));
              }
              if (r < o) {
                var s = this.$7(r);
                a > s && (i = r);
              }
              i !== e && (this.$4(i, e), this.$5(e));
            }
          }
        }),
        (t.$8 = function (t) {
          t === void 0 && (t = 0);
          var e = t * 2 + 1,
            n = t * 2 + 2,
            r = this.$1.length;
          if (!(t >= r)) {
            var o = this.$7(t),
              a = t;
            if (e < r) {
              var i = this.$7(e);
              o > i && ((a = e), (o = i));
            }
            if (n < r) {
              var l = this.$7(n);
              o > l && (a = n);
            }
            (a !== t && this.$4(a, t),
              e < r && this.$8(e),
              n < r && this.$8(n));
          }
        }),
        (t.$7 = function (t) {
          return this.$2(this.$1[t]);
        }),
        (t.$6 = function (t) {
          return t % 2 === 0 ? (t - 2) / 2 : (t - 1) / 2;
        }),
        (t.push = function (t) {
          this.$1.push(t);
          var e = this.$1.length - 1;
          this.$5(e);
        }),
        (t.pull = function () {
          var e = this.$1.shift();
          return (this.heapify(), e);
        }),
        (t.heapify = function () {
          this.$8(0);
        }),
        (t.peek = function () {
          return this.$1[0];
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
