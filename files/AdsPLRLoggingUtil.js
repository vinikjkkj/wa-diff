__d(
  "AdsPLRLoggingUtil",
  ["ProductLevelReportingEventsLoggerFalcoEvent", "hyperionUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      r("ProductLevelReportingEventsLoggerFalcoEvent").log(function () {
        return babelHelpers.extends({}, t(), {
          browser_session_id: (e || (e = o("hyperionUtil"))).ClientSessionID,
        });
      });
    }
    function u(e) {
      s(function () {
        var t;
        return {
          ad_account_id: e.adAccountID,
          event_severity: "error",
          event: "ui_plr_table_call_pagination_api_error",
          time_range: e.timeRange,
          report_run_id: e.reportRunID,
          stacktrace: e.error.stack,
          debug_message:
            "table_row_cursor: " +
            String(e.tableRowCursor) +
            " | " +
            ((t = e.error.message) != null ? t : ""),
          action_data: { breakdown: e.breakdown },
        };
      });
    }
    ((l.logPLREvent = s), (l.logPLRTablePaginationError = u));
  },
  98,
);
