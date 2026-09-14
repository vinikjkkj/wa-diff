__d(
  "RSTEvents",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      HEART_BEAT: 0,
      BROWSER_TAB_FOREGROUND: 1,
      BROWSER_TAB_BACKGROUND: 2,
      TRACE_START: 3,
      TRACE_END: 4,
      TRACE_POLICY_SET: 5,
      INTERACTION_DATA: 6,
      SPAN_START: 7,
      SPAN_END: 8,
      LOG_FLUSH: 9,
      BROWSER_TAB_CLOSED: 10,
      RECOVERABLE_UNRESPONSIVENESS: 1e5,
      UNRECOVERABLE_UNRESPONSIVENESS: 100001,
      CHECKING_INDEXDB_FOR_EVENTS: 100002,
      CRASH_INCIDENT: 10003,
      UNRESPONSIVENESS_DETECTED: -1,
      LOGGING_UNRESPONSIVENESS_TO_INDEXDB: -2,
      NO_HEART_BEAT_SINCE_ORIGIN: -3,
    });
    function l(t) {
      return t === e.LOG_FLUSH;
    }
    ((i.RSTEvent = e), (i.isRSTFlushEvent = l));
  },
  66,
);
