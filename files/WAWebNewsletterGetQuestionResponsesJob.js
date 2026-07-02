__d(
  "WAWebNewsletterGetQuestionResponsesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebAck",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGetQuestionResponsesQuery",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterQuestionResponses",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = yield o(
              "WAWebNewsletterGetQuestionResponsesQuery",
            ).getQuestionResponsesQuery(e);
            return n.questionResponsesQuestionResponse.map(function (e) {
              return s({
                fetchedResponse: e,
                newsletterJid: n.from,
                questionId: t,
                questionServerId: n.questionResponsesServerId,
              });
            });
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function s(e) {
      var t,
        n,
        a,
        i,
        l = e.fetchedResponse,
        s = e.newsletterJid,
        u = e.questionId,
        c = e.questionServerId,
        d = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          l.messageNewsletterQuestionResponseMixin.plaintextPayloadMixin
            .elementValue,
        ),
        m = o("WAWebJidToWid").jidWithTypeToWid({
          jidType: "newsletter",
          newsletterJid: s,
        }),
        p = new (r("WAWebMsgKey"))({ remote: m, fromMe: !1, id: l.messageId }),
        _ =
          d == null || (t = d.questionResponseMessage) == null
            ? void 0
            : t.text;
      if (_ == null)
        throw r("err")("Question response message with undefined body");
      if (!_) throw r("err")("Question response message with empty body");
      var f = l.messageNewsletterQuestionResponseMixin.metaResponseServerId;
      if (f == null)
        throw r("err")("Question response received without response server id");
      return {
        id: p,
        parentMsgKey: u,
        type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
        kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: l.messageT,
        from: m,
        to: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        isNewMsg: !1,
        ack: o("WAWebAck").ACK.SENT,
        body: _,
        questionResponseInfo: {
          responseServerId: f,
          senderNotifyName: l.senderNotifyName,
          senderPictureDirectPath: l.senderPictureDirectPath,
          replied:
            (n = l.questionResponseFlagsMixin) == null
              ? void 0
              : n.hasFlagsRepliedFlagMixin,
          starred:
            (a =
              (i = l.questionResponseFlagsMixin) == null
                ? void 0
                : i.hasFlagsStarredFlagMixin) != null
              ? a
              : !1,
        },
        parentServerId: c,
        author:
          l.senderLid != null
            ? o("WAWebWidFactory").createUserWidOrThrow(l.senderLid)
            : void 0,
      };
    }
    l.getNewsletterQuestionResponses = e;
  },
  98,
);
