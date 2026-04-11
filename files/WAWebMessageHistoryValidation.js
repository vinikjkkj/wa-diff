__d(
  "WAWebMessageHistoryValidation",
  ["WAWebMessageHistoryValidationError", "WAWebWamEnumE2eFailureReason"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.historyReceivers == null || e.historyReceivers.length === 0)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.INVALID_HISTORY_RECEIVERS_LENGTH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (e.oldestMessageTimestampInWindow == null)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.MISSING_OLDEST_MESSAGE_TIMESTAMP,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (e.messageCount == null || Number(e.messageCount) <= 0)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.INVALID_MESSAGE_COUNT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
    }
    function s(t) {
      if (t.mimetype == null)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.MISSING_MIMETYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.mimetype !== "application/protobuf")
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.INVALID_MIMETYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.fileSha256 == null)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.MISSING_FILE_SHA256,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.fileSha256.byteLength !== 32)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.INVALID_FILE_SHA256_LENGTH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.mediaKey == null)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.MISSING_MEDIA_KEY,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.mediaKey.byteLength !== 32)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.INVALID_MEDIA_KEY_LENGTH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.fileEncSha256 == null)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.MISSING_FILE_ENC_SHA256,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.fileEncSha256.byteLength !== 32)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.INVALID_FILE_ENC_SHA256_LENGTH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.messageHistoryMetadata == null)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.MISSING_MESSAGE_HISTORY_METADATA,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      e(t.messageHistoryMetadata);
    }
    function u(t) {
      if (t.messageHistoryMetadata == null)
        throw new (o(
          "WAWebMessageHistoryValidationError",
        ).MessageHistoryValidationError)(
          o("WAWebMessageHistoryValidationError")
            .MessageHistoryValidationErrorCode.MISSING_MESSAGE_HISTORY_METADATA,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      e(t.messageHistoryMetadata);
    }
    ((l.validateMessageHistoryBundle = s),
      (l.validateMessageHistoryNotice = u));
  },
  98,
);
