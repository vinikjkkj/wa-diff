__d(
  "WAWebDebugConsumerQuickPromotions",
  [
    "WAWebConsumerFetchQuickPromotions",
    "WAWebConsumerQuickPromotionActionMutation",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("vulture")("m3YHmtn-8qprwzlZtrOIzll6Zrk="),
        o("WAWebConsumerFetchQuickPromotions")
          .fetchConsumerQuickPromotions()
          .then(function (e) {})
          .catch(function (e) {})
      );
    }
    ((e.doc = "Fetch consumer quick promotions"), (e.paramsToExecute = []));
    function s(e) {
      return (
        r("vulture")("fYk6g90jateeirEM5H_CVMuzwZ4="),
        o("WAWebConsumerQuickPromotionActionMutation")
          .executeConsumerQuickPromotionActionMutation(e)
          .then(function (e) {})
          .catch(function (e) {})
      );
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
