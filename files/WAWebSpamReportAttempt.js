__d(
  "WAWebSpamReportAttempt",
  [
    "WAErrors",
    "WASmaxParsingFailure",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebSpamReportPerfWamEvent",
    "WAWebWamEnumReportStatus",
    "WAWebWiTraceId",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
      SUCCESS: 0,
      DELIVERY_FAILURE: -1,
      NETWORK_UNAVAILABLE: -2,
      UNKNOWN: -3,
      CANCELLED: -4,
    });
    function s(t, n, r) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "enable_spam_reporting_pre_logging",
        )
      )
        return r(void 0);
      var a = o("WAWebWiTraceId").generateWiTraceId(),
        i = {
          reportDurationMs: 0,
          reportSpamFlow: t,
          reportAttemptCount: n,
          wiTraceId: a,
        };
      new (o("WAWebSpamReportPerfWamEvent").SpamReportPerfWamEvent)(
        babelHelpers.extends({}, i, {
          reportStatus: o("WAWebWamEnumReportStatus").REPORT_STATUS.STARTED,
        }),
      ).commit();
      var l = new (o("WAWebSpamReportPerfWamEvent").SpamReportPerfWamEvent)(
        babelHelpers.extends({}, i, {
          reportStatus: o("WAWebWamEnumReportStatus").REPORT_STATUS.FAILURE,
        }),
      );
      l.startReportDurationMs();
      var s = r(a);
      return (
        s.then(
          function () {
            return c(
              l,
              o("WAWebWamEnumReportStatus").REPORT_STATUS.SUCCESS,
              e.SUCCESS,
            );
          },
          function (e) {
            return c(
              l,
              o("WAWebWamEnumReportStatus").REPORT_STATUS.FAILURE,
              u(e),
            );
          },
        ),
        s
      );
    }
    function u(t) {
      return t instanceof o("WAWebBackendErrors").ServerStatusCodeError
        ? t.statusCode
        : t instanceof o("WAErrors").Offline
          ? e.NETWORK_UNAVAILABLE
          : t instanceof o("WAErrors").Disconnected ||
              t instanceof o("WASmaxParsingFailure").SmaxParsingFailure
            ? e.DELIVERY_FAILURE
            : t instanceof o("WAErrors").Aborted
              ? e.CANCELLED
              : e.UNKNOWN;
    }
    function c(e, t, n) {
      (e.markReportDurationMs(),
        e.set({ reportStatus: t, reportErrorCode: n }),
        e.commit());
    }
    ((l.SpamReportErrorCode = e),
      (l.sendWithSpamReportLogging = s),
      (l.getReportErrorCode = u));
  },
  98,
);
