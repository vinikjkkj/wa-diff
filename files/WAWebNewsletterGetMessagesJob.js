__d(
  "WAWebNewsletterGetMessagesJob",
  [
    "WAJobOrchestratorTypes",
    "WATimeUtils",
    "WAWebJidToWid",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGetMessagesQueryJob",
    "WAWebNewsletterValidationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, r) {
      return (
        o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(e),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "getNewsletterMessages",
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                  "WAWebNewsletterGetMessagesQueryJob",
                ).queryNewsletterMessagesByJid(e, t, r),
                a = o("WAWebJidToWid").jidWithTypeToWid({
                  jidType: "newsletter",
                  newsletterJid: e,
                }),
                i = yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).getMsgsAndAddOnsFromUpdates(n.messages, a, n.timestamp);
              return babelHelpers.extends({}, i, {
                timestamp: o("WATimeUtils").castToUnixTime(n.timestamp),
              });
            }),
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    l.getNewsletterMessages = e;
  },
  98,
);
