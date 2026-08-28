__d(
  "AdsICFilterIfDoesNotPassValidateCondition",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getInvisibleReason = function () {
          return "ValidateConditionFailure";
        }),
        (t.shouldHideMessageIfFailsRule = function () {
          return !0;
        }),
        (t.filter = function (t, n) {
          return t.getPassValidateCondition();
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
