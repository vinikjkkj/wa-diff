__d(
  "WAWebNewsletterDeleteJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebJidToWid",
    "WAWebMexDeleteNewsletterJob",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterMetadataJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteNewsletter",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              return (
                yield o("WAWebMexDeleteNewsletterJob").mexDeleteNewsletter(t),
                yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(
                  t.toString(),
                ),
                yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(
                  o("WAWebJidToWid").newsletterJidToWid(t),
                ),
                yield o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(
                  t.toString(),
                ),
                !0
              );
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][deleteNewsletter] Failed to delete newsletter",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("newsletter-delete-job-fail"),
                t
              );
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.deleteNewsletter = s;
  },
  98,
);
