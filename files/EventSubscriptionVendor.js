__d(
  "EventSubscriptionVendor",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = {};
      }
      var t = e.prototype;
      return (
        (t.addSubscription = function (t, n) {
          (n.subscriber === this || l(0, 2828),
            this.$1[t] || (this.$1[t] = []));
          var e = this.$1[t].length;
          return (this.$1[t].push(n), (n.eventType = t), (n.key = e), n);
        }),
        (t.removeAllSubscriptions = function (t) {
          t === void 0 ? (this.$1 = {}) : delete this.$1[t];
        }),
        (t.removeSubscription = function (t) {
          var e = t.eventType,
            n = t.key,
            r = this.$1[e];
          r && delete r[n];
        }),
        (t.getSubscriptionsForType = function (t) {
          return this.$1[t];
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
