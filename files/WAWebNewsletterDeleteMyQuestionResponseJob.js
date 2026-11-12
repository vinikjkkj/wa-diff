__d(
  "WAWebNewsletterDeleteMyQuestionResponseJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebAddonNewsletterQuestionResponseTableMode",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebNewsletterDeleteMyQuestionResponseQuery",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteMyNewsletterQuestionResponse",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              yield o(
                "WAWebAddonNewsletterQuestionResponseTableMode",
              ).newsletterQuestionResponseTableMode.bulkRemoveByMsgKey([
                s(e.newsletterJid, e.messageId),
              ]),
              yield o(
                "WAWebNewsletterDeleteMyQuestionResponseQuery",
              ).deleteMyQuestionResponseQuery(e)
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
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
