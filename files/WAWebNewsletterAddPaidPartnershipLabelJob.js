__d(
  "WAWebNewsletterAddPaidPartnershipLabelJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterAddPaidPartnershipLabelJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, r, a, i) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "addPaidPartnershipLabel",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var n = yield o(
                "WAWebMexNewsletterAddPaidPartnershipLabelJob",
              ).mexNewsletterAddPaidPartnershipLabelJob(t, r, i);
              return (
                n === !0 &&
                  (yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkCreateOrMerge([
                      { id: a, hasPaidPartnershipLabel: !0 },
                    ])),
                n
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
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.addPaidPartnershipLabel = s;
  },
  98,
);
