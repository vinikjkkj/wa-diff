__d(
  "DGWStreamGroupHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = e), (this.$2 = t), (this.$3 = n));
      }
      var t = e.prototype;
      return (
        (t.onStreamGroupError = function (t) {
          this.$1(t);
        }),
        (t.onStreamGroupMustDrain = function (t) {
          this.$2(t);
        }),
        (t.onStreamGroupTransportClose = function () {
          this.$3();
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
