__d(
  "WAWebPollsParsePollCreationMessageProto",
  [
    "WALongInt",
    "WAWebIsPhotoPollReceiverEnabled",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMsgType",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebNewsletterQuizOptionShuffler",
    "WAWebPollCreationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumMessageSecretAllowedType",
    "WAWebWamEnumMessageSecretErrorType",
    "compactMap",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a,
        i,
        l,
        s = e.baseMessage,
        u = e.messageProtobuf,
        c = e.msgContext,
        d = u.pollCreationMessage,
        m = u.pollCreationMessageV2,
        p = u.pollCreationMessageV3,
        _ = u.pollCreationMessageV5,
        f = u.pollCreationMessageV6,
        g =
          (t = (n = (a = d != null ? d : m) != null ? a : p) != null ? n : _) !=
          null
            ? t
            : f,
        h = r("WAWebNewsletterIsNewsletterMsg")(s),
        y = !h;
      if (g == null) return null;
      var C = g.contextInfo,
        b = g.correctAnswer,
        v = g.name,
        S = g.options,
        R = g.selectableOptionsCount,
        L = o("WAWebPollCreationUtils").getPollContentTypeFromE2EValue(
          g.pollContentType,
        ),
        E = o("WAWebPollCreationUtils").getPollTypeFromE2EValue(g.pollType),
        k = L === o("WAWebPollCreationUtils").PollContentType.IMAGE,
        I = o("WALongInt").maybeNumber(g.endTime),
        T = g.hideParticipantName != null,
        D = g.allowAddOption != null,
        x = I != null || T || D;
      if (x) {
        var $ =
            I != null &&
            !o("WAWebPollsGatingUtils").isPollEndTimeReceivingEnabled(),
          P =
            T && !o("WAWebPollsGatingUtils").isPollHideVotersReceivingEnabled(),
          N =
            D && !o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled();
        if ($ || P || N)
          return {
            msgData: babelHelpers.extends({}, s, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
            }),
            contextInfo: C,
          };
      }
      if (
        k &&
        !o("WAWebIsPhotoPollReceiverEnabled").isPhotoPollReceiverEnabled(s)
      )
        return {
          msgData: babelHelpers.extends({}, s, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          }),
          contextInfo: C,
        };
      if (v == null)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .MISSING_NAME,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (
        v.length === 0 ||
        v.length >
          o("WAWebPollsGatingUtils").MAX_POLL_NAME_LENGTH_FOR_INCOMING_MESSAGES
      )
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .INVALID_NAME,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (c === "quoted" || c === "history_quoted") {
        var M = babelHelpers.extends({}, s, {
          type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          kind: o("WAWebMsgType").MsgKind.PollCreation,
          pollName: v,
          pollOptions: null,
          pollSelectableOptionsCount: null,
          pollContentType: L,
          pollType: E,
        });
        return { msgData: M, contextInfo: C };
      }
      var w =
        (i = (l = u.messageContextInfo) == null ? void 0 : l.messageSecret) !=
        null
          ? i
          : c === "history" && r("justknobx")._("7525")
            ? s.messageSecret
            : null;
      if (y && w == null)
        throw (
          new (o(
            "WAWebMessageSecretErrorsWamEvent",
          ).MessageSecretErrorsWamEvent)({
            messageSecretAllowedList: o("WAWebWamEnumMessageSecretAllowedType")
              .MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
            messageSecretError: o("WAWebWamEnumMessageSecretErrorType")
              .MESSAGE_SECRET_ERROR_TYPE.MISSING_MESSAGE_SECRET,
          }).commit(),
          new (o("WAWebPollsValidationError").PollCreationValidationError)(
            o("WAWebPollsValidationError").PollCreationValidationErrorCode
              .MISSING_MESSAGE_SECRET,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .MISSING_MESSAGE_SECRET,
          )
        );
      if (y && (w == null ? void 0 : w.byteLength) !== 32)
        throw (
          new (o(
            "WAWebMessageSecretErrorsWamEvent",
          ).MessageSecretErrorsWamEvent)({
            messageSecretAllowedList: o("WAWebWamEnumMessageSecretAllowedType")
              .MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
            messageSecretError: o("WAWebWamEnumMessageSecretErrorType")
              .MESSAGE_SECRET_ERROR_TYPE.WRONG_LENGTH,
          }).commit(),
          new (o("WAWebPollsValidationError").PollCreationValidationError)(
            o("WAWebPollsValidationError").PollCreationValidationErrorCode
              .INVALID_MESSAGE_SECRET,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .MESSAGE_SECRET_INVALID,
          )
        );
      if (S.length === 0)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .MISSING_OPTIONS,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (R == null)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .MISSING_SELECTABLE_OPTIONS_COUNT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var A = new Set(),
        F = new Set(),
        O,
        B = o("WAWebNewsletterQuizOptionShuffler").applyViewerQuizOptionOrder(
          S,
          {
            isFromMe: s.id.fromMe,
            isNewsletter: h,
            isQuiz: E === o("WAWebPollCreationUtils").PollType.QUIZ,
            stanzaId: s.id.id,
          },
        ),
        W = r("compactMap")(B, function (e) {
          var t = e.optionHash,
            n = e.optionName;
          if (
            n == null ||
            n.length === 0 ||
            n.length >
              o("WAWebPollsGatingUtils")
                .MAX_POLL_OPTION_LENGTH_FOR_INCOMING_MESSAGES
          )
            throw new (o(
              "WAWebPollsValidationError",
            ).PollCreationValidationError)(
              o("WAWebPollsValidationError").PollCreationValidationErrorCode
                .INVALID_OPTION,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (A.has(n))
            throw new (o(
              "WAWebPollsValidationError",
            ).PollCreationValidationError)(
              o("WAWebPollsValidationError").PollCreationValidationErrorCode
                .DUPLICATE_OPTIONS,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (k) {
            if (r("isStringNullOrEmpty")(t))
              throw new (o(
                "WAWebPollsValidationError",
              ).PollCreationValidationError)(
                o("WAWebPollsValidationError").PollCreationValidationErrorCode
                  .INVALID_OPTION,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            if (F.has(t))
              throw new (o(
                "WAWebPollsValidationError",
              ).PollCreationValidationError)(
                o("WAWebPollsValidationError").PollCreationValidationErrorCode
                  .DUPLICATE_OPTIONS,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            F.add(t);
          }
          var a = A.size;
          return (
            A.add(n),
            (b == null ? void 0 : b.optionName) === n && (O = a),
            k
              ? {
                  name: n,
                  hash: o(
                    "WAWebPollOptionHashUtils",
                  ).createOptionHashHexFromString(r("nullthrows")(t)),
                  localId: a,
                }
              : { name: n, localId: a }
          );
        });
      if (
        W.length < 2 ||
        W.length > o("WAWebPollsGatingUtils").getMaxPollOptionCount()
      )
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .INVALID_OPTIONS_COUNT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (R < 0 || R > W.length)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .INVALID_SELECTABLE_OPTIONS_COUNT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var q = babelHelpers.extends({}, s, {
        type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
        kind: o("WAWebMsgType").MsgKind.PollCreation,
        pollName: v,
        pollOptions: W,
        pollSelectableOptionsCount: R,
        pollContentType: L,
        pollType: E,
        correctOptionIndex: O,
        pollEndTime: I,
        pollHideVoterNames: g.hideParticipantName,
        pollAllowAddOption: g.allowAddOption,
      });
      return { msgData: q, contextInfo: C };
    }
    l.default = e;
  },
  98,
);
