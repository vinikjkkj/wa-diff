__d(
  "WAWebPollsParsePollVoteMessageProto",
  [
    "WALongInt",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.pollUpdateMessage;
      if (!r) return null;
      var a = r.$$unknownFieldCount,
        i = a === void 0 ? 0 : a,
        l = r.pollCreationMessageKey,
        s = r.senderTimestampMs,
        u = r.vote;
      if (i > 0) return null;
      if (l == null)
        throw new (o("WAWebPollsValidationError").PollUpdateValidationError)(
          o("WAWebPollsValidationError").PollUpdateValidationErrorCode
            .MISSING_POLL_MESSAGE_KEY,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var c = o(
        "WAWebE2EProtoUtils",
      ).translateRegularMessageKeyToLocalReference(l, t);
      if (c == null)
        throw new (o("WAWebPollsValidationError").PollUpdateValidationError)(
          o("WAWebPollsValidationError").PollUpdateValidationErrorCode
            .MISSING_POLL_MESSAGE_KEY,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (s == null)
        throw new (o("WAWebPollsValidationError").PollUpdateValidationError)(
          o("WAWebPollsValidationError").PollUpdateValidationErrorCode
            .MISSING_SENDER_TIMESTAMP,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (u == null)
        throw new (o("WAWebPollsValidationError").PollUpdateValidationError)(
          o("WAWebPollsValidationError").PollUpdateValidationErrorCode
            .MISSING_UPDATE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var d = u.encIv,
        m = u.encPayload;
      if (m == null)
        throw new (o("WAWebPollsValidationError").PollUpdateValidationError)(
          o("WAWebPollsValidationError").PollUpdateValidationErrorCode
            .MISSING_VOTE_ENC_PAYLOAD,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (d == null)
        throw new (o("WAWebPollsValidationError").PollUpdateValidationError)(
          o("WAWebPollsValidationError").PollUpdateValidationErrorCode
            .MISSING_VOTE_ENC_IV,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (d.byteLength !== 12)
        throw new (o("WAWebPollsValidationError").PollUpdateValidationError)(
          o("WAWebPollsValidationError").PollUpdateValidationErrorCode
            .INVALID_VOTE_ENC_IV,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      return {
        msgData: babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
          kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
          subtype: "poll_vote",
          addonEncrypted: !0,
          pollUpdateParentKey: c,
          encPollVote: { encPayload: m, encIv: d },
          senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(s),
        }),
        contextInfo: null,
      };
    }
    l.default = e;
  },
  98,
);
