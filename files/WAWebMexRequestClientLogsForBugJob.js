__d(
  "WAWebMexRequestClientLogsForBugJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexRequestClientLogsForBugJobMutation.graphql",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebMexRequestClientLogsForBugJobMutation.graphql"));
    async function m(e) {
      var t = e.bugId,
        n = e.participantIds,
        a = n === void 0 ? [] : n,
        i = e.upToTimestampSecs;
      if (t === "")
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bug-remote-logs] skip log request: no bug id",
                ])),
            )
            .sendLogs("bug-remote-logs-request-missing-bug-id"),
          !1
        );
      var l = {
        input: {
          bug_id: t,
          participant_ids: a,
          reporter_id: o("WAWebUserUtils").getMeLidUserOrThrow().toString(),
          up_to_timestamp_secs: i,
        },
      };
      try {
        var m = await o("WAWebMexClient").fetchQuery(d, l),
          p = m == null ? void 0 : m.xwa2_request_client_logs_for_bug;
        return p !== !0
          ? (o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[bug-remote-logs] client log request returned false",
                  ])),
              )
              .sendLogs("bug-remote-logs-request-false"),
            !1)
          : !0;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[bug-remote-logs] client log request failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bug-remote-logs-request-fail"),
          !1
        );
      }
    }
    l.requestClientLogsForBugJob = m;
  },
  98,
);
