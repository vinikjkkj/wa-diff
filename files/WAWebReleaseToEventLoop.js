__d(
  "WAWebReleaseToEventLoop",
  ["WACommonTaskScheduler", "WAPromiseDelays", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wmi_task_scheduler_second_step",
      )
        ? r("WACommonTaskScheduler").yield()
        : o("WAPromiseDelays").delayMs(0);
    }
    l.releaseToEventLoop = e;
  },
  98,
);
