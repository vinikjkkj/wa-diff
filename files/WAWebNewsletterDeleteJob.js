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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteNewsletter",
          async function () {
            try {
              return (
                await o("WAWebMexDeleteNewsletterJob").mexDeleteNewsletter(t),
                await o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(
                  t.toString(),
                ),
                await o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(
                  o("WAWebJidToWid").newsletterJidToWid(t),
                ),
                await o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.deleteNewsletter = s;
  },
  98,
);
