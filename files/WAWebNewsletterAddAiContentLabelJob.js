__d(
  "WAWebNewsletterAddAiContentLabelJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMexNewsletterLabelAiContentJob",
    "WAWebMsgAIProvenance",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, n, r) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "addAiContentLabel",
          async function () {
            var a;
            try {
              a = await o(
                "WAWebMexNewsletterLabelAiContentJob",
              ).mexNewsletterLabelAiContentJob(t, n, r);
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][sgi-ai-content] label ai content mutation failed",
                      ])),
                  )
                  .tags("newsletter", "sgi", "wa-ice", "wa-spice-web")
                  .sendLogs("newsletter-label-ai-content-job-failed"),
                !1
              );
            }
            if (a !== !0) return a;
            try {
              var i =
                  r === "STATUS"
                    ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus
                    : o("WAWebDBMessageUtils").InternalIdPrefix.Default,
                l = await o("WAWebNewsletterDBUtils").getMessageByServerId(
                  Number(n),
                  t,
                  i,
                );
              l != null
                ? await o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkCreateOrMerge([
                      {
                        id: l.id.toString(),
                        aiProvenance: o(
                          "WAWebMsgAIProvenance",
                        ).withSelfDisclosed(l.aiProvenance),
                      },
                    ])
                : o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter][sgi-ai-content] msg row missing after label for serverId ",
                          "",
                        ])),
                      n,
                    )
                    .tags("newsletter", "sgi", "wa-ice", "wa-spice-web")
                    .sendLogs("newsletter-label-ai-content-row-missing");
            } catch (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][sgi-ai-content] local db merge failed after label for serverId ",
                      "",
                    ])),
                  n,
                )
                .tags("newsletter", "sgi", "wa-ice", "wa-spice-web")
                .sendLogs("newsletter-label-ai-content-db-merge-failed");
            }
            return a;
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.addAiContentLabel = c;
  },
  98,
);
