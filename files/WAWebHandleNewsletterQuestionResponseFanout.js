__d(
  "WAWebHandleNewsletterQuestionResponseFanout",
  [
    "WAAckLevel",
    "WALogger",
    "WAWebAddonNewsletterQuestionResponseTableMode",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterDBUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "decodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      if (t.isSender)
        try {
          t.type === "NewsletterQuestionResponseRevokeFanout"
            ? await c(t)
            : await u(t);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[questions] Failed to handle a question response fanout",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .tags("newsletter", "questions")
            .sendLogs("newsletter-failed-to-handle-question-response-fanout");
        }
    }
    async function u(e) {
      var t,
        n = await o("WAWebNewsletterDBUtils").getMessageByServerId(
          e.serverId,
          e.from.toJid(),
        ),
        r =
          (t = n == null ? void 0 : n.id) != null
            ? t
            : o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(
                e.serverId,
                e.from,
              ),
        a = d(e);
      await o(
        "WAWebAddonNewsletterQuestionResponseTableMode",
      ).newsletterQuestionResponseTableMode.bulkUpsert([
        babelHelpers.extends(
          { id: a },
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            a,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
          ),
          {
            type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            parentMsgKey: r,
            parentServerId: e.serverId,
            t: e.t,
            ack: o("WAAckLevel").ACK.SENT,
            body: m(e.payload),
            questionResponseInfo: {
              responseServerId: e.responseServerId,
              starred: !1,
            },
          },
        ),
      ]);
    }
    async function c(e) {
      await o(
        "WAWebAddonNewsletterQuestionResponseTableMode",
      ).newsletterQuestionResponseTableMode.bulkRemoveByMsgKey([d(e)]);
    }
    function d(e) {
      return new (r("WAWebMsgKey"))({ fromMe: !0, remote: e.from, id: e.id });
    }
    function m(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          e,
        ),
        n = t.questionResponseMessage,
        a = n == null ? void 0 : n.text;
      if (a == null || a === "")
        throw r("err")("question response fanout without text");
      return a;
    }
    l.handleNewsletterQuestionResponseFanout = s;
  },
  98,
);
