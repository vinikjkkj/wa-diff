__d(
  "WAWaitForUserUnblocked",
  [
    "MsgrSchedulerQPL",
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAResolvable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 12e4,
      s = new (o("WAResolvable").Resolvable)(),
      u = o("TaskScheduler").taskScheduler(
        "offline-queue",
        { concurrency: 1, failOnTimeout: !0, timeoutMs: e },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    u.setLifecycleListener(
      o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener({
        defaultSamplingRate: 1e3,
      }),
    );
    function c() {
      s.resolveWasCalled() && ((s = new (o("WAResolvable").Resolvable)()), d());
    }
    function d() {
      u.run(
        function () {
          return s.promise;
        },
        {
          name: "offline-queue",
          priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
        },
      ).promise;
    }
    function m() {
      return s.promise;
    }
    function p() {
      s.resolve();
    }
    function _() {
      return !s.resolveWasCalled();
    }
    ((l.maybeResetWaitForUserUnblocked = c),
      (l.markOfflineQueueAsStarted = d),
      (l.waitForUserUnblocked = m),
      (l.unblockUser = p),
      (l.isStillWaitingForUserUnblocked = _));
  },
  98,
);
