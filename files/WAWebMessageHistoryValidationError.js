__d(
  "WAWebMessageHistoryValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MISSING_MESSAGE_HISTORY_BUNDLE: "message_history_missing_bundle",
        MISSING_MIMETYPE: "message_history_missing_mimetype",
        INVALID_MIMETYPE: "message_history_invalid_mimetype",
        MISSING_FILE_SHA256: "message_history_missing_file_sha256",
        INVALID_FILE_SHA256_LENGTH:
          "message_history_invalid_file_sha256_length",
        MISSING_MEDIA_KEY: "message_history_missing_media_key",
        INVALID_MEDIA_KEY_LENGTH: "message_history_invalid_media_key_length",
        MISSING_FILE_ENC_SHA256: "message_history_missing_file_enc_sha256",
        INVALID_FILE_ENC_SHA256_LENGTH:
          "message_history_invalid_file_enc_sha256_length",
        MISSING_DIRECT_PATH: "message_history_missing_direct_path",
        MISSING_MESSAGE_HISTORY_METADATA: "message_history_missing_metadata",
        INVALID_HISTORY_RECEIVERS_LENGTH:
          "message_history_invalid_receivers_length",
        MISSING_OLDEST_MESSAGE_TIMESTAMP:
          "message_history_missing_oldest_timestamp",
        INVALID_MESSAGE_COUNT: "message_history_invalid_message_count",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "MessageHistoryValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.MessageHistoryValidationErrorCode = e),
      (l.MessageHistoryValidationError = s));
  },
  98,
);
