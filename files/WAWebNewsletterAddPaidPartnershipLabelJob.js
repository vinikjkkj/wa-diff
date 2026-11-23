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
    function s(t) {
      var n = t.messageType,
        r = t.msgId,
        a = t.newsletterJid,
        i = t.serverId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "addPaidPartnershipLabel",
          async function () {
            try {
              var t = await o(
                "WAWebMexNewsletterAddPaidPartnershipLabelJob",
              ).mexNewsletterAddPaidPartnershipLabelJob(a, i, n);
              return (
                t === !0 &&
                  (await o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkCreateOrMerge([
                      { id: r, hasPaidPartnershipLabel: !0 },
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
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.addPaidPartnershipLabel = s;
  },
  98,
);
