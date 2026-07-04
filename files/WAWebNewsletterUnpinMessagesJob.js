__d(
  "WAWebNewsletterUnpinMessagesJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterUnpinMessagesJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "unpinNewsletterMessages",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  return yield o(
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
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted({ newsletterJid: t, messageIds: a });
    }
    l.unpinNewsletterMessages = s;
  },
  98,
);
