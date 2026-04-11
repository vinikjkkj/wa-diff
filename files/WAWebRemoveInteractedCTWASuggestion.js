__d(
  "WAWebRemoveInteractedCTWASuggestion",
  ["WAWebDBCTWASuggestion", "WAWebOrchestratorNonPersistedJob"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob("removeInteractedCTWASuggestion", function () {
          return o("WAWebDBCTWASuggestion").removeSuggestion(e);
        })
        .waitUntilCompleted();
    }
    l.removeInteractedCTWASuggestion = e;
  },
  98,
);
