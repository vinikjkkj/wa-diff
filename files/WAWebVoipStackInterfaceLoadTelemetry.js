__d(
  "WAWebVoipStackInterfaceLoadTelemetry",
  ["WAWebCoreActionsODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebCoreActionsODS").logCallVoipStackInterfaceLoadAttemptFailure();
    }
    function s() {
      o("WAWebCoreActionsODS").logCallVoipStackInterfaceLoadRetryExhausted();
    }
    function u() {
      o("WAWebCoreActionsODS").logCallVoipStackInterfaceLoadRetrySuccess();
    }
    ((l.logVoipStackInterfaceLoadAttemptFailure = e),
      (l.logVoipStackInterfaceLoadRetryExhausted = s),
      (l.logVoipStackInterfaceLoadRetrySuccess = u));
  },
  98,
);
