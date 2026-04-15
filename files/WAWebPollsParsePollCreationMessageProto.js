__d(
  "WAWebPollsParsePollCreationMessageProto",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebIsPhotoPollReceiverEnabled",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMsgType",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebPollCreationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsCagsGatingUtils",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumMessageSecretAllowedType",
    "WAWebWamEnumMessageSecretErrorType",
    "compactMap",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a,
        i,
        l = e.baseMessage,
        s = e.messageProtobuf,
        u = e.msgContext,
        c = s.pollCreationMessage,
        d = s.pollCreationMessageV2,
        m = s.pollCreationMessageV3,
        p = s.pollCreationMessageV5,
        _ = s.pollCreationMessageV6,
        f =
          (t = (n = (a = c != null ? c : d) != null ? a : m) != null ? n : p) !=
          null
            ? t
            : _,
        g = r("WAWebNewsletterIsNewsletterMsg")(l),
        h = !g;
      if (
        f == null ||
        (f === d &&
          !o("WAWebPollsCagsGatingUtils").isPollsReceivingEnabledInCags())
      )
        return null;
      var y = f.contextInfo,
        C = f.correctAnswer,
        b = f.name,
        v = f.options,
        S = f.selectableOptionsCount,
        R = o("WAWebPollCreationUtils").getPollContentTypeFromE2EValue(
          f.pollContentType,
        ),
        L = o("WAWebPollCreationUtils").getPollTypeFromE2EValue(f.pollType),
        E = R === o("WAWebPollCreationUtils").PollContentType.IMAGE,
        k = o("WALongInt").maybeNumber(f.endTime),
        I = f.hideParticipantName != null,
        T = f.allowAddOption != null,
        D = k != null || I || T;
      if (D) {
        var x =
            k != null &&
            !o("WAWebPollsGatingUtils").isPollEndTimeReceivingEnabled(),
          $ =
            I && !o("WAWebPollsGatingUtils").isPollHideVotersReceivingEnabled(),
          P =
            T && !o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled();
        if (x || $ || P)
          return {
            msgData: babelHelpers.extends({}, l, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
            }),
            contextInfo: y,
          };
      }
      if (
        E &&
        !o("WAWebIsPhotoPollReceiverEnabled").isPhotoPollReceiverEnabled(l)
      )
        return {
          msgData: babelHelpers.extends({}, l, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          }),
          contextInfo: y,
        };
      if (b == null)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .MISSING_NAME,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (
        b.length === 0 ||
        b.length >
          o("WAWebPollsGatingUtils").getMaxPollNameLengthForIncomingMessages()
      )
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .INVALID_NAME,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (u === "quoted" || u === "history_quoted") {
        var N = babelHelpers.extends({}, l, {
          type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          kind: o("WAWebMsgType").MsgKind.PollCreation,
          pollName: b,
          pollOptions: null,
          pollSelectableOptionsCount: null,
          pollContentType: R,
          pollType: L,
        });
        return { msgData: N, contextInfo: y };
      }
      var M = (i = s.messageContextInfo) == null ? void 0 : i.messageSecret;
      if (h && M == null)
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
      if (h && (M == null ? void 0 : M.byteLength) !== 32)
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
      if (v.length === 0)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .MISSING_OPTIONS,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (S == null)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .MISSING_SELECTABLE_OPTIONS_COUNT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var w = new Set(),
        A = new Set(),
        F,
        O = r("compactMap")(v, function (e) {
          var t = e.optionHash,
            n = e.optionName;
          if (
            n == null ||
            n.length === 0 ||
            n.length >
              o(
                "WAWebPollsGatingUtils",
              ).getMaxPollOptionLengthForIncomingMessages()
          )
            throw new (o(
              "WAWebPollsValidationError",
            ).PollCreationValidationError)(
              o("WAWebPollsValidationError").PollCreationValidationErrorCode
                .INVALID_OPTION,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (w.has(n))
            throw new (o(
              "WAWebPollsValidationError",
            ).PollCreationValidationError)(
              o("WAWebPollsValidationError").PollCreationValidationErrorCode
                .DUPLICATE_OPTIONS,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (E) {
            if (r("isStringNullOrEmpty")(t))
              throw new (o(
                "WAWebPollsValidationError",
              ).PollCreationValidationError)(
                o("WAWebPollsValidationError").PollCreationValidationErrorCode
                  .INVALID_OPTION,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            if (A.has(t))
              throw new (o(
                "WAWebPollsValidationError",
              ).PollCreationValidationError)(
                o("WAWebPollsValidationError").PollCreationValidationErrorCode
                  .DUPLICATE_OPTIONS,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            A.add(t);
          }
          var a = w.size;
          return (
            w.add(n),
            (C == null ? void 0 : C.optionName) === n && (F = a),
            E
              ? {
                  name: n,
                  hash: o(
                    "WAWebPollOptionHashUtils",
                  ).createOptionHashHexFromString(r("WANullthrows")(t)),
                  localId: a,
                }
              : { name: n, localId: a }
          );
        });
      if (
        O.length < 2 ||
        O.length > o("WAWebPollsGatingUtils").getMaxPollOptionCount()
      )
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .INVALID_OPTIONS_COUNT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (S < 0 || S > O.length)
        throw new (o("WAWebPollsValidationError").PollCreationValidationError)(
          o("WAWebPollsValidationError").PollCreationValidationErrorCode
            .INVALID_SELECTABLE_OPTIONS_COUNT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var B = babelHelpers.extends({}, l, {
        type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
        kind: o("WAWebMsgType").MsgKind.PollCreation,
        pollName: b,
        pollOptions: O,
        pollSelectableOptionsCount: S,
        pollContentType: R,
        pollType: L,
        correctOptionIndex: F,
        pollEndTime: k,
        pollHideVoterNames: f.hideParticipantName,
        pollAllowAddOption: f.allowAddOption,
      });
      return { msgData: B, contextInfo: y };
    }
    l.default = e;
  },
  98,
);
