__d(
  "WAWebNewsletterSendQuestionResponseJob",
  [
    "WAAckLevel",
    "WALogger",
    "WAWebAddonNewsletterQuestionResponseTableMode",
    "WAWebNewsletterSendMessageJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = e.msg,
        n = e.newsletterJid,
        r = e.parentMsgServerId;
      try {
        var a = await o("WAWebNewsletterSendMessageJob").sendNewsletterMessage({
          type: "newsletterQuestionResponse",
          newsletterJid: n,
          parentMsgServerId: r,
          msg: t,
        });
        return (a.success && (await c(u(t, a))), a);
      } catch (e) {
        throw e;
      }
    }
    function u(e, t) {
      return babelHelpers.extends({}, e, {
        ack: o("WAAckLevel").ACK.SENT,
        t: t.ack.t,
        questionResponseInfo: babelHelpers.extends({}, e.questionResponseInfo, {
          responseServerId: t.responseServerId,
        }),
      });
    }
    async function c(t) {
      try {
        await o(
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
    }
    l.sendAndStoreQuestionResponse = s;
  },
  98,
);
