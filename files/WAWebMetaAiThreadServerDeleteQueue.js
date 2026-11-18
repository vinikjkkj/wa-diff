__d(
  "WAWebMetaAiThreadServerDeleteQueue",
  [
    "WAWebMetaAiThreadServerDeleteJobImpl",
    "WAWebMetaAiThreadServerDeleteQueueDef",
    "WAWebRecoverableQueue",
    "WAWebScheduledOperations",
    "WAWormQueueDef",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Number.POSITIVE_INFINITY,
      s = null;
    function u() {
      _().start();
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield m(e)) || (yield _().addAndDrain({ botFbid: e, meLid: t }));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebMetaAiThreadServerDeleteQueueDef",
            ).META_AI_THREAD_SERVER_DELETE_QUEUE.isReady()
          )
            return !1;
          var t = yield o(
            "WAWebMetaAiThreadServerDeleteQueueDef",
          ).META_AI_THREAD_SERVER_DELETE_QUEUE.read({
            limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
          });
          return t.some(function (t) {
            return t.botFbid === e;
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
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
