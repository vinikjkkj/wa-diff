__d(
  "WAWebReactionEncMessageValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        INVALID_ENC_IV: "enc_reaction_invalid_iv",
        INVALID_ENC_PAYLOAD: "enc_reaction_invalid_payload",
        MISSING_TARGET_MSG_KEY: "enc_reaction_missing_target_msg_key",
        MISSING_MESSAGE_SECRET: "enc_reaction_missing_message_secret",
        MISSING_SENDER: "enc_reaction_missing_sender",
        MISSING_PARENT_MESSAGE: "enc_reaction_missing_parent_message",
        MISSING_PARENT_MESSAGE_SENDER:
          "enc_reaction_missing_parent_message_sender",
        DECRYPTION_FAILED: "enc_reaction_decryption_failed",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "ReactionEncMessageValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.ReactionEncValidationErrorCode = e),
      (l.ReactionEncMessageValidationError = s));
  },
  98,
);
