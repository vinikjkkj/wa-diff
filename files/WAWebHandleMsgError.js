__d(
  "WAWebHandleMsgError",
  [
    "$InternalEnum",
    "WACustomError",
    "WAWebMdBadDeviceSentMessageWamEvent",
    "WAWebWamEnumDsmError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        ((e = {}),
        (e[o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER] = o(
          "WAWebWamEnumE2eFailureReason",
        ).E2E_FAILURE_REASON.INVALID_DSM_SENDER),
        (e[o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM] = o(
          "WAWebWamEnumE2eFailureReason",
        ).E2E_FAILURE_REASON.DSM_MISSING),
        (e[o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM] = o(
          "WAWebWamEnumE2eFailureReason",
        ).E2E_FAILURE_REASON.INVALID_DSM),
        e),
      c = (function (e) {
        function t(t, n) {
          var r;
          return (
            n === o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM
              ? (r =
                  e.call(this, "message should be deviceSentMessage") || this)
              : n === o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER
                ? (r =
                    e.call(this, "message should not be deviceSentMessage") ||
                    this)
                : n === o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM
                  ? (r = e.call(this, "invalid deviceSentMessage") || this)
                  : (r =
                      e.call(this, "unknown deviceSentMessage error") || this),
            (r.name = "DeviceSentMessageError"),
            new (o(
              "WAWebMdBadDeviceSentMessageWamEvent",
            ).MdBadDeviceSentMessageWamEvent)({
              peerType: t,
              dsmError: n,
            }).commit(),
            (r.peerType = t),
            (r.dsmError = n),
            (r.e2eFailureReason = u[n]),
            babelHelpers.assertThisInitialized(r)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((s = o("WACustomError")).CustomError),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "UnknownDeviceMessageError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      m = (function (e) {
        function t(t, n, r) {
          var o, a;
          return (
            (a = e.call(this, typeof t == "string" ? t : String(t)) || this),
            (a.name = "MessageValidationError"),
            (a.code = t),
            (a.e2eFailureReason = n),
            (a.sendLogs =
              (o = r == null ? void 0 : r.sendLogs) != null ? o : !0),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      p = n("$InternalEnum")({
        MessageNotAllowed: 420,
        StaleGroupAddressingMode: 421,
        NewChatMessagesCapped: 475,
      }),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "Received Nack error code " +
                  (t != null ? t : "") +
                  " from Server on message sent",
              ) || this),
            (n.name = "MessageSentAckError"),
            (n.ackErrorCode = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      f = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "BizNodeValidationError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s.CustomError),
      g = n("$InternalEnum")({
        INVALID_POLL_UPDATE_STANZA: "poll_update_message_stanza_invalid",
        INVALID_REACTION_STANZA: "reaction_message_stanza_invalid",
        INVALID_PIN_IN_CHAT_STANZA: "pin_in_chat_message_stanza_invalid",
        INVALID_COMMENT_STANZA: "comment_message_stanza_invalid",
        INVALID_EVENT_RESPONSE_STANZA: "event_response_message_stanza_invalid",
        INVALID_EVENT_EDIT_STANZA: "event_edit_message_stanza_invalid",
        INVALID_EDIT_STANZA: "edit_message_stanza_invalid",
        INVALID_NEWSLETTER_EDIT_STANZA: "newsletter_edit_stanza_invalid",
        INVALID_POLL_EDIT_STANZA: "poll_edit_message_stanza_invalid",
        INVALID_MEMBER_TAG_STANZA: "member_tag_message_stanza_invalid",
      }),
      h = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                t,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .MESSAGE_TYPE_MISMATCH,
              ) || this),
            (n.name = "MessageProtobufMismatchError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(m),
      y = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "Received " + t.length + " message keys: " + t.join(", "),
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_NUMBER_OF_MESSAGE_TYPES,
              ) || this),
            (n.name = "MessageProtobufInvalidMessageTypes"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(m);
    ((l.DeviceSentMessageError = c),
      (l.UnknownDeviceMessageError = d),
      (l.MessageValidationError = m),
      (l.MessageSentAckErrorCode = p),
      (l.MessageSentAckError = _),
      (l.BizNodeValidationError = f),
      (l.MessageProtobufMismatchErrorCode = g),
      (l.MessageProtobufMismatchError = h),
      (l.MessageProtobufInvalidMessageTypes = y));
  },
  98,
);
