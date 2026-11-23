__d(
  "WAWebNewsletterDeleteMyQuestionResponseJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebAddonNewsletterQuestionResponseTableMode",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebNewsletterDeleteMyQuestionResponseQuery",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteMyNewsletterQuestionResponse",
          async function () {
            return (
              await o(
                "WAWebAddonNewsletterQuestionResponseTableMode",
              ).newsletterQuestionResponseTableMode.bulkRemoveByMsgKey([
                s(e.newsletterJid, e.messageId),
              ]),
              await o(
                "WAWebNewsletterDeleteMyQuestionResponseQuery",
              ).deleteMyQuestionResponseQuery(e)
            );
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function s(e, t) {
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: o("WAWebJidToWid").jidWithTypeToWid({
          jidType: "newsletter",
          newsletterJid: e,
        }),
        id: t,
      });
    }
    l.deleteMyNewsletterQuestionResponse = e;
  },
  98,
);
