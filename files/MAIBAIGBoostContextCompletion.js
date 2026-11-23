__d(
  "MAIBAIGBoostContextCompletion",
  ["MAIBAIGBoostToolName"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        (e == null ? void 0 : e.is_completed) === !0 &&
        (e.tool_status == null || e.tool_status === "COMPLETED")
      );
    }
    function s(e) {
      return (
        e != null &&
        (e.tool_status === "completed" || e.tool_status === "COMPLETED") &&
        (e.is_completed == null || e.is_completed === !0)
      );
    }
    function u(e) {
      return e.findLast(function (e) {
        return e.tool_name === String(r("MAIBAIGBoostToolName").CONTEXT);
      });
    }
    ((l.isMAIBAIGBoostContextCompleted = e),
      (l.isMAIBAIGBoostContextLayoutCompleted = s),
      (l.getLatestMAIBAIGBoostContextCall = u));
  },
  98,
);
