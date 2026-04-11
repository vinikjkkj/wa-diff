__d(
  "WAWebNewsletterUpdateNewslettersRecordsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "updateNewsletterChatRecords",
            ])),
        ),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "updateNewsletterChatRecords",
            function () {
              return o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t);
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    l.updateNewsletterChatRecords = s;
  },
  98,
);
