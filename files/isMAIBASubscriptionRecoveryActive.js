__d(
  "isMAIBASubscriptionRecoveryActive",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0;
    function l() {
      return e > 0;
    }
    function s() {
      e += 1;
      var t = !0;
      return function () {
        t && ((t = !1), (e -= 1));
      };
    }
    ((i.isMAIBASubscriptionRecoveryActive = l),
      (i.registerMAIBASubscriptionRecovery = s));
  },
  66,
);
