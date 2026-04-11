__d(
  "WAWebCommentMessageValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MISSING_COMMENT_ENC_IV: "comment_missing_enc_iv",
        MISSING_COMMENT_ENC_PAYLOAD: "comment_missing_enc_payload",
        MISSING_COMMENT_MESSAGE_KEY: "comment_missing_target_message_key",
        INVALID_COMMENT_ENC_IV: "comment_invalid_enc_iv",
        MISSING_COMMENT_SENDER: "comment_missing_sender",
        MISSING_MESSAGE_SECRET: "comment_parent_missing_message_secret",
        MISSING_ORIGINAL_MESSAGE_SENDER:
          "comment_missing_original_message_sender",
        MISSING_COMMENT_CONTENT: "comment_missing_comment_content",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "CommentMessageValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.CommentMessageValidationErrorCode = e),
      (l.CommentMessageValidationError = s));
  },
  98,
);
