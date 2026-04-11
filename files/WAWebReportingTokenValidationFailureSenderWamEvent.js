__d(
  "WAWebReportingTokenValidationFailureSenderWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumReportingTokenValidationFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ReportingTokenValidationFailureSender: [
            6094,
            {
              clientMessageId: [1, e.TYPES.STRING],
              e2eReceiverType: [2, o("WAWebWamEnumDeviceType").DEVICE_TYPE],
              e2eSenderType: [
                3,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              editType: [4, o("WAWebWamEnumEditType").EDIT_TYPE],
              groupHistoryBundleMessageId: [16, e.TYPES.STRING],
              isLid: [5, e.TYPES.BOOLEAN],
              isMessageMediaRetry: [14, e.TYPES.BOOLEAN],
              isMessageRetry: [6, e.TYPES.BOOLEAN],
              isSecretEncryptedMsg: [12, e.TYPES.BOOLEAN],
              messageIsForward: [15, e.TYPES.BOOLEAN],
              messageMediaType: [7, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [8, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              offline: [9, e.TYPES.BOOLEAN],
              reportingTokenValidationFailureReason: [
                10,
                o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON,
              ],
              reportingTokenVersion: [13, e.TYPES.INTEGER],
              senderJid: [11, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { ReportingTokenValidationFailureSender: [] },
      );
    l.ReportingTokenValidationFailureSenderWamEvent = s;
  },
  98,
);
