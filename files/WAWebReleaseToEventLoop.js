__d(
  "WAWebReleaseToEventLoop",
  ["WAPromiseDelays", "WAWebABProps", "WAWebCommonTaskScheduler"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
        ? r("WAWebCommonTaskScheduler").yield()
        : o("WAPromiseDelays").delayMs(0);
    }
    l.releaseToEventLoop = e;
  },
  98,
);
