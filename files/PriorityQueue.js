__d(
  "PriorityQueue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.comparator = e),
          (this.data = t != null ? t : []),
          this.heapify());
      }
      var t = e.prototype;
      return (
        (t.peek = function () {
          return this.size() === 0 ? null : this.data[0];
        }),
        (t.offer = function (t) {
          (this.data.push(t), this.bubbleUp(this.data.length - 1));
        }),
        (t.poll = function () {
          if (this.size() === 0) return null;
          var e = this.data[0],
            t = this.data.pop();
          return (
            this.data.length > 0 && ((this.data[0] = t), this.bubbleDown(0)),
            e
          );
        }),
        (t.clear = function () {
          this.data = [];
        }),
        (t.size = function () {
          return this.data.length;
        }),
        (t.isEmpty = function () {
          return this.data.length === 0;
        }),
        (t.heapify = function () {
          if (this.data.length > 0)
            for (var e = 1; e < this.data.length; e++) this.bubbleUp(e);
        }),
        (t.bubbleUp = function (t) {
          for (var e = t; e > 0; ) {
            var n = (e - 1) >>> 1;
            if (this.comparator(this.data[e], this.data[n])) {
              var r = this.data[n];
              ((this.data[n] = this.data[e]), (this.data[e] = r), (e = n));
            } else break;
          }
        }),
        (t.bubbleDown = function (t) {
          for (var e = t, n = this.data.length - 1; ; ) {
            var r = (e << 1) + 1,
              o = r + 1,
              a = e;
            if (
              (r <= n && this.comparator(this.data[r], this.data[a]) && (a = r),
              o <= n && this.comparator(this.data[o], this.data[a]) && (a = o),
              a !== e)
            ) {
              var i = this.data[a];
              ((this.data[a] = this.data[e]), (this.data[e] = i), (e = a));
            } else break;
          }
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
