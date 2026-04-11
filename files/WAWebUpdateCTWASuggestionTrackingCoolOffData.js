__d(
  "WAWebUpdateCTWASuggestionTrackingCoolOffData",
  ["WAWebDBCTWASuggestion", "WAWebOrchestratorNonPersistedJob"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateCTWASuggestionTrackingCoolOffData",
          function () {
            return o("WAWebDBCTWASuggestion").updateTrackingCoolOffData(e, t);
          },
        )
        .waitUntilCompleted();
    }
    l.updateCTWASuggestionTrackingCoolOffData = e;
  },
  98,
);
