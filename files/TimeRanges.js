__d(
  "TimeRanges",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e(e) {
        ((this.$1 = []), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.start = function (t) {
          return (this.$1[t] || s(0, 2205), this.$1[t].startTime);
        }),
        (t.end = function (t) {
          return (this.$1[t] || s(0, 2205), this.$1[t].endTime);
        }),
        (t.length = function () {
          return this.$1.length;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
