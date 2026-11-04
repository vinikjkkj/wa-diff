__d(
  "WebBloksVariableUpdates",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.enqueueWrite = function (t, n) {
          this.$1.set(t, n);
        }),
        (t.hasPendingWrites = function () {
          return this.$1.size > 0;
        }),
        (t.takePendingWrites = function () {
          var e = this.$1;
          return ((this.$1 = new Map()), e);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
