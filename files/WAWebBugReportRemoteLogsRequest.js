__d(
  "WAWebBugReportRemoteLogsRequest",
  ["WAWebABProps", "WAWebMexRequestClientLogsForBugJob"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.bugId,
        n = e.participantIds,
        r = n === void 0 ? [] : n,
        a = e.upToTimestampSecs;
      !o("WAWebABProps").getABPropConfigValue(
        "web_bug_reporting_request_peer_log_enabled",
      ) ||
        t == null ||
        t === "" ||
        o("WAWebMexRequestClientLogsForBugJob").requestClientLogsForBugJob({
          bugId: t,
          participantIds: r,
          upToTimestampSecs: a,
        });
    }
    l.maybeRequestClientLogsForBug = e;
  },
  98,
);
