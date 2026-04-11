__d(
  "WAWebQuestionsProtoUtils",
  [
    "WALogger",
    "WAWebE2EProtoParser",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebQuestionValidationError",
    "WAWebQuestionsGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n = e.message,
        a = e.questionReplyQuotedMessage,
        i = a.quotedQuestion;
      if (i == null)
        throw new (o(
          "WAWebQuestionValidationError",
        ).QuestionReplyValidationError)(
          o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode
            .MISSING_QUOTED_QUESTION,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var l = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: i,
          msgContext: "quoted",
          message: n,
        }),
        s = (t = a.quotedResponse) == null ? void 0 : t.questionResponseMessage,
        c = u(s == null ? void 0 : s.key);
      if (!s || !c)
        throw new (o(
          "WAWebQuestionValidationError",
        ).QuestionReplyValidationError)(
          o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode
            .MISSING_QUOTED_RESPONSE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (r("isStringNullOrEmpty")(s.text))
        throw new (o(
          "WAWebQuestionValidationError",
        ).QuestionReplyValidationError)(
          o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode
            .EMPTY_RESPONSE_TEXT,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var d = a.serverQuestionId;
      if (d == null)
        throw new (o(
          "WAWebQuestionValidationError",
        ).QuestionReplyValidationError)(
          o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode
            .MISSING_QUESTION_SERVER_ID,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      return {
        quotedQuestion: l,
        questionServerId: d,
        quotedResponse: {
          id: c,
          type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
          kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
          body: s.text,
          from: l.from,
          to: l.to,
          parentMsgKey: l.id,
          parentServerId: d,
          questionResponseInfo: {},
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        },
      };
    }
    function u(e) {
      var t;
      if (!((e == null ? void 0 : e.id) == null || e.remoteJid == null))
        return new (r("WAWebMsgKey"))({
          id: e.id,
          fromMe: (t = e.fromMe) != null ? t : !1,
          remote: o("WAWebWidFactory").createWid(e.remoteJid),
        });
    }
    function c(t, n) {
      if (n)
        try {
          t.questionReplyQuotedMessage = s({
            questionReplyQuotedMessage: n,
            message: {
              from: t.from,
              to: t.to,
              id: babelHelpers.extends({}, t.id, {
                id: t.id.id + "_quoted_question",
              }),
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              count: null,
            },
          });
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[questions][replies] Invalid question reply quoted message",
                ])),
            )
            .tags("questions", "replies")
            .sendLogs("questions-invalid-question-reply-quoted-msg");
        }
    }
    function d(e) {
      var t,
        n,
        r =
          ((t = e.contextInfo) == null ? void 0 : t.isQuestion) === !0 &&
          !o("WAWebQuestionsGatingUtils").isQuestionReceiverEnabledForMsg(
            e.msgData,
          ),
        a =
          ((n = e.contextInfo) == null
            ? void 0
            : n.questionReplyQuotedMessage) != null &&
          !o("WAWebQuestionsGatingUtils").isQuestionReplyReceiverEnabledForMsg(
            e.msgData,
          );
      return r || a;
    }
    ((l.getValidatedQuestionReplyQuotedMessage = s),
      (l.maybeAddQuestionReplyQuotedMessage = c),
      (l.shouldFutureProofQuestionMessage = d));
  },
  98,
);
