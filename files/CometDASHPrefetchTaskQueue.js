__d(
  "CometDASHPrefetchTaskQueue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = [];
        }
        var t = e.prototype;
        return (
          (t.enqueue = function (t) {
            this.$1.push(t);
          }),
          (t.isEmpty = function () {
            return this.$1.length === 0;
          }),
          (t.dequeue = function () {
            return this.$1.shift();
          }),
          (t.getNextPrefetchTask = function () {
            return this.$1[0];
          }),
          (t.clear = function () {
            this.$1 = [];
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
