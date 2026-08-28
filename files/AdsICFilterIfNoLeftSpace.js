__d(
  "AdsICFilterIfNoLeftSpace",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getInvisibleReason = function () {
          return "NoSpace";
        }),
        (t.shouldHideMessageIfFailsRule = function () {
          return !0;
        }),
        (t.filter = function (t, n) {
          var e = [
              "ACTIVE_FEEDBACK",
              "ACTIVE_FEEDBACK_SUCCESS_MESSAGE",
              "ERROR",
              "WARNING",
              "LEGAL_AND_POLICY",
            ],
            r =
              e.find(function (e) {
                return e == t.getMessageContentCategory();
              }) != null;
          return this.$1 > 0 || t.getMustShow() || r;
        }),
        (t.setAvailableCap = function (t) {
          this.$1 = t;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
