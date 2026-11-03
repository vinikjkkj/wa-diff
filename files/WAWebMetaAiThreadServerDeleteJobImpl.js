__d(
  "WAWebMetaAiThreadServerDeleteJobImpl",
  [
    "QPLFlow",
    "WALogger",
    "WAWebDeleteMetaAiThreadGQL",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebMetaAiThreadServerDeleteJob",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map();
    function d(e, t) {
      var n = JSON.stringify([e, t]),
        r = c.get(n);
      if (r != null) return r;
      var a = o("WAWebJobsMigrationGating").isJobsManagerDecommissioned()
          ? p
          : m,
        i = a(e, t).finally(function () {
          c.delete(n);
        });
      return (c.set(n, i), i);
    }
    async function m(t, n) {
      if (
        !(await o("WAWebPersistedJobManager").hasUnfinishedJob(
          o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
          t,
        ))
      ) {
        if (!f(n)) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[meta-ai-thread-server-delete] account-changed-before-enqueue",
              ])),
          );
          return;
        }
        await o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .waitUntilPersisted({
            type: o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
            args: { botFbid: t, meLid: n },
            uniqKey: t,
          });
      }
    }
    async function p(e, t) {
      if (
        (await o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen(), !f(t))
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[meta-ai-thread-server-delete] account-changed-before-enqueue",
            ])),
        );
        return;
      }
      var n = o("QPLFlow").startQPLFlow(
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
      await o("QPLFlow").endWith(n, async function () {
        var r = await o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(n);
        await r.enqueueMetaAiThreadServerDeleteNow(e, t);
      });
    }
    async function _(e) {
      var t = e.botFbid,
        n = e.meLid;
      if (!f(n)) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[meta-ai-thread-server-delete] account-changed-since-enqueue",
            ])),
        );
        return;
      }
      var r = await o("WAWebDeleteMetaAiThreadGQL").deleteMetaAiThreadGQL(t);
      r === "retryable" &&
        o("WAWebMetaAiThreadServerDeleteJob").retryOnBackoff();
    }
    function f(e) {
      var t;
      return (
        ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) === e
      );
    }
    ((l.enqueueMetaAiThreadServerDelete = d), (l.deleteOnServer = _));
  },
  98,
);
