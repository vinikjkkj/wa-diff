__d(
  "WAWebNewsletterSendQuestionResponseJob",
  [
    "WAAckLevel",
    "WALogger",
    "WAWebAddonNewsletterQuestionResponseTableMode",
    "WAWebNewsletterSendMessageJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.newsletterJid,
            r = e.parentMsgServerId;
          try {
            var a = yield o(
              "WAWebNewsletterSendMessageJob",
            ).sendNewsletterMessage({
              type: "newsletterQuestionResponse",
              newsletterJid: n,
              parentMsgServerId: r,
              msg: t,
            });
            return (a.success && (yield d(c(t, a))), a);
          } catch (e) {
            throw e;
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return babelHelpers.extends({}, e, {
        ack: o("WAAckLevel").ACK.SENT,
        t: t.ack.t,
        questionResponseInfo: babelHelpers.extends({}, e.questionResponseInfo, {
          responseServerId: t.responseServerId,
        }),
      });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield o(
              "WAWebAddonNewsletterQuestionResponseTableMode",
            ).newsletterQuestionResponseTableMode.bulkUpsert([t]);
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[questions] Failed to store question response",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .tags("newsletter", "questions")
              .sendLogs("newsletter-failed-to-store-question-response");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.sendAndStoreQuestionResponse = s;
  },
  98,
);
