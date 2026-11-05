__d(
  "WAWebVoipStackInterfaceLoadTelemetry",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("WAWebODS").incr("web.call.voip_stack_interface.load_attempt_failure");
    }
    function s() {
      r("WAWebODS").incr("web.call.voip_stack_interface.load_retry_exhausted");
    }
    function u() {
      r("WAWebODS").incr("web.call.voip_stack_interface.load_retry_success");
    }
    ((l.logVoipStackInterfaceLoadAttemptFailure = e),
      (l.logVoipStackInterfaceLoadRetryExhausted = s),
      (l.logVoipStackInterfaceLoadRetrySuccess = u));
  },
  98,
);
