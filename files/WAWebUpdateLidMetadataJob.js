__d(
  "WAWebUpdateLidMetadataJob",
  ["WAWebOrchestratorNonPersistedJob", "WAWebUpdateLidMetadataApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = { updates: e };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob("updateLidMetadata", function (e) {
          return o("WAWebUpdateLidMetadataApi").updateLidMetadata(e);
        })
        .waitUntilCompleted(t);
    }
    l.updateLidMetadataJob = e;
  },
  98,
);
