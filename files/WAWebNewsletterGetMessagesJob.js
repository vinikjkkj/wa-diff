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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(e),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "getNewsletterMessages",
            async function () {
              var r = await o(
                  "WAWebNewsletterGetMessagesQueryJob",
                ).queryNewsletterMessagesByJid(e, t, n),
                a = o("WAWebJidToWid").jidWithTypeToWid({
                  jidType: "newsletter",
                  newsletterJid: e,
                }),
                i = await o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).getMsgsAndAddOnsFromUpdates(r.messages, a, r.timestamp);
              return babelHelpers.extends({}, i, {
                timestamp: o("WATimeUtils").castToUnixTime(r.timestamp),
              });
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    l.getNewsletterMessages = e;
  },
  98,
);
