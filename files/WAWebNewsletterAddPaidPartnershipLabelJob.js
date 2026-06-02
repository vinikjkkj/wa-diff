__d(
  "WAWebNewsletterAddPaidPartnershipLabelJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterAddPaidPartnershipLabelJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r, a) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "addPaidPartnershipLabel",
          async function () {
            try {
              var i = await o(
                "WAWebMexNewsletterAddPaidPartnershipLabelJob",
              ).mexNewsletterAddPaidPartnershipLabelJob(t, n, a);
              return (
                i === !0 &&
                  (await o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkCreateOrMerge([
                      { id: r, hasPaidPartnershipLabel: !0 },
                    ])),
                i
              );
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][dsa-26-paid-partnership] add label failed",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("newsletter-add-paid-partnership-label-job-failed"),
                !1
              );
            }
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.addPaidPartnershipLabel = s;
  },
  98,
);
