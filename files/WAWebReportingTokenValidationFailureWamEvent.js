__d(
  "WAWebReportingTokenValidationFailureWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEditType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumReportingTokenValidationFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ReportingTokenValidationFailure: [
            5466,
            {
              editType: [1, o("WAWebWamEnumEditType").EDIT_TYPE],
              isLid: [5, e.TYPES.BOOLEAN],
              isMessageMediaRetry: [10, e.TYPES.BOOLEAN],
              isMessageRetry: [6, e.TYPES.BOOLEAN],
              isPartOfGroupHistory: [13, e.TYPES.BOOLEAN],
              isSecretEncryptedMsg: [8, e.TYPES.BOOLEAN],
              messageIsForward: [11, e.TYPES.BOOLEAN],
              messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [3, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              offline: [7, e.TYPES.BOOLEAN],
              reportingTokenValidationFailureReason: [
                4,
                o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON,
              ],
              reportingTokenVersion: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ReportingTokenValidationFailure: [] },
      );
    l.ReportingTokenValidationFailureWamEvent = s;
  },
  98,
);
