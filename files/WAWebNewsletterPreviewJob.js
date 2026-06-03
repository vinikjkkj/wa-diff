__d(
  "WAWebNewsletterPreviewJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a, i) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterPreviewData",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var l = yield (e || (e = n("Promise"))).all([
                o(
                  "WAWebNewsletterMetadataQueryJob",
                ).queryNewsletterMetadataByInviteCode(t, a),
                o(
                  "WAWebNewsletterGetMessagesQueryJob",
                ).queryNewsletterMessagesByInviteCode({
                  inviteCode: t,
                  messagesCount: o(
                    "WAWebNewsletterGatingUtils",
                  ).getMaxMsgCountFromServer(),
                  qpl: i,
                }),
              ]),
              s = l[0],
              u = l[1],
              c = u.messages,
              d = u.timestamp,
              m =
                s != null
                  ? o("WAWebWidFactory").createWid(s == null ? void 0 : s.idJid)
                  : null,
              p = yield o(
                "WAWebNewsletterBackendAddOnsUtils",
              ).getMsgsAndAddOnsFromUpdates(
                c,
                r("WANullthrows")(m, "Unexpected null metadata"),
                d,
              ),
              _ = p.ids,
              f = p.msgs,
              g = p.pollVotes,
              h = p.reactions;
            return {
              newsletterMetadata: s,
              newsletterMessages: f,
              newsletterReactions: h,
              newsletterVotes: g,
              timestamp: d,
              ids: _,
            };
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e, t, r) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "persistPreviewNewsletterInfoInDb",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
              o(
                "WAWebNewsletterStorageUtils",
              ).createNewsletterMetadataObjectForStorage(t),
            ),
              yield o(
                "WAWebNewsletterUpdateNewslettersRecordsJob",
              ).updateNewsletterChatRecords([
                o("WAWebCreateChat").createNewsletterObjectForStorage(e),
              ]),
              yield o(
                "WAWebNewsletterUpdateMsgsRecordsJob",
              ).addNewsletterMsgsRecords(r));
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.getNewsletterPreviewData = s),
      (l.persistPreviewNewsletterInfoInDb = u));
  },
  98,
);
