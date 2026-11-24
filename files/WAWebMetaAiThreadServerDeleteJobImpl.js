__d(
  "WAWebMetaAiThreadServerDeleteJobImpl",
  [
    "QPLFlow",
    "WAWebDeleteMetaAiThreadGQL",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebMetaAiThreadServerDeleteJob",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = o("WAWebJobsMigrationGating").isJobsManagerDecommissioned()
          ? c
          : u,
        a = r(t).finally(function () {
          e.delete(t);
        });
      return (e.set(t, a), a);
    }
    async function u(e) {
      (await o("WAWebPersistedJobManager").hasUnfinishedJob(
        o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
        e,
      )) ||
        (await o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .waitUntilPersisted({
            type: o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
            args: { botFbid: e },
            uniqKey: e,
          }));
    }
    async function c(e) {
      await o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen();
      var t = o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: {
            bool: { isPQ: !0 },
            string: {
              operationType: o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
            },
          },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
      await o("QPLFlow").endWith(t, async function () {
        var n = await o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(t);
        await n.enqueueMetaAiThreadServerDeleteNow(e);
      });
    }
    async function d(e) {
      var t = await o("WAWebDeleteMetaAiThreadGQL").deleteMetaAiThreadGQL(e);
      t === "retryable" &&
        o("WAWebMetaAiThreadServerDeleteJob").retryOnBackoff();
    }
    ((l.enqueueMetaAiThreadServerDelete = s), (l.deleteOnServer = d));
  },
  98,
);
