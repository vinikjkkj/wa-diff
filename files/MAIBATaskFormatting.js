__d(
  "MAIBATaskFormatting",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "ONE_TIME"
        ? s._(/*BTDS*/ "")
        : e === "DAILY"
          ? s._(/*BTDS*/ "")
          : e === "WEEKLY"
            ? s._(/*BTDS*/ "")
            : e === "MONTHLY"
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
    }
    function u(e) {
      return e === "ACTIVE"
        ? s._(/*BTDS*/ "")
        : e === "PAUSED" || e === "FORCED_PAUSE"
          ? s._(/*BTDS*/ "")
          : e === "COMPLETED"
            ? s._(/*BTDS*/ "")
            : e === "EXPIRED"
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
    }
    function c(e) {
      return e === "FORCED_PAUSE";
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m(e, t) {
      return t === "PAUSED" ? e === "PAUSED" || e === "FORCED_PAUSE" : e === t;
    }
    function p(e) {
      return e === "SUCCEEDED"
        ? s._(/*BTDS*/ "")
        : e === "FAILED"
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    ((l.getMAIBATaskCadenceLabel = e),
      (l.getMAIBATaskStatusLabel = u),
      (l.isMAIBATaskAutoPaused = c),
      (l.getMAIBATaskAutoPauseWarning = d),
      (l.matchesMAIBATaskStatusFilter = m),
      (l.getMAIBAExecutionStatusLabel = p));
  },
  226,
);
