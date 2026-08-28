__d(
  "StructuredConfigBase",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getBool = function (t) {
          return this.$1.getValue(t) > 0;
        }),
        (t.getInt = function (t) {
          return this.$1.getValue(t);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
