__d(
  "WAWebBackendWorkerBackgroundPauseSync",
  ["WAWebBackgroundPauseState"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      (e == null || e(),
        u(t, o("WAWebBackgroundPauseState").backgroundPauseState.get()),
        (e = o("WAWebBackgroundPauseState").backgroundPauseState.onSet(
          function (e) {
            u(t, e);
          },
        )));
    }
    function u(e, t) {
      e.fireAndForget("backgroundPauseSync", "updateBackgroundPause", {
        paused: t,
      });
    }
    l.setupBackendWorkerBackgroundPauseSync = s;
  },
  98,
);
