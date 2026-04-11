__d(
  "WAWebMessageEditValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MISSING_PROTOCOL_KEY: "missing_protocol_key",
        MISSING_EDITED_MESSAGE: "missing_edited_message",
        MISSING_TARGET_MESSAGE_KEY: "missing_target_message_key",
        MISSING_ENC_PAYLOAD: "missing_enc_payload",
        MISSING_ENC_IV: "missing_enc_iv",
        INVALID_IV_LENGTH: "invalid_iv_length",
        MISSING_MESSAGE_SENDER: "missing_message_sender",
        MISSING_PARENT_MESSAGE_SENDER: "missing_parent_message_sender",
        INVALID_PROTOCOL_MESSAGE_TYPE: "invalid_protocol_message_type",
        MISSING_MESSAGE_SECRET: "missing_message_secret",
        MISSING_ORIGINAL_SENDER: "missing_original_sender",
        MISSING_SENDER_TIMESTAMP: "missing_sender_timestamp",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "MessageEditValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.MessageEditValidationErrorCode = e),
      (l.MessageEditValidationError = s));
  },
  98,
);
