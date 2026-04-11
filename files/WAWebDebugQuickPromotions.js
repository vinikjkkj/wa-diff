__d(
  "WAWebDebugQuickPromotions",
  [
    "WAWebFetchQuickPromotions",
    "WAWebModelStorageUtils",
    "WAWebQuickPromotionActionMutation",
    "WAWebSchemaQuickPromotions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["quick-promotions"], function (e) {
          var t = e[0];
          return t.clear();
        });
    }
    ((e.doc = "delete the Quick Promotion local cache"),
      (e.paramsToExecute = []));
    function s() {
      return o("WAWebFetchQuickPromotions")
        .fetchQuickPromotions()
        .then(function (e) {})
        .catch(function (e) {});
    }
    ((s.doc = "Fetch quick promotions"), (s.paramsToExecute = []));
    function u() {
      return o("WAWebSchemaQuickPromotions")
        .getQuickPromotionsTable()
        .all()
        .then(function (e) {
          return e;
        });
    }
    ((u.doc = "Get the Quick Promotion local cache"), (u.paramsToExecute = []));
    function c(e) {
      return o("WAWebQuickPromotionActionMutation")
        .executeQuickPromotionActionMutation(e)
        .then(function (e) {})
        .catch(function (e) {});
    }
    var d = {
      deleteAllQPPromotions: e,
      fetchQuickPromotions: s,
      getAllQPPromotions: u,
      executeQuickPromotionActionMutation: c,
    };
    l.default = d;
  },
  98,
);
