__d(
  "WAWebNotifyWorkerUnregistered",
  ["WAWebBackendWorkerClient"],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebBackendWorkerClient")
        .getBackendWorkerBridge()
        .then(function (e) {
          e.fireAndForget("registrationState", "markUnregistered", void 0);
        });
    }
    l.notifyWorkerUnregistered = e;
  },
  98,
);
