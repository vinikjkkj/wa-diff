__d(
  "WAWebVoipStackInterfaceLoadTelemetry",
  ["WAWebCoreActionsODS", "WAWebODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("WAWebODS").incr("web.call.voip_stack_interface.load_attempt_failure");
    }
    function s() {
      r("WAWebODS").incr("web.call.voip_stack_interface.load_retry_exhausted");
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
