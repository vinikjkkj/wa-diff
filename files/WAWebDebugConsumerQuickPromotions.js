__d(
  "WAWebDebugConsumerQuickPromotions",
  [
    "WAWebConsumerFetchQuickPromotions",
    "WAWebConsumerQuickPromotionActionMutation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebConsumerFetchQuickPromotions")
        .fetchConsumerQuickPromotions()
        .then(function (e) {})
        .catch(function (e) {});
    }
    ((e.doc = "Fetch consumer quick promotions"), (e.paramsToExecute = []));
    function s(e) {
      return o("WAWebConsumerQuickPromotionActionMutation")
        .executeConsumerQuickPromotionActionMutation(e)
        .then(function (e) {})
        .catch(function (e) {});
    }
    s.doc = "Execute consumer quick promotion action";
    var u = {
      executeConsumerQuickPromotionActionMutation: s,
      fetchConsumerQuickPromotions: e,
    };
    l.default = u;
  },
  98,
);
