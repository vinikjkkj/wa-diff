__d(
  "AdsBaseValidator",
  ["abstractMethod"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = "Unspecified_" + this.constructor.name;
      }
      var t = e.prototype;
      return (
        (t.getName = function () {
          return this.$1;
        }),
        (t.getDependencies = function () {
          return r("abstractMethod")("AdsBaseValidator", "getDependencies");
        }),
        (t.shouldValidate = function (t) {
          return r("abstractMethod")("AdsBaseValidator", "shouldValidate");
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
