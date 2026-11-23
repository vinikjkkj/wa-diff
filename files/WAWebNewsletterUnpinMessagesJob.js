__d(
  "WAWebNewsletterUnpinMessagesJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterUnpinMessagesJob",
    "WAWebOrchestratorNonPersistedJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "unpinNewsletterMessages",
          async function (t) {
            try {
              return await o(
                "WAWebMexNewsletterUnpinMessagesJob",
              ).mexNewsletterUnpinMessages(t.newsletterJid, t.messageIds);
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][NEWSLETTER] unpin messages failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("GQL", "MEX", "NEWSLETTER", "PIN")
                  .sendLogs("newsletter-unpin-job-failed"),
                t
              );
            }
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted({ newsletterJid: t, messageIds: n });
    }
    l.unpinNewsletterMessages = s;
  },
  98,
);
