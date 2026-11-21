__d(
  "WAWebInboundMsgQueueGating",
  ["WAWebJobsMigrationGating", "WAWebMessageQueueImpl", "qex"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebJobsMigrationGating").isJobsManagerDecommissioned() &&
        o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
        r("qex")._("6205") === !0
      );
    }
    l.isWAWebPersistedQueueEnabled = e;
  },
  98,
);
