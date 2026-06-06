__d(
  "WAWebNewsletterPreviewJob",
  [
    "WAJobOrchestratorTypes",
    "WANullthrows",
    "WAWebCreateChat",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessagesQueryJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterPreviewData",
          async function () {
            var a = await Promise.all([
                o(
                  "WAWebNewsletterMetadataQueryJob",
                ).queryNewsletterMetadataByInviteCode(e, t),
                o(
                  "WAWebNewsletterGetMessagesQueryJob",
                ).queryNewsletterMessagesByInviteCode({
                  inviteCode: e,
                  messagesCount: o(
                    "WAWebNewsletterGatingUtils",
                  ).getMaxMsgCountFromServer(),
                  qpl: n,
                }),
              ]),
              i = a[0],
              l = a[1],
              s = l.messages,
              u = l.timestamp,
              c =
                i != null
                  ? o("WAWebWidFactory").createWid(i == null ? void 0 : i.idJid)
                  : null,
              d = await o(
                "WAWebNewsletterBackendAddOnsUtils",
              ).getMsgsAndAddOnsFromUpdates(
                s,
                r("WANullthrows")(c, "Unexpected null metadata"),
                u,
              ),
              m = d.ids,
              p = d.msgs,
              _ = d.pollVotes,
              f = d.reactions;
            return {
              newsletterMetadata: i,
              newsletterMessages: p,
              newsletterReactions: f,
              newsletterVotes: _,
              timestamp: u,
              ids: m,
            };
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function s(e, t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "persistPreviewNewsletterInfoInDb",
          async function () {
            (await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
              o(
                "WAWebNewsletterStorageUtils",
              ).createNewsletterMetadataObjectForStorage(t),
            ),
              await o(
                "WAWebNewsletterUpdateNewslettersRecordsJob",
              ).updateNewsletterChatRecords([
                o("WAWebCreateChat").createNewsletterObjectForStorage(e),
              ]),
              await o(
                "WAWebNewsletterUpdateMsgsRecordsJob",
              ).addNewsletterMsgsRecords(n));
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.getNewsletterPreviewData = e),
      (l.persistPreviewNewsletterInfoInDb = s));
  },
  98,
);
