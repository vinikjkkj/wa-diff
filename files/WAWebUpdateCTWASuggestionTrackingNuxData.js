__d(
  "WAWebUpdateCTWASuggestionTrackingNuxData",
  ["WAWebDBCTWASuggestion", "WAWebOrchestratorNonPersistedJob"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateCTWASuggestionTrackingNuxData",
          function () {
            return o("WAWebDBCTWASuggestion").updateTrackingNuxData(e, t);
          },
        )
        .waitUntilCompleted();
    }
    l.updateCTWASuggestionTrackingNuxData = e;
  },
  98,
);
