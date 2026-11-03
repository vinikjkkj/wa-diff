__d(
  "WAWebMetaAiThreadServerDeleteQueue",
  [
    "WAWebMetaAiThreadServerDeleteJobImpl",
    "WAWebMetaAiThreadServerDeleteQueueDef",
    "WAWebRecoverableQueue",
    "WAWebScheduledOperations",
    "WAWormQueueDef",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Number.POSITIVE_INFINITY,
      s = null;
    function u() {
      d().start();
    }
    async function c(e, t) {
      var n = await o(
        "WAWebMetaAiThreadServerDeleteQueueDef",
      ).META_AI_THREAD_SERVER_DELETE_QUEUE.read({
        limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
      });
      n.some(function (t) {
        return t.botFbid === e;
      }) || (await d().addAndDrain({ botFbid: e, meLid: t }));
    }
    function d() {
      return (
        s == null &&
          (s = new (o("WAWebRecoverableQueue").WAWebRecoverableQueue)({
            maxAttempts: e,
            operation: o("WAWebScheduledOperations").ScheduledOperation
              .META_AI_THREAD_SERVER_DELETE,
            queue: o("WAWebMetaAiThreadServerDeleteQueueDef")
              .META_AI_THREAD_SERVER_DELETE_QUEUE,
            run: function (t) {
              return o("WAWebMetaAiThreadServerDeleteJobImpl").deleteOnServer({
                botFbid: t.botFbid,
                meLid: t.meLid,
              });
            },
          })),
        s
      );
    }
    ((l.startMetaAiThreadServerDeleteQueue = u),
      (l.enqueueMetaAiThreadServerDeleteNow = c));
  },
  98,
);
