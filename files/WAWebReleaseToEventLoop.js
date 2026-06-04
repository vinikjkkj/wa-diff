__d(
  "WAWebReleaseToEventLoop",
  ["WACommonTaskScheduler", "WAPromiseDelays", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
        ? r("WACommonTaskScheduler").yield()
        : o("WAPromiseDelays").delayMs(0);
    }
    l.releaseToEventLoop = e;
  },
  98,
);
