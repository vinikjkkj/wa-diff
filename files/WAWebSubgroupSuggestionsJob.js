__d(
  "WAWebSubgroupSuggestionsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebApiSubgroupSuggestionStore",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "removeSubgroupSuggestions",
          function (e) {
            return o(
              "WAWebApiSubgroupSuggestionStore",
            ).removeSubgroupSuggestionsWithOfflineOption(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ subgroupSuggestions: e, isOffline: t });
    }
    l.removeSubgroupSuggestionsJob = e;
  },
  98,
);
