__d(
  "WAWebNewsletterQuestionResponsesUtils",
  [
    "WAWebAck",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i,
        l,
        s = e.fetchedResponse,
        u = e.newsletterJid,
        c = e.questionId,
        d = e.questionServerId,
        m = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          s.messageNewsletterQuestionResponseMixin.plaintextPayloadMixin
            .elementValue,
        ),
        p = o("WAWebJidToWid").jidWithTypeToWid({
          jidType: "newsletter",
          newsletterJid: u,
        }),
        _ = new (r("WAWebMsgKey"))({ remote: p, fromMe: !1, id: s.messageId }),
        f =
          m == null || (t = m.questionResponseMessage) == null
            ? void 0
            : t.text;
      if (f == null)
        throw r("err")("Question response message with undefined body");
      if (!f) throw r("err")("Question response message with empty body");
      var g = s.messageNewsletterQuestionResponseMixin.metaResponseServerId;
      if (g == null)
        throw r("err")("Question response received without response server id");
      return {
        id: _,
        parentMsgKey: c,
        type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
        kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: s.messageT,
        from: p,
        to: o("WAWebUserUtils").getMeLidUserOrThrow(),
        isNewMsg: !1,
        ack: o("WAWebAck").ACK.SENT,
        body: f,
        questionResponseInfo: {
          responseServerId: g,
          senderNotifyName: s.senderNotifyName,
          senderPictureDirectPath: s.senderPictureDirectPath,
          replied:
            (n = s.questionResponseFlagsMixin) == null
              ? void 0
              : n.hasFlagsRepliedFlagMixin,
          starred:
            (a =
              (i = s.questionResponseFlagsMixin) == null
                ? void 0
                : i.hasFlagsStarredFlagMixin) != null
              ? a
              : !1,
          reactionCode:
            (l = s.questionResponseReactionsMixin) == null
              ? void 0
              : l.reactionsReactionCode,
        },
        parentServerId: d,
        author:
          s.senderLid != null
            ? o("WAWebWidFactory").createUserWidOrThrow(s.senderLid)
            : void 0,
      };
    }
    l.mapQuestionResponseMsgStanza = e;
  },
  98,
);
