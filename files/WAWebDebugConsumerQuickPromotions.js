__d(
  "WAWebDebugConsumerQuickPromotions",
  ["WAWebConsumerFetchQuickPromotions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebConsumerFetchQuickPromotions")
        .fetchConsumerQuickPromotions()
        .then(function (e) {})
        .catch(function (e) {});
    }
    ((e.doc = "Fetch consumer quick promotions"), (e.paramsToExecute = []));
    var s = { fetchConsumerQuickPromotions: e };
    l.default = s;
  },
  98,
);
