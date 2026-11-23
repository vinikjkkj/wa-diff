__d(
  "WAWebNewsletterPinMessagesJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterPinMessagesJob",
    "WAWebOrchestratorNonPersistedJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "pinNewsletterMessages",
          async function (t) {
            try {
              return await o(
                "WAWebMexNewsletterPinMessagesJob",
              ).mexNewsletterPinMessages(t.newsletterJid, t.messageIds);
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][NEWSLETTER] pin messages failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("GQL", "MEX", "NEWSLETTER", "PIN")
                  .sendLogs("newsletter-pin-job-failed"),
                t
              );
            }
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted({ newsletterJid: t, messageIds: n });
    }
    l.pinNewsletterMessages = s;
  },
  98,
);
