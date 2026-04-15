__d(
  "WAWebPollsValidationError",
  ["$InternalEnum", "WACustomError", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = n("$InternalEnum"))({
        INVALID_MESSAGE_SECRET: "poll_creation_invalid_message_secret",
        INVALID_NAME: "poll_creation_invalid_name",
        INVALID_OPTIONS_COUNT: "poll_creation_invalid_options_count",
        INVALID_OPTION: "poll_creation_invalid_option",
        INVALID_SELECTABLE_OPTIONS_COUNT:
          "poll_creation_invalid_selectable_options_count",
        MISSING_MESSAGE_SECRET: "poll_creation_missing_message_secret",
        MISSING_NAME: "poll_creation_missing_name",
        MISSING_OPTIONS: "poll_creation_missing_options",
        MISSING_SELECTABLE_OPTIONS_COUNT:
          "poll_creation_missing_selectable_options_count",
        DUPLICATE_OPTIONS: "poll_creation_duplicate_options",
      }),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "PollCreationValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((e = o("WAWebHandleMsgError")).MessageValidationError),
      d = s({
        INVALID_VOTE_ENC_IV: "poll_update_invalid_vote_enc_iv",
        MISSING_POLL_MESSAGE_KEY: "poll_update_missing_poll_message_key",
        MISSING_SENDER_TIMESTAMP: "poll_update_missing_sender_timestamp",
        MISSING_UPDATE: "poll_update_missing_update",
        MISSING_VOTE_ENC_IV: "poll_update_missing_vote_enc_iv",
        MISSING_VOTE_ENC_PAYLOAD: "poll_update_missing_vote_enc_payload",
        MESSAGE_STANZA_INVALID: "poll_update_message_stanza_invalid",
      }),
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "PollUpdateValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.MessageValidationError),
      p = s({
        INVALID_MESSAGE_SECRET: "poll_vote_invalid_message_secret",
        INVALID_OPTION: "poll_vote_invalid_option",
        INVALID_OPTIONS_COUNT: "poll_vote_invalid_options_count",
        OPTION_NOT_FOUND: "poll_vote_option_not_found",
      }),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "PollVoteValidationError"),
            (n.code = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      f = s({
        INVALID_NAME: "poll_result_snapshot_invalid_name",
        INVALID_POLL_VOTES_SNAPSHOTS_COUNT:
          "poll_result_snapshot_invalid_poll_votes_snapshots_count",
        INVALID_OPTIONS_COUNT: "poll_result_snapshot_invalid_options_count",
        INVALID_OPTION: "poll_result_snapshot_invalid_option",
        INVALID_OPTION_VOTE_COUNT:
          "poll_result_snapshot_invalid_option_vote_count",
        MISSING_NAME: "poll_result_snapshot_missing_name",
        MISSING_POLL_VOTES: "poll_result_snapshot_missing_poll_votes",
        MISSING_OPTION: "poll_result_snapshot_missing_option",
        MISSING_OPTIONS: "poll_result_snapshot_missing_options",
        MISSING_OPTION_VOTE_COUNT:
          "poll_result_snapshot_missing_option_vote_count",
        DUPLICATE_OPTIONS: "poll_result_snapshot_duplicate_options",
      }),
      g = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "PollResultSnapshotValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.MessageValidationError),
      h = s({
        MESSAGE_STANZA_INVALID: "poll_edit_message_stanza_invalid",
        INVALID_EDITS: "poll_edit_invalid_edits",
        PAST_END_TIME: "poll_edit_past_end_time",
        MISSING_ENC_IV: "poll_edit_missing_enc_iv",
        INVALID_SIZE_ENC_IV: "poll_edit_invalid_size_enc_iv",
        MISSING_ENC_PAYLOAD: "poll_edit_missing_enc_payload",
        MISSING_TARGET_MESSAGE_KEY: "poll_edit_missing_target_message_key",
        MISSING_MESSAGE_SENDER: "poll_edit_missing_message_sender",
        PARENT_SENDER_MISMATCH: "poll_edit_parent_sender_mismatch",
        MISSING_EDITED_MESSAGE: "poll_edit_missing_edited_message",
        INVALID_PROTOCOL_MESSAGE_TYPE:
          "poll_edit_invalid_protocol_message_type",
        MISSING_SENDER_TIMESTAMP: "poll_edit_missing_sender_timestamp",
        MISSING_MESSAGE_SECRET: "poll_edit_missing_message_secret",
        MISSING_POLL_CREATION_MESSAGE:
          "poll_edit_missing_poll_creation_message",
        INVALID_NAME: "poll_edit_invalid_name",
        TARGET_MESSAGE_KEY_MISMATCH: "poll_edit_target_message_key_mismatch",
        OUTSIDE_EDIT_WINDOW: "poll_edit_edit_outside_edit_window",
      }),
      y = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "PollEditValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.MessageValidationError),
      C = s({
        MISSING_TARGET_MESSAGE_KEY:
          "poll_add_option_missing_target_message_key",
        MISSING_ENC_IV: "poll_add_option_missing_enc_iv",
        INVALID_SIZE_ENC_IV: "poll_add_option_invalid_size_enc_iv",
        MISSING_ENC_PAYLOAD: "poll_add_option_missing_enc_payload",
        MISSING_MESSAGE_SECRET: "poll_add_option_missing_message_secret",
        MISSING_MESSAGE_SENDER: "poll_add_option_missing_message_sender",
        ADD_OPTION_NOT_ALLOWED: "poll_add_option_not_allowed",
        MAX_OPTIONS_REACHED: "poll_add_option_max_options_reached",
        PAST_END_TIME: "poll_add_option_past_end_time",
        MISSING_POLL_OPTION: "poll_add_option_missing_poll_option",
        INVALID_OPTION: "poll_add_option_invalid_option",
        DUPLICATE_OPTIONS: "poll_add_option_duplicate_options",
        PARENT_KEY_MISMATCH: "poll_add_option_parent_key_mismatch",
      }),
      b = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "PollAddOptionValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.MessageValidationError);
    ((l.PollCreationValidationErrorCode = u),
      (l.PollCreationValidationError = c),
      (l.PollUpdateValidationErrorCode = d),
      (l.PollUpdateValidationError = m),
      (l.PollVoteValidationErrorCode = p),
      (l.PollVoteValidationError = _),
      (l.PollResultSnapshotValidationErrorCode = f),
      (l.PollResultSnapshotValidationError = g),
      (l.PollEditValidationErrorCode = h),
      (l.PollEditValidationError = y),
      (l.PollAddOptionValidationErrorCode = C),
      (l.PollAddOptionValidationError = b));
  },
  98,
);
