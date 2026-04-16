__d(
  "IntervalTrackingBoundedBuffer",
  ["CircularBuffer", "ErrorPubSub", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = (function () {
        function t(e) {
          var t = this;
          if (((this.$6 = 0), e != null)) {
            if (e <= 0) {
              var n = new Error("Size for a buffer must be greater than zero.");
              throw (n.stack, n);
            }
          } else e = s;
          ((this.$4 = e),
            (this.$1 = new (r("CircularBuffer"))(e)),
            this.$1.onEvict(function () {
              t.$6++;
            }),
            (this.$2 = []),
            (this.$3 = 1),
            (this.$5 = 0));
        }
        var n = t.prototype;
        return (
          (n.open = function () {
            var e = this,
              t = this.$3++,
              n = !1,
              r,
              o = this.$5,
              a = {
                id: t,
                startIdx: o,
                hasOverflown: function () {
                  return a.getOverflowSize() > 0;
                },
                getOverflowSize: function () {
                  return r != null ? r : Math.max(e.$6 - o, 0);
                },
                close: function () {
                  return n ? [] : ((n = !0), (r = e.$6 - o), e.$7(t));
                },
              };
            return (this.$2.push(a), a);
          }),
          (n.pushElement = function (t) {
            return (this.$2.length > 0 && (this.$1.write(t), this.$5++), this);
          }),
          (n.isActive = function () {
            return this.$2.length > 0;
          }),
          (n.$8 = function (t) {
            return Math.max(t - this.$6, 0);
          }),
          (n.$7 = function (n) {
            for (var t, o, a, i, l = 0; l < this.$2.length; l++) {
              var s = this.$2[l],
                u = s.id,
                c = s.startIdx;
              (u === n ? ((a = l), (i = c)) : (o == null || c < o) && (o = c),
                (t == null || c < t) && (t = c));
            }
            if (a == null || t == null || i == null)
              return (
                (e || (e = r("ErrorPubSub"))).reportError(
                  r("err")(
                    "messed up state inside IntervalTrackingBoundedBuffer",
                  ),
                ),
                []
              );
            this.$2.splice(a, 1);
            var d = this.$8(i),
              m = this.$1.read().slice(d),
              p = this.$8(o == null ? this.$5 : o) - this.$8(t);
            return (p > 0 && (this.$1.dropFirst(p), (this.$6 += p)), m);
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
