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
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.isSender)
            try {
              t.type === "NewsletterQuestionResponseRevokeFanout"
                ? yield m(t)
                : yield c(t);
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
                .sendLogs(
                  "newsletter-failed-to-handle-question-response-fanout",
                );
            }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
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
            a = _(e);
          yield o(
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
                body: f(e.payload),
                questionResponseInfo: {
                  responseServerId: e.responseServerId,
                  starred: !1,
                },
              },
            ),
          ]);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebAddonNewsletterQuestionResponseTableMode",
          ).newsletterQuestionResponseTableMode.bulkRemoveByMsgKey([_(e)]);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return new (r("WAWebMsgKey"))({ fromMe: !0, remote: e.from, id: e.id });
    }
    function f(e) {
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
