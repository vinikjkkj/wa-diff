__d(
  "WAWebMexRequestClientLogsForBugJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexRequestClientLogsForBugJobMutation.graphql",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebMexRequestClientLogsForBugJobMutation.graphql"));
    async function p(e) {
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
      var l = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      if (l == null)
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[bug-remote-logs] skip log request: no self LID",
                ])),
            )
            .sendLogs("bug-remote-logs-request-missing-self-lid"),
          !1
        );
      var p = {
        input: {
          bug_id: t,
          participant_ids: a,
          reporter_id: l.toString(),
          up_to_timestamp_secs: i,
        },
      };
      try {
        var _ = await o("WAWebMexClient").fetchQuery(m, p),
          f = _ == null ? void 0 : _.xwa2_request_client_logs_for_bug;
        return f !== !0
          ? (o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[bug-remote-logs] client log request failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bug-remote-logs-request-fail"),
          !1
        );
      }
    }
    l.requestClientLogsForBugJob = p;
  },
  98,
);
