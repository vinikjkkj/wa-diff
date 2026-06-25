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
        a = e.fetchedResponse,
        i = e.newsletterJid,
        l = e.questionId,
        s = e.questionServerId,
        u = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          a.messageNewsletterQuestionResponseMixin.plaintextPayloadMixin
            .elementValue,
        ),
        c = o("WAWebJidToWid").jidWithTypeToWid({
          jidType: "newsletter",
          newsletterJid: i,
        }),
        d = new (r("WAWebMsgKey"))({ remote: c, fromMe: !1, id: a.messageId }),
        m =
          u == null || (t = u.questionResponseMessage) == null
            ? void 0
            : t.text;
      if (m == null)
        throw r("err")("Question response message with undefined body");
      if (!m) throw r("err")("Question response message with empty body");
      var p = a.messageNewsletterQuestionResponseMixin.metaResponseServerId;
      if (p == null)
        throw r("err")("Question response received without response server id");
      return {
        id: d,
        parentMsgKey: l,
        type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
        kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: a.messageT,
        from: c,
        to: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        isNewMsg: !1,
        ack: o("WAWebAck").ACK.SENT,
        body: m,
        questionResponseInfo: {
          responseServerId: p,
          senderNotifyName: a.senderNotifyName,
          senderPictureDirectPath: a.senderPictureDirectPath,
          replied:
            (n = a.questionResponseFlagsMixin) == null
              ? void 0
              : n.hasFlagsRepliedFlagMixin,
        },
        parentServerId: s,
        author:
          a.senderLid != null
            ? o("WAWebWidFactory").createUserWidOrThrow(a.senderLid)
            : void 0,
      };
    }
    l.getNewsletterQuestionResponses = e;
  },
  98,
);
