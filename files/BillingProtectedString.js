__d(
  "BillingProtectedString",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e;
        this.getValue_DO_NOT_USE = function () {
          return t;
        };
      }
      var t = e.prototype;
      return (
        (t.toString = function () {
          return "";
        }),
        (t.getLength = function () {
          return this.getValue_DO_NOT_USE().length;
        }),
        (t.validate_DO_NOT_LOG = function (t) {
          return t(this.getValue_DO_NOT_USE());
        }),
        (t.transform_DO_NOT_LOG = function (t) {
          return t(this.getValue_DO_NOT_USE());
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
