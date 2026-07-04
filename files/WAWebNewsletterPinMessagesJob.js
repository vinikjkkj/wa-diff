__d(
  "WAWebNewsletterPinMessagesJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterPinMessagesJob",
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
          "pinNewsletterMessages",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  return yield o(
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
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted({ newsletterJid: t, messageIds: a });
    }
    l.pinNewsletterMessages = s;
  },
  98,
);
