__d(
  "WAWebReportingTokenConstants",
  ["$InternalEnum", "WAEncodeString"],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = o("WAEncodeString").toUtf8("massive_little_duck"),
      u = { DEFAULT: 1, HISTORY_SYNC: -1, V3: 3 },
      c = n("$InternalEnum")({
        DropInvalidReportingToken: "drop_invalid_reporting_token",
        DropMissingReportingToken: "drop_missing_reporting_token",
        LogMissingReportingToken: "log_missing_reporting_token",
      });
    ((l.DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS = e),
      (l.GHS_NULL_REPORTING_TOKEN_CONTENT = s),
      (l.REPORTING_TOKEN_VERSION = u),
      (l.ReportingTokenValidationPolicy = c));
  },
  98,
);
