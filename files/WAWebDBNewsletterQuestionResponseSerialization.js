__d(
  "WAWebDBNewsletterQuestionResponseSerialization",
  [
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProtobufsMdStorageMsgRowOpaqueData.pb",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "decodeProtobuf",
    "encodeProtobuf",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return {
        msgKey: e.id.toString(),
        parentMsgKey: e.parentMsgKey.toString(),
        parentServerId: e.parentServerId,
        t: e.t,
        ack: e.ack,
        sender: (t = e.author) == null ? void 0 : t.toString(),
        read: e.read,
        msgRowOpaqueData: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
              .MsgRowOpaqueDataSpec,
            { currentMsg: { body: e.body } },
          )
          .readBuffer(),
        questionResponseInfo: e.questionResponseInfo,
      };
    }
    function s(e) {
      var t = r("WAWebMsgKey").from(e.msgKey),
        n = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
          e.msgRowOpaqueData,
        ),
        a = n.currentMsg;
      return babelHelpers.extends(
        { id: t },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          author:
            e.sender != null
              ? o("WAWebWidFactory").createUserWidOrThrow(e.sender)
              : void 0,
          type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
          kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          parentMsgKey: r("WAWebMsgKey").from(e.parentMsgKey),
          parentServerId: e.parentServerId,
          t: e.t,
          ack: e.ack,
          read: e.read,
          body: r("nullthrows")(
            a == null ? void 0 : a.body,
            "question response row without body",
          ),
          questionResponseInfo: e.questionResponseInfo,
        },
      );
    }
    ((l.dbRowFromNewsletterQuestionResponse = e),
      (l.newsletterQuestionResponseFromDbRow = s));
  },
  98,
);
