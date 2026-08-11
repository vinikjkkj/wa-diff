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
    function s(t) {
      var r = t.messageType,
        a = t.msgId,
        i = t.newsletterJid,
        l = t.serverId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "addPaidPartnershipLabel",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t = yield o(
                "WAWebMexNewsletterAddPaidPartnershipLabelJob",
              ).mexNewsletterAddPaidPartnershipLabelJob(i, l, r);
              return (
                t === !0 &&
                  (yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkCreateOrMerge([
                      { id: a, hasPaidPartnershipLabel: !0 },
                    ])),
                t
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
