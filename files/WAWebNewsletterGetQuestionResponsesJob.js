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
              return s(e, t, n.from, n.questionResponsesServerId);
            });
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function s(e, t, n, a) {
      var i,
        l,
        s = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          e.messageNewsletterQuestionResponseMixin.plaintextPayloadMixin
            .elementValue,
        ),
        u = o("WAWebJidToWid").jidWithTypeToWid({
          jidType: "newsletter",
          newsletterJid: n,
        }),
        c = new (r("WAWebMsgKey"))({ remote: u, fromMe: !1, id: e.messageId }),
        d =
          s == null || (i = s.questionResponseMessage) == null
            ? void 0
            : i.text;
      if (d == null)
        throw r("err")("Question response message with undefined body");
      if (!d) throw r("err")("Question response message with empty body");
      var m = e.messageNewsletterQuestionResponseMixin.metaResponseServerId;
      if (m == null)
        throw r("err")("Question response received without response server id");
      return {
        id: c,
        parentMsgKey: t,
        type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
        kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: e.messageT,
        from: u,
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        isNewMsg: !1,
        ack: o("WAWebAck").ACK.SENT,
        body: d,
        questionResponseInfo: {
          responseServerId: m,
          senderNotifyName: e.senderNotifyName,
          senderPictureDirectPath: e.senderPictureDirectPath,
          replied:
            (l = e.questionResponseFlagsMixin) == null
              ? void 0
              : l.hasFlagsRepliedFlagMixin,
        },
        parentServerId: a,
        author:
          e.senderLid != null
            ? o("WAWebWidFactory").createUserWidOrThrow(e.senderLid)
            : void 0,
      };
    }
    l.getNewsletterQuestionResponses = e;
  },
  98,
);
