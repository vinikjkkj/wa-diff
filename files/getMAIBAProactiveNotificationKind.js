__d(
  "getMAIBAProactiveNotificationKind",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.notificationCategory,
        n = e.templateID,
        r = e.tipName,
        o = e.trigger;
      return t === "delivery_issue" || r === "aymt_maiba_delivery_issue_tip"
        ? "delivery_issue"
        : r === "aymt_maiba_weekly_performance_summary_tip" ||
            o === "weekly-performance-summary" ||
            n === "weekly_performance_summary"
          ? "weekly_performance"
          : r === "aymt_maiba_camo_recommendation_tip" || o === "camo"
            ? "camo"
            : null;
    }
    function l(e) {
      return e === "delivery_issue" ? "error" : "valueDescription";
    }
    ((i.getMAIBAProactiveNotificationKind = e),
      (i.getMAIBAProactiveNotificationStatusColor = l));
  },
  66,
);
