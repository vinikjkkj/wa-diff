__d(
  "FrontierComponentsBaseUPLLogger",
  ["FBPayUPLSessionIDGenerator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, a, i) {
        ((this.$4 =
          r != null ? r : o("FBPayUPLSessionIDGenerator").sessionIDGenerator()),
          (this.$3 = t != null ? t : "ecp"),
          (this.$5 = n != null ? n : "comet"),
          (this.$2 = e),
          (this.$6 = a != null ? a : null),
          (this.$1 = i != null ? i : null));
      }
      var t = e.prototype;
      return (
        (t.getSessionID = function () {
          return this.$4;
        }),
        (t.getPaymentProductId = function () {
          return this.$2;
        }),
        (t.getFlowSessionID = function () {
          var e;
          return (e = this.$1) != null ? e : null;
        }),
        (t.getPlatform = function () {
          return this.$5;
        }),
        (t.createBasicPayload = function () {
          return {
            actual_event_time: Date.now().toString(),
            payment_product_id: this.$2,
            payment_type: this.$3,
            platform: this.$5,
            session_id: this.$4,
          };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
