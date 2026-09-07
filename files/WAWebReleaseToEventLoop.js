__d(
  "WAWebReleaseToEventLoop",
  ["WAWebCommonTaskScheduler"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebCommonTaskScheduler").yield();
    }
    l.releaseToEventLoop = e;
  },
  98,
);
