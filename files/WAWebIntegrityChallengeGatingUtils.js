__d(
  "WAWebIntegrityChallengeGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "integrity_checkpoints_default_enabled",
      );
    }
    l.isIntegrityCheckpointEnabled = e;
  },
  98,
);
