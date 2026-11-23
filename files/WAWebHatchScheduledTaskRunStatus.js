__d(
  "WAWebHatchScheduledTaskRunStatus",
  ["fbs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
      ["awaiting_approval", "awaitingApproval"],
      ["canceled", "cancelled"],
      ["cancelled", "cancelled"],
      ["completed", "succeeded"],
      ["deferred", "deferred"],
      ["dispatched", "dispatched"],
      ["error", "failed"],
      ["failed", "failed"],
      ["pending", "queued"],
      ["queued", "queued"],
      ["running", "running"],
      ["succeeded", "succeeded"],
      ["success", "succeeded"],
      ["timeout", "timedOut"],
    ]);
    function s(t) {
      var n = t.status.trim(),
        o = e.get(n);
      return o != null
        ? c(o)
        : n === ""
          ? r("fbs")._(/*BTDS*/ "").toString()
          : n;
    }
    function u(t) {
      var n = e.get(t.status.trim());
      return n == null ? "unknown" : d(n);
    }
    function c(e) {
      return e === "awaitingApproval"
        ? r("fbs")._(/*BTDS*/ "").toString()
        : e === "cancelled"
          ? r("fbs")._(/*BTDS*/ "").toString()
          : e === "deferred"
            ? r("fbs")._(/*BTDS*/ "").toString()
            : e === "dispatched"
              ? r("fbs")._(/*BTDS*/ "").toString()
              : e === "failed"
                ? r("fbs")._(/*BTDS*/ "").toString()
                : e === "queued"
                  ? r("fbs")._(/*BTDS*/ "").toString()
                  : e === "running"
                    ? r("fbs")._(/*BTDS*/ "").toString()
                    : e === "succeeded"
                      ? r("fbs")._(/*BTDS*/ "").toString()
                      : e === "timedOut"
                        ? r("fbs")._(/*BTDS*/ "").toString()
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                e,
                            );
                          })();
    }
    function d(e) {
      return e === "awaitingApproval"
        ? "awaiting_approval"
        : e === "cancelled"
          ? "cancelled"
          : e === "deferred"
            ? "deferred"
            : e === "dispatched"
              ? "dispatched"
              : e === "failed"
                ? "failed"
                : e === "queued"
                  ? "queued"
                  : e === "running"
                    ? "running"
                    : e === "succeeded"
                      ? "succeeded"
                      : e === "timedOut"
                        ? "timeout"
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                e,
                            );
                          })();
    }
    ((l.getHatchScheduledTaskRunStatusLabel = s),
      (l.getHatchScheduledTaskRunLogStatus = u));
  },
  226,
);
