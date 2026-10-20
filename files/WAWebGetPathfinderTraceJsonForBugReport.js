__d(
  "WAWebGetPathfinderTraceJsonForBugReport",
  ["WAWebPathfinderLogger", "WAWebPathfinderTraceEnvelope"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebPathfinderTraceEnvelope").serializePathfinderTraceEnvelope(
        o("WAWebPathfinderLogger").getPathfinderLogSnapshotWithMeta,
        o("WAWebPathfinderLogger").isPathfinderLoggingEnabled,
      );
    }
    l.getPathfinderTraceJsonForBugReport = e;
  },
  98,
);
