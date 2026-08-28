__d(
  "AdsICFilterByMessageFormat",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = new Set(e);
      }
      var t = e.prototype;
      return (
        (t.getInvisibleReason = function () {
          return "InvalidDeliveryPlacement";
        }),
        (t.shouldHideMessageIfFailsRule = function () {
          return !0;
        }),
        (t.filter = function (t, n) {
          var e = t.getFormat();
          return e != null && this.$1.has(e);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
