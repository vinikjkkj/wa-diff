__d(
  "WAWebNewsletterIncrementForwardCounterJob",
  ["WAWebDefinePersistedJob", "WAWebSendForwardCounterIncrement"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("sendIncrementRequest", function (e) {
        var t = e.newsletterId,
          n = e.retriesRemaining,
          r = e.serverId;
        o("WAWebSendForwardCounterIncrement").sendForwardCounterIncrement({
          newsletterId: t,
          retriesRemaining: n,
          serverId: r,
        });
      })
      .end();
    l.incrementNewsletterForwardCounterJob = e;
  },
  98,
);
